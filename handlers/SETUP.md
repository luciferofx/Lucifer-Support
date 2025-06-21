# 🔧 Lucifer Support Dashboard Setup Guide

## Quick Fix for "Nothing Happens After Login"

The issue is that your Discord client secret is not configured. Here's how to fix it:

### Step 1: Get Your Discord Client Secret

1. Go to [Discord Developer Portal](https://discord.com/developers/applications)
2. Click on your application (ID: `1382287411748540496`)
3. Go to **OAuth2** → **General**
4. Copy your **Client Secret** (click "Reset Secret" if needed)

### Step 2: Create Environment File

Create a file named `.env` in your project root directory (same level as `package.json`):

```env
DISCORD_CLIENT_SECRET=your_actual_client_secret_here
```

**Replace `your_actual_client_secret_here` with the secret you copied from Discord.**

### Step 3: Verify Redirect URI

In the same Discord OAuth2 settings, make sure you have this redirect URI:
```
http://localhost:3000/dashboard
```

### Step 4: Restart Server

1. Stop your server (Ctrl+C)
2. Start it again: `node handlers/server.js`

### Step 5: Test Login

1. Visit `http://localhost:3000/dashboard`
2. Click "Login with Discord"
3. Authorize the application
4. You should now be logged in successfully!

## 🔍 Troubleshooting

### If you still get errors:

1. **Check the debug panel** on the dashboard for error messages
2. **Check server console** for detailed error logs
3. **Verify client secret** is correct and not the placeholder text
4. **Make sure .env file** is in the correct location

### Common Issues:

- **"Client secret not configured"**: You need to set the DISCORD_CLIENT_SECRET environment variable
- **"Invalid redirect URI"**: Make sure `http://localhost:3000/dashboard` is added in Discord Developer Portal
- **"Server Test Failed"**: Check if the server is running on port 3000

## 📁 File Structure

Your project should look like this:
```
ALL-IN-ONE-BOT-main/
├── .env                    ← Create this file
├── package.json
├── handlers/
│   ├── server.js
│   ├── dashboard.html
│   └── index.html
└── ...
```

## 🚀 After Setup

Once configured correctly, you should see:
- ✅ Server test passes
- ✅ Login works without errors
- ✅ User info appears in the top right
- ✅ Server dropdown populates with your servers
- ✅ Settings can be saved and loaded

## 🔐 Security Note

Never commit your `.env` file to version control. It should be in your `.gitignore` file. 