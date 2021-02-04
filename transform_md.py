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

def transform_file_content(data):
    data = replace_html_ltgt(data)
    data = create_title(data)
    data = remove_tables(data)
    return data    

indir, outdir = get_dirs()
for filename in os.listdir(indir):
    fullname = indir + '/' + filename 
    print(fullname)
    if os.path.isfile(fullname) and fullname.endswith('.md') and not fullname.endswith('index.md'):
        with open(fullname, 'r', encoding='utf-8') as infile:
            data = infile.read()
            infile.close()
            fulloutname = outdir + '/' + filename
            if len(data) > 0 and data[0] == '#':
                data = transform_file_content(data)
                with open(fulloutname, 'w', encoding='utf-8') as outfile:
                    outfile.write(data)
