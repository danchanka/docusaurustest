import sys, re, os

def depth(s):
    return len(s) - len(s.lstrip())

def label(s):
    return re.search(r"\[(.*[^\\])\]", s).group(1)

def name(s):
    return re.search(r"\]\((.*)\.md\)", s).group(1)

def printsp(text, d, outfile):
    outfile.write(' ' * (d + 4) + text + '\n')

def open_category(line, d, outfile):
    printsp('{', d, outfile)    
    printsp('type: \'category\',', d+2, outfile)
    printsp(f'label: \'{label(line)}\',', d+2, outfile)
    printsp('items: [', d+2, outfile)

def close_category(d, outfile):
    printsp(']', d+2, outfile)
    printsp('},', d, outfile)

# def print_leaf(line, d, outfile):
#     printsp('{', d, outfile)    
#     printsp('type: \'doc\',', d+2, outfile)
#     printsp(f'id: \'LSFUS/{name(line)}\',', d+2, outfile)
#     printsp('},', d, outfile)

def print_leaf(line, d, outfile):
    printsp(f'\'{name(line)}\', ', d, outfile)

def build_sidebar(lines, outfile):
    stack = []
    for i, line in enumerate(lines):
        d = depth(line)
        if i + 1 != len(lines) and depth(line) < depth(lines[i+1]):
            open_category(line, d, outfile)
            print_leaf(line, d+4, outfile)
            stack.append(line)
        else:         
            print_leaf(line, d, outfile)
            if i+1 == len(lines) or depth(line) > depth(lines[i+1]):
                nextd = -1 if i+1 == len(lines) else depth(lines[i+1])
                while stack and depth(stack[-1]) >= nextd:
                    close_category(depth(stack[-1]), outfile)        
                    stack.pop()


if len(sys.argv) < 3:
    print('Usage: create_sidebar.py path_to_index_md path to sidebars.js');
    sys.exit()

with open(sys.argv[1], 'r', encoding='utf-8') as infile:
    lines = [line.rstrip() for line in infile.readlines() if re.match(r"\s*-[^-].*", line)]
    # print('\n'.join(lines))
    with open(sys.argv[2], 'w', encoding='utf-8') as outfile:
        outfile.write('module.exports = {\n  docs: [\n')
        build_sidebar(lines, outfile)
        outfile.write('  ]\n};\n')
        outfile.close()
     
