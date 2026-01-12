# Usman Soliu - Personal Portfolio

A modern, minimalist portfolio website built with Next.js, TypeScript, and Tailwind CSS v4.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide React
- **Package Manager**: pnpm

## Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (install with `npm install -g pnpm`)

### Installation

1. Install dependencies:
```bash
pnpm install
```

2. Run the development server:
```bash
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── about/          # About page
│   ├── contact/        # Contact page
│   ├── mentorship/     # Mentorship & Community page
│   ├── projects/       # Projects showcase
│   ├── writing/        # Writing/Insights page
│   ├── layout.tsx      # Root layout with navigation & footer
│   ├── page.tsx        # Home/Landing page
│   ├── globals.css     # Global styles with Tailwind v4
│   ├── sitemap.ts      # Sitemap generation
│   └── robots.ts       # Robots.txt
├── components/
│   ├── navigation.tsx  # Main navigation
│   ├── footer.tsx      # Footer component
│   └── button.tsx      # Reusable button component
└── lib/
    └── utils.ts        # Utility functions (cn helper)
```

## Design Principles

- **Minimalist**: Clean, uncluttered design
- **Modern**: Contemporary UI patterns
- **Calm**: Muted colors, plenty of whitespace
- **Premium**: High-quality typography and spacing
- **Techy**: Subtle technical aesthetic

## License

Private - All rights reserved.
