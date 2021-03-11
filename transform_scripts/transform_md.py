import sys, re, os, json

def get_dirs(settings):
    input_dir = settings["input_dir"]
    if not os.path.isdir(input_dir):                
        print(f'"{input_dir}" is not a correct path to directory. ' + usage_string)
        sys.exit()

    output_dir = settings["output_dir"]
    if not os.path.isdir(output_dir):
        os.makedirs(output_dir)
    if not input_dir.endswith('/'):
        input_dir += '/'        
    if not output_dir.endswith('/'):
        output_dir += '/'        
    return input_dir, output_dir

def transform_tables(data, filename, samples_links, samples_url):
    lines = data.split('\n')
    nlines = []
    table_lines = []
    inside_simple_table = False
    opened = 0
    sample_index = 0
    for line in lines:
        if line.lstrip().startswith('<table'):
            opened += 1
            if opened == 1:
                inside_simple_table = True
                if line.lstrip().startswith('<table class="highlighttable"'):
                    inside_simple_table = False
                    if sample_index == 0:
                        nlines.append('import {CodeSample} from \'./CodeSample.mdx\'')
                        nlines.append('')

                    # <CodeSample url="https://documentation.lsfusion.org/sample?file=ActionSample&block=write"/>                        
                    url = samples_links[sample_index].replace("http://localhost:5000/samphighl", samples_url)    
                    nlines.append(f'<CodeSample url="{url}"/>')
                    sample_index += 1
                # else:    
                #     nlines.append('[table was removed]')

        if opened == 0:
            nlines.append(line)   
        elif inside_simple_table:    
            table_lines.append(line)

        if line.lstrip().startswith('</table>'):
            opened -= 1    
            if opened == 0 and inside_simple_table:
                inside_simple_table = False
                transformed_table_lines = transform_simple_table(table_lines)
                transformed_table_lines = extra_execution_auto_file_check(filename, transformed_table_lines)
                nlines.extend(transformed_table_lines)
                table_lines = []

    return '\n'.join(nlines)    

def transform_simple_table(lines):
    data = '\n'.join(lines)
    data = transform_links_inside_table(data)
    data = remove_style_from_table(data) 
    data = replace_em_tag(data)
    rows = []
    pos = 0
    while True:
        tr_start = data.find('<tr', pos)
        if tr_start == -1:
            break
        close_pos = find_close_tag_pos(data, tr_start + 1, '<tr', '</tr>')
        rows.append(get_table_row(data[tr_start:close_pos]))
        pos = close_pos

    if len(rows) == 1:
        if len(rows[0]) != 2:
            print(f'one row table with unusual number of cells\n{data}')
        return create_caution_block(rows)     
    else:
        return create_md_table(rows)    
    return data.split('\n')

def extra_execution_auto_file_check(filename, lines):
    if filename == 'Выполнение_авто.md' or filename == 'Execution_auto.md':
        data = '\n'.join(lines)
        data = re.sub(r'<code class=.*?>', '', data).replace('</code>', '')
        data = re.sub(r'<pre class=.*?>', '', data).replace('</pre>', '')
        if filename == 'Выполнение_авто.md':
            data = data.replace('$INSTALL_DIR/Server/bin/lsfusion4_serverw.exe', '$INSTALL\\_DIR/Server/bin/lsfusion4\\_serverw.exe')
            data = data.replace('FUSION_OPTS', 'FUSION\\_OPTS')
        return data.split('\n')
    return lines    

def transform_links_inside_table(data):
    return re.sub(r'<a href="(.*?)">(.*?)</a>', r'[\2](\1)', data)

def remove_style_from_table(data):
    return re.sub(r'\bstyle=".*?"', '', data) 

def replace_em_tag(data):
    data = re.sub(r'<em.*?>', '*', data)
    return data.replace('</em>', '*')

def get_table_row(data):
    row = []
    pos = 1
    cell_tag = 'td' if data.find('<td', pos) != -1 else 'th'
    open_tag = f'<{cell_tag}'
    close_tag = f'</{cell_tag}>'
    while True:
        td_start = data.find(open_tag, pos)
        if td_start == -1:
            break
        close_pos = find_close_tag_pos(data, td_start+1, open_tag, close_tag)
        row.append(data[data.find('>', td_start) + 1 : close_pos - len(close_tag)].replace('\n', '<br/>').replace('|', '\\|'))
        pos = close_pos
    return row    


