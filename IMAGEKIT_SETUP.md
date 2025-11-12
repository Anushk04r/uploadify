# ImageKit Setup Guide

## Why ImageKit?
ImageKit is a media storage and CDN service. Your app uses it to store uploaded images and videos.

## Setup Steps (Free Tier Available)

1. **Sign up for ImageKit:**
   - Go to https://imagekit.io/register
   - Create a free account

2. **Get Your Credentials:**
   - After signing up, go to **Dashboard**
   - Click on **Developer Options** (in the left sidebar)
   - You'll see:
     - **Public Key** (starts with `public_...`)
     - **Private Key** (starts with `private_...`)
     - **URL Endpoint** (looks like `https://ik.imagekit.io/your_imagekit_id`)

3. **Update `.env.local`:**
   - Open `.env.local` in your project
   - Replace the ImageKit placeholders:
     ```
     IMAGEKIT_PUBLIC_KEY=your_actual_public_key_here
     IMAGEKIT_PRIVATE_KEY=your_actual_private_key_here
     IMAGEKIT_URL_ENDPOINT=https://ik.imagekit.io/your_imagekit_id
     ```

4. **Restart your dev server:**
   - Stop the server (Ctrl+C)
   - Run `npm run dev` again

## Free Tier Limits:
- 20GB storage
- 20GB bandwidth per month
- Perfect for development and small projects!

---

## Alternative: Skip ImageKit (For Testing Only)

If you just want to test without ImageKit, I can modify the code to save files locally (not recommended for production).

