const state = {
    page: 'home',
    dockOpen: false,
    bgIndex: 6,
    isResizing: false,
    blogCache: {},
    postsCache: {}, // [NEW] Cache for posts
    blogIndex: [],  // [NEW] Store list for navigation
    postsIndex: []  // [NEW] Store list for navigation
};

// Background colors to cycle through
const backgrounds = ['#708090', '#5F9EA0', '#4682B4', '#556B2F', '#8B4513', '#483D8B', '#B8860B'];

const pages = {
    'home': { 
        title: 'Welcome', 
        /* // --- PREVIOUS HOMEPAGE (TRUCK ANIMATION) ---
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
                
                @media (max-width: 768px) {
                    .construction-zone {
                        transform: scale(0.85);
                        transform-origin: center top; 
                        margin-bottom: -20px; 
                        width: 100%;
                        max-width: 400px; 
                    }
                }

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

                .animation-track {
                    width: 100%; flex-grow: 1; position: relative;
                }
                
                .bulldozer-group {
                    position: absolute;
                    bottom: 25px; left: -140px;
                    width: 130px; height: 80px;
                    animation: drive-across 10s linear infinite;
                }

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
                    background: #cceeff;
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
                .tire {
                    position: absolute;
                    bottom: -8px;
                    width: 30px; height: 30px;
                    background: #222;
                    border-radius: 50%;
                    border: 2px dashed #000; 
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
                @keyframes drive-across {
                    0% { transform: translateX(0) translateY(0); }
                    1% { transform: translateX(5px) translateY(1px); }
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
        */
        content: `
            <h1 style="margin-top: 0; font-weight: bold; display: flex; justify-content: space-between; flex-wrap: wrap;">
                <span>¡Welcome!</span>
                <span>స్వాగతము !</span>
            </h1>
            
            <div style="height: 2px; border-top: 1px solid #888; border-bottom: 1px solid #fff; margin: 10px 0 20px 0;"></div>
            
            <div style="line-height: 1.5;">
                <p>Welcome to my website! This is my personal space in the internet where I write <a onclick="app.navigateTo('blog')">blogs</a>, <a onclick="app.navigateTo('posts')">post</a> about interesting stuff, showcase my <a onclick="app.navigateTo('projects')">projects</a> and <a onclick="app.navigateTo('socials')">connect</a> with people who find me here!</p>

                <p>I am <b>Anish Teja Bramhajosyula</b>, a sophomore at the International Institute of Information Technology, Bangalore, majoring in Computer Science & Engineering. I love languages and mathematics and aspire to become a computational linguist someday. One of my pastimes is exploring programming languages — making and breaking. I love exploring and analysing different paradigms (mostly functional and meta).</p>

                <p>I love singing and listening to Carnatic Music. I take pride in being an ardent <em>rasikā</em>. I also enjoy a warm cup of hot chocolate anytime.</p>

                <p>Reach out to me <a onclick="app.navigateTo('contact')">here</a>. Check out my <a onclick="app.navigateTo('resume')">résumé</a>.</p>

                <p>Have a look around! You can click on the menu bar on the top or toggle the dock at the bottom.</p>

                <p>This website design is inspired from the NextStep OS from the 1990s and the classic Macintosh Platinum OS from the '80s and '90s.</p>

                <p>All elements of this website are open-source and free to use.</p>
            </div>
        `
    },
    'blog': { 
        title: 'Blog', 
        content: `Loading...` 
    },
    'projects': { 
        title: 'Work Disk', 
        content: `<h2>Active Projects</h2><p>Loading projects...</p>`
    },
    'posts': { 
        title: 'Feed', 
        content: `Loading feeds...` 
    },
    'contact': { 
        title: 'Mailbox', 
        content: `
            <div class="contact-container">
                <h3 class="contact-header">Send Message</h3>
                <div class="contact-to-row">
                    <span><b>To</b>:</span>&emsp;&ensp;
                    <a href="mailto:filter.kapi@tuta.io" style="text-decoration: none; display: flex;">
                        <img src="https://img.shields.io/badge/filter.kapi@tuta.io-9F1621?logo=tuta&logoColor=white" alt="Email Badge">
                    </a>
                </div>
                <div class="contact-row">
                    <label for="c-from" class="contact-label"><b>From</b>:</label>
                    <input type="email" id="c-from" class="contact-input">
                </div>
                <div class="contact-row">
                    <label for="c-sub" class="contact-label"><b>Subject</b>:</label>
                    <input type="text" id="c-sub" class="contact-input">
                </div>
                <textarea id="c-body" class="contact-textarea"></textarea>
                <div class="contact-footer">
                    <button onclick="app.sendEmail()" class="contact-btn"><b>SEND</b></button>
                </div>
            </div>
        ` 
    },
    /* [MODIFIED] Added new 'resume' page configuration */
    'resume': {
        title: 'Résumé',
        content: `
            <div class="contact-container">
                <h3 class="contact-header">Get Résumé</h3>
                
                <div class="contact-to-row">
                    <span><b>To</b>:</span>&emsp;&ensp;
                    <a href="mailto:filter.kapi@tuta.io" style="text-decoration: none; display: flex;">
                        <img src="https://img.shields.io/badge/filter.kapi@tuta.io-9F1621?logo=tuta&logoColor=white" alt="Email Badge">
                    </a>
                </div>

                <div class="contact-row">
                    <label for="r-name" class="contact-label"><b>Name</b>:</label>
                    <input type="text" id="r-name" class="contact-input" placeholder="Required">
                </div>
                
                <div class="contact-row">
                    <label for="r-email" class="contact-label"><b>Email</b>:</label>
                    <input type="email" id="r-email" class="contact-input" placeholder="Required">
                </div>
               
                <div class="contact-row">
                    <span class="contact-label"><b>Subject</b>:</span>
                    <span style="font-size: 18px;">View Résumé</span>
                </div>
                
                <div class="contact-row" style="flex-direction:column; align-items:flex-start;">
                    <label for="r-comments" class="contact-label" style="margin-bottom:4px"><b>Comments</b>:</label>
                    <textarea id="r-comments" class="contact-textarea" rows="1" placeholder="Optional"></textarea>
                </div>

                <div style="margin: 15px 0; font-size: 0.95em; color: #333; font-style: italic; border-top: 1px solid #999; padding-top: 10px;">
                    I will send my résumé to your email address; this mechanism is to protect against plagiarism.
                </div>

                <div class="contact-footer">
                    <button onclick="app.requestResume()" class="contact-btn"><b>SEND</b></button>
                </div>
            </div>
        `
    },
    'socials': {
        title: 'Socials',
        content: `
            <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%; font-size: 1.1em; text-align: center">
                <h3 style="margin: 0 0 20px 0;">Connect with Me</h3>
                <div style="display: flex; flex-direction: row; gap: 10px; align-items: center; justify-content: center; flex-wrap: wrap;">
                    <a href="https://github.com/AnishBramha" target="_blank" style="text-decoration: none; color: inherit; display: flex; align-items: center; gap: 10px;">
                        <img src="https://img.shields.io/badge/GitHub-181717?logo=github&logoColor=white" alt="GitHub Badge">
                    </a>
                    <a href="https://www.linkedin.com/in/anish-teja-bramhajosyula-02aa81320/" target="_blank" style="text-decoration: none; color: inherit; display: flex; align-items: center; gap: 10px;">
                        <img src="https://img.shields.io/badge/LinkedIn-0077B5?logo=linkedin&logoColor=white" alt="LinkedIn Badge">
                    </a>
                    <a href="mailto:filter.kapi@tuta.io" style="text-decoration: none; color: inherit; display: flex; align-items: center; gap: 10px;">
                        <img src="https://img.shields.io/badge/Email-9F1621?logo=tuta&logoColor=white" alt="Email Badge">
                    </a>
                </div>
            </div>
        `
    },
    'map': {
        title: 'Site Map',
        content: `<h2>Navigation</h2><ul><li>Home</li><li>Blog</li><li>Projects</li><li>Posts</li></ul>`
    }
};

