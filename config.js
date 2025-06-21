const { ActivityType } = require('discord.js');

module.exports = {
  ownerId: '1246496527854076028',

  status: {
    rotateDefault: [
      { name: 'Netflix', type: ActivityType.Watching,url: 'https://discord.gg/PUJspxUYCd/'  },
      { name: 'GTA VI', type: ActivityType.Playing,url: 'https://discord.gg/PUJspxUYCd/'   },
      { name: 'on YouTube', type: ActivityType.Streaming, url: 'https://discord.gg/PUJspxUYCd/' },
      { name: 'Spotify | Join us: discord.gg/PUJspxUYCd', type: ActivityType.Listening },
    ],
    songStatus: true // Whether to override with currently playing song (if using Spotify API)
  },

  spotifyClientId: 'cf1e30e7d31e4529bd1df2dbc7ef8061',
  spotifyClientSecret: 'a3202f803af14936870e91f1ddb15a8e',
};
