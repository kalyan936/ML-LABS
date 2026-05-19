class AppHeader extends HTMLElement {
    connectedCallback() {
        const currentPath = window.location.pathname.split('/').pop() || 'index.html';

        this.innerHTML = `
        <nav class="navbar">
            <div class="nav-container">
                <a href="index.html" class="logo">
                    <img src="logo.jpg" alt="ML LABS Logo" class="brand-logo"> <span class="logo-text">ML LABS</span>
                </a>
                <ul class="nav-links">
                    <li><a href="index.html" class="nav-link ${currentPath === 'index.html' ? 'active' : ''}">Home</a></li>
                    <li><a href="about.html" class="nav-link ${currentPath === 'about.html' ? 'active' : ''}">About Us</a></li>
                    <li><a href="services.html" class="nav-link ${currentPath === 'services.html' ? 'active' : ''}">Services</a></li>
                    <li><a href="industries.html" class="nav-link ${currentPath === 'industries.html' ? 'active' : ''}">Industries</a></li>
                    <li><a href="contact.html" class="nav-link ${currentPath === 'contact.html' ? 'active' : ''}">Contact</a></li>
                </ul>
                <div class="menu-toggle" id="mobile-menu">
                    <span class="bar"></span>
                    <span class="bar"></span>
                    <span class="bar"></span>
                </div>
            </div>
        </nav>
        `;

        // Mobile Menu Toggle
        const menuToggle = this.querySelector('#mobile-menu');
        const navLinks = this.querySelector('.nav-links');
        if (menuToggle) {
            menuToggle.addEventListener('click', () => {
                menuToggle.classList.toggle('active');
                navLinks.classList.toggle('active');
            });
        }

        // Navbar Scroll Effect
        const navbar = this.querySelector('.navbar');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }
}

class AppFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer class="footer">
            <div class="footer-content">
                <div class="footer-brand">
                    <a href="index.html" class="logo"><img src="logo.jpg" alt="ML LABS Logo" class="brand-logo"> <span class="logo-text">ML LABS</span></a>
                    <p>#52, 3rd Cross, Aswath Nagar, Marathahalli, Bengaluru, Karnataka-560037</p>
                    <p style="margin-top: 8px;">hr@themllabs.com  bharath@themllabs.com</p>
                </div>
                <div class="footer-links">
                    <h4>Navigation</h4>
                    <a href="index.html">Home</a>
                    <a href="about.html">About Us</a>
                    <a href="services.html">Services</a>
                    <a href="industries.html">Industries</a>
                </div>
                <div class="footer-links">
                    <h4>Legal & Docs</h4>
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms of Service</a>
                    <a href="#">Security Overview</a>
                    <a href="#">API Documentation</a>
                </div>
                <div class="footer-newsletter">
                    <h4>Transmission Feed</h4>
                    <p>Subscribe to receive cutting-edge AI research and platform update pings directly to your inbox.</p>
                    <form class="newsletter-form" id="newsletterForm">
                        <input type="email" required placeholder="Enter your email...">
                        <button type="submit">Ping</button>
                    </form>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2026 ML LABS. All rights reserved. Built for the cognitive era.</p>
                <div class="social-icons">
                    <a href="#" class="social-icon" aria-label="LinkedIn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                    </a>
                    <a href="#" class="social-icon" aria-label="Twitter">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                        </svg>
                    </a>
                    <a href="#" class="social-icon" aria-label="GitHub">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                    </a>
                </div>
            </div>
        </footer>
        `;

        const newsletterForm = this.querySelector('#newsletterForm');
        if (newsletterForm) {
            newsletterForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const btn = newsletterForm.querySelector('button');
                btn.innerHTML = 'Subscribed ✓';
                btn.style.backgroundColor = '#27c93f';
                setTimeout(() => {
                    btn.innerHTML = 'Ping';
                    btn.style.backgroundColor = '';
                    newsletterForm.reset();
                }, 3000);
            });
        }
    }
}

class AppCursor extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="cursor-glow"></div>
        <div class="cursor-dot"></div>
        `;

        const cursorDot = this.querySelector('.cursor-dot');
        const cursorGlow = this.querySelector('.cursor-glow');

        if (window.innerWidth > 768) {
            let mouseX = 0, mouseY = 0;
            let dotX = 0, dotY = 0;
            let glowX = 0, glowY = 0;

            window.addEventListener('mousemove', (e) => {
                mouseX = e.clientX;
                mouseY = e.clientY;
            });

            const animateCursor = () => {
                dotX += (mouseX - dotX) * 0.3;
                dotY += (mouseY - dotY) * 0.3;
                glowX += (mouseX - glowX) * 0.15;
                glowY += (mouseY - glowY) * 0.15;

                cursorDot.style.left = `${dotX}px`;
                cursorDot.style.top = `${dotY}px`;
                cursorGlow.style.left = `${glowX}px`;
                cursorGlow.style.top = `${glowY}px`;

                requestAnimationFrame(animateCursor);
            };
            animateCursor();

            document.body.addEventListener('mouseover', (e) => {
                const target = e.target.closest('a, button, .menu-toggle, .tab-btn, .faq-question');
                if (target) {
                    cursorGlow.style.width = '72px';
                    cursorGlow.style.height = '72px';
                    cursorGlow.style.backgroundColor = 'rgba(0, 102, 255, 0.25)';
                    cursorGlow.style.borderColor = 'rgba(0, 102, 255, 0.6)';
                    cursorDot.style.transform = 'translate(-50%, -50%) scale(1.5)';
                }
            });

            document.body.addEventListener('mouseout', (e) => {
                const target = e.target.closest('a, button, .menu-toggle, .tab-btn, .faq-question');
                if (target) {
                    cursorGlow.style.width = '48px';
                    cursorGlow.style.height = '48px';
                    cursorGlow.style.backgroundColor = 'rgba(0, 102, 255, 0.08)';
                    cursorGlow.style.borderColor = 'rgba(0, 102, 255, 0.4)';
                    cursorDot.style.transform = 'translate(-50%, -50%) scale(1)';
                }
            });
        }
    }
}

customElements.define('app-header', AppHeader);
customElements.define('app-footer', AppFooter);
customElements.define('app-cursor', AppCursor);
