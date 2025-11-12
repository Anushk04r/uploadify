# Setup Guide

## Prerequisites
1. Node.js (v18 or higher)
2. MongoDB (local or MongoDB Atlas)
3. ImageKit account (for media storage)

## Step 1: Install Dependencies
```bash
npm install
```

## Step 2: Set Up Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
# MongoDB Connection String
# For local MongoDB: mongodb://localhost:27017/simple-media-upload
# For MongoDB Atlas: mongodb+srv://username:password@cluster.mongodb.net/dbname
MONGODB_URI=mongodb://localhost:27017/simple-media-upload

# NextAuth Configuration
# Generate a secret: openssl rand -base64 32 (or use any random string)
NEXTAUTH_SECRET=your-secret-key-here-change-this-in-production
NEXTAUTH_URL=http://localhost:3000

# ImageKit Configuration
# Get these from https://imagekit.io/dashboard
IMAGEKIT_PUBLIC_KEY=your-imagekit-public-key
IMAGEKIT_PRIVATE_KEY=your-imagekit-private-key
IMAGEKIT_URL_ENDPOINT=https://ik.imagekit.io/your-imagekit-id
```

### Getting Your Credentials:

**MongoDB:**
- Local: Install MongoDB locally or use Docker
- Atlas: Create a free cluster at https://www.mongodb.com/cloud/atlas

**ImageKit:**
1. Sign up at https://imagekit.io
2. Go to Dashboard → Developer Options
3. Copy your Public Key, Private Key, and URL Endpoint

**NextAuth Secret:**
- Run: `openssl rand -base64 32` (or use any secure random string)

## Step 3: Run the Development Server

```bash
npm run dev
```

The app will be available at http://localhost:3000

## Features
- User registration and authentication
- Media upload (up to 10 files per user, max 10MB per file)
- Gallery view of uploaded media

