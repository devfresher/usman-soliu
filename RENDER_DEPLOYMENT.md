# Deploying to Render

This guide will help you deploy your Next.js portfolio to Render.

## Prerequisites

1. A GitHub account
2. Your code pushed to a GitHub repository
3. A Render account (sign up at [render.com](https://render.com))

## Step-by-Step Deployment

### 1. Prepare Your Repository

Make sure your code is pushed to GitHub:
```bash
git add .
git commit -m "Ready for deployment"
git push origin main
```

### 2. Create a New Web Service on Render

1. Log in to [Render Dashboard](https://dashboard.render.com)
2. Click **"New +"** → **"Web Service"**
3. Connect your GitHub account if you haven't already
4. Select your repository (`usman-soliu`)

### 3. Configure Your Service

Fill in the following settings:

**Basic Settings:**
- **Name**: `usman-soliu-portfolio` (or your preferred name)
- **Region**: Choose the closest region to your users
- **Branch**: `main` (or your default branch)
- **Root Directory**: Leave empty (or `.` if needed)
- **Runtime**: `Node`
- **Build Command**: `pnpm install && pnpm build`
- **Start Command**: `pnpm start`

**If pnpm is not available, use npm:**
- **Build Command**: `npm install && npm run build`
- **Start Command**: `npm start`

### 4. Environment Variables

Add these environment variables in the Render dashboard:

**Required for Contact Form:**
- `SMTP_HOST` - Your SMTP server (e.g., `smtp.gmail.com`)
- `SMTP_PORT` - `587` (for TLS) or `465` (for SSL)
- `SMTP_USER` - Your email address
- `SMTP_PASS` - Your email app password (not your regular password)

**Optional:**
- `NODE_ENV` - `production` (automatically set by Render)

### 5. Gmail Setup (if using Gmail)

If you're using Gmail for SMTP:

1. Enable 2-Factor Authentication on your Google account
2. Go to [Google App Passwords](https://myaccount.google.com/apppasswords)
3. Create a new app password for "Mail"
4. Use this app password as `SMTP_PASS` (not your regular Gmail password)

### 6. Deploy

1. Click **"Create Web Service"**
2. Render will automatically:
   - Install dependencies
   - Build your Next.js application
   - Start the server
3. Your site will be available at `https://your-service-name.onrender.com`

### 7. Custom Domain (Optional)

1. Go to your service settings
2. Click **"Custom Domains"**
3. Add your domain (e.g., `devfresher.me`)
4. Follow Render's instructions to configure DNS

## Troubleshooting

### Build Fails

**Issue**: Build command fails
**Solution**: 
- Check that all dependencies are in `package.json`
- Ensure Node.js version is compatible (use Node 18+)
- Check build logs in Render dashboard

### Contact Form Not Working

**Issue**: Contact form returns error
**Solution**:
- Verify all SMTP environment variables are set correctly
- Check that `SMTP_PASS` is an app password, not your regular password
- Test SMTP credentials locally first

### pnpm Not Found

**Issue**: `pnpm: command not found`
**Solution**: 
- Use npm instead:
  - Build Command: `npm install && npm run build`
  - Start Command: `npm start`
- Or install pnpm in build command: `npm install -g pnpm && pnpm install && pnpm build`

### Out of Memory

**Issue**: Build fails due to memory limits
**Solution**:
- Upgrade to a higher plan (Starter plan has 512MB RAM)
- Or optimize your build process

## Render Plans

- **Free Plan**: Good for testing, but has limitations (spins down after inactivity)
- **Starter Plan ($7/month)**: Better for production, always on, more resources
- **Professional Plan**: For high-traffic sites

## Post-Deployment Checklist

- [ ] Test all pages load correctly
- [ ] Verify contact form works
- [ ] Check that sitemap.xml is accessible
- [ ] Test robots.txt
- [ ] Verify Open Graph images work (check social media preview)
- [ ] Test on mobile devices
- [ ] Set up custom domain (if applicable)
- [ ] Configure SSL certificate (automatic on Render)

## Monitoring

Render provides:
- Build logs
- Runtime logs
- Metrics dashboard
- Automatic deployments on git push

## Continuous Deployment

Render automatically deploys when you push to your connected branch:
1. Push changes to GitHub
2. Render detects the push
3. Builds and deploys automatically
4. Your site updates within minutes

## Support

- [Render Documentation](https://render.com/docs)
- [Render Community](https://community.render.com)
- [Next.js Deployment Guide](https://nextjs.org/docs/deployment)

---

**Your site should now be live on Render! 🚀**
