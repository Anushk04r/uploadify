# Quick Start Guide - Fix Registration Issue

## The Problem
Your app can't connect to MongoDB, so registration fails. The error shows:
`connect ECONNREFUSED ::1:27017` - MongoDB is not running.

## Solution: Set Up MongoDB Atlas (5 minutes)

### Step 1: Create MongoDB Atlas Account
1. Go to: https://www.mongodb.com/cloud/atlas/register
2. Sign up with Google/GitHub or email
3. Verify your email if needed

### Step 2: Create Free Database
1. After login, click **"Build a Database"**
2. Choose **"M0 FREE"** (Free tier - perfect for development)
3. Select a cloud provider (AWS, Google Cloud, or Azure)
4. Choose a region closest to you
5. Click **"Create"** (takes 1-3 minutes)

### Step 3: Create Database User
1. In the setup wizard, you'll see "Create Database User"
2. Choose authentication method: **"Password"**
3. Enter a username (e.g., `admin` or `myuser`)
4. Enter a password (SAVE THIS! You'll need it)
5. Click **"Create Database User"**

### Step 4: Allow Network Access
1. In the setup wizard, you'll see "Network Access"
2. Click **"Add My Current IP Address"** OR
3. Click **"Allow Access from Anywhere"** (for development only)
4. Click **"Finish and Close"**

### Step 5: Get Your Connection String
1. Click **"Connect"** button on your cluster
2. Choose **"Connect your application"**
3. Select **"Node.js"** and version **"5.5 or later"**
4. Copy the connection string (looks like):
   ```
   mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority
   ```

### Step 6: Update Your .env.local File
1. Open `.env.local` in your project
2. Replace the `MONGODB_URI` line with your connection string
3. **IMPORTANT:** Replace `<username>` with your database username
4. **IMPORTANT:** Replace `<password>` with your database password
5. **IMPORTANT:** Add `/simple-media-upload` before the `?` in the URL

**Example:**
```
MONGODB_URI=mongodb+srv://myuser:mypassword123@cluster0.abc123.mongodb.net/simple-media-upload?retryWrites=true&w=majority
```

### Step 7: Restart Your Dev Server
1. Stop the server (Ctrl+C in terminal)
2. Run: `npm run dev`
3. Try registering again!

---

## Alternative: Install MongoDB Locally (More Complex)

If you prefer local MongoDB:
1. Download from: https://www.mongodb.com/try/download/community
2. Install with default settings
3. MongoDB should start automatically as a Windows service
4. Your current `.env.local` should work: `MONGODB_URI=mongodb://localhost:27017/simple-media-upload`

---

## After MongoDB is Set Up

1. **Fix the JWT Error:** Update `NEXTAUTH_SECRET` in `.env.local`:
   - Generate a secret: Run `openssl rand -base64 32` in terminal
   - Or use any long random string
   - Replace `your-secret-key-here-change-this-in-production` with the generated secret

2. **Clear Browser Cookies:** The JWT error might be from old cookies. Clear cookies for localhost:3000

3. **Try Again:** Register a new account and it should work!

