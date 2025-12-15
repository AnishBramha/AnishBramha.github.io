const state = {
    page: 'home',
    dockOpen: false,
    bgIndex: 6,
    isResizing: false
    // Dragging state removed
};

// Background colors to cycle through
const backgrounds = ['#708090', '#5F9EA0', '#4682B4', '#556B2F', '#8B4513', '#483D8B', '#B8860B'];

// Blog Data
const blogEntries = [
    {
        id: 'post-1',
        title: 'The Unreasonable Effectiveness of Mathematics',
        date: '2023-11-10',
        content: `<p>Why does math describe the universe so well? It is a mystery that has puzzled philosophers for centuries. From the Fibonacci sequence in flowers to the calculus describing planetary motion, the link is undeniable.</p>`
    },
    {
        id: 'post-2',
        title: 'Parsing Natural Language with Python',
        date: '2023-11-25',
        content: `<p>Using NLTK to break down sentence structures is easier than you think. Let's explore dependency grammars and how computers "understand" the relationship between words in a sentence.</p>`
    },
    {
        id: 'post-3',
        title: 'Understanding The Glottal Stop',
        date: '2023-12-05',
        content: `<p>The glottal stop is that sound you make in the middle of "uh-oh". In the International Phonetic Alphabet (IPA), it is represented as ʔ. It is a full-fledged consonant in many languages!</p>`
    },
    {
        id: 'post-4',
        title: 'The Magic of Regular Expressions',
        date: '2023-12-15',
        content: `
            <p>Regular expressions (regex) are more than just a search tool; they are a direct application of Finite Automata theory. Every regex pattern compiles down to a state machine that processes text character by character.</p>
            <p>While they can't parse HTML (because HTML is not a regular language—don't try it!), they are incredibly powerful for pattern matching, validation, and lexical analysis in compilers.</p>
            <p>The beauty lies in their conciseness. A single line of regex can replace dozens of lines of conditional logic, effectively describing an entire set of valid strings in a compact mathematical notation.</p>
        `
    },
    {
        id: 'post-5',
        title: 'Lambda Calculus: The Ultimate Abstraction',
        date: '2024-01-02',
        content: `
            <p>Before Turing machines, there was Lambda Calculus. Invented by Alonzo Church in the 1930s, it is a formal system in mathematical logic for expressing computation based on function abstraction and application.</p>
            <p>In this system, everything is a function. Numbers are functions, booleans are functions, and even operators are functions. It forms the theoretical basis of all functional programming languages like Haskell and Lisp.</p>
            <p>It teaches us that you don't need state or mutable variables to compute anything computable—you just need the ability to define and apply functions.</p>
        `
    },
    {
        id: 'post-6',
        title: 'Vector Space Models of Semantics',
        date: '2024-01-20',
        content: `
            <p>How do you teach a computer the meaning of a word? You turn it into a vector. Distributional semantics suggests that "a word is characterized by the company it keeps."</p>
            <p>By training algorithms like Word2Vec on massive corpora, we map words to high-dimensional geometric spaces. In this space, the concept of "King" minus "Man" plus "Woman" results in a vector suspiciously close to "Queen".</p>
            <p>This geometric representation allows us to perform mathematical operations on concepts, bridging the gap between discrete symbols and continuous meaning.</p>
        `
    },
    {
        id: 'post-7',
        title: 'P vs NP: The Million Dollar Question',
        date: '2024-02-14',
        content: `
            <p>It is the biggest open problem in computer science. If a problem is easy to check (NP), is it also easy to solve (P)? Most experts believe P ≠ NP, but no one has proven it.</p>
            <p>The implications are staggering. If P = NP, then cryptography as we know it collapses, optimization problems become trivial, and mathematical proofs could be generated automatically.</p>
            <p>For now, we live in a world where finding a solution is hard, but verifying it is easy—a fact that keeps our passwords secure and our bank accounts safe.</p>
        `
    },
    {
        id: 'post-8',
        title: 'Zipf\'s Law in Natural Language',
        date: '2024-03-01',
        content: `
            <p>Take any large book. Count the frequency of every word. Rank them. You will find a startling pattern: the frequency of any word is inversely proportional to its rank.</p>
            <p>The most common word ("the") appears twice as often as the second most common ("of"), and three times as often as the third ("and"). This is Zipf's Law.</p>
            <p>This power-law distribution appears in city populations, solar flare intensities, and web traffic, suggesting a deep, underlying mathematical structure to human communication and complex systems.</p>
        `
    }
];

