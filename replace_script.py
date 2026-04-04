import os
import glob
import re

directory = r"c:/Users/a5155676tt/OneDrive/Sito web torneo 2"
files = glob.glob(os.path.join(directory, "*.html")) + glob.glob(os.path.join(directory, "*.js"))

for filepath in files:
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()

    new_content = content
    # Replace references
    new_content = new_content.replace('NEXT CUP', 'S.O.S CUP')
    new_content = new_content.replace('Next Cup', 'S.O.S Cup')
    new_content = new_content.replace('logo.png', 'logo soscup.jpeg')
    
    if new_content != content:
        with open(filepath, "w", encoding="utf-8") as f:
            f.write(new_content)
        print(f"Updated {os.path.basename(filepath)}")
