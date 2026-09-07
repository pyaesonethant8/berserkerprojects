/* ============================================================
   NoBrainerNotes.online — Shared Header/Footer/Search Injection
   ============================================================ */

(function () {
    function injectHeader() {
        const header = document.createElement('header');
        header.className = 'relative z-30 border-b border-white/5 bg-pro-bg/50 backdrop-blur-md sticky top-0';
        header.innerHTML = `
            <div class="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
                <a href="index.html" class="flex items-center gap-2.5 group cursor-pointer">
                    <img src="NoBrainerLogo.png" alt="NoBrainer Logo" class="w-7 h-7 object-contain group-hover:opacity-80 transition-opacity">
                    <span class="font-semibold text-sm tracking-tight text-white">NoBrainer</span>
                </a>
                <nav class="hidden md:flex items-center gap-8 text-sm font-medium">
                    <a href="index.html" class="text-pro-muted hover:text-white transition-colors">Home</a>
                    <a href="resources.html" class="text-pro-muted hover:text-white transition-colors">Resources</a>
                    <a href="team.html" class="text-pro-muted hover:text-white transition-colors">Team</a>
                    <button id="search-open" class="text-pro-muted hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer">
                        <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        Search
                        <kbd class="hidden lg:inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded border border-white/10 bg-white/[0.03] text-[10px] font-mono text-pro-muted">&#8984;K</kbd>
                    </button>
                    <a href="resources.html" class="text-white hover:text-blue-400 transition-colors flex items-center gap-1.5">
                        Open Database <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </a>
                </nav>
                <button id="menu-btn" class="md:hidden flex items-center justify-center w-9 h-9 rounded-lg border border-white/10 bg-white/[0.03] text-white" aria-label="Menu">
                    <svg id="menu-icon-open" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                    <svg id="menu-icon-close" class="w-5 h-5 hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                </button>
            </div>
            <div id="mobile-menu" class="md:hidden hidden border-t border-white/5 bg-pro-bg/95 backdrop-blur-xl">
                <div class="px-6 py-4 flex flex-col gap-1 text-sm font-medium">
                    <a href="index.html" class="mobile-link py-3 text-pro-muted hover:text-white transition-colors border-b border-white/5">Home</a>
                    <a href="resources.html" class="mobile-link py-3 text-pro-muted hover:text-white transition-colors border-b border-white/5">Resources</a>
                    <a href="team.html" class="mobile-link py-3 text-pro-muted hover:text-white transition-colors border-b border-white/5">Team</a>
                    <button id="search-open-mobile" class="mobile-link py-3 text-white hover:text-blue-400 transition-colors flex items-center gap-1.5 cursor-pointer text-left">
                        <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        Search
                    </button>
                </div>
            </div>
        `;
        document.body.insertBefore(header, document.body.firstChild);
    }

    function injectFooter() {
        const footer = document.createElement('footer');
        footer.className = 'relative z-10 border-t border-white/5 bg-transparent py-8 text-[13px] text-pro-muted';
        footer.innerHTML = `
            <div class="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div class="flex items-center gap-3">
                    <span>&copy; 2026 NoBrainerNotes.online. All rights reserved.</span>
                    <span class="hidden sm:inline text-white/20">|</span>
                    <span class="hidden sm:inline-flex items-center gap-1.5">
                        <span class="w-1.5 h-1.5 rounded-full bg-emerald-500/70"></span>
                        Updated Sep 2026
                    </span>
                </div>
                <div class="flex items-center gap-2">
                    <span>Infrastructure by</span>
                    <a href="https://berserkerprojects.xyz" target="_blank" rel="noopener noreferrer" class="flex items-center gap-1.5 text-gray-300 font-medium hover:text-white transition-colors group">
                        <img src="Berserker%20Projects%20Logo.jpg" alt="Berserker Projects" class="w-4 h-4 object-contain opacity-80 group-hover:opacity-100 transition-opacity" style="filter: grayscale(1) brightness(1.6) contrast(0.8); mix-blend-mode: screen;">
                        Berserker Projects
                    </a>
                </div>
            </div>
        `;
        document.body.appendChild(footer);
    }

    function injectSearchOverlay() {
        const overlay = document.createElement('div');
        overlay.id = 'search-overlay';
        overlay.innerHTML = `
            <div class="search-panel">
                <div class="search-input-row">
                    <svg class="w-5 h-5 text-gray-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    <input type="text" placeholder="Search subjects, team, pages..." autocomplete="off">
                    <button class="search-close text-gray-500 hover:text-white transition-colors shrink-0 cursor-pointer" aria-label="Close">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                    </button>
                </div>
                <div class="search-results"></div>
                <div class="search-hint">
                    <span>&#8984;K to search</span>
                    <span>ESC to close</span>
                </div>
            </div>
        `;
        document.body.appendChild(overlay);
    }

    function injectAmbient() {
        const noise = document.createElement('div');
        noise.className = 'bg-noise';
        document.body.insertBefore(noise, document.body.firstChild);

        const aurora1 = document.createElement('div');
        aurora1.className = 'fixed top-[-20%] left-[-10%] w-[60vw] h-[60vh] bg-blue-600/10 rounded-full mix-blend-screen filter blur-[100px] animate-aurora-1 pointer-events-none z-0';
        document.body.insertBefore(aurora1, document.body.firstChild);

        const aurora2 = document.createElement('div');
        aurora2.className = 'fixed bottom-[-20%] right-[-10%] w-[50vw] h-[50vh] bg-indigo-500/10 rounded-full mix-blend-screen filter blur-[120px] animate-aurora-2 pointer-events-none z-0';
        document.body.insertBefore(aurora2, document.body.firstChild);

        const grid = document.createElement('div');
        grid.className = 'fixed inset-0 bg-grid pointer-events-none z-0';
        document.body.insertBefore(grid, document.body.firstChild);
    }

    function injectPremiumElements() {
        // Cursor glow
        const glow = document.createElement('div');
        glow.className = 'cursor-glow';
        document.body.appendChild(glow);

        // Scroll progress bar
        const progress = document.createElement('div');
        progress.className = 'scroll-progress';
        document.body.appendChild(progress);

        // Back to top button
        const backTop = document.createElement('button');
        backTop.className = 'back-to-top';
        backTop.setAttribute('aria-label', 'Back to top');
        backTop.innerHTML = '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"></path></svg>';
        document.body.appendChild(backTop);

        // Page transition overlay
        const transition = document.createElement('div');
        transition.className = 'page-transition';
        document.body.appendChild(transition);
    }

    document.addEventListener('DOMContentLoaded', function () {
        injectAmbient();
        injectHeader();
        injectFooter();
        injectSearchOverlay();
        injectPremiumElements();
    });
})();
