import sys, re, os

for filename in os.listdir('.'): 
    print(filename)
    data = ''
    with open(filename, 'r', encoding='utf-8') as infile:
    	if filename.endswith('.md'):
            data = infile.read()
            infile.close()

            if len(data) > 0:
                data = re.sub(r'<table class="(.*\n)*</table>', r'', data, re.M)
                # print(data)

                with open(filename, 'w', encoding='utf-8') as outfile:
                    outfile.write(data)
