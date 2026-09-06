/* ============================================================
   NoBrainerNotes.online — Shared Application Script
   ============================================================ */

/* ==========================================================
   GOOGLE DRIVE LINKS - paste your folder URLs below.
   Leave empty ("") to show a muted "Drive link pending" state.
========================================================== */
const GOOGLE_DRIVE_LINK_PHYSICS_4PH1        = "";
const GOOGLE_DRIVE_LINK_ENGLISH_B_4EB1      = "";
const GOOGLE_DRIVE_LINK_MATHS_B_4MB1        = "";
const GOOGLE_DRIVE_LINK_FURTHER_PURE_4PM1   = "";
const GOOGLE_DRIVE_LINK_ICT_4IT1            = "";
const GOOGLE_DRIVE_LINK_COMPSCI_4CP0        = "";

/* ==========================================================
   SUBJECT DATA (Resources page)
========================================================== */
const SUBJECTS = [
    {
        id: 'physics',
        code: '4PH1',
        name: 'Physics',
        folder: 'Physics_4PH1',
        desc: 'Full IGCSE Physics notes, mark schemes, and exam-focused summaries.',
        link: GOOGLE_DRIVE_LINK_PHYSICS_4PH1,
        accent: 'text-blue-400',
        chip: 'bg-blue-500/10 border-blue-500/20',
        files: [
            { type: 'folder', name: 'Past Papers & Ms', color: 'text-blue-400', link: 'https://drive.google.com/drive/folders/1lGEHIJ4ktpf9XBhwa4ImhX6aWGiF4bdi?usp=drive_link' },
            { type: 'folder', name: 'Mock Exams', color: 'text-blue-400', link: 'https://drive.google.com/drive/folders/1ubVejOG8YPtWwwD_P45nPcdgenGDgfoR?usp=sharing' },
            { type: 'folder', name: 'Notes', color: 'text-blue-400', link: 'https://drive.google.com/drive/folders/1CsYU3twh431xR3rZQr7vaUz_WqDCEvyU?usp=sharing' },
            { type: 'folder', name: 'Mindmaps', color: 'text-blue-400', link: 'https://drive.google.com/drive/folders/1PO1qX90n3kf-1qJb1YHiwVkyiB02qE0l?usp=sharing' }
        ]
    },
    {
        id: 'english-b',
        code: '4EB1',
        name: 'English B',
        folder: 'English_B_4EB1',
        desc: 'English Language B resources with writing guides and past paper analysis.',
        link: GOOGLE_DRIVE_LINK_ENGLISH_B_4EB1,
        accent: 'text-pink-400',
        chip: 'bg-pink-500/10 border-pink-500/20',
        files: [
            { type: 'folder', name: 'Past Papers & Ms', color: 'text-pink-400' },
            { type: 'folder', name: 'Mock Exams', color: 'text-pink-400' },
            { type: 'folder', name: 'Notes', color: 'text-pink-400' },
            { type: 'folder', name: 'Mindmaps', color: 'text-pink-400' }
        ]
    },
    {
        id: 'maths-b',
        code: '4MB1',
        name: 'Maths B',
        folder: 'Maths_B_4MB1',
        desc: 'IGCSE Mathematics B with worked solutions and formula references.',
        link: GOOGLE_DRIVE_LINK_MATHS_B_4MB1,
        accent: 'text-indigo-400',
        chip: 'bg-indigo-500/10 border-indigo-500/20',
        files: [
            { type: 'folder', name: 'Past Papers & Ms', color: 'text-indigo-400' },
            { type: 'folder', name: 'Mock Exams', color: 'text-indigo-400' },
            { type: 'folder', name: 'Notes', color: 'text-indigo-400' },
            { type: 'folder', name: 'Mindmaps', color: 'text-indigo-400' }
        ]
    },
    {
        id: 'further-pure',
        code: '4PM1',
        name: 'Further Pure Maths',
        folder: 'Further_Pure_4PM1',
        desc: 'Advanced Further Pure Mathematics with rigorous problem sets.',
        link: GOOGLE_DRIVE_LINK_FURTHER_PURE_4PM1,
        accent: 'text-cyan-400',
        chip: 'bg-cyan-500/10 border-cyan-500/20',
        files: [
            { type: 'folder', name: 'Past Papers & Ms', color: 'text-cyan-400' },
            { type: 'folder', name: 'Mock Exams', color: 'text-cyan-400' },
            { type: 'folder', name: 'Notes', color: 'text-cyan-400' },
            { type: 'folder', name: 'Mindmaps', color: 'text-cyan-400' }
        ]
    },
    {
        id: 'ict',
        code: '4IT1',
        name: 'ICT',
        folder: 'ICT_4IT1',
        desc: 'Information & Communication Technology with practical guides.',
        link: GOOGLE_DRIVE_LINK_ICT_4IT1,
        accent: 'text-emerald-400',
        chip: 'bg-emerald-500/10 border-emerald-500/20',
        files: [
            { type: 'folder', name: 'Past Papers & Ms', color: 'text-emerald-400' },
            { type: 'folder', name: 'Mock Exams', color: 'text-emerald-400' },
            { type: 'folder', name: 'Notes', color: 'text-emerald-400' },
            { type: 'folder', name: 'Mindmaps', color: 'text-emerald-400' }
        ]
    },
    {
        id: 'compsci',
        code: '4CP0',
        name: 'Computer Science',
        folder: 'Computer_Science_4CP0',
        desc: 'Computer Science with programming fundamentals and theory.',
        link: GOOGLE_DRIVE_LINK_COMPSCI_4CP0,
        accent: 'text-purple-400',
        chip: 'bg-purple-500/10 border-purple-500/20',
        files: [
            { type: 'folder', name: 'Past Papers & Ms', color: 'text-purple-400' },
            { type: 'folder', name: 'Mock Exams', color: 'text-purple-400' },
            { type: 'folder', name: 'Notes', color: 'text-purple-400' },
            { type: 'folder', name: 'Mindmaps', color: 'text-purple-400' }
        ]
    }
];