const pages = {
    'home': { 
        title: 'Under Construction', 
        content: `
            <div class="construction-zone">
                <div class="warning-tape">
                    <span class="tape-text">UNDER CONSTRUCTION</span>
                </div>
                
                <div class="animation-track">
                    <div class="bulldozer-group">
                        <div class="loader-cab">
                            <div class="cab-light"></div>
                            <div class="cab-window"></div>
                        </div>

                        <div class="loader-body">
                            <div class="engine-grill"></div>
                            <div class="side-panel"></div>
                        </div>

                        <div class="lift-arm-base"></div>
                        <div class="lift-arm-boom"></div>
                        <div class="lift-piston"></div>

                        <div class="bucket-group">
                            <div class="bucket-main"></div>
                            <div class="bucket-edge"></div>
                        </div>
                        
                        <div class="tire tire-rear">
                            <div class="hubcap"></div>
                        </div>
                        <div class="tire tire-front">
                            <div class="hubcap"></div>
                        </div>
                    </div>
                </div>
            </div>

            <style>
                :root { 
                    --chicago-font: "ChicagoFLF", "Chicago", "Geneva", "Verdana", sans-serif; 
                    --c-black: #1a1a1a;
                    --c-dark: #444;
                    --c-mid: #777;
                    --c-light: #aaa;
                    --c-white: #eee;
                }

                /* --- Layout --- */
                .construction-zone {
                    width: 100%; height: 180px;
                    background: #d0d0d0;
                    border: 2px solid #444;
                    box-shadow: inset 0 0 10px rgba(0,0,0,0.1);
                    overflow: hidden;
                    position: relative;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    padding-top: 20px;
                }
                
                /* Mobile Specific Styles for this Component */
                @media (max-width: 768px) {
                    .construction-zone {
                        /* Scale down slightly and ensure centering */
                        transform: scale(0.85);
                        transform-origin: center top; 
                        margin-bottom: -20px; /* Reduce extra whitespace from scaling */
                        width: 100%;
                        max-width: 400px; /* Prevent it getting too wide on tablets */
                    }
                }

                /* --- Hazard Tape --- */
                .warning-tape {
                    background: repeating-linear-gradient(
                        -45deg,
                        #222,
                        #222 10px,
                        #ddd 10px,
                        #ddd 20px
                    );
                    border: 2px solid #000;
                    padding: 4px 10px;
                    box-shadow: 2px 2px 0 rgba(0,0,0,0.2);
                    z-index: 10;
                }
                .tape-text {
                    background: #fff;
                    padding: 2px 8px;
                    font-family: var(--chicago-font);
                    font-weight: bold; font-size: 14px;
                    border: 2px solid #000;
                    letter-spacing: 1px;
                }

                /* --- Animation Track --- */
                .animation-track {
                    width: 100%; flex-grow: 1; position: relative;
                }
                
                /* --- Vehicle Container --- */
                .bulldozer-group {
                    position: absolute;
                    bottom: 25px; left: -140px;
                    width: 130px; height: 80px;
                    animation: drive-across 10s linear infinite;
                }

                /* --- Components --- */
                
                /* 1. Cab */
                .loader-cab {
                    position: absolute;
                    top: 0; left: 10px;
                    width: 40px; height: 45px;
                    background: var(--c-mid);
                    border: 2px solid #000;
                    border-bottom: none;
                    z-index: 2;
                }
                .cab-window {
                    position: absolute;
                    top: 6px; left: 4px;
                    width: 28px; height: 18px;
                    background: #cceeff; /* Very subtle blue tint for glass */
                    border: 2px solid #000;
                    opacity: 0.8;
                }
                .cab-light {
                    position: absolute;
                    top: -4px; left: 10px;
                    width: 12px; height: 4px;
                    background: #fff;
                    border: 1px solid #000;
                    animation: blink-light 1s steps(1) infinite;
                }

                /* 2. Body */
                .loader-body {
                    position: absolute;
                    top: 25px; left: 40px;
                    width: 50px; height: 30px;
                    background: var(--c-light);
                    border: 2px solid #000;
                    z-index: 3;
                }
                .engine-grill {
                    position: absolute;
                    top: 4px; right: 4px;
                    width: 10px; height: 20px;
                    background: repeating-linear-gradient(to bottom, #333 0, #333 2px, transparent 2px, transparent 4px);
                    border: 1px solid #555;
                }
                .side-panel {
                    position: absolute;
                    top: 8px; left: 6px;
                    width: 24px; height: 12px;
                    border: 1px solid #777;
                    background: rgba(0,0,0,0.05);
                }

                /* 3. Arm Mechanism */
                .lift-arm-base {
                    position: absolute;
                    top: 28px; left: 55px;
                    width: 8px; height: 8px;
                    background: #444;
                    border-radius: 50%;
                    border: 1px solid #000;
                    z-index: 5;
                }
                .lift-arm-boom {
                    position: absolute;
                    top: 30px; left: 58px;
                    width: 50px; height: 8px;
                    background: var(--c-dark);
                    border: 1px solid #000;
                    transform-origin: left center;
                    transform: rotate(15deg);
                    z-index: 4;
                }
                .lift-piston {
                    position: absolute;
                    top: 20px; left: 70px;
                    width: 30px; height: 4px;
                    background: #999;
                    border: 1px solid #000;
                    transform: rotate(15deg);
                    z-index: 3;
                }

                /* 4. Bucket */
                .bucket-group {
                    position: absolute;
                    top: 20px; right: -10px;
                    width: 30px; height: 40px;
                    z-index: 1;
                }
                .bucket-main {
                    width: 100%; height: 100%;
                    background: var(--c-mid);
                    border: 2px solid #000;
                    border-radius: 4px 0 0 12px;
                    clip-path: polygon(0 0, 100% 0, 100% 100%, 20% 100%, 0 80%);
                }
                .bucket-edge {
                    position: absolute;
                    bottom: 2px; right: 0;
                    width: 6px; height: 36px;
                    background: #333;
                    border-left: 1px solid #000;
                }

                /* 5. Tires */
                .tire {
                    position: absolute;
                    bottom: -8px;
                    width: 30px; height: 30px;
                    background: #222;
                    border-radius: 50%;
                    border: 2px dashed #000; /* Tread effect */
                    z-index: 6;
                    animation: spin 1s linear infinite;
                    box-shadow: 2px 2px 0 rgba(0,0,0,0.3);
                }
                .tire-rear { left: 12px; width: 34px; height: 34px; bottom: -10px;}
                .tire-front { left: 75px; }
                
                .hubcap {
                    position: absolute;
                    top: 50%; left: 50%;
                    transform: translate(-50%, -50%);
                    width: 10px; height: 10px;
                    background: #888;
                    border: 1px solid #000;
                    border-radius: 50%;
                }

                /* --- Animations --- */
                @keyframes drive-across {
                    0% { transform: translateX(0) translateY(0); }
                    1% { transform: translateX(5px) translateY(1px); } /* Rumble start */
                    2% { transform: translateX(10px) translateY(0); }
                    100% { transform: translateX(800px) translateY(0); }
                }
                @keyframes spin { 
                    0% { transform: rotate(0deg); } 
                    100% { transform: rotate(360deg); } 
                }
                @keyframes blink-light {
                    0%, 49% { background: #fff; opacity: 1; }
                    50%, 100% { background: #999; opacity: 0.5; }
                }
            </style>
            
            <p style="text-align:center; font-size:12px; color:#555; margin-top:10px;">
                Website is still being built...
            </p>
        ` 
    },
    'blog': { 
        title: 'Blog', 
        content: `` // Will be populated by setupBlog()
    },
    'projects': { 
        title: 'Work Disk', 
        content: `<h2>Active Projects</h2><p>Building a retro web engine.</p>` 
    },
    'posts': { 
        title: 'Netscape Feed', 
        content: `<h2>Social Feed</h2><p>No new messages.</p>` 
    },
    'contact': { 
        title: 'Mailbox', 
        content: `<h2>Send Message</h2><p>To: Anish</p><p>From: Guest</p>` 
    },
    'socials': {
        title: 'Socials',
        content: `
            <h2>Connect with Me</h2>
            <div style="display:flex; flex-direction:column; gap:10px; align-items:center; margin-top:20px;">
                <a href="#" style="font-size:18px;">Twitter / X</a>
                <a href="#" style="font-size:18px;">GitHub</a>
                <a href="#" style="font-size:18px;">LinkedIn</a>
            </div>
        `
    },
    'map': {
        title: 'Site Map',
        content: `<h2>Navigation</h2><ul><li>Home</li><li>Blog</li><li>Projects</li></ul>`
    }
};

