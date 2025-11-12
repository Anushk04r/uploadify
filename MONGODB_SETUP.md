# MongoDB Setup Guide

## Option 1: MongoDB Atlas (Recommended - Free Cloud Database)

1. **Sign up for MongoDB Atlas:**
   - Go to https://www.mongodb.com/cloud/atlas/register
   - Create a free account

2. **Create a Free Cluster:**
   - Click "Build a Database"
   - Choose "M0 FREE" (Free tier)
   - Select a cloud provider and region (choose closest to you)
   - Click "Create"

3. **Create Database User:**
   - Go to "Database Access" in the left sidebar
   - Click "Add New Database User"
   - Choose "Password" authentication
   - Create a username and password (save these!)
   - Set user privileges to "Atlas admin" or "Read and write to any database"
   - Click "Add User"

4. **Whitelist Your IP:**
   - Go to "Network Access" in the left sidebar
   - Click "Add IP Address"
   - Click "Allow Access from Anywhere" (for development) or add your IP
   - Click "Confirm"

5. **Get Connection String:**
   - Go to "Database" → Click "Connect"
   - Choose "Connect your application"
   - Copy the connection string (looks like: `mongodb+srv://username:password@cluster.mongodb.net/`)
   - Replace `<password>` with your database user password
   - Replace `<dbname>` with `simple-media-upload` (or any name you want)

6. **Update .env.local:**
   - Open `.env.local`
   - Replace `MONGODB_URI` with your Atlas connection string
   - Example: `MONGODB_URI=mongodb+srv://myuser:mypassword@cluster0.xxxxx.mongodb.net/simple-media-upload?retryWrites=true&w=majority`

## Option 2: Local MongoDB Installation

### Windows:
1. Download MongoDB Community Server from https://www.mongodb.com/try/download/community
2. Install it (default settings are fine)
3. MongoDB should start automatically as a Windows service
4. Your `.env.local` should already have: `MONGODB_URI=mongodb://localhost:27017/simple-media-upload`

### Verify MongoDB is Running:
- Open Command Prompt
- Run: `mongosh` or `mongo` (depending on version)
- If it connects, MongoDB is running!

