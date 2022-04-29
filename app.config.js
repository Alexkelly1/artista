import 'dotenv/config';

export default {
  "expo": {
    "name": "artista1",
    "slug": "artista1",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/icon.png",
    "splash": {
      "image": "./assets/splash.png",
      "resizeMode": "contain",
      "backgroundColor": "#ffffff"
    },
    "updates": {
      "fallbackToCacheTimeout": 0
    },
    "assetBundlePatterns": [
      "**/*"
    ],
    "ios": {
      "supportsTablet": true
    },
    "android": {
      "adaptiveIcon": {
        "foregroundImage": "./assets/adaptive-icon.png",
        "backgroundColor": "#FFFFFF"
      }
    },
    "web": {
      "favicon": "./assets/favicon.png"
    },
    "extra": {
      firebaseApiKey: process.env.FB_API_KEY,
      firebaseAuthDomain: process.env.FB_AUTH_DOMAIN,
      firebaseDatabaseUrl: process.env.FB_DB_URL,
      firebaseProjectId: process.env.FB_PROJECT_ID,
      firebaseStorageBucket: process.env.FB_STORAGE_BUCKET,
      firebaseMessagingSenderId: process.env.FB_MESSAGING_SENDER_ID,
      firebaseAppId: process.env.FB_APP_ID,
      firebaseMeasurementId: process.env.FB_MEASUREMENT_ID
    }
  }
}