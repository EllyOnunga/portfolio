# Elly Onunga — Professional Portfolio

A premium, modern, and fully responsive portfolio showcasing the dual expertise of an **Educator, STEM Specialist**, and **Technical Engineer**. Built with a modular Single Page Application (SPA) architecture for speed, maintainability, and a seamless user experience.

## ✨ Key Features
- **Modular Component Architecture**: Decoupled HTML sections (Nav, Hero, Experience, Projects, etc.) that are dynamically loaded via a custom JavaScript Component Loader.
- **Premium Mobile-First Design**: A card-based UI for mobile devices with high-contrast, sticky navigation and smooth transitions.
- **Dual-Pillar Showcase**: 
  - **Educational Mastery**: Detailed experience in STEM instruction, curriculum development, and student mentorship.
  - **Technical Engineering**: A "Selected Projects" section featuring high-performance static sites, Docker/Kubernetes configurations, and full-stack reservation suites.
- **Interactive UX**: Scroll-reveal animations using `IntersectionObserver` and responsive touch targets for mobile usability.

## 🛠️ Tech Stack
- **Frontend**: HTML5, Vanilla CSS3 (Custom Variables/Bento-style layout), JavaScript (ES6+).
- **Architecture**: Lightweight JS Component Loader (SPA Feel).
- **Styling**: Modern typography (Playfair Display & DM Sans), Glassmorphism, and responsive CSS Grid/Flexbox.
- **Tools referenced in projects**: Docker, Kubernetes, Bootstrap 5, Vite, Node.js, EmailJS.

## 🚀 Getting Started

### Prerequisites
Because the site uses a custom JavaScript fetch mechanism to load modular sections, it **must** be viewed through a local web server to avoid CORS (Cross-Origin Resource Sharing) restrictions in browsers.

### Local Development
1. Clone the repository:
   ```bash
   git clone https://github.com/EllyOnunga/portfolio.git
   ```
2. Open the directory in your code editor (e.g., VS Code).
3. Use a local server to view the site:
   - **VS Code**: Right-click `index.html` and select **"Open with Live Server"**.
   - **Python**: Run `python -m http.server` in the root directory.
   - **Node.js**: Use `npx serve` or any silver of your choice.

## 📁 Project Structure
- `index.html`: The main entry point and skeleton.
- `sections/`: Contains the modular HTML fragments for each page section.
- `style.css`: The comprehensive design system and responsive layout rules.
- `script.js`: Handles component loading, scroll animations, and mobile navigation.

## 👨‍🏫 About Elly Onunga
A dedicated educator with over 7 years of experience in STEM instruction (Mathematics & Physics) across Edexcel, CBC, and 8-4-4 curriculums, now bridging the gap into technical engineering and automated web systems.
