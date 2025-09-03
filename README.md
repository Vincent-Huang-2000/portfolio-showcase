# 🚀 Portfolio Showcase Website

A modern personal project showcase website with bilingual support, dark mode, and responsive design.

Chinese Version: [中文README文档](./README_zh.md)

## 🎨 UI Component Library

### New Features

* **High-quality UI Components**: Built with Headless UI + Tailwind CSS
* **Unified Design Language**: All components follow consistent design standards
* **Elegant Interactions**: Includes hover effects, transitions, and visual feedback
* **Fully Responsive**: Adapts to all device sizes

### Components Included

* **Button**: Multiple variants (default, outline, ghost, success, warning, danger) and sizes
* **Card**: Flexible card component supporting gradient, glassmorphism, shadows, etc.
* **Input**: Modern input fields with icons, validation states, and labels
* **Textarea**: Auto-resizing text area
* **Switch**: Elegant toggle switch (e.g., for theme switching)
* **Select**: Dropdown selector with search and custom styles

## ✨ Key Features

* 🌐 **Bilingual Support** – Chinese/English switch
* 🌓 **Dark Mode** – Automatically adapts to system preferences
* 📱 **Responsive Design** – Optimized for desktop and mobile
* 🎨 **Modern UI** – Tailwind CSS-based elegant styling
* ⚡ **Smooth Animations** – Powered by Framer Motion
* 🔍 **Project Search** – Search projects by name or tech stack
* 📄 **Online Resume** – Preview and download resume online
* 🕒 **Tech Timeline** – Visualized learning journey
* 👤 **Personal Info Management** – Unified personal data configuration
* 📊 **Skill Rating System** – Star-based ratings and categorized skills
* 🎯 **Project Filtering** – Display projects by tech stack categories
* 📱 **Project Detail Pages** – Full project information display

## 🏗️ Tech Stack

* **Frontend Framework**: React 19 + Vite
* **Styling Framework**: Tailwind CSS v3.4.0
* **Routing**: React Router
* **Animation**: Framer Motion
* **Icons**: Lucide React
* **Internationalization**: React i18next
* **Dev Tools**: ESLint + Hot Reload

## 🚀 Core Features in Detail

### 🕒 Tech Timeline

* Visualize learning progress year by year
* Interactive navigation (click, keyboard, autoplay)
* Tech icons for each entry
* Skill levels shown with star ratings
* Fully responsive and accessible

### 👤 Personal Info Management

* Centralized configuration in `src/config/personal-info.json`
* Supports bilingual personal data
* Runtime updates supported
* Managed with `usePersonalInfo` hook
* Automatic text/data formatting

### 📊 Skill Rating System

* Star ratings: beginner (2★), intermediate (3★), advanced (4★), expert (5★)
* Skill categories: frontend, backend, databases, tools
* Color-coded levels (1–3★ blue, 4–5★ orange)
* Hover details with skill descriptions
* Responsive grid layout

### 🔍 Project Management

* Smart search (name, description, tech stack)
* Category filters (frontend, fullstack, data science)
* Project statistics by category
* Detail pages with images, description, stack, links
* Responsive project cards

### 📄 Resume System

* Online preview
* PDF download
* Overview of work experience, skills, education
* File metadata (size, pages, update time)

### 📧 Contact System

* Complete contact form
* Contact info (email, phone, address)
* Social links (GitHub, LinkedIn, Twitter)
* Work hours and availability status
* Service descriptions

## 📚 Style Guide

This project uses **Tailwind CSS v3.4.0** with detailed style documentation:

* **[TAILWIND\_V3\_GUIDE.md](./doc/TAILWIND_V3_GUIDE.md)** – Full Tailwind CSS v3 guide
* **[TAILWIND\_QUICK\_REFERENCE.md](./doc/TAILWIND_QUICK_REFERENCE.md)** – Quick reference and troubleshooting

Includes: Card variants, responsive design, dark mode, hover effects, gradients.

## 📁 Project Structure

```
src/
├── components/        # Reusable components
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── ProjectCard.jsx
│   ├── TechTimeline.jsx
│   └── ui/            # UI library
│       ├── Button.jsx
│       ├── Card.jsx
│       ├── Input.jsx
│       ├── Textarea.jsx
│       ├── Switch.jsx
│       ├── Select.jsx
│       └── index.js
├── pages/             # Page components
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Projects.jsx
│   ├── ProjectDetail.jsx
│   ├── Contact.jsx
│   └── Resume.jsx
├── hooks/             # Custom hooks
│   └── usePersonalInfo.js
├── data/              # Static data
│   ├── projects.js
│   ├── skills.js
│   └── timeline.js
├── config/            # Config files
│   └── personal-info.json
├── i18n/              # i18n config
│   └── locales/
│       ├── en.json
│       └── zh.json
└── assets/            # Assets
    └── project-images/
```

## 🚀 Quick Start

```bash
# Clone
git clone https://github.com/Vincent-Huang-2000/portfolio-showcase.git
cd portfolio-showcase

# Install dependencies
npm install

# Run dev server
npm run dev

# Build production
npm run build

# Preview production
npm run preview
```

## 🎯 Page Details

* **Home**: Intro, skill highlights, quick navigation
* **About**: Bio, avatar, skills, experience, timeline, social links
* **Projects**: Grid layout, search, filter, statistics
* **Project Detail**: Full info, images, tech tags, links
* **Contact**: Form, contact info, socials, work hours
* **Resume**: Online preview, PDF download, content overview

## 🎨 Customization

Edit:

* `src/config/personal-info.json` for personal data
* `src/data/projects.js` for projects
* `src/data/skills.js` for skills
* `src/data/timeline.js` for tech timeline
* `src/i18n/locales/` for text translations

## 🎯 Deployment

* **Vercel**: Connect GitHub repo → Auto deploy → Custom domain
* **Netlify**: Build command `npm run build`, publish dir `dist`
* **GitHub Pages**: Install `gh-pages`, add deploy script, run `npm run deploy`

## 🔧 Requirements

* Node.js 16+
* npm 8+

## 📝 License

MIT License – see [LICENSE](LICENSE)

## 🤝 Contributing

Issues and PRs welcome!

## 📞 Contact

* GitHub: [Vincent-Huang-2000](https://github.com/Vincent-Huang-2000)

---

⭐ If this project helps you, please give it a Star!
