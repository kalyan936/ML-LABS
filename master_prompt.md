# ML-LABS Corporate Website - Master Prompt

Use this prompt to recreate or extend the premium, interactive, dark-themed corporate web portal for **ML-LABS PVT LTD** from scratch.

---

## 1. Project Concept & Brand Identity
* **Brand Name**: ML-LABS PVT LTD
* **Core Theme**: High-performance cognitive artificial intelligence, machine learning, and agentic workflows.
* **Aesthetic Direction**: Premium dark-themed, tech-focused design using deep blue-grays, glowing primary blues, grid meshes, glassmorphism bento cards, and interactive 3D physics.
* **Corporate Coordinates**: Bengaluru, India (12.9716° N, 77.5946° E)
* **Corporate Address**: #52, 3rd Cross, Aswath Nagar, Marathahalli, Bengaluru, Karnataka - 560037
* **Contact Details**: hr@themlabs.com | bharath@themlabs.com

---

## 2. Global Styling & Design Tokens (`styles.css`)

### Color Palette (Custom HSL System)
```css
:root {
    --color-bg: #0b0d19;        /* Deep space dark */
    --color-bg-alt: #111426;    /* Dark alternative sections */
    --color-blue: #2563eb;      /* Primary electric blue */
    --color-blue-glow: rgba(37, 99, 235, 0.15);
    --color-text: #f8fafc;      /* Crisp off-white */
    --color-ash: #94a3b8;       /* Muted gray text */
    --color-ash-light: rgba(148, 163, 184, 0.1); /* Subtle borders */
    --color-glass: rgba(17, 20, 38, 0.7);
    --color-glass-border: rgba(255, 255, 255, 0.05);
}
```

### Core Custom Components & Animations

#### 1. Rotating 3D Cyber Globe (Hero Visual)
* A perspective container hosting 3 concentric rings rotating around different axes (X, Y, Z), a glowing blue core sphere, and orbiting particles.
```css
.cyber-globe-wrapper {
    perspective: 1000px;
    width: 320px;
    height: 320px;
}
.cyber-globe-3d {
    width: 100%;
    height: 100%;
    position: relative;
    transform-style: preserve-3d;
    animation: globeRotate 20s infinite linear;
}
.cyber-ring {
    position: absolute;
    border: 1px dashed rgba(37, 99, 235, 0.4);
    border-radius: 50%;
}
.cyber-ring-1 { width: 100%; height: 100%; transform: rotateX(70deg) rotateY(0deg); }
.cyber-ring-2 { width: 100%; height: 100%; transform: rotateX(-70deg) rotateY(45deg); }
.cyber-ring-3 { width: 100%; height: 100%; transform: rotateX(0deg) rotateY(90deg); }
.cyber-core {
    position: absolute;
    width: 60px;
    height: 60px;
    background: radial-gradient(circle, var(--color-blue) 0%, rgba(0,0,0,0) 70%);
    border-radius: 50%;
    left: 50%; top: 50%;
    transform: translate(-50%, -50%);
    filter: drop-shadow(0 0 20px var(--color-blue));
}
```

#### 2. Bengaluru Coordinate Tech Map Card
* A technical mesh layout displaying the HQ coordinates with concentric pulsing radar rings.
```css
.bengaluru-map-container {
    height: 320px;
    background: radial-gradient(circle at center, rgba(37, 99, 235, 0.03) 0%, transparent 70%);
    position: relative;
    border: 1px solid var(--color-ash-light);
    border-radius: 24px;
    overflow: hidden;
}
.map-cyber-mesh {
    background-size: 20px 20px;
    background-image: linear-gradient(to right, rgba(255,255,255,0.02) 1px, transparent 1px),
                      linear-gradient(to bottom, rgba(255,255,255,0.02) 1px, transparent 1px);
}
.map-radar-ring {
    position: absolute;
    border: 1.5px solid var(--color-blue);
    border-radius: 50%;
    animation: radarPulse 4s infinite linear;
}
```

