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

## Deployment

This project can be deployed to **Vercel** or **Render**.

### Deploy to Render

1. **Push your code to GitHub**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Create a new Web Service on Render**
   - Go to [render.com](https://render.com) and sign up/login
   - Click "New +" → "Web Service"
   - Connect your GitHub repository
   - Select your repository

3. **Configure the service:**
   - **Name**: `usman-soliu-portfolio` (or your preferred name)
   - **Environment**: `Node`
   - **Build Command**: `pnpm install && pnpm build`
   - **Start Command**: `pnpm start`
   - **Node Version**: `20` (or latest LTS)

4. **Add Environment Variables:**
   - `NODE_ENV`: `production`
   - `SMTP_HOST`: Your SMTP host (e.g., `smtp.gmail.com`)
   - `SMTP_PORT`: `587`
   - `SMTP_USER`: Your email address
   - `SMTP_PASS`: Your email app password (not your regular password)

5. **Deploy**
   - Click "Create Web Service"
   - Render will automatically build and deploy your site

**Note**: If you don't have pnpm installed on Render, you can use npm instead:
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm start`

### Deploy to Vercel (Alternative)

1. Push to GitHub
2. Import project in Vercel
3. Deploy automatically

The site includes:
- SEO optimization (meta tags, Open Graph, structured data)
- Sitemap generation
- Robots.txt
- Optimized fonts and assets

## Customization

### Colors

Edit `app/globals.css` to customize the color palette:

```css
:root {
  --background: #fafafa;
  --foreground: #1f2937;
  --accent: #475569;
  --muted: #6b7280;
}
```

### Content

- Update project details in `app/projects/page.tsx`
- Modify personal information in `app/about/page.tsx`
- Add articles to `app/writing/page.tsx` (MDX support ready)

## License

Private - All rights reserved.
