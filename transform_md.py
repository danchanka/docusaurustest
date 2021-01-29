import sys, re, os

def getdir():
    if len(sys.argv) < 2:
        print(f'Usage: transform_md.py md_dir')
        sys.exit()

    dir = sys.argv[1]
    if not os.path.isdir(dir):                
        print(f'"{dir}" is not a correct path to directory. Usage: transform_md.py md_dir')
        sys.exit()
    return dir
    

def remove_tables(data):
    data = re.sub(r'<table class="(.*\n)*</table>', r'', data, re.M)
    return data    

def escape_title(title):
    return '\'' + title + '\''       

def create_title(data):
    lines = data.split('\n')
    title = lines[2][2:]
    data = '---\ntitle: ' + escape_title(title) + '\n---\n' + '\n'.join(lines[3:])
    return data

def transform_file_content(data):
    data = create_title(data)
    data = remove_tables(data)
    return data    


dir = getdir()
for filename in os.listdir(dir):
    fullname = dir + '/' + filename 
    print(fullname)
    if os.path.isfile(fullname) and fullname.endswith('.md'):
        with open(fullname, 'r', encoding='utf-8') as infile:
            data = infile.read()
            infile.close()

            if len(data) > 0:
                data = transform_file_content(data)
                with open(fullname, 'w', encoding='utf-8') as outfile:
                    outfile.write(data)
