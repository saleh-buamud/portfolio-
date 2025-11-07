# Quick Start Guide

Get your portfolio website up and running in 5 minutes!

## Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view your portfolio.

## Customization Checklist

### 1. Personal Information
- [ ] Update name and title in `components/Hero.tsx`
- [ ] Update bio in `components/About.tsx`
- [ ] Replace profile image URL in `components/About.tsx`
- [ ] Update contact info in `components/Contact.tsx`
- [ ] Update social media links in all components

### 2. Content
- [ ] Edit skills in `components/Skills.tsx`
- [ ] Update projects in `data/projects.json`
- [ ] Add your CV as `public/cv.pdf`

### 3. Styling (Optional)
- [ ] Customize colors in `app/globals.css`
- [ ] Adjust animations in component files
- [ ] Modify layout and spacing as needed

### 4. SEO & Metadata
- [ ] Update metadata in `app/layout.tsx`
- [ ] Add your own favicon in `app/favicon.ico`

### 5. Testing
- [ ] Test on mobile devices
- [ ] Check all links work
- [ ] Verify form validation
- [ ] Test smooth scrolling

### 6. Deployment
- [ ] Push to GitHub
- [ ] Deploy to Vercel (see DEPLOYMENT.md)
- [ ] Configure custom domain (optional)

## Key Commands

```bash
# Development
npm run dev          # Start dev server at localhost:3000

# Production
npm run build        # Build for production
npm start            # Run production server

# Linting
npm run lint         # Check code quality
```

## Project Structure

```
portfolio/
├── app/                  # Next.js app directory
│   ├── globals.css      # Global styles
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Home page
├── components/          # React components
│   ├── Navbar.tsx       # Navigation bar
│   ├── Hero.tsx         # Hero section
│   ├── About.tsx        # About section
│   ├── Skills.tsx       # Skills showcase
│   ├── Projects.tsx     # Projects portfolio
│   ├── Contact.tsx      # Contact form
│   └── Footer.tsx       # Footer
├── data/
│   └── projects.json    # Project data
└── public/              # Static files
    └── cv.pdf           # Your CV
```

## Customizing Projects

Edit `data/projects.json`:

```json
{
  "id": 1,
  "title": "Your Project",
  "description": "Short description",
  "image": "/projects/image.jpg",
  "technologies": ["Tech1", "Tech2"],
  "github": "https://github.com/username/repo",
  "details": "Detailed description for modal"
}
```

## Customizing Skills

Edit the `skills` array in `components/Skills.tsx`:

```typescript
{
  name: 'Skill Name',
  level: 85,
  icon: IconComponent,
  color: 'text-blue-600'
}
```

## Adding Social Links

Update social links in:
- `components/Hero.tsx` (hero section)
- `components/Contact.tsx` (contact section)
- `components/Footer.tsx` (footer)

## Tips

1. **Images**: Use Next.js Image component for optimization
2. **Icons**: Browse available icons at [react-icons.github.io/react-icons](https://react-icons.github.io/react-icons)
3. **Colors**: Use Tailwind CSS color utilities
4. **Animations**: Adjust Framer Motion variants for custom animations
5. **Accessibility**: Keep ARIA labels and semantic HTML

## Troubleshooting

### Port Already in Use
```bash
# Kill process on port 3000
npx kill-port 3000
```

### Dependencies Issues
```bash
# Clean install
rm -rf node_modules package-lock.json
npm install
```

### Build Errors
```bash
# Check TypeScript errors
npm run build
```

## Next Steps

1. Personalize all content
2. Test thoroughly
3. Deploy to Vercel
4. Share your portfolio!

## Resources

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion)
- [React Icons](https://react-icons.github.io/react-icons)

Need help? Check the full README.md for detailed documentation.
