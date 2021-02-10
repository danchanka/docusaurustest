import sys, re, os, json

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
    if not input_dir.endswith('/'):
        input_dir += '/'        
    if not output_dir.endswith('/'):
        output_dir += '/'        
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
    return json.load(open('filemap.json', 'r', encoding='utf-8'))

def load_anchors_map():
    return json.load(open('anchormap.json', 'r', encoding='utf-8'))

def header_text_to_anchor(text):
    anchor = re.sub(r'\s+', '-', text.lower())
    anchor = re.sub(r'[/()]', '', anchor)
    return anchor

def fix_anchors(data, anchors_map, filename, logfile):
    data = re.sub(r'\.md#.*?-([^-]*?)\)', r'.md#\1)', data)  # '.md#WRITEoperator-extension)' -> '.md#extension'
    data = re.sub(r'\(#.*?-([^-]*?)\)', r'(#\1)', data) # '(#Interactiveview-delete)' -> '(#delete)'

    replacements = {}
    for r in re.finditer(r'\]\(([^)]*?\.md)#([^)]*?)\)', data): # ](filename.md#id)
        lfilename = r.group(1)
        anchor = r.group(2)
        if anchor in anchors_map[lfilename]:
            replacements[f'({lfilename}#{anchor})'] = f'({lfilename}#{header_text_to_anchor(anchors_map[lfilename][anchor])})'       
        else:     
            replacements[f'({lfilename}#{anchor})'] = f'({lfilename}#{anchor}-broken)'       

    for r in re.finditer(r'\(#([^)]*?)\)', data): # ](#id)
        anchor = r.group(1)
        if anchor in anchors_map[filename]:
            replacements[f'(#{anchor})'] = f'(#{header_text_to_anchor(anchors_map[filename][anchor])})'
        else:            
            replacements[f'(#{anchor})'] = f'(#{anchor}-broken)'

    broken = 0
    for key, value in replacements.items():
        if value.endswith('-broken)'):
            broken += 1
        logfile.write(f'Replacement {filename}: {key} -> {value}\n')
        data = data.replace(key, value)            
    return (data, len(replacements) - broken, broken) 

def fix_links(data, anchors_map, filename, logfile):
    html_to_md = load_filemap()
    for html, md in html_to_md.items():
        data = data.replace(html, md)
    data = fix_anchors(data, anchors_map, filename, logfile)    
    return data

def transform_file_content(data):
    data = replace_html_ltgt(data)
    data = create_title(data)
    data = remove_tables(data)
    data = make_headers(data)
    return data    

def filter_anchor_links(files, logfile):
    anchor_map = load_anchors_map()
    for filename in files:
        if filename in anchor_map:
            data = files[filename]
            headers = {re.sub(r'^#+', '', line).strip().replace('*', '') for line in data.split('\n') if line.startswith('#')}
            to_delete = [key for key, value in anchor_map[filename].items() if value not in headers] 
            for del_key in to_delete:
                # logfile.write(f'Filtered {filename}: {del_key} -> {anchor_map[filename][del_key]}\n') 
                del anchor_map[filename][del_key]
    return anchor_map            


print('transform started..')
indir, outdir = get_dirs()
files = {}
for filename in os.listdir(indir):
    fullname = indir + filename 
    if os.path.isfile(fullname) and fullname.endswith('.md') and not fullname.endswith('index.md'):
        infile = open(fullname, 'r', encoding='utf-8')
        data = infile.read()
        infile.close()
        if len(data) > 0 and data[0] == '#': # not transformed earlier
            data = transform_file_content(data)
            files[filename] = data

logfile = open('anchors.log', 'w', encoding='utf-8')
anchors_map = filter_anchor_links(files, logfile)
# json.dump(anchors_map, logfile, indent=4)
success = 0
fail = 0
for filename, data in files.items():
    data, s, f = fix_links(data, anchors_map, filename, logfile)
    success += s
    fail += f
    with open(outdir + filename, 'w', encoding='utf-8') as outfile:
        outfile.write(data)

logfile.write(f'success: {success}, fail: {fail}, percent: {success / (success + fail)}')    

print('transform finished')
