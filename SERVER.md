# Cool Arcade Server Setup

This project uses Firebase Cloud Functions to protect online leaderboard writes.
It also stores each player's cloud profile in Firestore so coins, XP, skins, cars, settings, achievements, and history can follow them across devices.

## What the server does

- `submitScore` receives score submissions from the browser.
- It requires Firebase Authentication.
- It validates the game id, score, run time, mode, and player name.
- It rate-limits each signed-in user to one score submission every 5 seconds.
- It writes accepted scores to `leaderboards/{gameId}/scores` with the Admin SDK.
- The browser can read/write only its own `profiles/{uid}` document after Firebase Auth signs the player in anonymously.

## Firebase console checklist

1. Open Firebase Console.
2. Select `cool-arcade`.
3. Enable Authentication.
4. Enable the Anonymous sign-in provider.
5. Enable Firestore Database.

## Deploy

From this folder:

```bash
cd functions
npm install
cd ..
firebase deploy --only functions,firestore:rules
```

After deploy, the arcade will call the `submitScore` function instead of writing scores directly from the browser.
