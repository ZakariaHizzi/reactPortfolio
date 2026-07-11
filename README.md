# Portfolio Website

A modern, responsive personal portfolio website built with React and Vite. Features smooth animations, a clean design, and a fully functional contact form with toast notifications.

## Features

- **Responsive Design** — Fully responsive layout that looks great on all devices
- **Smooth Animations** — Powered by Framer Motion for fluid transitions and micro-interactions
- **Hero Section** — Eye-catching introduction with animated elements
- **Services Section** — Showcase of services offered
- **Tech Stack** — Display of technologies and tools used
- **Featured Work** — Project gallery using Swiper carousel
- **Contact Form** — Functional contact form with toast notifications
- **Dark Theme** — Modern dark-themed UI

## Tech Stack

- **React** — UI library
- **Vite** — Build tool and dev server
- **Tailwind CSS** — Utility-first CSS framework
- **Framer Motion** — Animation library
- **Swiper** — Touch slider/carousel
- **React Icons** — Icon library
- **React Toastify** — Toast notifications
- **OxLint** — Linter

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

```bash
git clone <repository-url>
cd portfolio
npm install
```

### Development

```bash
npm run dev
```

Opens the app at `http://localhost:5173`.

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

## Project Structure

```
portfolio/
├── public/
├── src/
│   ├── assets/           # Static assets (images, icons)
│   ├── components/       # React components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Services.jsx
│   │   ├── TechStack.jsx
│   │   ├── FeaturedWork.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── imgicons/         # Icon assets
│   ├── works/            # Portfolio project screenshots
│   ├── App.jsx           # Root component
│   ├── main.jsx          # Entry point
│   └── index.css         # Global styles
├── index.html
├── vite.config.js
└── package.json
```

## License

This project is private and not publicly licensed.
