import sys, re, os

def transform_name(title):
    title = title.replace('lsFusion : ', '')
    title = re.sub(r'[\s<>()\[\]{}:;\'`"\/\\|?\*~!@#$%^&,]', '_', title)
    title = re.sub(r'__+', '_', title) 
    title = re.sub(r'_+$', '', title)
    return title

outfile = open('filemap.txt', 'w', encoding='utf-8')
indir = sys.argv[1]
print(indir)
for filename in os.listdir(indir):
    fullname = indir + '/' + filename 
    if os.path.isfile(fullname) and fullname.endswith('.html'):
        with open(fullname, 'r', encoding='utf-8') as infile:
            data = infile.read()
            title = re.search('<title>(.*?)</title>', data).group(1)
            if title:
                name = transform_name(title)                        
                outfile.write(f'{filename}:{name}.md\n')
