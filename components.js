class AppHeader extends HTMLElement {
    connectedCallback() {
        const currentPath = window.location.pathname.split('/').pop() || 'index.html';

        this.innerHTML = `
        <nav class="navbar">
            <div class="nav-container">
                <a href="index.html" class="logo">
                    <img src="logo.jpg" alt="ML Labs Logo" class="brand-logo"> ML LABS
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
                    <a href="index.html" class="logo"><img src="logo.jpg" alt="ML Labs Logo" class="brand-logo"> ML LABS</a>
                    <p>Architecting tomorrow's enterprise intelligence with quantum-inspired neural networks and automated cognitive workflows.</p>
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
                <p>&copy; 2026 ML LABS AI Agency. All rights reserved. Built for the cognitive era.</p>
                <div class="social-icons">
                    <a href="#" class="social-icon">IN</a>
                    <a href="#" class="social-icon">TW</a>
                    <a href="#" class="social-icon">GH</a>
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
