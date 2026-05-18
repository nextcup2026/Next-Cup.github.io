// COMPONENTS.jS
// Handle dynamic rendering of Navbar and Footer

const Components = {
    navbar: () => `
    <header class="sticky top-0 z-50 bg-gray-950/80 backdrop-blur border-b border-white/10">
        <nav class="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center relative">
            <div class="flex items-center space-x-3">
                <img src="logo soscup.jpeg" alt="Logo torneo" class="w-12 h-12 rounded-full border border-gray-600">
                <a href="index.html" class="text-2xl font-black header-brand-text">
                    S.O.S CUP
                </a>
            </div>

            <!-- DESKTOP MENU -->
            <div class="hidden md:flex space-x-8 font-semibold text-sm items-center">
                <a href="index.html" class="nav-link hover:text-yellow-400 transition" data-page="index.html">Home</a>

                <!-- DROPDOWN -->
                <div class="relative group">
                    <button class="flex items-center space-x-1 hover:text-yellow-400 focus:outline-none py-4 text-white">
                        <span>Altro</span>
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                    </button>
                    <!-- Dropdown Menu -->
                    <div class="absolute left-0 top-full w-48 bg-gray-900 border border-gray-700 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top translate-y-2 group-hover:translate-y-0 z-50">
                        <div class="flex flex-col py-2">
                             <a href="teams.html" class="nav-link px-4 py-3 text-white hover:bg-gray-800 hover:text-yellow-400 transition border-b border-gray-800 last:border-0" data-page="teams.html">Squadre</a>
                             <a href="news.html" class="nav-link px-4 py-3 text-white hover:bg-gray-800 hover:text-yellow-400 transition border-b border-gray-800 last:border-0" data-page="news.html">Notizie</a>
                             <a href="torneo.html" class="nav-link px-4 py-3 text-white hover:bg-gray-800 hover:text-yellow-400 transition border-b border-gray-800 last:border-0" data-page="torneo.html">Torneo</a>
                             <a href="statistics.html" class="nav-link px-4 py-3 text-white hover:bg-gray-800 hover:text-yellow-400 transition border-b border-gray-800 last:border-0" data-page="statistics.html">Statistiche</a>
                             <a href="sondaggi.html" class="nav-link px-4 py-3 text-white hover:bg-gray-800 hover:text-yellow-400 transition border-b border-gray-800 last:border-0" data-page="sondaggi.html">Sondaggi</a>
                        </div>
                    </div>
                </div>

                <a href="regolamento.html" class="nav-link hover:text-yellow-400 transition" data-page="regolamento.html">Regolamento</a>
                <a href="contact.html" class="nav-link hover:text-yellow-400 transition" data-page="contact.html">Contatti & Iscrizione</a>
            </div>

            <!-- MOBILE MENU BUTTON -->
            <div class="md:hidden flex items-center">
                <button id="mobile-menu-btn" class="text-white hover:text-yellow-400 focus:outline-none">
                    <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>
        </nav>

        <!-- MOBILE MENU DROPDOWN -->
        <div id="mobile-menu" class="hidden md:hidden bg-gray-900 border-t border-gray-800 absolute w-full left-0 top-full shadow-2xl z-50">
            <div class="flex flex-col px-6 py-4 space-y-4 font-semibold text-lg">
                <a href="index.html" class="nav-link-mobile text-gray-300 hover:text-yellow-400 transition block border-b border-gray-800 pb-2" data-page="index.html">Home</a>
                <a href="teams.html" class="nav-link-mobile text-gray-300 hover:text-yellow-400 transition block border-b border-gray-800 pb-2" data-page="teams.html">Squadre</a>
                <a href="news.html" class="nav-link-mobile text-gray-300 hover:text-yellow-400 transition block border-b border-gray-800 pb-2" data-page="news.html">Notizie</a>
                <a href="torneo.html" class="nav-link-mobile text-gray-300 hover:text-yellow-400 transition block border-b border-gray-800 pb-2" data-page="torneo.html">Torneo</a>
                <a href="statistics.html" class="nav-link-mobile text-gray-300 hover:text-yellow-400 transition block border-b border-gray-800 pb-2" data-page="statistics.html">Statistiche</a>
                <a href="sondaggi.html" class="nav-link-mobile text-gray-300 hover:text-yellow-400 transition block border-b border-gray-800 pb-2" data-page="sondaggi.html">Sondaggi</a>
                <a href="regolamento.html" class="nav-link-mobile text-gray-300 hover:text-yellow-400 transition block border-b border-gray-800 pb-2" data-page="regolamento.html">Regolamento</a>
                <a href="contact.html" class="nav-link-mobile text-gray-300 hover:text-yellow-400 transition block" data-page="contact.html">Contatti & Iscrizione</a>
            </div>
        </div>
    </header>
    `,

    footer: () => `
    <footer class="bg-black py-10">
        <div class="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left space-y-6 md:space-y-0">
            <div class="text-gray-400">
                <p class="text-lg font-bold nx-text-gradient mb-2 select-none" onclick="window.__ac = (window.__ac || 0) + 1; if(window.__ac >= 7) window.location.href='admin.html'; setTimeout(() => window.__ac = 0, 3000);">S.O.S CUP</p>
                <p>&copy; 2026. Tutti i diritti riservati. Organizzato da S.O.S Cup</p>
            </div>
            <div class="space-y-2">
                <p class="text-white font-semibold">Contattaci</p>
                <p class="text-sm text-gray-400">Email: <a href="mailto:soscup2025@gmail.com" class="hover:text-yellow-400">soscup2025@gmail.com</a></p>
                <p class="text-sm text-gray-400">Luca: +39 351 508 6288</p>
                <p class="text-sm text-gray-400">Paolo: +39 320 216 5611</p>
            </div>
        </div>
    </footer>
    `,

    cookieBanner: () => `
    <div id="cookie-banner" class="fixed bottom-0 left-0 right-0 bg-gray-900/95 backdrop-blur border-t border-gray-700 p-6 z-[200] transform transition-transform duration-500 translate-y-full" style="display: none;">
        <div class="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <div class="text-gray-300 text-sm">
                <p class="font-bold text-white mb-1">🍪 Informativa Privacy</p>
                Questo sito utilizza cookie tecnici essenziali e strumenti di terze parti (Firebase) per il funzionamento.
                Continuando a navigare, accetti l'utilizzo dei cookie.
            </div>
            <div class="flex space-x-4">
                <button id="accept-cookies-btn" class="bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-2 px-6 rounded-lg transition">Accetta</button>
            </div>
        </div>
    </div>
    `
};

