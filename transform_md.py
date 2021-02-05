import sys, re, os

def get_dirs():
    usage_string = 'Usage: transform_md.py input_dir [output_dir]' 
    if len(sys.argv) < 2:
        print(usage_string)
        sys.exit()

    input_dir = sys.argv[1]
    if not os.path.isdir(input_dir):                
        print(f'"{input_dir}" is not a correct path to directory. ' + usage_string)
        sys.exit()

    output_dir = input_dir
    if len(sys.argv) > 2:    
        output_dir = sys.argv[2]
        if not os.path.isdir(output_dir):
            os.makedirs(output_dir)
    return input_dir, output_dir

def remove_tables(data):
    lines = data.split('\n')
    nlines = []
    opened = 0
    for line in lines:
        if line.lstrip().startswith('<table'):
            opened += 1
        if opened == 0:
            nlines.append(line)   
        if line.lstrip().startswith('</table>'):
            opened -= 1    
    return '\n'.join(nlines)    

def escape_title(title):
    return '\'' + title + '\''       

def create_title(data):
    lines = data.split('\n')
    title = lines[2][2:]
    data = '---\ntitle: ' + escape_title(title) + '\n---\n' + '\n'.join(lines[3:])
    return data

def replace_html_ltgt(data):
    nlines = []
    lines = data.split('\n')
    for line in lines:
        if line.find('&gt;') != -1 and line.find('&lt;') != -1:
            line = line.replace('&gt;', '\\>').replace('&lt;', '<')    
        else:     
            line = line.replace('&gt;', '>').replace('&lt;', '<')
        nlines.append(line)
    return '\n'.join(nlines)

def trash_stars(line):
    return line.count('*') > 2 and re.fullmatch(r'[* \t]*', line)

def make_headers(data):
    lines = data.split('\n')
    nlines = []
    for line in lines:
        if not trash_stars(line):
            if line.startswith('**') and line.endswith('**') and not re.fullmatch(r'[A-Z* \t]+', line):
                nlines.append('### ' + line[2:-2])
            else:
                nlines.append(line)    
    return '\n'.join(nlines)    

def load_filemap():
    mapfile = open('filemap.txt', 'r', encoding='utf-8')
    m = dict()
    for line in mapfile.readlines():
        key, value = line.rstrip().split(':')
        m[key] = value
    return m

def fix_links(data):
    html_to_md = load_filemap()
    for html, md in html_to_md.items():
        data = data.replace(html, md)
    return data

def transform_file_content(data):
    data = replace_html_ltgt(data)
    data = create_title(data)
    data = remove_tables(data)
    data = make_headers(data)
    data = fix_links(data)
    return data    

indir, outdir = get_dirs()
for filename in os.listdir(indir):
    fullname = indir + filename 
    print(fullname)
    if os.path.isfile(fullname) and fullname.endswith('.md') and not fullname.endswith('index.md'):
        infile = open(fullname, 'r', encoding='utf-8')
        data = infile.read()
        infile.close()
        fulloutname = outdir + filename
        if len(data) > 0 and data[0] == '#':
            data = transform_file_content(data)
            with open(fulloutname, 'w', encoding='utf-8') as outfile:
                outfile.write(data)
