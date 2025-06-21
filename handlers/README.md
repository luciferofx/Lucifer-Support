# Lucifer Support Dashboard

A comprehensive web dashboard for managing the Lucifer Support Discord bot with Discord OAuth2 authentication.

## Features

### 🔐 Authentication
- Discord OAuth2 login system
- Secure token management
- User permission verification

### 🛡️ Anti-Nuke Protection
- Anti-Channel Delete/Create
- Anti-Role Delete
- Anti-Server Update
- Anti-Ban/Kick protection
- Real-time settings management

### 🔨 Moderation Tools
- Anti-Spam protection
- Anti-Link filtering
- Anti-Bot protection
- Customizable moderation settings

### 🎵 Music System
- Music playback controls
- Volume management
- Queue system settings

### 💰 Economy System
- Economy features toggle
- Jobs system management
- Currency settings

### ⚙️ Automation
- Welcome message settings
- Auto-role assignment
- Server statistics display

### 📝 Logging
- Moderation logs
- Member activity logs
- Message logs
- Comprehensive audit trail

## Setup Instructions

### 1. Discord Application Setup

1. Go to [Discord Developer Portal](https://discord.com/developers/applications)
2. Create a new application or use existing one
3. Go to OAuth2 settings
4. Add redirect URI: `http://localhost:3000/dashboard`
5. Copy your Client Secret

### 2. Environment Variables

Create a `.env` file in the root directory:

```env
DISCORD_CLIENT_SECRET=your_discord_client_secret_here
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start the Server

```bash
node handlers/server.js
```

## Usage

### Accessing the Dashboard

1. **Main Page**: Visit `http://localhost:3000`
2. **Dashboard**: Visit `http://localhost:3000/dashboard`

### Login Process

1. Click "Login with Discord" on the dashboard
2. Authorize the application
3. You'll be redirected back to the dashboard
4. Select a server you manage
5. Configure bot settings

### Managing Settings

1. **Select Server**: Choose a server from the dropdown
2. **Navigate Sections**: Use the sidebar to access different settings
3. **Toggle Features**: Use the toggle switches to enable/disable features
4. **Save Changes**: Click "Save" buttons to apply changes

## API Endpoints

### Authentication
- `POST /api/auth/callback` - Discord OAuth2 callback
- `GET /api/user/guilds` - Get user's managed servers

### Settings Management
- `POST /api/settings/save` - Save bot settings
- `GET /api/settings/:serverId/:type` - Get settings for a server

### Server Information
- `GET /api/server/:serverId/stats` - Get server statistics

## Security Features

- **OAuth2 Authentication**: Secure Discord login
- **Permission Verification**: Only server managers can modify settings
- **Token Management**: Secure token storage and validation
- **CORS Protection**: Configured for local development

## Customization

### Adding New Settings

1. Add new controls to the dashboard HTML
2. Update the `getDefaultSettings()` function in `server.js`
3. Add corresponding API endpoints
4. Update the frontend JavaScript

### Styling

The dashboard uses:
- **Font**: Orbitron (Google Fonts)
- **Color Scheme**: Dark theme with orange accents (#ff6b35)
- **Responsive Design**: Works on desktop and mobile

## Production Deployment

### Environment Variables
```env
DISCORD_CLIENT_SECRET=your_production_client_secret
NODE_ENV=production
PORT=3000
```

### Security Considerations
1. Use HTTPS in production
2. Implement proper session management
3. Add rate limiting
4. Use a production database for token storage
5. Implement proper error handling

### Database Integration
Replace the in-memory token storage with a proper database:
- MongoDB
- PostgreSQL
- Redis

## Troubleshooting

### Common Issues

1. **OAuth2 Error**: Check client secret and redirect URI
2. **Permission Denied**: Ensure user has "Manage Server" permission
3. **Settings Not Saving**: Check server logs for errors
4. **Dashboard Not Loading**: Verify all dependencies are installed

### Debug Mode

Enable debug logging by setting:
```env
DEBUG=true
```

## Support

For issues and questions:
- Check the console logs for error messages
- Verify Discord application settings
- Ensure all dependencies are properly installed

## License

This dashboard is part of the Lucifer Support bot project. 