function renderNavbar() {
    const placeholder = document.getElementById('navbar-placeholder');
    if (placeholder) {
        placeholder.innerHTML = Components.navbar();
        initMobileMenu();
        highlightActiveLink();
    }
}

function renderFooter() {
    const placeholder = document.getElementById('footer-placeholder');
    if (placeholder) {
        placeholder.innerHTML = Components.footer();
        // Append Cookie Banner if not already present
        if (!document.getElementById('cookie-banner')) {
            const div = document.createElement('div');
            div.innerHTML = Components.cookieBanner();
            document.body.appendChild(div);
            initCookieBanner();
        }
    }
}

function initMobileMenu() {
    const btn = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');
    if (btn && menu) {
        btn.addEventListener('click', () => {
            menu.classList.toggle('hidden');
        });
    }
}

function highlightActiveLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    // Desktop
    document.querySelectorAll('.nav-link').forEach(link => {
        if (link.getAttribute('data-page') === currentPage) {
            link.classList.add('text-yellow-400');
        } else {
            link.classList.remove('text-yellow-400');
        }
    });

    // Mobile
    document.querySelectorAll('.nav-link-mobile').forEach(link => {
        if (link.getAttribute('data-page') === currentPage) {
            link.classList.add('text-yellow-400');
            link.classList.remove('text-gray-300');
        } else {
            link.classList.remove('text-yellow-400');
            link.classList.add('text-gray-300');
        }
    });
}

function initCookieBanner() {
    const banner = document.getElementById('cookie-banner');
    const btn = document.getElementById('accept-cookies-btn');

    if (!localStorage.getItem('cookieConsent')) {
        if (banner) {
            banner.style.display = 'block';
            setTimeout(() => banner.classList.remove('translate-y-full'), 100);
        }
    } else {
        if (banner) banner.style.display = 'none';
    }

    if (btn) {
        btn.addEventListener('click', () => {
            localStorage.setItem('cookieConsent', 'true');
            if (banner) {
                banner.classList.add('translate-y-full');
                setTimeout(() => banner.style.display = 'none', 500);
            }
        });
    }
}

// Auto-run if script is included at end of body
document.addEventListener('DOMContentLoaded', () => {
    // Optional: Auto render if placeholders exist, but explicit calling is safer for now
});
