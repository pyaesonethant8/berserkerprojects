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
                    <span class="font-semibold text-sm tracking-tight text-white">NoBrainer (Beta) </span>
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
                    <span>&copy; 2026 main.nobrainernotes.online. All rights reserved.</span>
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

        // Animated "breathing" grid — individual cells that jump randomly.
        // (Replaces the old static .bg-grid background pattern.)
        const grid = document.createElement('div');
        grid.className = 'animated-grid';
        document.body.insertBefore(grid, document.body.firstChild);

        // Spacing between grid cells (px)
        const spacing = 44;
        const cols = Math.ceil(window.innerWidth / spacing) + 1;
        const rows = Math.ceil(window.innerHeight / spacing) + 1;

        // Build cells in a DocumentFragment for performance
        const frag = document.createDocumentFragment();
        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                const cell = document.createElement('div');
                cell.className = 'ag-cell';
                cell.style.left = (c * spacing) + 'px';
                cell.style.top = (r * spacing) + 'px';

                // Randomised timing so cells "jump" at staggered, organic moments
                const duration = (3 + Math.random() * 5).toFixed(2);   // 3s – 8s
                const delay = (Math.random() * 6).toFixed(2);          // 0s – 6s
                cell.style.animationDuration = duration + 's';
                cell.style.animationDelay = delay + 's';

                // A few cells are slightly larger / brighter for depth
                if (Math.random() < 0.12) {
                    cell.style.width = '3px';
                    cell.style.height = '3px';
                    cell.style.background = 'rgba(147,197,253,0.5)';
                    cell.style.boxShadow = '0 0 8px rgba(147,197,253,0.4)';
                }

                frag.appendChild(cell);
            }
        }
        grid.appendChild(frag);

        // Rebuild on resize so the grid always covers the viewport
        let resizeTimer;
        window.addEventListener('resize', function () {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(function () {
                const newCols = Math.ceil(window.innerWidth / spacing) + 1;
                const newRows = Math.ceil(window.innerHeight / spacing) + 1;
                if (newCols !== cols || newRows !== rows) {
                    grid.innerHTML = '';
                    const f2 = document.createDocumentFragment();
                    for (let r = 0; r < newRows; r++) {
                        for (let c = 0; c < newCols; c++) {
                            const cell = document.createElement('div');
                            cell.className = 'ag-cell';
                            cell.style.left = (c * spacing) + 'px';
                            cell.style.top = (r * spacing) + 'px';
                            cell.style.animationDuration = (3 + Math.random() * 5).toFixed(2) + 's';
                            cell.style.animationDelay = (Math.random() * 6).toFixed(2) + 's';
                            if (Math.random() < 0.12) {
                                cell.style.width = '3px';
                                cell.style.height = '3px';
                                cell.style.background = 'rgba(147,197,253,0.5)';
                                cell.style.boxShadow = '0 0 8px rgba(147,197,253,0.4)';
                            }
                            f2.appendChild(cell);
                        }
                    }
                    grid.appendChild(f2);
                }
            }, 200);
        });
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

    /* ============================================================
       OWL AI CHAT — Trigger Button + Chat Drawer
       ============================================================ */
    function injectOwlChat() {
        // ---- Trigger button (fixed top-right) ----
        const trigger = document.createElement('button');
        trigger.id = 'owl-trigger';
        trigger.className = 'owl-trigger';
        trigger.setAttribute('aria-label', 'Open Owl AI assistant');
        trigger.innerHTML = `
            <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 3C8.5 3 5.5 5.5 5.5 8.5C5.5 10.5 6.5 12 8 13V17C8 17.55 8.45 18 9 18H15C15.55 18 16 17.55 16 17V13C17.5 12 18.5 10.5 18.5 8.5C18.5 5.5 15.5 3 12 3Z" fill="currentColor"/>
                <circle cx="9.5" cy="9" r="1.2" fill="#050505"/>
                <circle cx="14.5" cy="9" r="1.2" fill="#050505"/>
                <path d="M10.5 12.5C11 13 13 13 13.5 12.5" stroke="#050505" stroke-width="1" stroke-linecap="round"/>
            </svg>
            <span class="owl-trigger-pulse"></span>
        `;
        document.body.appendChild(trigger);

        // ---- Backdrop ----
        const backdrop = document.createElement('div');
        backdrop.id = 'owl-backdrop';
        backdrop.className = 'owl-backdrop';
        document.body.appendChild(backdrop);

        // ---- Chat drawer ----
        const drawer = document.createElement('div');
        drawer.id = 'owl-drawer';
        drawer.className = 'owl-drawer';
        drawer.innerHTML = `
            <!-- Header -->
            <div class="owl-header">
                <div class="flex items-center gap-3">
                    <div class="owl-avatar">
                        <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 3C8.5 3 5.5 5.5 5.5 8.5C5.5 10.5 6.5 12 8 13V17C8 17.55 8.45 18 9 18H15C15.55 18 16 17.55 16 17V13C17.5 12 18.5 10.5 18.5 8.5C18.5 5.5 15.5 3 12 3Z" fill="currentColor"/>
                            <circle cx="9.5" cy="9" r="1.2" fill="#050505"/>
                            <circle cx="14.5" cy="9" r="1.2" fill="#050505"/>
                            <path d="M10.5 12.5C11 13 13 13 13.5 12.5" stroke="#050505" stroke-width="1" stroke-linecap="round"/>
                        </svg>
                    </div>
                    <div class="flex-1 min-w-0">
                        <div class="flex items-center gap-2">
                            <h3 class="text-white font-semibold text-sm tracking-tight">Owl</h3>
                            <span class="owl-badge">Coming Soon</span>
                        </div>
                        <p class="text-[11px] text-pro-muted truncate">Owl is an assistant for this no-brainer.</p>
                    </div>
                    <button id="owl-close" class="owl-close-btn" aria-label="Close chat">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                    </button>
                </div>
            </div>

            <!-- Messages -->
            <div class="owl-messages">
                <!-- Assistant greeting -->
                <div class="owl-msg owl-msg-assistant">
                    <div class="owl-msg-avatar">
                        <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 3C8.5 3 5.5 5.5 5.5 8.5C5.5 10.5 6.5 12 8 13V17C8 17.55 8.45 18 9 18H15C15.55 18 16 17.55 16 17V13C17.5 12 18.5 10.5 18.5 8.5C18.5 5.5 15.5 3 12 3Z" fill="currentColor"/>
                            <circle cx="9.5" cy="9" r="1.2" fill="#050505"/>
                            <circle cx="14.5" cy="9" r="1.2" fill="#050505"/>
                        </svg>
                    </div>
                    <div class="owl-bubble">
                        <p>Hi! I'm <strong>Owl</strong> 🦉 — your study assistant for NoBrainer.</p>
                        <p class="mt-1.5">I'll soon help you find notes, mark schemes, and past papers across all subjects.</p>
                    </div>
                </div>

                <!-- Assistant coming soon note -->
                <div class="owl-msg owl-msg-assistant">
                    <div class="owl-msg-avatar">
                        <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 3C8.5 3 5.5 5.5 5.5 8.5C5.5 10.5 6.5 12 8 13V17C8 17.55 8.45 18 9 18H15C15.55 18 16 17.55 16 17V13C17.5 12 18.5 10.5 18.5 8.5C18.5 5.5 15.5 3 12 3Z" fill="currentColor"/>
                            <circle cx="9.5" cy="9" r="1.2" fill="#050505"/>
                            <circle cx="14.5" cy="9" r="1.2" fill="#050505"/>
                        </svg>
                    </div>
                    <div class="owl-bubble">
                        <p>I'm currently in development and will be available soon. Stay tuned! ✨</p>
                    </div>
                </div>
            </div>

            <!-- Input area -->
            <div class="owl-input-area">
                <div class="owl-input-row">
                    <input type="text" placeholder="Ask Owl anything..." disabled>
                    <button class="owl-send-btn" disabled aria-label="Send message">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg>
                    </button>
                </div>
                <p class="owl-sub-brand">A sub-project of <span class="text-gray-400">Neurocks</span> by <span class="text-gray-400">Berserker Projects</span></p>
            </div>
        `;
        document.body.appendChild(drawer);
    }

    document.addEventListener('DOMContentLoaded', function () {
        injectAmbient();
        injectHeader();
        injectFooter();
        injectSearchOverlay();
        injectPremiumElements();
        injectOwlChat();
    });
})();
