# 🌊 Ida Portfolio

A modern, interactive portfolio website with an ocean-depth design theme, dark/light mode toggle, and smooth Framer Motion animations.

## Project Overview

This is Frieda Magaan's CS student and UI/UX designer portfolio built with Next.js 14. The site features an immersive ocean-themed aesthetic with submarine-inspired interactive components, animated skill zones representing different ocean ecosystems, and a secure contact form powered by Formspree.

The design philosophy uses gradients transitioning from light teal (surface) to dark navy (ocean depths), with interactive elements inspired by submarine mechanics and marine life.

## Tech Stack

- **Framework**: Next.js 14.2.35 with App Router
- **React**: 18.x (TypeScript)
- **Styling**: Tailwind CSS 3.4.1 + PostCSS
- **Animations**: Framer Motion 12.38.0
- **Icons**: Lucide React 1.14.0, React Icons (Font Awesome, Simple Icons)
- **Forms**: @formspree/react for secure email submissions
- **Type Safety**: TypeScript with strict mode enabled

## Project Structure

```
src/
├── app/
│   ├── layout.tsx              # Root layout with ClientWrapper
│   ├── page.tsx                # Home page
│   ├── about/page.tsx          # About section
│   ├── contact/page.tsx        # Contact page
│   ├── projects/[id]/page.tsx  # Dynamic project details
│   ├── globals.css             # Ocean-depth gradient base
│   └── fonts/                  # Custom font definitions
├── components/
│   ├── ui/
│   │   ├── Navbar.tsx          # Navigation with theme toggle
│   │   ├── Footer.tsx          # Footer component
│   │   └── WaveDivider.tsx     # Wave transition element
│   └── sections/
│       ├── HeroSection.tsx     # Welcome/intro with CTAs
│       ├── ProjectsSection.tsx # Interactive submarine project showcase
│       ├── SkillsSection.tsx   # Ocean zone skill categories
│       └── ContactForm.tsx     # Email form with Formspree
├── context/
│   └── ThemeContext.tsx        # Global dark/light mode state
├── data/
│   └── projects.json           # Project metadata
└── lib/
    └── utils.ts                # Utility functions
```

## Features

✨ **Dark/Light Mode** — Global theme toggle with React Context API, persistent UI styling across all components

🎨 **Animated Sections** — Framer Motion entrance animations, hover effects, and smooth transitions throughout

🚢 **Submarine Project Showcase** — 3D CSS-rendered submarine interface with carousel navigation and modal project details

🌊 **Ocean Skill Zones** — 6 themed skill categories (Shallow Reef, Jellyfish, Deep Cave, Kelp Forest, Submarine, Bioluminescent) with unique animated backgrounds

📧 **Secure Contact Form** — Formspree integration with validation errors, loading states, and animated success messaging

📱 **Fully Responsive** — Mobile-first design with Tailwind CSS breakpoints for tablet and desktop

⚡ **SSR Compatible** — Server-side rendering with Next.js, no window/document reference issues

## Setup Instructions

### Prerequisites
- Node.js 18+ and npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/fredshekken/ida-portfolio.git
cd ida-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
npm run start
```

### Environment Setup (Optional)

If using environment variables for the Formspree form ID:

Create `.env.local`:
```
NEXT_PUBLIC_FORMSPREE_FORM_ID=your_form_id
```

The form ID is currently hardcoded in `ContactForm.tsx` as `maqvwegb` and does not require environment variables.