#### 3. 3D Tiltable Glass Bento Cards
* Used for specializations, values, and stats. They shift on the Z-axis on hover.
```css
.spec-card, .value-card {
    background: var(--color-glass);
    border: 1px solid var(--color-glass-border);
    backdrop-filter: blur(12px);
    transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.5s;
    transform-style: preserve-3d;
}
.spec-card:hover, .value-card:hover {
    box-shadow: 0 30px 60px rgba(0,0,0,0.4), inset 0 0 0 1px rgba(255,255,255,0.1);
}
```

---

## 3. Reusable Web Components (`components.js`)
* Create customized custom elements (`<app-header>`, `<app-footer>`, and `<app-cursor>`) to keep site layouts modular.
* **`<app-cursor>`**: Custom scroll follow-dot with a soft blur backdrop glow.
* **`<app-header>`**: Fixed glassmorphic navigation header featuring links (Home, About Us, Services, Industries, Contact) and a dynamic active link indicator.
* **`<app-footer>`**: Corporate footer containing brand summaries, address information, navigation, legal documents (Privacy Policy, Terms of Service), and a newsletter input box.

---

## 4. Scripting Mechanics (`script.js`)
1. **Intersection Observer Reveal Effects**: Attach a `.reveal` class to cards and headers to smoothly fade and slide them upward as they enter the screen viewport.
2. **Interactive Cursor Lighting Overlay**: Tracking pointer locations to map background radial gradients.
3. **Hardware Accelerated 3D Physics (Vanilla Tilt)**:
   * Listen to `mousemove` on cards (`.service-card`, `.spec-card`, `.value-card`, `.bengaluru-map-container`).
   * Calculate mouse coordinates relative to card center and apply 3D transformation offsets:
     `transform: perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`.

---

## 5. Main Site Page Blueprints

### 1. Home Page (`index.html`)
* **Hero Banner**: Big typography tagline, "Transforming Enterprise Complexity into Cognitive Workflows," with calls to action.
* **Logos Marquee**: Infinite sliding loop of partner enterprise logos.
* **Industries Showcase Grid**: Interactive grids displaying ML-LABS solutions (e.g., Financial Modeling, Retail Automation, Healthcare Diagnostic Architectures).
* **Corporate Stats Grid**: Tech-style glass cards showing key company milestones.

### 2. About Us Page (`about.html`)
* **Hero Section**: Left column contains copy summarizing ML-LABS' foundation. Right column features the rotating **3D Cyber Globe**.
* **Who We Are Section**: Describing the engineering team in Bengaluru side-by-side with the pulsing **Bengaluru Coordinate Map Card**.
* **What We Do (Specializations Grid)**: 3 cards showing Machine Learning & AI (`assets/ml.png`), Generative AI (`assets/genai.png`), and Agentic AI (`assets/agentic.png`) wrapped in `.card-img-wrapper` masks that scale on hover.
* **4-Stage Integration Pipeline**: Horizontal flow tracking roadmap steps: (01 Ingest & Standardize $\rightarrow$ 02 Architect & Train $\rightarrow$ 03 Align & Stress Test $\rightarrow$ 04 CI/CD Retraining).
* **Core Values Grid**: 3-column bento cards showing Innovation with Responsibility, Reliability at Scale, and Human Empowerment.
* **Our Vision Section**: A full-width glass panel (`.vision-pane`) with an ambient pulsing back-glow wrapping the text "Built for the Cognitive Era".

### 3. Services Page (`services.html`)
* **Featured Services Grid**: Modern list containing expandable showcase cards. Hovering over a card shows its technical details and reveals a full-bleed background illustration (e.g., neural interfaces, automated clusters).

### 4. Contact Page (`contact.html`)
* **Contact Panel**: Split grid with corporate addresses, emails, and phone lines on the left, and an interactive contact form on the right.
