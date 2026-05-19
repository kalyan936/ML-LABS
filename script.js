document.addEventListener('DOMContentLoaded', () => {
    // 1. Intersection Observer for Reveal Animations
    const revealElements = document.querySelectorAll('.reveal');
    const revealOptions = { threshold: 0.1, rootMargin: "0px 0px -50px 0px" };

    const revealOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
        });
    }, revealOptions);

    revealElements.forEach(el => revealOnScroll.observe(el));

    // 2. Magnetic Buttons Physics
    const magneticButtons = document.querySelectorAll('.btn');
    if (window.innerWidth > 768) {
        magneticButtons.forEach(btn => {
            btn.addEventListener('mousemove', (e) => {
                const rect = btn.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                
                // Gentle pull towards cursor
                btn.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
            });

            btn.addEventListener('mouseleave', () => {
                btn.style.transform = `translate(0px, 0px)`;
            });
        });
    }

    // 3. 3D Vanilla Tilt Physics (Cards & Bento Grid) — excludes showcase & marquee cards
    const tiltElements = document.querySelectorAll('.service-card, .bento-item, .info-card, .stat-box, .process-step');
    if (window.innerWidth > 768) {
        tiltElements.forEach(el => {
            el.addEventListener('mousemove', (e) => {
                const rect = el.getBoundingClientRect();
                const x = e.clientX - rect.left; // x position within the element
                const y = e.clientY - rect.top; // y position within the element
                
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                const rotateX = ((y - centerY) / centerY) * -8; // Max 8 deg tilt
                const rotateY = ((x - centerX) / centerX) * 8;

                el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
            });

            el.addEventListener('mouseleave', () => {
                el.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
            });
        });
    }

    // 4. Animated Scroll Counters
    const statCounters = document.querySelectorAll('.stat-number');
    const counterObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            const targetEl = entry.target;
            const targetCount = parseFloat(targetEl.getAttribute('data-count'));
            const suffix = targetEl.getAttribute('data-suffix') || '';
            const isFloat = targetCount % 1 !== 0;
            let currentCount = 0;
            const increment = targetCount / 60; // 60 frames (1 sec animation)

            const updateCounter = () => {
                currentCount += increment;
                if (currentCount < targetCount) {
                    targetEl.innerText = (isFloat ? currentCount.toFixed(1) : Math.floor(currentCount)) + suffix;
                    requestAnimationFrame(updateCounter);
                } else {
                    targetEl.innerText = targetCount + suffix;
                }
            };
            updateCounter();
            observer.unobserve(targetEl);
        });
    }, { threshold: 0.5 });

    statCounters.forEach(counter => counterObserver.observe(counter));

    // 5. Interactive Platform Tabs
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetTab = btn.getAttribute('data-tab');
            
            tabButtons.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));

            btn.classList.add('active');
            document.getElementById(targetTab).classList.add('active');
        });
    });

    // 6. Enhanced Dashboard Chart Animation
    const chartBars = document.querySelectorAll('.chart-bar');
    const chartObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            const bar = entry.target;
            const targetHeight = bar.getAttribute('data-height');
            bar.style.height = targetHeight;
            observer.unobserve(bar);
        });
    }, { threshold: 0.5 });

    chartBars.forEach(bar => chartObserver.observe(bar));

    // 7. FAQ Accordion Logic
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        if (question) {
            question.addEventListener('click', () => {
                const isActive = item.classList.contains('active');
                faqItems.forEach(i => i.classList.remove('active'));
                if (!isActive) {
                    item.classList.add('active');
                }
            });
        }
    });

    // 8. Contact Form Submission Demo
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = contactForm.querySelector('button');
            const originalText = btn.innerHTML;
            btn.innerHTML = 'Transmission Sent ✓ <span class="btn-glow"></span>';
            btn.style.backgroundColor = '#27c93f';
            setTimeout(() => {
                btn.innerHTML = originalText;
                btn.style.backgroundColor = '';
                contactForm.reset();
            }, 3000);
        });
    }
});
