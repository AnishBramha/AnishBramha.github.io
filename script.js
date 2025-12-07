const state = {
    page: 'home',
    dockOpen: false,
    bgIndex: 6,
    isResizing: false
};

// Background colors to cycle through
const backgrounds = ['#708090', '#5F9EA0', '#4682B4', '#556B2F', '#8B4513', '#483D8B', '#B8860B'];

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
                Updating core systems...
            </p>
        ` 
    },
    'blog': { 
        title: 'Personal Log', 
        content: `<h2>Latest Entries</h2><ul><li><a onclick="app.navigateTo('posts')">Check out my Posts</a></li><li>Why Chicago font rules.</li></ul>` 
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
    'map': {
        title: 'Site Map',
        content: `<h2>Navigation</h2><ul><li>Home</li><li>Blog</li><li>Projects</li></ul>`
    }
};

const app = {
    init: () => {
        app.updateClock();
        setInterval(app.updateClock, 60000);
        app.setupEvents();
        app.setupResize(); 
        
        app.cycleBackground(); 
        
        // Initial load
        const hash = window.location.hash.replace('#', '') || 'home';
        app.navigateTo(hash, false);
    },

    updateClock: () => {
        const now = new Date();
        document.getElementById('clock').textContent = now.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
    },

    // --- Navigation Logic ---
    navigateTo: (pageId, push = true) => {
        if (!pages[pageId]) pageId = 'home';
        state.page = pageId;

        if(push) history.pushState(null, null, `#${pageId}`);

        // Update the Variable Menu Label
        const variableMenu = document.querySelector('#menu-variable .label');
        if(variableMenu) {
            variableMenu.textContent = pageId.charAt(0).toUpperCase() + pageId.slice(1);
        }

        // Rebuild the variable dropdown
        app.updateVariableDropdown(pageId);

        // Window Management
        const win = document.getElementById('window-frame');
        
        document.getElementById('win-title').textContent = pages[pageId].title;
        document.getElementById('window-content').innerHTML = pages[pageId].content;
        
        // Center the window if hidden
        if (win.classList.contains('hidden')) {
            const w = win.style.width ? parseInt(win.style.width) : 640;
            const h = win.style.height ? parseInt(win.style.height) : 440;
            
            const left = Math.max(0, (window.innerWidth - w) / 2);
            const top = Math.max(0, (window.innerHeight - h) / 2);
            
            win.style.left = `${left}px`;
            win.style.top = `${top}px`;
        }

        win.classList.remove('hidden');
        app.playSound('open');

        if (state.dockOpen) app.toggleDock();
        app.closeMenus();
    },

    updateVariableDropdown: (currentPage) => {
        const dropdown = document.getElementById('dropdown-variable');
        if(!dropdown) return;
        
        dropdown.innerHTML = ''; 

        const allPages = ['home', 'blog', 'projects', 'posts', 'contact'];
        
        allPages.forEach(p => {
            if (p !== currentPage) {
                const btn = document.createElement('button');
                btn.textContent = p.charAt(0).toUpperCase() + p.slice(1);
                btn.onclick = () => app.navigateTo(p);
                dropdown.appendChild(btn);
            }
        });
    },

    // --- Interaction ---
    toggleDock: () => {
        state.dockOpen = !state.dockOpen;
        const container = document.getElementById('dock-container');
        if (state.dockOpen) {
            container.classList.add('open');
            app.playSound('click');
        } else {
            container.classList.remove('open');
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

    openModal: (title, text) => {
        alert(`${title}\n\n${text.replace(/<br>/g, '\n')}`);
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
            // Visual feedback for mouse
            item.addEventListener('mousedown', () => item.classList.add('inset'));
            item.addEventListener('mouseup', () => item.classList.remove('inset'));

            // Visual feedback for touch (passive: true improves scroll performance)
            item.addEventListener('touchstart', () => item.classList.add('inset'), {passive: true});
            item.addEventListener('touchend', () => item.classList.remove('inset'));

            // LOGIC HANDLED HERE FOR BOTH MOUSE AND TOUCH
            // (Touch devices fire click after a short delay, so we rely on that)
            item.addEventListener('click', (e) => {
                e.stopPropagation(); // Prevent document click from immediately closing it
                
                const isActive = item.classList.contains('active');
                
                // Close all other menus first
                app.closeMenus(); 
                
                // If it wasn't active before, open it now
                if (!isActive) {
                    item.classList.add('active');
                }
            });
        });

        // Close menus when clicking anywhere else
        document.addEventListener('click', app.closeMenus);
        
        // Also catch background touches to close menus on mobile
        document.addEventListener('touchstart', (e) => {
            if (!e.target.closest('.menu-item')) app.closeMenus();
        }, {passive: true});

        document.getElementById('dock-container').addEventListener('click', e => e.stopPropagation());
        document.getElementById('window-frame').addEventListener('click', e => e.stopPropagation());
    },

    setupResize: () => {
        const handle = document.getElementById('resize-handle');
        const win = document.getElementById('window-frame');
        
        let startX, startY, startWidth, startHeight;

        // Unified Start Handler (Mouse + Touch)
        const startResize = (e) => {
            state.isResizing = true;
            // Get clientX/Y from mouse or touch
            const clientX = e.type.includes('touch') ? e.touches[0].clientX : e.clientX;
            const clientY = e.type.includes('touch') ? e.touches[0].clientY : e.clientY;
            
            startX = clientX;
            startY = clientY;
            startWidth = parseInt(document.defaultView.getComputedStyle(win).width, 10);
            startHeight = parseInt(document.defaultView.getComputedStyle(win).height, 10);
            
            // Add listeners to document to track movement outside the handle
            if (e.type.includes('touch')) {
                document.documentElement.addEventListener('touchmove', doDrag, {passive: false});
                document.documentElement.addEventListener('touchend', stopDrag, false);
            } else {
                document.documentElement.addEventListener('mousemove', doDrag, false);
                document.documentElement.addEventListener('mouseup', stopDrag, false);
                e.preventDefault();
            }
        };

        const doDrag = (e) => {
            if (!state.isResizing) return;
            
            // Prevent scrolling while resizing on mobile
            if(e.type.includes('touch')) e.preventDefault();

            const clientX = e.type.includes('touch') ? e.touches[0].clientX : e.clientX;
            const clientY = e.type.includes('touch') ? e.touches[0].clientY : e.clientY;
            
            const deltaX = (clientX - startX) * 2; // Sensitivity factor
            const deltaY = (clientY - startY) * 2;

            const newW = startWidth + deltaX;
            const newH = startHeight + deltaY;
            
            // Constraints
            if (newW > 250 && newW < window.innerWidth - 10) {
                win.style.width = newW + 'px';
            }
            if (newH > 150 && newH < window.innerHeight - 40) {
                win.style.height = newH + 'px';
            }
        };

        const stopDrag = () => {
            state.isResizing = false;
            document.documentElement.removeEventListener('mousemove', doDrag, false);
            document.documentElement.removeEventListener('mouseup', stopDrag, false);
            document.documentElement.removeEventListener('touchmove', doDrag);
            document.documentElement.removeEventListener('touchend', stopDrag);
        };

        // Attach Listeners
        handle.addEventListener('mousedown', startResize);
        handle.addEventListener('touchstart', startResize, {passive: false});
    }
};

window.addEventListener('DOMContentLoaded', app.init);
