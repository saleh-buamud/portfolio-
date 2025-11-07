# Deployment Guide

This guide will help you deploy your portfolio website to Vercel.

## Prerequisites

- GitHub account
- Vercel account (sign up at [vercel.com](https://vercel.com))
- Git installed on your computer

## Step-by-Step Deployment

### 1. Prepare Your Repository

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit your changes
git commit -m "Initial commit: Portfolio website"

# Create a new repository on GitHub and add it as remote
git remote add origin https://github.com/yourusername/portfolio.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### 2. Deploy to Vercel

#### Option A: Deploy via Vercel Dashboard

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click "Add New..." → "Project"
3. Import your GitHub repository
4. Vercel will automatically detect Next.js settings
5. Click "Deploy"
6. Wait for deployment to complete (usually 1-2 minutes)
7. Your site will be live at `https://your-project.vercel.app`

#### Option B: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# For production deployment
vercel --prod
```

### 3. Custom Domain (Optional)

1. Go to your project in Vercel Dashboard
2. Navigate to "Settings" → "Domains"
3. Add your custom domain
4. Follow the instructions to configure DNS

## Environment Variables

This project doesn't require any environment variables for basic functionality.

## Automatic Deployments

Once connected to GitHub, Vercel will automatically deploy:
- **Production**: Every push to the `main` branch
- **Preview**: Every pull request

## Build Configuration

The project uses default Next.js build settings:
- **Build Command**: `npm run build`
- **Output Directory**: `.next`
- **Install Command**: `npm install`
- **Development Command**: `npm run dev`

## Troubleshooting

### Build Fails

1. Check the build logs in Vercel Dashboard
2. Ensure all dependencies are in `package.json`
3. Run `npm run build` locally to test
4. Clear Vercel cache and redeploy

### Images Not Loading

1. Verify image URLs in components
2. Check `next.config.ts` for remote patterns
3. Ensure images are in the `public` folder or properly linked

### Contact Form Not Working

The contact form uses client-side validation only. For production:
1. Consider integrating a backend service (Formspree, EmailJS, etc.)
2. Or use Vercel Serverless Functions for form handling

## Performance Optimization

- Images are automatically optimized by Next.js
- Code splitting is handled automatically
- Static pages are pre-rendered
- Consider enabling Vercel Analytics for insights

## Monitoring

Enable Vercel Analytics:
1. Go to your project settings
2. Navigate to "Analytics"
3. Enable Web Analytics
4. View performance metrics in dashboard

## Support

For issues with:
- **Next.js**: [Next.js Documentation](https://nextjs.org/docs)
- **Vercel**: [Vercel Support](https://vercel.com/support)
- **This Project**: Check README.md or create an issue on GitHub

## Security

- Keep dependencies updated: `npm update`
- Review security advisories: `npm audit`
- Enable HTTPS (automatic on Vercel)
- Configure proper CORS if needed

## Maintenance

Regular tasks:
- Update dependencies monthly
- Review and respond to security alerts
- Update content (projects, skills, etc.)
- Monitor performance metrics
- Test on different devices and browsers