/* ==========================================================
   TEAM DATA
========================================================== */
const TEAM = [
    {
        id: 'phi2',
        name: 'Pyae Sone Thant',
        alias: 'phi2 / Patrick Mill',
        role: 'Founder & Lead Developer',
        bio: 'Founder of Berserker Projects & NoBrainer. 16-year-old student in Yangon, Myanmar. Tech enthusiast focused on infrastructure, systems, and building practical tools.',
        telegram: '@diesel002_4',
        telegramUrl: 'https://t.me/diesel002_4',
        accent: 'text-blue-400',
        chip: 'bg-blue-500/10 border-blue-500/20'
    },
    {
        id: 'crayon',
        name: 'Aung Thurein Htut',
        alias: 'Crayon / LightenCrayon',
        role: 'Co-Founder & Editor',
        bio: 'Co-founder of Berserker Projects & NoBrainer. 14-year-old indie game developer and editor, crafting engaging content and creative direction.',
        telegram: '@lightencrayon',
        telegramUrl: 'https://t.me/lightencrayon',
        accent: 'text-emerald-400',
        chip: 'bg-emerald-500/10 border-emerald-500/20'
    }
];

/* ==========================================================
   SEARCH INDEX
========================================================== */
const SEARCH_INDEX = (function () {
    const items = [];

    // Subjects
    SUBJECTS.forEach(function (s) {
        items.push({
            type: 'subject',
            title: s.name + ' (' + s.code + ')',
            desc: s.desc,
            url: 'resources.html?subject=' + s.id,
            icon: 'folder'
        });
    });

    // Team
    TEAM.forEach(function (t) {
        items.push({
            type: 'team',
            title: t.name,
            desc: t.role + ' — ' + t.alias,
            url: 'team.html#' + t.id,
            icon: 'user'
        });
    });

    // Pages
    items.push({ type: 'page', title: 'Home', desc: 'NoBrainer landing page', url: 'index.html', icon: 'home' });
    items.push({ type: 'page', title: 'Resources', desc: 'Browse all IGCSE subject materials', url: 'resources.html', icon: 'folder' });
    items.push({ type: 'page', title: 'Team', desc: 'Meet the founders', url: 'team.html', icon: 'user' });

    return items;
})();

