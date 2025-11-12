# Deployment Guide

## Quick Deploy to Vercel (Recommended - Easiest)

Vercel is the easiest way to deploy Next.js apps. It's free and takes about 5 minutes.

### Step 1: Prepare Your Code
1. Make sure all your code is committed to Git
2. Push to GitHub (if not already):
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

### Step 2: Deploy to Vercel
1. Go to https://vercel.com
2. Sign up/Login with GitHub
3. Click **"Add New Project"**
4. Import your GitHub repository
5. Vercel will auto-detect Next.js settings

### Step 3: Add Environment Variables
In Vercel project settings, go to **Settings → Environment Variables** and add:

```
MONGODB_URI=mongodb+srv://myuser:mypassword123@cluster0.cfehwax.mongodb.net/simple-media-upload?retryWrites=true&w=majority
NEXTAUTH_SECRET=3TLpSVtnoCLtoOitG7NnFJfk3gzmSB677Hu3a5z0XhY=
NEXTAUTH_URL=https://your-app-name.vercel.app
IMAGEKIT_PUBLIC_KEY=public_AlmuIg0rUKX4YAYRLGr5liDg7Cw=
IMAGEKIT_PRIVATE_KEY=private_4VPi7A1o45pWQVTJdcnfIkQ9Qno=
IMAGEKIT_URL_ENDPOINT=https://ik.imagekit.io/0sbb7wvrmr
```

**Important:** 
- Replace `NEXTAUTH_URL` with your actual Vercel URL after deployment
- Keep all your credentials secure (don't share them)

### Step 4: Deploy
1. Click **"Deploy"**
2. Wait 2-3 minutes
3. Your app will be live at `https://your-app-name.vercel.app`

### Step 5: Update NEXTAUTH_URL
After deployment, update the `NEXTAUTH_URL` environment variable in Vercel with your actual deployment URL.

---

## Alternative: Deploy to Other Platforms

### Netlify
1. Sign up at https://netlify.com
2. Connect GitHub repo
3. Build command: `npm run build`
4. Publish directory: `.next`
5. Add environment variables in Netlify dashboard

### Railway
1. Sign up at https://railway.app
2. New Project → Deploy from GitHub
3. Add environment variables
4. Deploy automatically

### Self-Hosted (VPS/Server)
1. Build the app: `npm run build`
2. Start production server: `npm start`
3. Use PM2 or similar for process management
4. Set up reverse proxy (Nginx) for port 3000
5. Configure SSL with Let's Encrypt

---

## Pre-Deployment Checklist

- [ ] All environment variables are set
- [ ] MongoDB Atlas network access allows your deployment platform
- [ ] ImageKit credentials are correct
- [ ] NEXTAUTH_URL matches your deployment URL
- [ ] Test registration and login
- [ ] Test file upload
- [ ] Test gallery view

---

## Important Notes

1. **MongoDB Atlas**: Make sure your IP whitelist includes Vercel's IP ranges, or use "Allow Access from Anywhere" (0.0.0.0/0) for development

2. **ImageKit**: Your credentials should work from any location

3. **NextAuth**: The `NEXTAUTH_URL` must match your deployment URL exactly (including https://)

4. **Free Tier Limits**:
   - Vercel: Unlimited deployments, 100GB bandwidth/month
   - MongoDB Atlas: 512MB storage
   - ImageKit: 20GB storage, 20GB bandwidth/month

---

## Troubleshooting

**Issue: "Invalid NEXTAUTH_URL"**
- Make sure NEXTAUTH_URL matches your deployment URL exactly
- Include `https://` in the URL

**Issue: MongoDB connection fails**
- Check MongoDB Atlas Network Access settings
- Add Vercel IP ranges or allow all IPs

**Issue: ImageKit upload fails**
- Verify ImageKit credentials are correct
- Check ImageKit dashboard for any account issues

