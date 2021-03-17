import sys, re, os, json

def name(s):
    return re.search(r"\]\((.*\.md)\)", s).group(1)

def get_file_names(f):
    return [name(line) for line in f.readlines() if re.fullmatch(r'\s*-[^-].*\n', line)]

print('renaming md files...')

ifile1 = open(sys.argv[1], 'r', encoding='utf-8')
ifile2 = open(sys.argv[2], 'r', encoding='utf-8')
settings = json.load(open(sys.argv[3], 'r', encoding='utf-8'))

files1 = get_file_names(ifile1)
files2 = get_file_names(ifile2)

if (len(files1) != len(files2)):
    print('Error: number of lines doesn''t match')
    sys.exit()

md_map = {}
input_dir = sys.argv[4]

for index, filename in enumerate(files1):
    md_map[filename] = files2[index]
    if filename != md_map[filename]:
        os.rename(input_dir + filename, input_dir + md_map[filename])

json.dump(md_map, open(settings['mdmap'], 'w', encoding='utf-8'), ensure_ascii=False, indent=4)

print('end of renaming md files')