import glob
import re

html_files = glob.glob('*.html')
for f in html_files:
    with open(f, 'r', encoding='utf-8') as file:
        content = file.read()
    
    # Remove image renderings
    content = re.sub(r'<img src="assets/[^"]+\.png"[^>]*>', '', content)
    
    with open(f, 'w', encoding='utf-8') as file:
        file.write(content)
print("Renderings removed.")
