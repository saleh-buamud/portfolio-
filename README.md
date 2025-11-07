# Saleh Bu Amud - Portfolio Website

A modern, responsive personal portfolio website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- **Modern Design**: Clean, professional aesthetic with blue accent colors
- **Fully Responsive**: Optimized for mobile, tablet, and desktop devices
- **Smooth Animations**: Framer Motion powered animations with reduced-motion support
- **SEO Optimized**: Proper meta tags, OpenGraph, and semantic HTML
- **Accessible**: ARIA labels, keyboard navigation, and WCAG compliant
- **Performance Focused**: Next.js SSR/SSG, optimized images, lazy loading

## Sections

- **Hero**: Animated name display with typing effect for skills
- **About**: Profile picture with bio and downloadable CV
- **Skills**: Animated progress bars and skill chips with technology icons
- **Projects**: Project cards with modal details and GitHub links
- **Contact**: Working contact form with validation and social links
- **Footer**: Site navigation and copyright information

## Tech Stack

- **Framework**: Next.js 16 (React 19)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Fonts**: Geist Sans & Geist Mono

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/salehbuamud/portfolio.git
cd portfolio
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

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
portfolio/
├── app/
│   ├── globals.css          # Global styles and Tailwind imports
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Main page component
├── components/
│   ├── Navbar.tsx           # Sticky navigation bar
│   ├── Hero.tsx             # Hero section with animations
│   ├── About.tsx            # About section with profile
│   ├── Skills.tsx           # Skills showcase
│   ├── Projects.tsx         # Project portfolio
│   ├── Contact.tsx          # Contact form
│   └── Footer.tsx           # Footer component
├── data/
│   └── projects.json        # Project data
└── public/                  # Static assets
```

## Customization

### Update Personal Information

1. **Edit project data** in `data/projects.json`
2. **Update profile image** in `components/About.tsx`
3. **Modify skills** in `components/Skills.tsx`
4. **Change contact details** in `components/Contact.tsx`
5. **Update social links** throughout components

### Modify Colors

Edit the color palette in `app/globals.css`:

```css
:root {
  --primary-blue: #0066cc;
  --accent-blue: #00a8ff;
  --dark-blue: #003d7a;
}
```

### Add CV File

Place your CV file in the `public` directory as `cv.pdf`

## Deploy on Vercel

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your repository
5. Click "Deploy"

Vercel will automatically detect Next.js and configure the build settings.

## Environment Variables

No environment variables are required for basic functionality.

## Accessibility

- Semantic HTML5 elements
- ARIA labels and roles
- Keyboard navigation support
- Focus indicators
- Reduced motion support for animations
- Sufficient color contrast ratios

## Performance

- Server-side rendering (SSR)
- Optimized images with next/image
- Code splitting and lazy loading
- Minimal JavaScript bundle
- Fast page loads

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the MIT License.

## Author

**Saleh Bu Amud**
- GitHub: [@salehbuamud](https://github.com/salehbuamud)
- LinkedIn: [salehbuamud](https://linkedin.com/in/salehbuamud)
- Twitter: [@salehbuamud](https://twitter.com/salehbuamud)

## Acknowledgments

- Next.js team for the amazing framework
- Framer Motion for smooth animations
- Pexels for stock photography
- React Icons for the icon library
