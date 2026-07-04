<p align="center">
  <img src="./public/banner.png" alt="Sri Jayam Marriage & Catering Service Banner" width="100%">
</p>

<h1 align="center">🍽️ Sri Jayam Marriage & Catering Service</h1>

<p align="center">
  <strong>Pure Vegetarian Catering with Tradition & Excellence</strong>
</p>

<p align="center">
  <a href="https://react.dev/"><img src="https://img.shields.io/badge/React-19.0.0-61DAFB?logo=react&logoColor=black&style=flat-square" alt="React"></a>
  <a href="https://vite.dev/"><img src="https://img.shields.io/badge/Vite-6.0.5-646CFF?logo=vite&logoColor=white&style=flat-square" alt="Vite"></a>
  <a href="https://www.typescriptlang.org/"><img src="https://img.shields.io/badge/TypeScript-5.7.2-3178C6?logo=typescript&logoColor=white&style=flat-square" alt="TypeScript"></a>
  <a href="https://tailwindcss.com/"><img src="https://img.shields.io/badge/Tailwind_CSS-3.4.17-38B2AC?logo=tailwind-css&logoColor=white&style=flat-square" alt="TailwindCSS"></a>
  <a href="https://www.framer.com/motion/"><img src="https://img.shields.io/badge/Framer_Motion-11.18.0-black?logo=framer&logoColor=white&style=flat-square" alt="Framer Motion"></a>
  <a href="https://pages.github.com/"><img src="https://img.shields.io/badge/GitHub_Pages-Deployment-181717?logo=github&logoColor=white&style=flat-square" alt="GitHub Pages"></a>
</p>

---

## 🌟 Overview

Welcome to the official repository for the **Sri Jayam Marriage & Catering Service** web application. 

Founded by **Mr. R. Viswanathan**, Sri Jayam Marriage Service has delivered premier pure vegetarian catering rooted in tradition, discipline, and sincere hospitality for over **30 years**. Serving families across Chennai, Pondicherry, and statewide Tamil Nadu, this web application is designed to showcase their premium catering services, traditional wedding arrangements, curated menu items, galleries of events, and client testimonials.

---

## ✨ Features

- 📱 **Fully Responsive Layout**: Built with a mobile-first design using Tailwind CSS, ensuring a seamless experience across smartphones, tablets, and desktops.
- 🍛 **Interactive Menu & Services**: Browse categorized food offerings (Traditional Meals, Starters & Snacks, Premium Buffet, Desserts, Beverages) and professional services (Wedding Catering, Corporate Events, Temple/Large Scale Functions).
- 🖼️ **Dynamic Gallery**: Categorized media view showcasing weddings, corporate food styling, and other catering events.
- 💫 **Smooth Micro-Animations**: Interactive buttons, cards, hover effects, and slide-ins powered by Framer Motion.
- 📞 **Event Booking Form**: Fully functional client intake form allowing event coordinators to choose the guest count, date, event type, and customized requirements.
- 🔍 **SEO & Metadata Optimization**: Dynamic search engine configuration using React Helmet Async to ensure high visibility and searchability.
- 🌓 **Day/Night Theme Support**: Clean aesthetic color coordination designed to appeal to clients.

---

## ⚙️ Tech Stack

- **Core Library**: [React 19](https://react.dev/)
- **Bundler & Dev Server**: [Vite 6](https://vite.dev/)
- **Programming Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v3](https://tailwindcss.com/) & [PostCSS](https://postcss.org/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Routing**: [React Router DOM v7](https://reactrouter.com/)
- **Metadata Management**: [React Helmet Async](https://github.com/staylor/react-helmet-async)

---

## 📁 Directory Structure

```text
sri-jayam-catering-service-webapp/
├── public/                 # Static assets (Favicons, images, generated banner)
│   ├── assets/             # Sub-folders for service, slider, and testimonial images
│   └── banner.png          # Repository banner image
├── src/
│   ├── components/         # Reusable components
│   │   ├── layout/         # Header, Footer, and Page Layout wrappers
│   │   ├── seo/            # SEO configuration & React Helmet components
│   │   └── ui/             # Reusable UI widgets and buttons
│   ├── data/               # Static site configuration and menu items data
│   │   └── siteData.ts     # Main configurations, branches, and menus
│   ├── hooks/              # Custom React hooks
│   ├── pages/              # Routed pages (Home, About, Services, Menu, Gallery, Contact, Testimonials)
│   ├── App.tsx             # Main router and app layout configuration
│   ├── index.css           # Global CSS and Tailwind variables
│   └── main.tsx            # Application entrypoint
├── index.html              # Main HTML document template
├── package.json            # Node project configuration
├── tailwind.config.ts      # Tailwind CSS customization file
├── tsconfig.json           # TypeScript configuration
└── vite.config.ts          # Vite bundler configuration
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have Node.js installed on your machine. This repository is configured to use [pnpm](https://pnpm.io/) for dependency management.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/sri-jayam-catering-service-webapp.git
   cd sri-jayam-catering-service-webapp
   ```

2. **Install dependencies:**
   ```bash
   pnpm install
   ```

3. **Start the development server:**
   ```bash
   pnpm dev
   ```
   Open your browser and navigate to `http://localhost:5173` to see the site running live.

4. **Build the production bundle:**
   ```bash
   pnpm build
   ```

5. **Preview the production build locally:**
   ```bash
   pnpm preview
   ```

---

## 🌐 Deployment

The project is configured to easily deploy to **GitHub Pages** using the `gh-pages` utility package.

To deploy the production build to your GitHub Pages branch:
```bash
pnpm deploy
```
*Note: Make sure your `package.json` homepage URL is configured to point to your custom domain or GitHub user page repository path.*

---

## 🏛️ Office Branches

* **Main Branch (Chennai)**:  
  28/53, Naickamar Street, West Mambalam, Chennai – 600033
* **Pondicherry Branch**:  
  Plot No.29, Easwaran Koil Street, Marry Oulgraet, Pondicherry – 10

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.
