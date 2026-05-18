class AppHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <nav class="navbar">
            <div class="nav-container">
                <div class="logo">
                    <span class="logo-icon"></span> Aigocy
                </div>
                <ul class="nav-links">
                    <li><a href="index.html" class="nav-link">Home</a></li>
                    <li><a href="about.html" class="nav-link">About Us</a></li>
                    <li><a href="services.html" class="nav-link">Services</a></li>
                    <li><a href="products.html" class="nav-link">Platform</a></li>
                    <li><a href="contact.html" class="nav-link">Contact</a></li>
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
                    <div class="logo"><span class="logo-icon"></span> Aigocy</div>
                    <p>Architecting tomorrow's intelligence today.</p>
                </div>
                <div class="footer-links">
                    <h4>Navigation</h4>
                    <a href="index.html">Home</a>
                    <a href="about.html">About Us</a>
                    <a href="services.html">Services</a>
                    <a href="products.html">Platform</a>
                </div>
                <div class="footer-social">
                    <h4>Connect</h4>
                    <div class="social-icons">
                        <a href="#" class="social-icon">IN</a>
                        <a href="#" class="social-icon">TW</a>
                        <a href="#" class="social-icon">GH</a>
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2026 Aigocy AI Agency. All rights reserved.</p>
            </div>
        </footer>
        `;
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
            window.addEventListener('mousemove', (e) => {
                const posX = e.clientX;
                const posY = e.clientY;

                cursorDot.style.left = `${posX}px`;
                cursorDot.style.top = `${posY}px`;

                setTimeout(() => {
                    cursorGlow.style.left = `${posX}px`;
                    cursorGlow.style.top = `${posY}px`;
                }, 50);
            });

            // Use event delegation for hover effects since elements might be injected
            document.body.addEventListener('mouseover', (e) => {
                const target = e.target.closest('a, button, .menu-toggle');
                if (target) {
                    cursorGlow.style.width = '60px';
                    cursorGlow.style.height = '60px';
                    cursorGlow.style.backgroundColor = 'rgba(0, 102, 255, 0.2)';
                }
            });

            document.body.addEventListener('mouseout', (e) => {
                const target = e.target.closest('a, button, .menu-toggle');
                if (target) {
                    cursorGlow.style.width = '40px';
                    cursorGlow.style.height = '40px';
                    cursorGlow.style.backgroundColor = 'rgba(0, 102, 255, 0.1)';
                }
            });
        }
    }
}

customElements.define('app-header', AppHeader);
customElements.define('app-footer', AppFooter);
customElements.define('app-cursor', AppCursor);