const app = {
    init: () => {
        app.updateClock();
        setInterval(app.updateClock, 60000);
        
        app.setupScrollbars(); 
        app.setupBlog();
        app.setupProjects();
        // [MODIFIED] Initialize Posts System
        app.setupPosts();
        
        app.setupEvents();
        app.setupResize(); 
        app.setupDrag(); 
        
        app.cycleBackground(); 
        
        const hash = window.location.hash.replace('#', '') || 'home';
        app.navigateTo(hash, false);

        if (!state.dockOpen) {
            app.toggleDock();
        }
    },

    setupScrollbars: () => {
        const style = document.createElement('style');
        style.textContent = `
            ::-webkit-scrollbar { width: 16px; height: 16px; background: #dfdfdf; }
            ::-webkit-scrollbar-track { background: #ccc; box-shadow: inset 1px 1px 0px #444, inset -1px -1px 0px #fff; }
            ::-webkit-scrollbar-thumb { background-color: #c0c0c0; border: 2px solid; border-color: #fff #444 #444 #fff; box-shadow: none; }
            ::-webkit-scrollbar-button { height: 16px; width: 16px; background-color: #c0c0c0; border: 2px solid; border-color: #fff #444 #444 #fff; display: block; }
            ::-webkit-scrollbar-button:start:increment, ::-webkit-scrollbar-button:end:decrement { display: none; }
            ::-webkit-scrollbar-button:vertical:start:decrement { background-image: url("data:image/svg+xml,%3Csvg width='10' height='10' viewBox='0 0 10 10' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5 1 L9 5 H7 V9 H3 V5 H1 Z' fill='none' stroke='black' stroke-width='1.5' stroke-linejoin='round'/%3E%3C/svg%3E"); background-position: center; background-repeat: no-repeat; }
            ::-webkit-scrollbar-button:vertical:end:increment { background-image: url("data:image/svg+xml,%3Csvg width='10' height='10' viewBox='0 0 10 10' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5 9 L1 5 H3 V1 H7 V5 H9 Z' fill='none' stroke='black' stroke-width='1.5' stroke-linejoin='round'/%3E%3C/svg%3E"); background-position: center; background-repeat: no-repeat; }
            ::-webkit-scrollbar-button:horizontal:start:decrement { background-image: url("data:image/svg+xml,%3Csvg width='10' height='10' viewBox='0 0 10 10' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 5 L5 9 V7 H9 V3 H5 V1 Z' fill='none' stroke='black' stroke-width='1.5' stroke-linejoin='round'/%3E%3C/svg%3E"); background-position: center; background-repeat: no-repeat; }
            ::-webkit-scrollbar-button:horizontal:end:increment { background-image: url("data:image/svg+xml,%3Csvg width='10' height='10' viewBox='0 0 10 10' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M9 5 L5 1 V3 H1 V7 H5 V9 Z' fill='none' stroke='black' stroke-width='1.5' stroke-linejoin='round'/%3E%3C/svg%3E"); background-position: center; background-repeat: no-repeat; }
        `;
        document.head.appendChild(style);
    },

    // --- BLOG SYSTEM ---
    setupBlog: () => {
        fetch('blog/index.json')
            .then(response => response.json())
            .then(posts => {
                // [MODIFIED] Store sorted index in state
                state.blogIndex = posts.sort((a, b) => new Date(b.date) - new Date(a.date));
                app.renderBlogIndex(state.blogIndex);
            })
            .catch(err => {
                console.error("Could not load blog index:", err);
                pages['blog'].content = "<p>Error loading blog index. System failure.</p>";
            });
    },

    renderBlogIndex: (posts) => {
        let landingHTML = `
            <div style="margin-bottom: 30px;">
                <h1 style="margin: 0 0 10px 0; font-size: 1.5em;">The Glottal Stop Blog</h1>
                <div style="font-size: 1.1em; color: #444; margin-bottom: 10px;">A blog for computational linguistics, mathematics, programming languages and other topics which I find interesting</div>
            </div>
            <ul>
        `;

        posts.forEach(post => {
            if (!pages[post.id]) {
                pages[post.id] = {
                    title: 'Blog - ' + post.title,
                    content: '<div style="text-align:center; padding-top:50px;">Loading data from disk...</div>', 
                    isBlogPost: true, 
                    file: post.file,
                    type: 'blog' // Identify type
                };
            }
            landingHTML += `<li><a style="text-decoration: none;" onclick="app.navigateTo('${post.id}')">${post.title}</a> <span style="font-size:0.8em; color:#666">(${post.date})</span></li>`;
        });
        landingHTML += '</ul>';
        
        pages['blog'].content = landingHTML;
        if (state.page === 'blog') {
            const winContent = document.getElementById('window-content');
            if(winContent) winContent.innerHTML = landingHTML;
        }
    },

    // --- [NEW] POSTS SYSTEM ---
    setupPosts: () => {
        fetch('posts/index.json')
            .then(response => response.json())
            .then(posts => {
                // Store sorted index
                state.postsIndex = posts.sort((a, b) => new Date(b.date) - new Date(a.date));
                app.renderPostsIndex(state.postsIndex);
            })
            .catch(err => {
                console.error("Could not load posts index:", err);
                pages['posts'].content = "<p>Error loading posts index.</p>";
            });
    },

    renderPostsIndex: (posts) => {
        let landingHTML = `<h1 style="margin: 0 0 25px 0; font-size: 1.8em; font-weight: bold;">Netscape Feed</h1>`;

        posts.forEach((p, index) => {
            if (!pages[p.id]) {
                pages[p.id] = {
                    title: p.title, // Title only for Posts
                    content: '<div style="text-align:center; padding-top:50px;">Loading post...</div>',
                    isPost: true,
                    file: p.file,
                    type: 'post' // Identify type
                };
            }

            // [MODIFIED] Specific structure for Posts landing
            landingHTML += `
                <div class="post-unit">
                    <div class="post-header-row">
                        <span class="post-title-small">${p.title}</span>
                        <a class="read-more-link" style="text-decoration: none;" onclick="app.navigateTo('${p.id}')">Read More ⎋</a>
                    </div>
                    <div class="post-description">
                        ${p.description}
                    </div>
                    <div style="height: 2px; border-top: 1px solid #888; border-bottom: 1px solid #fff; margin-top: 15px;"></div>
                </div>
            `;
        });

        pages['posts'].content = landingHTML;
        if (state.page === 'posts') {
            const winContent = document.getElementById('window-content');
            if(winContent) winContent.innerHTML = landingHTML;
        }
    },

    // --- SHARED NAVIGATION GENERATOR ---
    generateNavHTML: (currentId, indexList, type) => {
        const idx = indexList.findIndex(p => p.id === currentId);
        if (idx === -1) return '';

        // Note: indexList is sorted Descending (Newest first).
        // Next in array = Older post = "Previous Entry" chronologically? 
        // Typically "Previous" means older (Next index) and "Next" means newer (Previous index).
        
        const nextItem = indexList[idx - 1]; // Newer
        const prevItem = indexList[idx + 1]; // Older
        
        const labelNext = type === 'blog' ? 'Next entry →' : 'Next post →';
        const labelAll = type === 'blog' ? 'All entries' : 'All posts';
        const labelPrev = type === 'blog' ? '← Previous entry' : '← Previous post';
        const rootPage = type === 'blog' ? 'blog' : 'posts';

        const prevHTML = prevItem 
            ? `<a class="nav-item" style="text-decoration: none;" onclick="app.navigateTo('${prevItem.id}')">${labelPrev}</a>`
            : `<span class="nav-item disabled" style="text-decoration: none;">${labelPrev}</span>`;
            
        const nextHTML = nextItem 
            ? `<a class="nav-item" style="text-decoration: none;" onclick="app.navigateTo('${nextItem.id}')">${labelNext}</a>`
            : `<span class="nav-item disabled" style="text-decoration: none;">${labelNext}</span>`;

        return `
            <div class="nav-bar">
                ${prevHTML}
                <a class="nav-item" style="text-decoration: none;" onclick="app.navigateTo('${rootPage}')">${labelAll}</a>
                ${nextHTML}
            </div>
            <div class="nav-separator"></div>
        `;
    },

    // --- GENERIC CONTENT LOADER (Used for both Blog & Posts) ---
    loadContentFile: (pageId) => {
        const pageData = pages[pageId];
        const isBlog = pageData.type === 'blog';
        const cache = isBlog ? state.blogCache : state.postsCache;
        const indexList = isBlog ? state.blogIndex : state.postsIndex;
        const rootDir = isBlog ? 'blog' : 'posts';

        if (cache[pageId]) {
            document.getElementById('window-content').innerHTML = cache[pageId];
            return;
        }

        fetch(`${rootDir}/${pageData.file}`)
            .then(res => {
                if (!res.ok) throw new Error('File not found');
                return res.text();
            })
            .then(markdown => {
                const htmlContent = marked.parse(markdown);
                const navHTML = app.generateNavHTML(pageId, indexList, pageData.type);
                
                // [MODIFIED] Structure for Detail View
                const finalHTML = `
                    ${navHTML}
                    <div class="markdown-body post-body-content">
                        ${isBlog ? '' : `<h1 style="margin-bottom:10px;">${pageData.title}</h1>`}
                        ${htmlContent}
                    </div>
                `;

                cache[pageId] = finalHTML;
                
                if (state.page === pageId) {
                    document.getElementById('window-content').innerHTML = finalHTML;
                }
            })
            .catch(err => {
                document.getElementById('window-content').innerHTML = "<p>Error: Data corruption. File could not be read.</p>";
            });
    },

    loadBlogPost: (pageId) => {
        app.loadContentFile(pageId);
    },

    setupProjects: () => {
        fetch('projects.json')
            .then(response => response.json())
            .then(data => {
                app.renderProjects(data);
            })
            .catch(err => {
                console.error("Could not load projects:", err);
                pages['projects'].content = "<p>Error loading projects from disk.</p>";
            });
    },

    renderProjects: (projects) => {
        const itemsHtml = projects.map((p, index) => {
            const separator = index < projects.length - 1 
                ? `<div style="height: 2px; border-top: 1px solid #888; border-bottom: 1px solid #fff; margin: 25px 0;"></div>` 
                : '';

            return `
                <div class="project-unit">
                    <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 8px;">
                        <span style="font-size: 1.1em; font-weight: 600; width: 50%; word-wrap: break-word; line-height: 1.2;">
                            ${p.name}
                        </span>
                        
                        <a href="${p.link}" target="_blank" style="text-decoration: none; display: flex;">
                            <img src="https://img.shields.io/badge/GitHub-181717?logo=github&logoColor=white" alt="GitHub Badge">
                        </a>
                    </div>
                    
                    <div style="margin-bottom: 10px; color: #333;">
                        ${p.description}
                    </div>
                    
                    ${separator}
                </div>
            `;
        }).join('');

        const fullContent = `
            <h1 style="margin: 0 0 25px 0; font-size: 1.8em; font-weight: bold;">Projects</h1>
            <div class="projects-container">
                ${itemsHtml}
            </div>
        `;

        pages['projects'].content = fullContent;
        if (state.page === 'projects') {
            const winContent = document.getElementById('window-content');
            if(winContent) winContent.innerHTML = fullContent;
        }
    },

    updateClock: () => {
        const now = new Date();
        document.getElementById('clock').textContent = now.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
    },

    navigateTo: (pageId, push = true) => {
        // [MODIFIED] Check for both blog post and standard post prefixes
        const currentIsDetail = state.page.startsWith('post-') || (pages[state.page] && (pages[state.page].isBlogPost || pages[state.page].isPost));
        const targetIsDetail = pageId && ((pageId.startsWith('post-') && pages[pageId]) || (pages[pageId] && (pages[pageId].isBlogPost || pages[pageId].isPost)));
        const preserveWindow = currentIsDetail && targetIsDetail;

        if (!pages[pageId]) pageId = 'home';
        state.page = pageId;

        if(push) history.pushState(null, null, `#${pageId}`);

        const variableMenu = document.querySelector('#menu-variable .label');
        if(variableMenu) {
            let displayLabel = pageId;
            // Simplified logic for menu label
            if (pages[pageId].isBlogPost) displayLabel = 'Blog';
            else if (pages[pageId].isPost) displayLabel = 'Posts';
            else if (pageId === 'resume') displayLabel = 'Résumé';
            else displayLabel = pageId.charAt(0).toUpperCase() + pageId.slice(1);
            
            variableMenu.textContent = displayLabel;
        }

        app.updateVariableDropdown(pageId);

        const win = document.getElementById('window-frame');
        
        document.getElementById('win-title').textContent = pages[pageId].title;
        document.getElementById('window-content').innerHTML = pages[pageId].content;
        document.getElementById('window-content').style.overflow = 'auto';

        // [MODIFIED] Universal loader
        if (pages[pageId].isBlogPost || pages[pageId].isPost) {
            app.loadContentFile(pageId);
        }

        if (preserveWindow) {
            win.classList.remove('hidden');
        } else {
            let w = 640;
            let h = 440;
            // [MODIFIED] Size logic
            const isWide = pageId === 'blog' || pageId === 'projects' || pageId === 'posts' || pages[pageId].isBlogPost || pages[pageId].isPost;

            if (isWide) {
                w = 800; 
                h = 550; 
            }
            else if (pageId === 'home') {
                w = 600;
                h = 600;
            }
            else if (pageId === 'contact') {
                w = 720;
                h = 520;
            }
            else if (pageId === 'socials') {
                w = 300;
                h = 200;
            }
            else if (pageId === 'resume') {
                w = 410;
                h = 530;
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
        
        const isBlogType = currentPage.startsWith('post-') && pages[currentPage]?.type === 'blog';
        const isPostType = currentPage.startsWith('post-') && pages[currentPage]?.type === 'post';

        allPages.forEach(p => {
            // Show item if it's not the current page
            // Special case: if viewing a blog detail, don't show 'blog' in dropdown? Usually we DO show 'Blog' so user can go back to index.
            
            const btn = document.createElement('button');
            
            if (p === 'blog' && isBlogType) {
                 // Already in blog section
                 btn.textContent = 'Blog Index';
                 btn.onclick = () => app.navigateTo('blog');
            } else if (p === 'posts' && isPostType) {
                 btn.textContent = 'Posts Index';
                 btn.onclick = () => app.navigateTo('posts');
            } else if (p !== currentPage) {
                 btn.textContent = p.charAt(0).toUpperCase() + p.slice(1);
                 btn.onclick = () => app.navigateTo(p);
            } else {
                return; // Skip current page
            }
            
            dropdown.appendChild(btn);
        });
    },

    toggleDock: () => {
        state.dockOpen = !state.dockOpen;
        const container = document.getElementById('dock-container');
        const pillGrip = document.querySelector('#dock-tab .pill-grip');

        if (state.dockOpen) {
            container.classList.add('open');
            app.playSound('click');
            pillGrip.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" style="display:block; margin:auto;" xmlns="http://www.w3.org/2000/svg"><path d="M7 9 L12 16 L17 9 Z" fill="#000" stroke="#000" stroke-width="2" stroke-linejoin="round"/></svg>`;
        } else {
            container.classList.remove('open');
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

    openAbout: () => {
        const content = `
            <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%; text-align: center;">
                <h3 style="margin: 0 0 10px 0;">Version 1.3</h3>
                <p style="margin: 0 0 20px 0;">Made with ♥</p>
                <div style="display: flex; gap: 15px; margin-bottom: 25px;">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" width="40" height="40" alt="HTML5" title="HTML5">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" width="40" height="40" alt="CSS3" title="CSS3">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" width="40" height="40" alt="JavaScript" title="JavaScript">
                </div>
                <p style="margin: 0 0 10px 0; font-size: 1em;">Get the source code, suggest and improve:</p>
                <a href="https://github.com/AnishBramha/AnishBramha.github.io" target="_blank" style="text-decoration: none;">
                    <img src="https://img.shields.io/badge/GitHub-black?logo=github" alt="GitHub Badge">
                </a>
            </div>
        `.replace(/\n/g, ''); 

        app.openModal("Anish Teja's Website", content, 347, 325);
    },

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

    sendEmail: () => {
        const from = document.getElementById("c-from").value;
        const subject = document.getElementById("c-sub").value;
        const body = document.getElementById("c-body").value;
        
        if (!from || !body) {
            alert("Please enter your email and a message.");
            return;
        }

        const btn = document.querySelector("#window-content button");
        const originalText = btn.textContent;
        btn.textContent = "Sending...";
        btn.disabled = true;

        const endpoint = "https://formspree.io/f/movgzeyw";

        fetch(endpoint, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: from,
                subject: subject,
                message: body
            })
        })
        .then(response => {
            if (response.ok) {
                alert("Message sent successfully!");
                document.getElementById("c-from").value = "";
                document.getElementById("c-sub").value = "";
                document.getElementById("c-body").value = "";
            } else {
                return response.json().then(data => {
                    if (Object.hasOwn(data, 'errors')) {
                        alert(data["errors"].map(error => error["message"]).join(", "));
                    } else {
                        alert("Oops! There was a problem sending your message.");
                    }
                });
            }
        })
        .catch(error => {
            alert("Error: Could not send message. Check your internet connection.");
        })
        .finally(() => {
            if(btn) {
                btn.textContent = originalText;
                btn.disabled = false;
            }
        });
    },

    // [MODIFIED] New function to handle Résumé Request specific logic
    requestResume: () => {
        const name = document.getElementById("r-name").value;
        const email = document.getElementById("r-email").value;
        const subject = "View Résumé";
        const comments = document.getElementById("r-comments").value;
        
        if (!name || !email) {
            alert("Name and Email are required.");
            return;
        }

        const btn = document.querySelector("#window-content button");
        const originalText = btn.textContent;
        btn.textContent = "Requesting...";
        btn.disabled = true;

        // Construct message body with all details
        const finalMessage = `REQUEST FOR RESUME\n\nName: ${name}\nEmail: ${email}\n\nComments:\n${comments}`;

        const endpoint = "https://formspree.io/f/movgzeyw";

        fetch(endpoint, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                subject: subject,
                message: finalMessage,
                name: name // Sending name field as well
            })
        })
        .then(response => {
            if (response.ok) {
                alert("Request sent successfully! I will email you shortly.");
                app.navigateTo('home');
            } else {
                return response.json().then(data => {
                    if (Object.hasOwn(data, 'errors')) {
                        alert(data["errors"].map(error => error["message"]).join(", "));
                    } else {
                        alert("Oops! There was a problem sending your request.");
                    }
                });
            }
        })
        .catch(error => {
            alert("Error: Could not send request. Check your internet connection.");
        })
        .finally(() => {
            if(btn) {
                btn.textContent = originalText;
                btn.disabled = false;
            }
        });
    },

    openModal: (title, text, w = 640, h = 440) => {
        const win = document.getElementById('window-frame');
        
        document.getElementById('win-title').textContent = title;
        document.getElementById('window-content').innerHTML = text; 
        document.getElementById('window-content').style.overflow = 'auto'; 
        
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
