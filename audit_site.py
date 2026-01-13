
import os
import glob
import re

# Configuration
work_dir = r"c:\Users\a5155676tt\OneDrive\Sito web torneo 2"
html_files = glob.glob(os.path.join(work_dir, "*.html"))

print(f"Auditing {len(html_files)} HTML files using Regex...")

errors = []
warnings = []

# Regex patterns
re_csp = re.compile(r'<meta\s+http-equiv=["\']Content-Security-Policy["\']', re.IGNORECASE)
re_firebase = re.compile(r'window\.__firebase_config\s*=', re.IGNORECASE)
re_nav = re.compile(r'<nav', re.IGNORECASE)
re_footer = re.compile(r'<footer', re.IGNORECASE)
re_cookie = re.compile(r'id=["\']cookie-banner["\']', re.IGNORECASE)
re_link = re.compile(r'href=["\']([^"\']+)["\']', re.IGNORECASE)
re_img = re.compile(r'src=["\']([^"\']+)["\']', re.IGNORECASE)

reference_firebase_config = None

for file_path in html_files:
    filename = os.path.basename(file_path)
    
    if filename in ['prov1.html', 'prova.html']:
        warnings.append(f"[{filename}] Test file detected, skipping strict consistency check.")
        continue

    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()

        # 1. CSP Check
        if not re_csp.search(content):
            errors.append(f"[{filename}] Missing Content-Security-Policy")
        
        # 2. Firebase Config Check
        fb_match = re_firebase.search(content)
        if not fb_match:
            # Maybe not all pages need it? But most do if they use auth/analytics
             if filename not in ['results.html']: # results might be static?
                 warnings.append(f"[{filename}] Missing Firebase Configuration")
        
        # 3. Navbar/Footer presence
        if not re_nav.search(content):
            warnings.append(f"[{filename}] Missing <nav> element")
        
        if not re_footer.search(content):
            warnings.append(f"[{filename}] Missing <footer> element")

        # 4. Cookie Banner
        if not re_cookie.search(content):
            warnings.append(f"[{filename}] Missing Cookie Banner")

        # 5. Broken Links
        for match in re_link.finditer(content):
            href = match.group(1)
            # Ignore external, anchors, mailto, js, dynamic
            if href.startswith(('http', 'https', '#', 'mailto:', 'javascript:', '{', 'tel:')):
                continue
            
            # Remove anchor part
            path_part = href.split('#')[0]
            if not path_part: continue

            target_path = os.path.join(work_dir, path_part)
            if not os.path.exists(target_path):
                 errors.append(f"[{filename}] Broken link: {href}")

        # 6. Broken Images
        for match in re_img.finditer(content):
            src = match.group(1)
            if src.startswith(('http', 'https', 'data:', '{')):
                continue
            
            target_path = os.path.join(work_dir, src)
            if not os.path.exists(target_path):
                 errors.append(f"[{filename}] Broken image: {src}")

    except Exception as e:
        errors.append(f"[{filename}] Error reading: {str(e)}")

print("\n--- AUDIT REPORT ---")
if errors:
    print("ERRORS:")
    for e in sorted(errors):
        print(f" - {e}")
else:
    print("No critical errors found.")

if warnings:
    print("\nWARNINGS:")
    for w in sorted(warnings):
        print(f" - {w}")