const app = {
    init: () => {
        app.updateClock();
        setInterval(app.updateClock, 60000);
        
        app.setupScrollbars(); 
        app.setupBlog();
        app.setupEvents();
        app.setupResize(); 
        app.setupDrag(); 
        
        app.cycleBackground(); 
        
        // Initial load
        const hash = window.location.hash.replace('#', '') || 'home';
        app.navigateTo(hash, false);

        // Force dock to open on startup
        if (!state.dockOpen) {
            app.toggleDock();
        }
    },

    // Custom Scrollbars: Fat Outlined Arrow Icons (Vertical Up/Down)
    setupScrollbars: () => {
        const style = document.createElement('style');
        style.textContent = `
            ::-webkit-scrollbar {
                width: 16px;
                height: 16px;
                background: #dfdfdf;
            }
            ::-webkit-scrollbar-track {
                background: #ccc;
                box-shadow: inset 1px 1px 0px #444, inset -1px -1px 0px #fff;
            }
            ::-webkit-scrollbar-thumb {
                background-color: #c0c0c0;
                border: 2px solid;
                border-color: #fff #444 #444 #fff;
                box-shadow: none;
            }
            
            ::-webkit-scrollbar-button {
                height: 16px;
                width: 16px;
                background-color: #c0c0c0;
                border: 2px solid;
                border-color: #fff #444 #444 #fff;
                display: block;
            }

            ::-webkit-scrollbar-button:start:increment,
            ::-webkit-scrollbar-button:end:decrement {
                display: none;
            }

            /* UP ARROW (Fat Outlined) */
            ::-webkit-scrollbar-button:vertical:start:decrement {
                background-image: url("data:image/svg+xml,%3Csvg width='10' height='10' viewBox='0 0 10 10' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5 1 L9 5 H7 V9 H3 V5 H1 Z' fill='none' stroke='black' stroke-width='1.5' stroke-linejoin='round'/%3E%3C/svg%3E");
                background-position: center;
                background-repeat: no-repeat;
            }

            /* DOWN ARROW (Fat Outlined) */
            ::-webkit-scrollbar-button:vertical:end:increment {
                background-image: url("data:image/svg+xml,%3Csvg width='10' height='10' viewBox='0 0 10 10' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5 9 L1 5 H3 V1 H7 V5 H9 Z' fill='none' stroke='black' stroke-width='1.5' stroke-linejoin='round'/%3E%3C/svg%3E");
                background-position: center;
                background-repeat: no-repeat;
            }

            /* Horizontal Arrows (if needed) */
            ::-webkit-scrollbar-button:horizontal:start:decrement {
                background-image: url("data:image/svg+xml,%3Csvg width='10' height='10' viewBox='0 0 10 10' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 5 L5 9 V7 H9 V3 H5 V1 Z' fill='none' stroke='black' stroke-width='1.5' stroke-linejoin='round'/%3E%3C/svg%3E");
                background-position: center;
                background-repeat: no-repeat;
            }
            ::-webkit-scrollbar-button:horizontal:end:increment {
                background-image: url("data:image/svg+xml,%3Csvg width='10' height='10' viewBox='0 0 10 10' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M9 5 L5 1 V3 H1 V7 H5 V9 Z' fill='none' stroke='black' stroke-width='1.5' stroke-linejoin='round'/%3E%3C/svg%3E");
                background-position: center;
                background-repeat: no-repeat;
            }
        `;
        document.head.appendChild(style);
    },

    setupBlog: () => {
        const sortedEntries = [...blogEntries].sort((a,b) => new Date(b.date) - new Date(a.date));

        // [MODIFIED] Updated Blog Header
        let landingHTML = `
            <div style="margin-bottom: 30px;">
                <h1 style="margin: 0 0 10px 0; font-size: 1.5em;">The Glottal Stop Blog</h1>
                <div style="font-size: 1.1em; color: #444; margin-bottom: 10px;">A blog for computational linguistics, mathematics, programming languages and other topics which I find interesting</div>
            </div>
            <ul>
        `;
        
        sortedEntries.forEach(post => {
            // [MODIFIED] Added text-decoration: none
            landingHTML += `<li><a style="text-decoration: none;" onclick="app.navigateTo('${post.id}')">${post.title}</a></li>`;
        });
        landingHTML += '</ul>';

        pages['blog'].content = landingHTML;

        const chronoEntries = [...blogEntries].sort((a,b) => new Date(a.date) - new Date(b.date));

        chronoEntries.forEach((post, index) => {
            const prevPost = index > 0 ? chronoEntries[index - 1] : null; 
            const nextPost = index < chronoEntries.length - 1 ? chronoEntries[index + 1] : null; 

            let navHTML = '<div style="display: flex; justify-content: space-between; flex-wrap: wrap; gap: 15px; margin-bottom: 20px; font-size: 0.9em; border-bottom: 1px solid #ccc; padding-bottom: 10px;">';

            if (prevPost) {
                // [MODIFIED] Added text-decoration: none
                navHTML += `<a style="text-decoration: none;" onclick="app.navigateTo('${prevPost.id}')">← Previous entry</a>`;
            } else {
                navHTML += `<span style="color:#999">← Previous entry</span>`;
            }

            // [MODIFIED] Added text-decoration: none
            navHTML += `<a style="text-decoration: none;" onclick="app.navigateTo('blog')">All entries</a>`;

            if (nextPost) {
                // [MODIFIED] Added text-decoration: none
                navHTML += `<a style="text-decoration: none;" onclick="app.navigateTo('${nextPost.id}')">Next entry →</a>`;
            } else {
                navHTML += `<span style="color:#999">Next entry →</span>`;
            }
            navHTML += '</div>';

            let postContent = navHTML;
            postContent += `<div style="margin-bottom: 15px;"><b><span style="font-size: 1.2em;">${post.title}</span></b></div>`;
            postContent += post.content;

            pages[post.id] = {
                title: 'Blog - ' + post.title, 
                content: postContent
            };
        });
    },

    updateClock: () => {
        const now = new Date();
        document.getElementById('clock').textContent = now.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
    },

    navigateTo: (pageId, push = true) => {
        const currentIsPost = state.page.startsWith('post-');
        const targetIsPost = pageId && pageId.startsWith('post-');
        const preserveWindow = currentIsPost && targetIsPost;

        if (!pages[pageId]) pageId = 'home';
        state.page = pageId;

        if(push) history.pushState(null, null, `#${pageId}`);

        const variableMenu = document.querySelector('#menu-variable .label');
        if(variableMenu) {
            let displayLabel = pageId;
            if (pageId.startsWith('post-')) displayLabel = 'Blog'; 
            else displayLabel = pageId.charAt(0).toUpperCase() + pageId.slice(1);
            
            variableMenu.textContent = displayLabel;
        }

        app.updateVariableDropdown(pageId);

        const win = document.getElementById('window-frame');
        
        document.getElementById('win-title').textContent = pages[pageId].title;
        document.getElementById('window-content').innerHTML = pages[pageId].content;
        
        document.getElementById('window-content').style.overflow = 'auto';

        if (preserveWindow) {
            win.classList.remove('hidden');
        } else {
            let w = 640;
            let h = 440;
            const isBlogType = pageId === 'blog' || pageId.startsWith('post-');

            if (isBlogType) {
                w = 800; 
                h = 550; 
            }

            win.style.width = `${w}px`;
            win.style.height = `${h}px`;

            const left = Math.max(0, (window.innerWidth - w) / 2);
            let top = Math.max(0, (window.innerHeight - h) / 2);

            top = Math.max(0, top - 60);

            win.style.left = `${left}px`;
            win.style.top = `${top}px`;
            
            win.classList.remove('hidden');
        }

        app.playSound('open');
        app.closeMenus();
    },

    updateVariableDropdown: (currentPage) => {
        const dropdown = document.getElementById('dropdown-variable');
        if(!dropdown) return;
        
        dropdown.innerHTML = ''; 

        const allPages = ['home', 'blog', 'projects', 'posts', 'contact', 'socials'];
        
        allPages.forEach(p => {
            if (p !== currentPage && !(currentPage.startsWith('post-') && p === 'blog')) {
                const btn = document.createElement('button');
                btn.textContent = p.charAt(0).toUpperCase() + p.slice(1);
                btn.onclick = () => app.navigateTo(p);
                dropdown.appendChild(btn);
            }
            if (currentPage.startsWith('post-') && p === 'blog') {
                const btn = document.createElement('button');
                btn.textContent = 'Blog';
                btn.onclick = () => app.navigateTo('blog');
                dropdown.appendChild(btn);
            }
        });
    },

    toggleDock: () => {
        state.dockOpen = !state.dockOpen;
        const container = document.getElementById('dock-container');
        const pillGrip = document.querySelector('#dock-tab .pill-grip');

        if (state.dockOpen) {
            container.classList.add('open');
            app.playSound('click');
            // Dock is Open -> Needs to Close (Left Arrow). 
            // Rotated 90deg -> Needs Down Arrow to look Left.
            pillGrip.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" style="display:block; margin:auto;" xmlns="http://www.w3.org/2000/svg"><path d="M7 9 L12 16 L17 9 Z" fill="#000" stroke="#000" stroke-width="2" stroke-linejoin="round"/></svg>`;
        } else {
            container.classList.remove('open');
            // Dock is Closed -> Needs to Open (Right Arrow).
            // Rotated 90deg -> Needs Up Arrow to look Right.
            pillGrip.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" style="display:block; margin:auto;" xmlns="http://www.w3.org/2000/svg"><path d="M7 15 L12 8 L17 15 Z" fill="#000" stroke="#000" stroke-width="2" stroke-linejoin="round"/></svg>`;
        }
    },

    cycleBackground: () => {
        state.bgIndex = (state.bgIndex + 1) % backgrounds.length;
        const mainColor = backgrounds[state.bgIndex];
        const darkColor = app.adjustColor(mainColor, -20);
        
        const root = document.documentElement;
        root.style.setProperty('--bg-main', mainColor);
        root.style.setProperty('--bg-dark', darkColor);

        app.closeMenus();
    },

    adjustColor: (color, amount) => {
        return '#' + color.replace(/^#/, '').replace(/../g, color => ('0'+Math.min(255, Math.max(0, parseInt(color, 16) + amount)).toString(16)).substr(-2));
    },

    // [MODIFIED] Added openAbout function with HTML, CSS, JS logos and Github Badge
    openAbout: () => {
        const content = `
            <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%; text-align: center;">
                <h3 style="margin: 0 0 10px 0;">Version 1.1</h3>
                <p style="margin: 0 0 20px 0;">Created with vanilla HTML, CSS and JavaScript ♥</p>
                <div style="display: flex; gap: 15px; margin-bottom: 25px;">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" width="40" height="40" alt="HTML5" title="HTML5">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" width="40" height="40" alt="CSS3" title="CSS3">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" width="40" height="40" alt="JavaScript" title="JavaScript">
                </div>
                <p style="margin: 0 0 10px 0; font-size: 1em;">Get the source code, suggest and improve:</p>
                <a href="https://github.com/AnishBramha/AnishBramha.github.io" target="_blank" style="text-decoration: none;">
                    <img src="https://img.shields.io/badge/github-repo-black?logo=github" alt="GitHub Badge">
                </a>
            </div>
        `.replace(/\n/g, ''); // Strip newlines to prevent openModal from adding <br> tags randomly

        app.openModal("Anish Teja's Website", content, 347, 325);
    },

    // [MODIFIED] Added openCredits function
    openCredits: () => {
        const content = `
            <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%; text-align: center;">
                <p style="margin: 0 0 15px 0;">
                    <span style="display:inline-block; transform: rotate(180deg); font-size: 2.5em; vertical-align: middle; line-height: 1;">&copy;</span> All Wrongs Reserved
                </p>
                <p style="margin: 0 0 15px 0;">Anish Teja Bramhajosyula</p>
                <p style="margin: 0 0 15px 0;">Huge thanks to <a href="https://aravind-bramha.netlify.app" target="_blank" style="color: #6a5acd;">Aravind Bramhajosyula</a>!</p>
                
                <a href="https://www.gnu.org/licenses/gpl-3.0-standalone.html" target="_blank" style="text-decoration: none; margin-bottom: 10px; display: block;">
                    <img src="https://www.gnu.org/graphics/gplv3-with-text-136x68.png" width="136" alt="GPLv3 Logo">
                </a>
                
                <a href="https://www.gnu.org/licenses/gpl-3.0-standalone.html" target="_blank" style="text-decoration: none;">
                    <img src="https://img.shields.io/badge/-LICENCE-d12000" alt="Licence Badge">
                </a>
            </div>
        `.replace(/\n/g, '');

        app.openModal("Credits", content, 338, 338);
    },

    // [MODIFIED] Updated openModal signature to accept width and height (w, h)
    openModal: (title, text, w = 640, h = 440) => {
        const win = document.getElementById('window-frame');
        
        document.getElementById('win-title').textContent = title;
        document.getElementById('window-content').innerHTML = text.replace(/\n/g, '<br>');
        document.getElementById('window-content').style.overflow = 'auto'; 
        
        // [MODIFIED] Width and Height are now dynamic based on arguments
        const left = Math.max(0, (window.innerWidth - w) / 2);
        let top = Math.max(0, (window.innerHeight - h) / 2);
        
        top = Math.max(0, top - 60);

        win.style.width = `${w}px`;
        win.style.height = `${h}px`;
        win.style.left = `${left}px`;
        win.style.top = `${top}px`;

        win.classList.remove('hidden');
        app.playSound('open');
        app.closeMenus();
    },

    closeMenus: () => {
        document.querySelectorAll('.menu-item').forEach(i => i.classList.remove('active'));
    },

    playSound: (type) => {
        const audio = document.getElementById(`sfx-${type}`);
        if(audio) {
            audio.currentTime = 0;
            audio.play().catch(()=>{});
        }
    },

    setupEvents: () => {
        document.querySelectorAll('.menu-item').forEach(item => {
            item.addEventListener('mousedown', () => item.classList.add('inset'));
            item.addEventListener('mouseup', () => item.classList.remove('inset'));
            item.addEventListener('touchstart', () => item.classList.add('inset'), {passive: true});
            item.addEventListener('touchend', () => item.classList.remove('inset'));

            item.addEventListener('click', (e) => {
                e.stopPropagation(); 
                const isActive = item.classList.contains('active');
                app.closeMenus(); 
                if (!isActive) {
                    item.classList.add('active');
                }
            });
        });

        document.addEventListener('click', app.closeMenus);
        
        document.addEventListener('touchstart', (e) => {
            if (!e.target.closest('.menu-item')) app.closeMenus();
        }, {passive: true});
    },

    setupResize: () => {
        const handle = document.getElementById('resize-handle');
        const win = document.getElementById('window-frame');
        
        let startX, startY, startWidth, startHeight, startLeft, startTop;

        const startResize = (e) => {
            state.isResizing = true;
            e.preventDefault();
            
            const clientX = e.type.includes('touch') ? e.touches[0].clientX : e.clientX;
            const clientY = e.type.includes('touch') ? e.touches[0].clientY : e.clientY;
            
            startX = clientX;
            startY = clientY;

            const styles = document.defaultView.getComputedStyle(win);
            startWidth = parseInt(styles.width, 10);
            startHeight = parseInt(styles.height, 10);
            startLeft = parseInt(styles.left, 10);
            startTop = parseInt(styles.top, 10);
            
            if (e.type.includes('touch')) {
                document.documentElement.addEventListener('touchmove', doDrag, {passive: false});
                document.documentElement.addEventListener('touchend', stopDrag, false);
            } else {
                document.documentElement.addEventListener('mousemove', doDrag, false);
                document.documentElement.addEventListener('mouseup', stopDrag, false);
            }
        };

        const doDrag = (e) => {
            if (!state.isResizing) return;
            if(e.type.includes('touch')) e.preventDefault();

            const clientX = e.type.includes('touch') ? e.touches[0].clientX : e.clientX;
            const clientY = e.type.includes('touch') ? e.touches[0].clientY : e.clientY;
            
            const deltaX = clientX - startX;
            const deltaY = clientY - startY;

            const centerX = startLeft + startWidth / 2;
            const centerY = startTop + startHeight / 2;

            const distToLeft = centerX; 
            const distToRight = window.innerWidth - centerX;
            const maxHalfWidth = Math.min(distToLeft, distToRight);

            const distToTop = centerY; 
            const distToBottom = (window.innerHeight - 32) - centerY; 
            const maxHalfHeight = Math.min(distToTop, distToBottom);

            let targetHalfWidth = (startWidth / 2) + deltaX;
            let targetHalfHeight = (startHeight / 2) + deltaY;

            if (targetHalfWidth < 125) targetHalfWidth = 125;
            if (targetHalfWidth > maxHalfWidth) targetHalfWidth = maxHalfWidth;

            if (targetHalfHeight < 75) targetHalfHeight = 75;
            if (targetHalfHeight > maxHalfHeight) targetHalfHeight = maxHalfHeight;

            const newWidth = targetHalfWidth * 2;
            const newHeight = targetHalfHeight * 2;
            const newLeft = centerX - targetHalfWidth;
            const newTop = centerY - targetHalfHeight;

            win.style.width = newWidth + 'px';
            win.style.height = newHeight + 'px';
            win.style.left = newLeft + 'px';
            win.style.top = newTop + 'px';

            if (window.innerWidth > 768 && state.dockOpen) {
                const dock = document.getElementById('dock-drawer');
                const dockRect = dock.getBoundingClientRect();
                const winRect = win.getBoundingClientRect();
                
                const overlap = !(winRect.right < dockRect.left || 
                                  winRect.left > dockRect.right || 
                                  winRect.bottom < dockRect.top || 
                                  winRect.top > dockRect.bottom);
                
                if (overlap) {
                    app.toggleDock();
                }
            }
        };

        const stopDrag = () => {
            state.isResizing = false;
            document.documentElement.removeEventListener('mousemove', doDrag, false);
            document.documentElement.removeEventListener('mouseup', stopDrag, false);
            document.documentElement.removeEventListener('touchmove', doDrag);
            document.documentElement.removeEventListener('touchend', stopDrag);
        };

        handle.addEventListener('mousedown', startResize);
        handle.addEventListener('touchstart', startResize, {passive: false});
    },

    setupDrag: () => {
        // Disabled
    }
};

window.addEventListener('DOMContentLoaded', app.init);