def create_caution_block(rows):
    return [':::caution', rows[0][1].replace('<p>', '').replace('</p>', ''), ':::']

def create_md_table(rows):
    cells_cnt = len(rows[0])
    lines = ['|' + '|'.join(rows[0]) + '|', '|' + '---|'*cells_cnt]
    for row in rows[1:]:
        lines.append('|' + '|'.join(row) + '|')
    return lines

def find_close_tag_pos(data, start_pos, open_tag, close_tag):
    opened = 1
    cur_pos = start_pos
    while opened > 0:
        open_pos = data.find(open_tag, cur_pos)
        close_pos = data.find(close_tag, cur_pos)
        if open_pos != -1 and open_pos < close_pos:
            opened += 1
            cur_pos = open_pos + len(open_tag)
        else:
            opened -= 1
            cur_pos = close_pos + len(close_tag)            
    return cur_pos
        
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

def fix_image_links(data):
    return re.sub(r'<img src="(.*?)".*?/>', r'![](\1)', data)

def transform_file_content(data, filename, samples_links, samples_url):
    data = transform_tables(data, filename, samples_links, samples_url)
    data = replace_html_ltgt(data)
    data = create_title(data)
    data = make_headers(data)
    data = fix_image_links(data)
    return data    
    
def load_filemap(filename):
    return json.load(open(filename, 'r', encoding='utf-8'))

def load_anchors_map(filename):
    return json.load(open(filename, 'r', encoding='utf-8'))

def load_samples_map(filename):
    return json.load(open(filename, 'r', encoding='utf-8'))

def header_text_to_anchor(text):
    anchor = re.sub(r'\s+', '-', text.lower())
    anchor = re.sub(r'[/()\']', '', anchor)
    return anchor

def fix_anchors(data, anchors_map, filename, logfile):
    data = re.sub(r'\.md#.*?-([^-()]*?)\)', r'.md#\1)', data)  # '.md#WRITEoperator-extension)' -> '.md#extension'
    data = re.sub(r'\(#.*?-([^-()]*?)\)', r'(#\1)', data) # '(#Interactiveview-delete)' -> '(#delete)'

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

def fix_links(data, anchors_map, filename, logfile, filemap_name):
    html_to_md = load_filemap(filemap_name)
    for html, md in html_to_md.items():
        data = data.replace(html, md)
    data = re.sub(r'(\[[^\[]*?\])\(\.\./\w+?/(.*?)\)', r'\1(\2)', data) # [Learn](../LSFUS/Learn.md) -> [Learn](Learn.md)
    data = fix_anchors(data, anchors_map, filename, logfile)    
    return data

def filter_anchor_links(files, logfile, anchormap_filename):
    anchor_map = load_anchors_map(anchormap_filename)
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

usage_string = 'Usage: transform_md.py settings_file' 
if len(sys.argv) < 1:
    print(usage_string)
    sys.exit()

settings = json.load(open(sys.argv[1], 'r', encoding='utf-8'))
indir, outdir = get_dirs(settings)
files = {}
samples_links = load_samples_map(settings["samples"])

for filename in os.listdir(indir):
    fullname = indir + filename 
    if os.path.isfile(fullname) and fullname.endswith('.md') and not fullname.endswith('index.md'):
        infile = open(fullname, 'r', encoding='utf-8')
        data = infile.read()
        infile.close()
        if len(data) > 0 and data[0] == '#': # not transformed earlier
            data = transform_file_content(data, filename, samples_links[filename], settings["samples_url"])
            files[filename] = data

logfile = open(settings["anchors_log"], 'w', encoding='utf-8')
anchors_map = filter_anchor_links(files, logfile, settings["anchormap"])
# json.dump(anchors_map, logfile, indent=4)
success = 0
fail = 0
for filename, data in files.items():
    data, s, f = fix_links(data, anchors_map, filename, logfile, settings["filemap"])
    success += s
    fail += f
    with open(outdir + filename, 'w', encoding='utf-8') as outfile:
        outfile.write(data)

logfile.write(f'success: {success}, fail: {fail}, percent: {0 if success + fail == 0 else success / (success + fail)}')    

print('transform finished')
