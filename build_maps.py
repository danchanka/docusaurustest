import sys, re, os, json

def transform_name(title):
    title = title.replace('lsFusion : ', '')
    title = re.sub(r'[\s<>()\[\]{}:;\'`"\/\\|?\*~!@#$%^&,]', '_', title)
    title = re.sub(r'__+', '_', title) 
    title = re.sub(r'_+$', '', title)
    return title

def add_to_filemap(data, filename, d):
    title = re.search('<title>(.*?)</title>', data).group(1)
    if title:
        name = transform_name(title)                        
        d[filename] = name + ".md"
    else:
        print(f'error: there was no title in {filename}')

# <span class="confluence-anchor-link" id="IDE-newproject"></span>
def add_to_anchormap(data, filename, d):
    results = re.finditer(r'<span class="confluence-anchor-link" id="[^"]*?-([^"-]*)"></span>(?:</?.*?>)*?([^<]+)</?.*?>', data)
    innerd = {r.group(1) : r.group(2).strip() for r in results}
    d[filename] = innerd


file_dict = {}
anchor_dict = {}
indir = sys.argv[1]
print('building maps...')
for filename in os.listdir(indir):
    fullname = indir + '/' + filename 
    if os.path.isfile(fullname) and fullname.endswith('.html'):
        with open(fullname, 'r', encoding='utf-8') as infile:
            data = infile.read()
            add_to_filemap(data, filename, file_dict)
            add_to_anchormap(data, file_dict[filename], anchor_dict)

json.dump(file_dict, open('filemap.json', 'w', encoding='utf-8'), indent=4)
json.dump(anchor_dict, open('anchormap.json', 'w', encoding='utf-8'), indent=4)

print('end of building maps')