/* ==========================================================
   SEARCH OVERLAY
========================================================== */
function initSearch() {
    const overlay = document.getElementById('search-overlay');
    if (!overlay) return;

    const input = overlay.querySelector('input');
    const results = overlay.querySelector('.search-results');
    const openBtn = document.getElementById('search-open');
    const openBtnMobile = document.getElementById('search-open-mobile');
    const closeBtn = overlay.querySelector('.search-close');

    function openSearch() {
        overlay.classList.add('active');
        setTimeout(function () { input.focus(); }, 50);
    }
    function closeSearch() {
        overlay.classList.remove('active');
        input.value = '';
        renderResults('');
    }

    function renderResults(query) {
        const q = query.toLowerCase().trim();
        results.innerHTML = '';

        if (!q) {
            results.innerHTML = '<div class="search-empty">Type to search subjects, team members, and pages...</div>';
            return;
        }

        const matches = SEARCH_INDEX.filter(function (item) {
            return (item.title + ' ' + item.desc + ' ' + item.type).toLowerCase().includes(q);
        });

        if (matches.length === 0) {
            results.innerHTML = '<div class="search-empty">No results found for "' + query + '"</div>';
            return;
        }

        matches.forEach(function (item) {
            const a = document.createElement('a');
            a.className = 'search-result-item';
            a.href = item.url;

            let iconSvg = '';
            if (item.icon === 'folder') {
                iconSvg = '<svg class="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20"><path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"></path></svg>';
            } else if (item.icon === 'user') {
                iconSvg = '<svg class="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>';
            } else {
                iconSvg = '<svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>';
            }

            a.innerHTML =
                '<div class="sr-icon">' + iconSvg + '</div>' +
                '<div><div class="sr-title">' + item.title + '</div><div class="sr-desc">' + item.desc + '</div></div>';

            a.addEventListener('click', function () { closeSearch(); });
            results.appendChild(a);
        });
    }

    if (openBtn) openBtn.addEventListener('click', openSearch);
    if (openBtnMobile) openBtnMobile.addEventListener('click', openSearch);
    if (closeBtn) closeBtn.addEventListener('click', closeSearch);

    input.addEventListener('input', function () { renderResults(input.value); });
    input.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') closeSearch();
    });

    document.addEventListener('keydown', function (e) {
        if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
            e.preventDefault();
            openSearch();
        }
        if (e.key === 'Escape' && overlay.classList.contains('active')) {
            closeSearch();
        }
    });

    overlay.addEventListener('click', function (e) {
        if (e.target === overlay) closeSearch();
    });
}

/* ==========================================================
   MOBILE MENU
========================================================== */
function initMobileMenu() {
    const btn = document.getElementById('menu-btn');
    const menu = document.getElementById('mobile-menu');
    if (!btn || !menu) return;

    const iconOpen = document.getElementById('menu-icon-open');
    const iconClose = document.getElementById('menu-icon-close');

    btn.addEventListener('click', function () {
        menu.classList.toggle('hidden');
        if (iconOpen) iconOpen.classList.toggle('hidden');
        if (iconClose) iconClose.classList.toggle('hidden');
    });

    document.querySelectorAll('.mobile-link').forEach(function (link) {
        link.addEventListener('click', function () {
            menu.classList.add('hidden');
            if (iconOpen) iconOpen.classList.remove('hidden');
            if (iconClose) iconClose.classList.add('hidden');
        });
    });
}

/* ==========================================================
   REVEAL ON SCROLL
========================================================== */
function initReveal() {
    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(function (el) {
        observer.observe(el);
    });
}

/* ==========================================================
   INIT
========================================================== */
document.addEventListener('DOMContentLoaded', function () {
    initSearch();
    initMobileMenu();
    initReveal();
});
