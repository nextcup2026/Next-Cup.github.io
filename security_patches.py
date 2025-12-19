
import os
import glob
import re

work_dir = r"c:\Users\a5155676tt\OneDrive\Sito web torneo 2"
html_files = glob.glob(os.path.join(work_dir, "*.html"))

# 1. CONTENT SECURITY POLICY
# Updated to include connect-src for Source Maps and Firebase/Google APIs
csp_content = """    <meta http-equiv="Content-Security-Policy" content="default-src 'self' https://*.firebaseio.com https://*.googleapis.com https://*.gstatic.com; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cdn.tailwindcss.com https://unpkg.com https://*.gstatic.com https://*.googleapis.com https://*.firebaseio.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https://* blob:; connect-src 'self' https://*.googleapis.com https://*.firebaseio.com https://*.gstatic.com https://identitytoolkit.googleapis.com;">"""

# 2. COOKIE BANNER HTML/JS
cookie_banner_html = """
    <!-- COOKIE CONSENT BANNER -->
    <div id="cookie-banner" class="fixed bottom-0 left-0 right-0 bg-gray-900/95 backdrop-blur border-t border-gray-700 p-6 z-[200] transform transition-transform duration-500 translate-y-full" style="display: none;">
        <div class="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <div class="text-gray-300 text-sm">
                <p class="font-bold text-white mb-1">🍪 Informativa Privacy</p>
                Questo sito utilizza cookie tecnici essenziali e strumenti di terze parti (Firebase) per il funzionamento. 
                Continuando a navigare, accetti l'utilizzo dei cookie.
            </div>
            <div class="flex space-x-4">
                <button onclick="acceptCookies()" class="bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-2 px-6 rounded-lg transition">Accetta</button>
            </div>
        </div>
    </div>
    <script>
        function checkCookies() {
            if (!localStorage.getItem('cookieConsent')) {
                const banner = document.getElementById('cookie-banner');
                if(banner) {
                    banner.style.display = 'block';
                    setTimeout(() => banner.classList.remove('translate-y-full'), 100);
                }
            }
        }
        function acceptCookies() {
            localStorage.setItem('cookieConsent', 'true');
            const banner = document.getElementById('cookie-banner');
            if(banner) {
                banner.classList.add('translate-y-full');
                setTimeout(() => banner.style.display = 'none', 500);
            }
        }
        window.addEventListener('load', checkCookies);
    </script>
"""

count_csp = 0
count_cookie = 0

for file_path in html_files:
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
            
        new_content = content
        
        # CSP Update Logic
        # Regex to find existing CSP meta tag
        csp_regex = re.compile(r'<meta\s+http-equiv=["\']Content-Security-Policy["\'].*?>', re.IGNORECASE | re.DOTALL)
        
        if csp_regex.search(new_content):
            # Replace existing CSP
            new_content = csp_regex.sub(csp_content.strip(), new_content)
            count_csp += 1
        else:
            # Inject new CSP if not found
            if "<head>" in new_content:
                new_content = new_content.replace("<head>", "<head>\n" + csp_content)
                count_csp += 1

        # Cookie Banner Injection (Only if not present)
        if "cookie-banner" not in new_content and "</body>" in new_content:
            new_content = new_content.replace("</body>", cookie_banner_html + "\n</body>")
            count_cookie += 1
            
        if new_content != content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(new_content)
                print(f"Patched {os.path.basename(file_path)}")
                
    except Exception as e:
        print(f"Error {file_path}: {e}")

print(f"Done. CSP updated in {count_csp} files. Cookie Banner in {count_cookie} files.")

