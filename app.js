(() => {
  const screens = {
    intro: document.querySelector("#introScreen"),
    daily: document.querySelector("#dailyScreen"),
    games: document.querySelector("#gamesScreen"),
    about: document.querySelector("#aboutScreen"),
    leaderboards: document.querySelector("#leaderboardScreen"),
    achievements: document.querySelector("#achievementsScreen"),
    social: document.querySelector("#socialScreen"),
    progression: document.querySelector("#progressionScreen"),
    tournament: document.querySelector("#tournamentScreen"),
    history: document.querySelector("#historyScreen"),
    settings: document.querySelector("#settingsScreen"),
    keybinds: document.querySelector("#keybindScreen"),
    debug: document.querySelector("#debugScreen"),
    play: document.querySelector("#playScreen"),
  };

  const screenTitle = document.querySelector("#screenTitle");
  const backButton = document.querySelector("#backButton");
  const muteButton = document.querySelector("#muteButton");
  const muteIcon = document.querySelector("#muteIcon");
  const siteStatusBanner = document.querySelector("#siteStatusBanner");
  const globalSearch = document.querySelector("#globalSearch");
  const gameGrid = document.querySelector("#gameGrid");
  const gameSearch = document.querySelector("#gameSearch");
  const filterTabs = document.querySelector("#filterTabs");
  const collectionStrip = document.querySelector("#collectionStrip");
  const gameDetailDock = document.querySelector("#gameDetailDock");
  const playLevelButtons = document.querySelectorAll("[data-play-level]");
  const introCabinetCount = document.querySelector("#introCabinetCount");
  const totalBestScore = document.querySelector("#totalBestScore");
  const favoriteCabinet = document.querySelector("#favoriteCabinet");
  const dailyChallenge = document.querySelector("#dailyChallenge");
  const recentStatus = document.querySelector("#recentStatus");
  const recentList = document.querySelector("#recentList");
  const saveFeedback = document.querySelector("#saveFeedback");
  const profileAvatar = document.querySelector("#profileAvatar");
  const profileNameLabel = document.querySelector("#profileNameLabel");
  const profileLevelLabel = document.querySelector("#profileLevelLabel");
  const profileCoinsLabel = document.querySelector("#profileCoinsLabel");
  const profileXpLabel = document.querySelector("#profileXpLabel");
  const dailyCard = document.querySelector("#dailyCard");
  const dailyStatusTitle = document.querySelector("#dailyStatusTitle");
  const dailyStatus = document.querySelector("#dailyStatus");
  const startDailyButton = document.querySelector("#startDailyButton");
  const cabinetSpotlight = document.querySelector("#cabinetSpotlight");
  const aboutMarquee = document.querySelector("#aboutMarquee");
  const aboutKicker = document.querySelector("#aboutKicker");
  const aboutTitle = document.querySelector("#aboutTitle");
  const aboutDescription = document.querySelector("#aboutDescription");
  const aboutInfo = document.querySelector("#aboutInfo");
  const aboutPlayButton = document.querySelector("#aboutPlayButton");
  const aboutBackButton = document.querySelector("#aboutBackButton");
  const leaderboardTotal = document.querySelector("#leaderboardTotal");
  const leaderboardBestTime = document.querySelector("#leaderboardBestTime");
  const leaderboardFavorite = document.querySelector("#leaderboardFavorite");
  const leaderboardCloudState = document.querySelector("#leaderboardCloudState");
  const leaderboardCloudStatus = document.querySelector("#leaderboardCloudStatus");
  const refreshLeaderboardsButton = document.querySelector("#refreshLeaderboardsButton");
  const leaderboardRows = document.querySelector("#leaderboardRows");
  const achievementCount = document.querySelector("#achievementCount");
  const achievementGrid = document.querySelector("#achievementGrid");
  const seasonLevelTitle = document.querySelector("#seasonLevelTitle");
  const seasonProgressText = document.querySelector("#seasonProgressText");
  const seasonProgressBar = document.querySelector("#seasonProgressBar");
  const masterySummaryTitle = document.querySelector("#masterySummaryTitle");
  const seasonTrack = document.querySelector("#seasonTrack");
  const masteryGrid = document.querySelector("#masteryGrid");
  const dailyRewardTitle = document.querySelector("#dailyRewardTitle");
  const dailyRewardStatus = document.querySelector("#dailyRewardStatus");
  const claimDailyRewardButton = document.querySelector("#claimDailyRewardButton");
  const friendCodeValue = document.querySelector("#friendCodeValue");
  const friendCodeInput = document.querySelector("#friendCodeInput");
  const addFriendButton = document.querySelector("#addFriendButton");
  const friendFeedback = document.querySelector("#friendFeedback");
  const missionGrid = document.querySelector("#missionGrid");
  const friendChallengePanel = document.querySelector("#friendChallengePanel");
  const friendsBoard = document.querySelector("#friendsBoard");
  const historyList = document.querySelector("#historyList");
  const tournamentForm = document.querySelector("#tournamentForm");
  const tournamentGameSelect = document.querySelector("#tournamentGameSelect");
  const tournamentMode = document.querySelector("#tournamentMode");
  const botDifficulty = document.querySelector("#botDifficulty");
  const playerOneName = document.querySelector("#playerOneName");
  const playerTwoName = document.querySelector("#playerTwoName");
  const playerTwoField = document.querySelector("#playerTwoField");
  const botDifficultyField = document.querySelector("#botDifficultyField");
  const tournamentStatusTitle = document.querySelector("#tournamentStatusTitle");
  const tournamentStatus = document.querySelector("#tournamentStatus");
  const tournamentScores = document.querySelector("#tournamentScores");
  const nextTournamentRunButton = document.querySelector("#nextTournamentRunButton");
  const keybindGrid = document.querySelector("#keybindGrid");
  const profileNameInput = document.querySelector("#profileNameInput");
  const profileTitleSelect = document.querySelector("#profileTitleSelect");
  const cloudProfileStatus = document.querySelector("#cloudProfileStatus");
  const cloudAccountStatus = document.querySelector("#cloudAccountStatus");
  const cloudAccountId = document.querySelector("#cloudAccountId");
  const autoCloudSyncToggle = document.querySelector("#autoCloudSyncToggle");
  const cloudSaveButton = document.querySelector("#cloudSaveButton");
  const cloudLoadButton = document.querySelector("#cloudLoadButton");
  const avatarPicker = document.querySelector("#avatarPicker");
  const skinGrid = document.querySelector("#skinGrid");
  const arcadeMarket = document.querySelector("#arcadeMarket");
  const driftShop = document.querySelector("#driftShop");
  const audioToggle = document.querySelector("#audioToggle");
  const musicToggle = document.querySelector("#musicToggle");
  const motionToggle = document.querySelector("#motionToggle");
  const volumeSlider = document.querySelector("#volumeSlider");
  const volumeValue = document.querySelector("#volumeValue");
  const playTitle = document.querySelector("#playTitle");
  const gameSubtitle = document.querySelector("#gameSubtitle");
  const scoreValue = document.querySelector("#scoreValue");
  const levelValue = document.querySelector("#levelValue");
  const comboValue = document.querySelector("#comboValue");
  const bestValue = document.querySelector("#bestValue");
  const timeValue = document.querySelector("#timeValue");
  const driftStartOverlay = document.querySelector("#driftStartOverlay");
  const driftStartShop = document.querySelector("#driftStartShop");
  const driftSensitivitySlider = document.querySelector("#driftSensitivitySlider");
  const driftSensitivityValue = document.querySelector("#driftSensitivityValue");
  const startDriftRunButton = document.querySelector("#startDriftRunButton");
  const debugStatusTitle = document.querySelector("#debugStatusTitle");
  const debugStatusText = document.querySelector("#debugStatusText");
  const debugForm = document.querySelector("#debugForm");
  const debugType = document.querySelector("#debugType");
  const debugArea = document.querySelector("#debugArea");
  const debugMessage = document.querySelector("#debugMessage");
  const debugFeedback = document.querySelector("#debugFeedback");
  const debugReportList = document.querySelector("#debugReportList");
  const debugReportTitle = document.querySelector("#debugReportTitle");
  const toggleUpdateNoticeButton = document.querySelector("#toggleUpdateNoticeButton");
  const clearReportsButton = document.querySelector("#clearReportsButton");
  const gameCanvas = document.querySelector("#gameCanvas");
  const gameContext = gameCanvas.getContext("2d");
  const touchControls = document.querySelector("#touchControls");
  const attractCanvas = document.querySelector("#attractCanvas");
  const attractContext = attractCanvas.getContext("2d");

  const defaultSettings = {
    audio: true,
    music: true,
    volume: 70,
    reducedMotion: false,
    playLevel: 1,
    autoCloudSync: true,
  };

  const levelInterval = 6.8;

  const defaultKeybinds = {
    left: "ArrowLeft",
    right: "ArrowRight",
    up: "ArrowUp",
    down: "ArrowDown",
    action: "Space",
    pause: "Escape",
  };

  const defaultProfile = {
    name: "Player 01",
    avatar: "P1",
    coins: 0,
    xp: 0,
    skin: "neon",
    unlockedSkins: ["neon"],
    driftCar: "starter",
    driftCars: ["starter"],
    driftBoosters: {},
    driftSensitivity: 100,
    friendCode: "",
    friends: [],
    lastDailyReward: "",
    rewardStreak: 0,
    missions: {},
    claimedSeasonRewards: [],
    title: "rookie",
    friendChallenges: [],
    masteryRewards: {},
    featuredRewards: {},
    ownedTitles: [],
    arcadeBoosters: {},
    selectedArcadeBooster: "",
  };

  const avatarOptions = ["P1", "VX", "KO", "AI", "GG", "XP"];

  const titleDefinitions = [
    { id: "rookie", title: "Arcade Rookie", unlock: () => true },
    { id: "daily", title: "Daily Grinder", unlock: () => profile.rewardStreak >= 2 || getDailyResult()?.completed },
    { id: "vault", title: "Vault Cracker", unlock: () => getBestScore("lockpick") >= 450 || getPlayCount("lockpick") >= 2 },
    { id: "drift", title: "Drift Pilot", unlock: () => getMasteryForGame(gameDefinitions.find((game) => game.id === "driftboss")).level >= 4 },
    { id: "champ", title: "Tournament Champ", unlock: () => getAchievements().includes("tournament-win") },
    { id: "season", title: "Season Champion", unlock: () => getSeasonLevel() >= 10 },
    { id: "coin-baron", title: "Coin Baron", unlock: () => profile.ownedTitles?.includes("coin-baron") },
    { id: "snake-runner", title: "Snake Runner", unlock: () => profile.ownedTitles?.includes("snake-runner") },
    { id: "doodle-architect", title: "Doodle Architect", unlock: () => profile.ownedTitles?.includes("doodle-architect") },
  ];

  const arcadeMarketItems = [
    { id: "coinTicket", title: "Coin Ticket", type: "booster", icon: "$+", cost: 80, description: "Next finished run earns 45 bonus coins." },
    { id: "xpTicket", title: "XP Ticket", type: "booster", icon: "XP", cost: 90, description: "Next finished run earns 90 bonus XP." },
    { id: "comboSpark", title: "Combo Spark", type: "booster", icon: "x2", cost: 110, description: "Next run starts with a short x2 combo window." },
    { id: "coin-baron", title: "Coin Baron", type: "title", icon: "$$", cost: 180, description: "Unlock the Coin Baron profile title." },
    { id: "snake-runner", title: "Snake Runner", type: "title", icon: "SN", cost: 210, description: "Unlock a Byte Snake themed profile title." },
    { id: "doodle-architect", title: "Doodle Architect", type: "title", icon: "DR", cost: 240, description: "Unlock a Doodle Road themed profile title." },
  ];

  const skinDefinitions = [
    {
      id: "neon",
      title: "Neon Core",
      description: "Classic pink and cyan cabinet glow.",
      cost: 0,
      hot: "#ff3d81",
      sun: "#ffd166",
      cool: "#34d6ff",
      mint: "#58f29f",
      bg: "#06070f",
    },
    {
      id: "volt",
      title: "Volt Rush",
      description: "Green signal lights with gold scoring panels.",
      cost: 120,
      hot: "#58f29f",
      sun: "#f8e16c",
      cool: "#7df9ff",
      mint: "#b8ff6a",
      bg: "#07100d",
    },
    {
      id: "sunset",
      title: "Sunset Drive",
      description: "Hot magenta, amber, and late-night blue.",
      cost: 220,
      hot: "#ff5b9e",
      sun: "#ffb347",
      cool: "#53a6ff",
      mint: "#8fffe0",
      bg: "#100814",
    },
    {
      id: "cyber",
      title: "Cyber Ice",
      description: "Sharper blues for a cleaner futuristic floor.",
      cost: 360,
      hot: "#7c8cff",
      sun: "#dbeafe",
      cool: "#38e8ff",
      mint: "#6ee7b7",
      bg: "#050914",
    },
  ];

  const driftCars = [
    {
      id: "starter",
      name: "Street Hatch",
      cost: 0,
      handling: 1,
      color: "#64e85d",
      roof: "#23313b",
      stripe: "#f8fdf0",
      bonus: "Balanced handling",
    },
    {
      id: "coupe",
      name: "Turbo Coupe",
      cost: 100,
      handling: 1.14,
      color: "#2f89ff",
      roof: "#101d36",
      stripe: "#f9c74f",
      bonus: "Better corner control",
    },
    {
      id: "rally",
      name: "Rally GT",
      cost: 250,
      handling: 1.32,
      color: "#f94144",
      roof: "#1d1d24",
      stripe: "#ffffff",
      bonus: "Best grip and stability",
    },
  ];

  const driftBoosters = [
    { id: "doubleScore", name: "Double Score", cost: 20, icon: "2x", description: "Next Drift Boss run earns double score." },
    { id: "insurance", name: "Car Insurance", cost: 40, icon: "SH", description: "Saves you once when you leave the track." },
    { id: "coinRush", name: "Coin Rush", cost: 60, icon: "$$", description: "Track coins are worth double next run." },
  ];

  const keybindLabels = {
    left: ["Move Left", "Ships, cursors, and lane changes"],
    right: ["Move Right", "Ships, cursors, and lane changes"],
    up: ["Move Up", "Cursors and lane changes"],
    down: ["Move Down", "Cursors and lane changes"],
    action: ["Action", "Dash, pop, drop, and confirm"],
    pause: ["Pause / Back", "Leave the active cabinet"],
  };

  const achievementDefinitions = [
    {
      id: "first-run",
      title: "First Coin",
      description: "Finish any arcade run.",
      icon: "01",
    },
    {
      id: "full-minute",
      title: "Last Bell",
      description: "Survive all 60 seconds in any cabinet.",
      icon: "60",
    },
    {
      id: "score-500",
      title: "Hot Hand",
      description: "Score 500 or more in one run.",
      icon: "500",
    },
    {
      id: "score-1000",
      title: "Neon Legend",
      description: "Score 1000 or more in one run.",
      icon: "1K",
    },
    {
      id: "five-cabinets",
      title: "Cabinet Hopper",
      description: "Play five different games.",
      icon: "05",
    },
    {
      id: "all-cabinets",
      title: "Arcade Passport",
      description: "Play every cabinet at least once.",
      icon: "30",
    },
    {
      id: "tournament-win",
      title: "Bracket Boss",
      description: "Win a three-game tournament.",
      icon: "VS",
    },
    {
      id: "bot-win",
      title: "Bot Breaker",
      description: "Beat a bot in tournament mode.",
      icon: "AI",
    },
    {
      id: "noughts-master",
      title: "Grid Mind",
      description: "Post a 200+ score in Neon Noughts.",
      icon: "XO",
    },
    {
      id: "cloud-seed",
      title: "Global Signal",
      description: "Submit a run to the cloud leaderboard.",
      icon: "GL",
    },
    {
      id: "friend-rival",
      title: "Friendly Rival",
      description: "Create or clear a friend challenge.",
      icon: "FR",
    },
    {
      id: "mastery-tier",
      title: "Cabinet Regular",
      description: "Unlock a mastery milestone reward.",
      icon: "LV",
    },
  ];

  const missionDefinitions = [
    {
      id: "score-spark",
      title: "Score Spark",
      description: "Score 1,500 total points across any cabinets.",
      target: 1500,
      rewardCoins: 80,
      rewardXp: 180,
      progress: () => gameDefinitions.reduce((sum, game) => sum + getBestScore(game.id), 0),
    },
    {
      id: "cabinet-tour",
      title: "Cabinet Tour",
      description: "Play 5 different games.",
      target: 5,
      rewardCoins: 90,
      rewardXp: 200,
      progress: () => getPlayedGameCount(),
    },
    {
      id: "drift-fund",
      title: "Drift Fund",
      description: "Earn 250 coins for your garage.",
      target: 250,
      rewardCoins: 70,
      rewardXp: 160,
      progress: () => profile.coins,
    },
    {
      id: "survival-clock",
      title: "Survival Clock",
      description: "Record a 45 second run in any game.",
      target: 45,
      rewardCoins: 65,
      rewardXp: 150,
      progress: () => gameDefinitions.reduce((best, game) => Math.max(best, getBestTime(game.id)), 0),
    },
  ];

  const seasonRewards = [
    { level: 2, title: "Starter Tokens", description: "A small coin pack for early upgrades.", coins: 90, xp: 0 },
    { level: 4, title: "Booster Crate", description: "Extra XP and coins for your next unlocks.", coins: 120, xp: 100 },
    { level: 6, title: "Neon Title", description: "A progression badge for your profile wall.", coins: 160, xp: 140 },
    { level: 8, title: "Garage Grant", description: "A bigger coin drop for Drift Boss cars.", coins: 220, xp: 180 },
    { level: 10, title: "Season Champion", description: "The top season-one prize bundle.", coins: 320, xp: 260 },
  ];

  const gameDefinitions = [
    {
      id: "dodger",
      title: "Neon Dodger",
      subtitle: "Seal city rifts during a voltage storm",
      hook: "Collect energy cells, dodge falling voltage, and spend stored power to seal unstable rifts before they flood the skyline.",
      rules: "Survive the storm while sealing rifts. Energy cells power seals, shields block one hit, and direct voltage burns lives.",
      controls: "Move with the directional keys. Hold Action to boost; press it near a rift with energy to seal it.",
      strategy: "Gather two energy cells before chasing a rift. Boost in short bursts so you do not overshoot the seal window.",
      tag: "Survival",
      accent: "#ff3d81",
      glow: "rgba(255, 61, 129, 0.7)",
      background: "linear-gradient(135deg, #2a1030, #061a28 58%, #20111f)",
    },
    {
      id: "popper",
      title: "Target Pop",
      subtitle: "Snap shots before the signal drops",
      hook: "Hit moving targets fast for streak bonuses while decoys crowd the board.",
      rules: "Move the crosshair and pop the real signal target before its timer expires. Decoys punish reckless shots.",
      controls: "Move with the directional keys. Press Action to fire.",
      strategy: "Wait half a beat when decoys spawn. Bonus targets are worth breaking rhythm for.",
      tag: "Precision",
      accent: "#34d6ff",
      glow: "rgba(52, 214, 255, 0.7)",
      background: "linear-gradient(135deg, #071c2c, #16142f 58%, #261327)",
    },
    {
      id: "runner",
      title: "Circuit Runner",
      subtitle: "Switch lanes through a busy board",
      hook: "Grab data chips, dash for speed points, and dodge denser traffic each level.",
      rules: "Switch lanes through a 60-second circuit sprint. Chips and gates score points; red blocks end the run.",
      controls: "Use Up/Down or Left/Right to change lanes. Hold Action to dash forward.",
      strategy: "Dashing raises your score, but it also tightens your reaction window.",
      tag: "Reflex",
      accent: "#58f29f",
      glow: "rgba(88, 242, 159, 0.7)",
      background: "linear-gradient(135deg, #062118, #1d1824 58%, #10243a)",
    },
    {
      id: "flap",
      title: "Skyline Flap",
      subtitle: "Hop through neon towers",
      hook: "Tap to flap through moving gates while wind and tower speed rise each level.",
      rules: "Stay airborne and pass as many gates as possible in 60 seconds. Hitting a tower or the floor ends the flight.",
      controls: "Press Action, Up, or Space to flap. Gravity does the rest.",
      strategy: "Flap earlier than you think. The safest path is usually just above the gate center.",
      tag: "Timing",
      accent: "#ffd166",
      glow: "rgba(255, 209, 102, 0.72)",
      background: "linear-gradient(135deg, #17243d, #112d35 58%, #372044)",
    },
    {
      id: "tictactoe",
      title: "Neon Noughts",
      subtitle: "Arcade tic-tac-toe duel",
      hook: "Outthink the cabinet AI in quick rounds where the opponent gets sharper as you win.",
      rules: "Place Xs to get three in a row. Wins score big, draws keep the run alive, and each round resets the board.",
      controls: "Move the cursor with the directional keys. Press Action to place your mark.",
      strategy: "Take center or a corner early. At higher levels, block forks before chasing your own line.",
      tag: "Strategy",
      accent: "#b78cff",
      glow: "rgba(183, 140, 255, 0.72)",
      background: "linear-gradient(135deg, #1b173a, #12313a 58%, #33152e)",
    },
    {
      id: "tetris",
      title: "Stack Shift",
      subtitle: "Tetris-style neon stacking",
      hook: "Rotate falling blocks, clear lines, and keep the grid alive as the drop speed climbs.",
      rules: "Fill full rows to clear them. The run ends when new blocks cannot enter the grid.",
      controls: "Move with Left/Right, soft drop with Down, rotate with Up, and hard drop with Action.",
      strategy: "Keep one side clean for long pieces. Early flat stacks make the faster levels survivable.",
      tag: "Strategy",
      accent: "#34d6ff",
      glow: "rgba(52, 214, 255, 0.7)",
      background: "linear-gradient(135deg, #081d35, #18204c 58%, #27142b)",
    },
    {
      id: "twenty48",
      title: "2048 Reactor",
      subtitle: "Merge tiles into brighter cores",
      hook: "Slide energy tiles together, build bigger numbers, and chase chain bonuses before the board locks.",
      rules: "Matching tiles merge when pushed together. The run ends when no moves remain.",
      controls: "Use the directional keys to slide the whole board.",
      strategy: "Choose a favorite corner and feed it. Random moves fill the reactor fast.",
      tag: "Strategy",
      accent: "#ffd166",
      glow: "rgba(255, 209, 102, 0.72)",
      background: "linear-gradient(135deg, #2a2210, #102835 58%, #2a1732)",
    },
    {
      id: "driftboss",
      title: "Neon Drift Boss",
      subtitle: "One-button corner control",
      hook: "Hold to drift right, release to slide left, and stay on a shrinking zigzag road.",
      rules: "Keep the car on the neon road. Distance scores points, and checkpoints add bonuses.",
      controls: "Hold Action or Right to turn right. Release to turn left.",
      strategy: "Tap in short bursts. Long holds are fast, but the road punishes over-corrections.",
      tag: "Timing",
      accent: "#ff3d81",
      glow: "rgba(255, 61, 129, 0.7)",
      background: "linear-gradient(135deg, #2a1028, #101f34 58%, #332012)",
    },
    {
      id: "beatfoundry",
      title: "Beat Foundry",
      subtitle: "Strike rotating cores on rhythm",
      hook: "Time your strike as the pulse crosses molten target arcs, then swap lanes before the next core charges.",
      rules: "Press Action inside the glowing timing arc. Clean hits build heat; five missed strikes crack the foundry.",
      controls: "Use Up/Down to choose a core lane. Press Action to strike the active pulse.",
      strategy: "Watch the pulse arm, not the numbers. Perfect strikes are safer than rushing every arc.",
      tag: "Timing",
      accent: "#fb7185",
      glow: "rgba(251, 113, 133, 0.72)",
      background: "linear-gradient(135deg, #2b1118, #102737 58%, #3a2410)",
    },
    {
      id: "snake",
      title: "Byte Snake",
      subtitle: "Contract heists with extraction portals",
      hook: "Steal packets, upload enough cache to satisfy each contract, then escape through the exit portal before firewalls trap your trail.",
      rules: "Packets add cache and length. Uplinks bank cache toward the contract quota. Finish the quota to open an exit portal.",
      controls: "Use the directional keys to steer. Action spends cache to scrub nearby firewall traces.",
      strategy: "Upload in batches, then route toward extraction. Long snakes score well, but short trails make portals reachable.",
      tag: "Survival",
      accent: "#58f29f",
      glow: "rgba(88, 242, 159, 0.7)",
      background: "linear-gradient(135deg, #06251a, #14213b 58%, #17192d)",
    },
    {
      id: "breaker",
      title: "Prism Breaker",
      subtitle: "Breakout with power streaks",
      hook: "Bounce a hot signal ball through brick waves while the paddle gets less forgiving.",
      rules: "Clear bricks for points. Missing the ball costs a life; clearing the wall reloads harder bricks.",
      controls: "Move the paddle with Left/Right. Hold Action for a faster paddle.",
      strategy: "Aim for side tunnels. Once the ball gets above the bricks, the score climbs quickly.",
      tag: "Precision",
      accent: "#b78cff",
      glow: "rgba(183, 140, 255, 0.72)",
      background: "linear-gradient(135deg, #17133d, #0e2538 58%, #321725)",
    },
    {
      id: "pinball",
      title: "Midnight Pinball",
      subtitle: "Keep the chrome ball alive",
      hook: "Work both flippers, hit bumpers, and bank the ball through ramps before it drains.",
      rules: "Bounce the ball with the left and right flippers. Missing the ball costs a life.",
      controls: "Use Left and Right for flippers. Action fires both at once.",
      strategy: "Trap the ball on a flipper before aiming for the top bumpers.",
      tag: "Precision",
      accent: "#ff8a3d",
      glow: "rgba(255, 138, 61, 0.72)",
      background: "linear-gradient(135deg, #2a150b, #1b2440 58%, #321725)",
    },
    {
      id: "river",
      title: "River Rush",
      subtitle: "Checkpoint sprint through rapids",
      hook: "Race between buoy gates, grab rescue flags for extra seconds, and keep the raft moving before the river timer runs dry.",
      rules: "Clear as many checkpoint gates as possible before the countdown expires. Rocks cost time instead of ending the run instantly.",
      controls: "Move with the directional keys. Hold Action for a short speed burst.",
      strategy: "Aim for gates first and flags second. Boosting is worth it only when the next lane is already lined up.",
      tag: "Reflex",
      accent: "#2dd4bf",
      glow: "rgba(45, 212, 191, 0.72)",
      background: "linear-gradient(135deg, #0b2a30, #143a5c 58%, #10261f)",
    },
    {
      id: "keeper",
      title: "Goal Keeper",
      subtitle: "Defend the penalty wall",
      hook: "Slide across the goal, read the shooter, and save faster penalty shots.",
      rules: "Block as many shots as possible. Letting five goals through ends the match.",
      controls: "Move left and right. Hold Action for a wider dive.",
      strategy: "Return to the center after each save so both corners stay reachable.",
      tag: "Reflex",
      accent: "#facc15",
      glow: "rgba(250, 204, 21, 0.72)",
      background: "linear-gradient(135deg, #1b3d1d, #17304d 58%, #3a2a11)",
    },
    {
      id: "memory",
      title: "Memory Match",
      subtitle: "Flip pairs under pressure",
      hook: "Reveal tiles, remember symbols, and clear matching pairs before the timer burns down.",
      rules: "Flip two cards at a time. Matched pairs stay open; missed pairs flip back.",
      controls: "Move the cursor with the directional keys. Press Action to flip.",
      strategy: "Clear corners first, then work inward so positions are easier to remember.",
      tag: "Strategy",
      accent: "#c084fc",
      glow: "rgba(192, 132, 252, 0.72)",
      background: "linear-gradient(135deg, #24133b, #15334a 58%, #291c37)",
    },
    {
      id: "asteroids",
      title: "Asteroid Sweep",
      subtitle: "Survey, mine, and bank ore",
      hook: "Scan drifting asteroids, mine their cores with a short-range beam, then haul ore back to the refinery before your cargo gets too risky.",
      rules: "Hold Action near an asteroid to mine it. Ore fills cargo; docking at the refinery banks it for points.",
      controls: "Move with the directional keys. Hold Action to fire the mining beam at the nearest asteroid.",
      strategy: "Bank often when cargo is high. Bigger asteroids pay better, but staying close to mine them is dangerous.",
      tag: "Survival",
      accent: "#93c5fd",
      glow: "rgba(147, 197, 253, 0.72)",
      background: "linear-gradient(135deg, #0c1228, #1f1d3f 58%, #102b3a)",
    },
    {
      id: "lunar",
      title: "Lunar Dock",
      subtitle: "Soft-land a twitchy moon pod",
      hook: "Feather your thrusters, fight sideways drift, and touch down on moving landing pads without smashing the pod.",
      rules: "Land gently on the bright pad. Crashing costs a hull point; clean docks reload a harder approach.",
      controls: "Left/Right steer side thrusters. Hold Action or Up for main thrust.",
      strategy: "Kill sideways speed first, then slow the fall. A perfect landing is boring in the best possible way.",
      tag: "Precision",
      accent: "#a3e635",
      glow: "rgba(163, 230, 53, 0.72)",
      background: "linear-gradient(135deg, #142017, #10253c 58%, #22142e)",
    },
    {
      id: "repair",
      title: "Circuit Repair",
      subtitle: "Patch bad nodes before overload",
      hook: "Jump around a 3x3 control board, repair sparking nodes, and avoid fake red traps as the circuit speeds up.",
      rules: "Repair blue and gold faults before they expire. Hitting trap nodes or missing faults damages the board.",
      controls: "Move the cursor with the directional keys. Press Action to repair the selected node.",
      strategy: "Gold nodes buy breathing room. Traps look tempting, but they reset your combo.",
      tag: "Reflex",
      accent: "#22d3ee",
      glow: "rgba(34, 211, 238, 0.72)",
      background: "linear-gradient(135deg, #061f25, #172243 58%, #23182f)",
    },
    {
      id: "cipher",
      title: "Cipher Dials",
      subtitle: "Align rotating code wheels under pressure",
      hook: "Rotate three symbol dials to match the target code before the terminal corrupts. It is a quick puzzle, not another dodge run.",
      rules: "Match all three dial symbols to the target and press Action. Failed submits and expired timers add corruption.",
      controls: "Up/Down choose a dial. Left/Right rotate it. Press Action to submit the code.",
      strategy: "Solve the dial with the farthest symbol first, then clean up the close ones before submitting.",
      tag: "Puzzle",
      accent: "#f472b6",
      glow: "rgba(244, 114, 182, 0.72)",
      background: "linear-gradient(135deg, #301026, #112a3d 58%, #241a43)",
    },
    {
      id: "orbitguard",
      title: "Orbit Guard",
      subtitle: "Spin a shield around the core",
      hook: "Rotate a shield ring, block incoming meteors, and keep the neon core alive through converging attack waves.",
      rules: "Meteors fly toward the center. Block them with the shield arc; five impacts overload the core.",
      controls: "Hold Left/Right to rotate the shield. Hold Action for a quick shield sweep.",
      strategy: "Move early, then stop. The shield is wide, but over-rotating opens the opposite side.",
      tag: "Survival",
      accent: "#60a5fa",
      glow: "rgba(96, 165, 250, 0.72)",
      background: "linear-gradient(135deg, #081733, #21163a 58%, #10251c)",
    },
    {
      id: "hoopsduel",
      title: "Retro Hoops Duel",
      subtitle: "2D street-court basket battle",
      hook: "Cross over defenders, pass through lanes, and time jump shots in a compact retro basketball duel.",
      rules: "Score buckets while the clock runs. Clean shots and steals add combo points; blocked shots waste possession time.",
      controls: "Move with the directional keys. Press Action to shoot, pass, or steal when close.",
      strategy: "Drive toward the paint, then release at the top of the jump. Passing opens cleaner shots as the defense speeds up.",
      tag: "Sports",
      accent: "#fb923c",
      glow: "rgba(251, 146, 60, 0.72)",
      background: "linear-gradient(135deg, #2d1606, #14243f 58%, #2b1738)",
    },
    {
      id: "freethrow",
      title: "Moving Hoop",
      subtitle: "Free throws at a sliding rim",
      hook: "Set aim and power while the hoop glides across the backboard. Clean releases turn into streak bonuses.",
      rules: "Shoot free throws into a moving hoop. Swishes score more, rim hits still count, and misses break your streak.",
      controls: "Use Left/Right to aim. Hold Action for power, release to shoot.",
      strategy: "Lead the hoop slightly and keep power near the glowing sweet spot. Streaks matter more than risky full-power shots.",
      tag: "Sports",
      accent: "#f97316",
      glow: "rgba(249, 115, 22, 0.72)",
      background: "linear-gradient(135deg, #351507, #202d4f 58%, #25132f)",
    },
    {
      id: "rallyrush",
      title: "Rally Rush",
      subtitle: "Top-down dirt track racing",
      hook: "Slide through checkpoints, clip apexes, and keep speed through a curving rally course.",
      rules: "Reach checkpoints and stay on the racing line. Off-road slides slow you down, but clean corners multiply score.",
      controls: "Steer with Left/Right. Hold Action to accelerate and Down to brake.",
      strategy: "Brake before turns, not during them. Smooth exits keep your checkpoint combo alive.",
      tag: "Racing",
      accent: "#facc15",
      glow: "rgba(250, 204, 21, 0.72)",
      background: "linear-gradient(135deg, #35270a, #183449 58%, #1d2510)",
    },
    {
      id: "trafficrush",
      title: "Turbo Traffic",
      subtitle: "Highway overtake sprint",
      hook: "Thread traffic, collect boost cans, and chain close overtakes without scraping the guardrail.",
      rules: "Pass cars for points. Near-misses raise combo, collisions cost speed and end the run after too much damage.",
      controls: "Use Left/Right to switch lanes. Hold Action for boost.",
      strategy: "Boost after changing lanes, not before. Near-misses are safest when you already know the next lane is clear.",
      tag: "Racing",
      accent: "#38bdf8",
      glow: "rgba(56, 189, 248, 0.72)",
      background: "linear-gradient(135deg, #061f35, #232044 58%, #10251b)",
    },
    {
      id: "archeryrange",
      title: "Archery Range",
      subtitle: "Windy bullseye challenge",
      hook: "Draw the bow, read the wind, and land arrows on moving targets before they slide away.",
      rules: "Hit targets for points. Bullseyes add streaks, edge hits still score, and missed arrows reset your aim bonus.",
      controls: "Move aim with directional keys. Hold Action to draw, release to fire.",
      strategy: "Aim into the wind and release before full draw when targets are close. Bullseye streaks are worth waiting for.",
      tag: "Precision",
      accent: "#84cc16",
      glow: "rgba(132, 204, 22, 0.72)",
      background: "linear-gradient(135deg, #13270d, #143047 58%, #2a1d12)",
    },
    {
      id: "arrowstorm",
      title: "Arrow Storm",
      subtitle: "Arcade trick-shot archery",
      hook: "Arc arrows over shields, pierce floating rings, and bank trick shots through crowded lanes.",
      rules: "Hit marked targets while avoiding shield blocks. Ring shots curve for bonus points and reload harder patterns.",
      controls: "Use Up/Down to angle. Hold Action for draw power, release to fire.",
      strategy: "Use high arcs to clear blockers. Ring bonuses are easier when the target is falling into your arrow path.",
      tag: "Precision",
      accent: "#c084fc",
      glow: "rgba(192, 132, 252, 0.72)",
      background: "linear-gradient(135deg, #26133d, #132c3d 58%, #311825)",
    },
    {
      id: "doodleroad",
      title: "Doodle Road",
      subtitle: "Draw bridges for a tiny stunt car",
      hook: "Sketch roads, ramps, and bridges, then send the car across a broken doodle course without flipping.",
      rules: "Draw ink lines before driving. The car rides your lines and terrain; reaching the flag reloads a tougher puzzle.",
      controls: "Draw with mouse or touch. Keyboard: move the pencil with arrows, hold Action to draw, release and press Action again to drive.",
      strategy: "Use gentle slopes and short bridge supports. Steep ramps launch the car, but landing flat keeps the run alive.",
      tag: "Arcade",
      accent: "#38bdf8",
      glow: "rgba(56, 189, 248, 0.72)",
      background: "linear-gradient(135deg, #f8fafc, #c7d2fe 58%, #dbeafe)",
    },
    {
      id: "wordflux",
      title: "Word Flux",
      subtitle: "Wordle-style word cabinet",
      hook: "Guess generated five-letter words, read the color feedback, and chain solves before the clock expires.",
      rules: "Green letters are correct, gold letters are in the word, gray letters are misses. Six guesses per word.",
      controls: "Type letters on a keyboard, or use arrows to pick a slot and cycle letters. Press Action or Enter to submit.",
      strategy: "Open with words that test common letters. A fast solve reloads a new random word with a score bonus.",
      tag: "Puzzle",
      accent: "#22c55e",
      glow: "rgba(34, 197, 94, 0.72)",
      background: "linear-gradient(135deg, #052e16, #123047 58%, #1f2937)",
    },
    {
      id: "bubblecannon",
      title: "Bubble Cannon",
      subtitle: "Pop color clusters before they drop",
      hook: "Aim a cannon, fire colored bubbles, and clear matching clusters while the ceiling slowly pushes down.",
      rules: "Three or more touching bubbles of the same color pop. Missed shots make the grid descend faster.",
      controls: "Aim with Left/Right. Press Action to shoot.",
      strategy: "Bank shots into side pockets and clear hanging groups before the bubble wall reaches the warning line.",
      tag: "Arcade",
      accent: "#f472b6",
      glow: "rgba(244, 114, 182, 0.72)",
      background: "linear-gradient(135deg, #301026, #10283d 58%, #1d1934)",
    },
    {
      id: "lockpick",
      title: "Vault Tumbler",
      subtitle: "Crack rotating neon locks",
      hook: "Track the sweeping needle, hit each glowing tumbler window, and open vaults before the mechanism overheats.",
      rules: "Press Action when the needle sits inside the active tumbler zone. Misses add strikes; opening a vault reloads a harder lock.",
      controls: "Use Left/Right to slow or speed the needle. Press Action to lock the active tumbler.",
      strategy: "Use Left to slow the needle near a pin, then release before the next tumbler so you do not arrive late.",
      tag: "Puzzle",
      accent: "#f59e0b",
      glow: "rgba(245, 158, 11, 0.72)",
      background: "linear-gradient(135deg, #2b1a08, #17233f 58%, #301326)",
    },
  ];

  let settings = loadStored("arcade-settings", defaultSettings);
  let keybinds = loadStored("arcade-keybinds", defaultKeybinds);
  let profile = normalizeProfile(loadStored("arcade-profile", defaultProfile));
  let currentScreen = "intro";
  let selectedAboutGame = null;
  let activeGame = null;
  let activeFilter = "all";
  let activeCollection = "all";
  let gameLoopId = 0;
  let lastFrameTime = 0;
  let listeningFor = null;
  let selectedDriftBoosters = {};
  let attractCanvasWidth = 0;
  let attractCanvasHeight = 0;
  let activeRunContext = null;
  let tournament = createTournamentState();
  let cloudSaveTimer = 0;
  let cloudSyncPaused = false;
  const pressed = new Set();
  const touchActionKeys = {};

  const gameCollections = [
    { id: "all", title: "All", icon: "▦", test: () => true },
    { id: "quick", title: "Quick 60s", icon: "◷", test: (game) => ["Reflex", "Timing", "Survival"].includes(game.tag) },
    { id: "brain", title: "Brain", icon: "▣", test: (game) => ["Strategy", "Puzzle"].includes(game.tag) },
    { id: "cars", title: "Car Games", icon: "◈", test: (game) => ["driftboss", "rallyrush", "trafficrush", "doodleroad"].includes(game.id) },
    { id: "sports", title: "Sports Skill", icon: "●", test: (game) => ["Sports", "Precision"].includes(game.tag) },
    { id: "new", title: "New Cabinets", icon: "+", test: (game) => ["doodleroad", "wordflux", "bubblecannon", "hoopsduel", "freethrow", "rallyrush", "trafficrush", "archeryrange", "arrowstorm"].includes(game.id) },
    { id: "hard", title: "Hard Mode", icon: "!", test: (game) => ["driftboss", "beatfoundry", "keeper", "arrowstorm", "lockpick", "orbitguard"].includes(game.id) },
  ];

  const audio = {
    context: null,
    musicOscillator: null,
    musicBass: null,
    musicGain: null,
    melodyTimer: 0,
    ensure() {
      if (!settings.audio) return null;
      const AudioEngine = window.AudioContext || window.webkitAudioContext;
      if (!AudioEngine) return null;
      try {
        if (!this.context) this.context = new AudioEngine();
        if (this.context.state === "suspended") this.context.resume();
      } catch {
        return null;
      }
      return this.context;
    },
    beep(frequency = 420, duration = 0.08, type = "square") {
      const context = this.ensure();
      if (!context) return;
      const oscillator = context.createOscillator();
      const gain = context.createGain();
      oscillator.type = type;
      oscillator.frequency.value = frequency;
      gain.gain.value = Math.max(0.01, settings.volume / 100) * 0.06;
      oscillator.connect(gain);
      gain.connect(context.destination);
      oscillator.start();
      gain.gain.exponentialRampToValueAtTime(0.001, context.currentTime + duration);
      oscillator.stop(context.currentTime + duration);
    },
    chord(notes = [420, 530, 640], duration = 0.12, type = "triangle") {
      notes.forEach((note, index) => {
        window.setTimeout(() => this.beep(note, duration, type), index * 28);
      });
    },
    sfx(name) {
      const map = {
        bank: () => this.chord([520, 680, 880], 0.07, "triangle"),
        hit: () => this.chord([760, 920], 0.045, "square"),
        danger: () => this.chord([140, 90], 0.08, "sawtooth"),
        coin: () => this.chord([720, 900, 1080], 0.035, "triangle"),
        launch: () => this.chord([260, 440, 700], 0.05, "square"),
        menu: () => this.chord([420, 560], 0.035, "triangle"),
        reward: () => this.chord([620, 780, 980, 1240], 0.055, "triangle"),
        puzzle: () => this.chord([330, 495, 660], 0.045, "sine"),
        sport: () => this.chord([520, 740, 960], 0.04, "square"),
        racing: () => this.chord([180, 360, 620], 0.055, "sawtooth"),
      };
      (map[name] || map.hit)();
    },
    startMusic() {
      if (!settings.audio || !settings.music || this.musicOscillator) return;
      const context = this.ensure();
      if (!context) return;
      const oscillator = context.createOscillator();
      const bass = context.createOscillator();
      const gain = context.createGain();
      oscillator.type = "triangle";
      oscillator.frequency.value = 96;
      bass.type = "sine";
      bass.frequency.value = 48;
      gain.gain.value = Math.max(0.01, settings.volume / 100) * 0.012;
      oscillator.connect(gain);
      bass.connect(gain);
      gain.connect(context.destination);
      oscillator.start();
      bass.start();
      this.musicOscillator = oscillator;
      this.musicBass = bass;
      this.musicGain = gain;
      const notes = [96, 128, 144, 171, 144, 128, 192, 171];
      let step = 0;
      this.melodyTimer = window.setInterval(() => {
        if (!settings.audio || !settings.music) return;
        oscillator.frequency.setTargetAtTime(notes[step % notes.length], context.currentTime, 0.035);
        bass.frequency.setTargetAtTime(notes[(step + 4) % notes.length] / 2, context.currentTime, 0.05);
        step += 1;
      }, 420);
    },
    stopMusic() {
      if (this.musicOscillator) {
        this.musicOscillator.stop();
        this.musicOscillator.disconnect();
      }
      if (this.musicBass) {
        this.musicBass.stop();
        this.musicBass.disconnect();
      }
      if (this.melodyTimer) window.clearInterval(this.melodyTimer);
      this.musicOscillator = null;
      this.musicBass = null;
      this.musicGain = null;
      this.melodyTimer = 0;
    },
    refresh() {
      if (!settings.audio || !settings.music) {
        this.stopMusic();
        return;
      }
      this.startMusic();
      if (this.musicGain) this.musicGain.gain.value = Math.max(0.01, settings.volume / 100) * (currentScreen === "play" ? 0.007 : 0.012);
    },
  };

  function loadStored(key, fallback) {
    try {
      return { ...fallback, ...JSON.parse(localStorage.getItem(key)) };
    } catch {
      return { ...fallback };
    }
  }

  function loadJson(key, fallback) {
    try {
      const value = JSON.parse(localStorage.getItem(key));
      return value ?? fallback;
    } catch {
      return fallback;
    }
  }

  function normalizeProfile(value) {
    const unlocked = Array.isArray(value.unlockedSkins) && value.unlockedSkins.length
      ? value.unlockedSkins
      : ["neon"];
    const ownedDriftCars = Array.isArray(value.driftCars) && value.driftCars.length ? value.driftCars : ["starter"];
    const driftBoosters = typeof value.driftBoosters === "object" && value.driftBoosters ? value.driftBoosters : {};
    const arcadeBoosters = typeof value.arcadeBoosters === "object" && value.arcadeBoosters ? value.arcadeBoosters : {};
    const friends = Array.isArray(value.friends) ? value.friends : [];
    const normalizedBoosters = {};
    Object.keys(driftBoosters).forEach((id) => {
      normalizedBoosters[id] = Math.max(0, Math.floor(Number(driftBoosters[id]) || 0));
    });
    const normalizedArcadeBoosters = {};
    Object.keys(arcadeBoosters).forEach((id) => {
      normalizedArcadeBoosters[id] = Math.max(0, Math.floor(Number(arcadeBoosters[id]) || 0));
    });
    const friendCode = cleanFriendCode(value.friendCode) || generateFriendCode(value.name);
    return {
      ...defaultProfile,
      ...value,
      name: cleanPlayerName(value.name, defaultProfile.name),
      avatar: avatarOptions.includes(value.avatar) ? value.avatar : defaultProfile.avatar,
      coins: Math.max(0, Math.floor(Number(value.coins) || 0)),
      xp: Math.max(0, Math.floor(Number(value.xp) || 0)),
      skin: skinDefinitions.some((skin) => skin.id === value.skin) ? value.skin : defaultProfile.skin,
      unlockedSkins: [...new Set(["neon", ...unlocked])],
      driftCars: [...new Set(["starter", ...ownedDriftCars])],
      driftCar: driftCars.some((car) => car.id === value.driftCar) && ownedDriftCars.includes(value.driftCar) ? value.driftCar : "starter",
      driftBoosters: normalizedBoosters,
      driftSensitivity: clamp(Number(value.driftSensitivity) || defaultProfile.driftSensitivity, 70, 140),
      friendCode,
      friends: friends
        .map((friend) => ({
          code: cleanFriendCode(friend.code),
          name: cleanPlayerName(friend.name, "Friend"),
          avatar: String(friend.avatar || "P2").slice(0, 3).toUpperCase(),
          totalBest: Math.max(0, Math.floor(Number(friend.totalBest) || 0)),
          level: Math.max(1, Math.floor(Number(friend.level) || 1)),
          addedAt: friend.addedAt || new Date().toISOString(),
        }))
        .filter((friend) => friend.code && friend.code !== friendCode),
      lastDailyReward: /^\d{4}-\d{2}-\d{2}$/.test(value.lastDailyReward || "") ? value.lastDailyReward : "",
      rewardStreak: Math.max(0, Math.floor(Number(value.rewardStreak) || 0)),
      missions: typeof value.missions === "object" && value.missions ? value.missions : {},
      claimedSeasonRewards: Array.isArray(value.claimedSeasonRewards)
        ? [...new Set(value.claimedSeasonRewards.map((level) => Math.max(0, Math.floor(Number(level) || 0))).filter(Boolean))]
        : [],
      title: titleDefinitions.some((title) => title.id === value.title) ? value.title : defaultProfile.title,
      friendChallenges: Array.isArray(value.friendChallenges) ? value.friendChallenges.slice(0, 6) : [],
      masteryRewards: typeof value.masteryRewards === "object" && value.masteryRewards ? value.masteryRewards : {},
      featuredRewards: typeof value.featuredRewards === "object" && value.featuredRewards ? value.featuredRewards : {},
      ownedTitles: Array.isArray(value.ownedTitles) ? [...new Set(value.ownedTitles.map(String))] : [],
      arcadeBoosters: normalizedArcadeBoosters,
      selectedArcadeBooster: arcadeMarketItems.some((item) => item.type === "booster" && item.id === value.selectedArcadeBooster) ? value.selectedArcadeBooster : "",
    };
  }

  function saveProfile(syncCloud = true) {
    profile = normalizeProfile(profile);
    localStorage.setItem("arcade-profile", JSON.stringify(profile));
    applySkin();
    renderProfile();
    renderSkins();
    renderArcadeMarket();
    renderDriftShop();
    if (syncCloud) scheduleCloudProfileSave();
  }

  function saveAllProgress(showMessage = false) {
    saveProfile(!showMessage);
    saveSettings();
    saveKeybinds();
    localStorage.setItem("arcade-last-save", new Date().toISOString());
    if (showMessage) saveCloudProfile(true);
    if (showMessage && saveFeedback) {
      saveFeedback.textContent = `Progress saved at ${new Date().toLocaleTimeString([], { hour: "numeric", minute: "2-digit" })}.`;
      window.clearTimeout(saveAllProgress.feedbackTimer);
      saveAllProgress.feedbackTimer = window.setTimeout(() => {
        saveFeedback.textContent = "";
      }, 2600);
    }
  }

  function setCloudProfileStatus(message, tone = "neutral") {
    if (!cloudProfileStatus) return;
    cloudProfileStatus.textContent = message;
    cloudProfileStatus.dataset.tone = tone;
  }

  function renderCloudAccountStatus(user = null, message = "") {
    const uid = user?.uid || window.arcadeCloud?.getUserId?.() || "";
    const cloudReady = Boolean(uid);
    if (cloudAccountId) cloudAccountId.textContent = cloudReady ? `${uid.slice(0, 6)}...${uid.slice(-4)}` : "Local only";
    if (cloudAccountStatus) {
      cloudAccountStatus.textContent = message || (cloudReady
        ? "Anonymous cloud profile is connected for saves, friends, and global scores."
        : "Local progress works now. Enable Firebase Anonymous Auth for cloud sync.");
      cloudAccountStatus.dataset.tone = cloudReady ? "success" : "warning";
    }
    if (leaderboardCloudState) leaderboardCloudState.textContent = cloudReady ? "Online" : "Local";
    if (leaderboardCloudStatus) {
      leaderboardCloudStatus.textContent = cloudReady
        ? "Global scores are available. Your finished runs submit automatically."
        : "Cloud leaderboards need Firebase Anonymous Auth before online scores can load.";
    }
    if (refreshLeaderboardsButton) refreshLeaderboardsButton.disabled = !window.arcadeCloud?.getScores;
  }

  function getLocalGameProgress() {
    return gameDefinitions.map((game) => ({
      id: game.id,
      bestScore: getBestScore(game.id),
      bestTime: getBestTime(game.id),
      plays: getPlayCount(game.id),
      leaderboard: getLeaderboard(game.id),
    }));
  }

  function getCloudProgressPayload() {
    return {
      version: 1,
      profile: normalizeProfile(profile),
      settings: { ...settings, playLevel: normalizedPlayLevel(settings.playLevel) },
      keybinds: { ...defaultKeybinds, ...keybinds },
      achievements: getAchievements(),
      recentPlays: loadJson("arcade-recent-plays", []),
      tournamentHistory: getTournamentHistory(),
      games: getLocalGameProgress(),
      publicProfile: publicProfileSnapshot(),
      savedAt: new Date().toISOString(),
    };
  }

  function applyCloudProgressPayload(payload) {
    if (!payload || typeof payload !== "object") return false;
    cloudSyncPaused = true;
    try {
      if (payload.profile) {
        profile = normalizeProfile(payload.profile);
        localStorage.setItem("arcade-profile", JSON.stringify(profile));
      }
      if (payload.settings) {
        settings = { ...defaultSettings, ...payload.settings };
        localStorage.setItem("arcade-settings", JSON.stringify(settings));
      }
      if (payload.keybinds) {
        keybinds = { ...defaultKeybinds, ...payload.keybinds };
        localStorage.setItem("arcade-keybinds", JSON.stringify(keybinds));
      }
      if (Array.isArray(payload.achievements)) {
        localStorage.setItem("arcade-achievements", JSON.stringify([...new Set(payload.achievements)]));
      }
      if (Array.isArray(payload.recentPlays)) {
        localStorage.setItem("arcade-recent-plays", JSON.stringify(payload.recentPlays.slice(0, 5)));
      }
      if (Array.isArray(payload.tournamentHistory)) {
        localStorage.setItem("arcade-tournament-history", JSON.stringify(payload.tournamentHistory.slice(0, 8)));
      }
      if (Array.isArray(payload.games)) {
        payload.games.forEach((game) => {
          if (!gameDefinitions.some((definition) => definition.id === game.id)) return;
          localStorage.setItem(`arcade-best-${game.id}`, Math.max(0, Math.floor(Number(game.bestScore) || 0)).toString());
          localStorage.setItem(`arcade-best-time-${game.id}`, Math.max(0, Number(game.bestTime) || 0).toFixed(1));
          localStorage.setItem(`arcade-plays-${game.id}`, Math.max(0, Math.floor(Number(game.plays) || 0)).toString());
          if (Array.isArray(game.leaderboard)) {
            localStorage.setItem(`arcade-leaderboard-${game.id}`, JSON.stringify(game.leaderboard.slice(0, 5)));
          }
        });
      }
    } finally {
      cloudSyncPaused = false;
    }
    applySkin();
    applySettings();
    renderProfile();
    renderSkins();
    renderDriftShop();
    renderGameCards();
    renderLeaderboards();
    renderAchievements();
    renderSocialHub();
    renderProgression();
    renderRecentPlays();
    renderHistory();
    renderKeybinds();
    return true;
  }

  function scheduleCloudProfileSave() {
    if (cloudSyncPaused || !settings.autoCloudSync || !window.arcadeCloud?.saveProfile) return;
    window.clearTimeout(cloudSaveTimer);
    cloudSaveTimer = window.setTimeout(() => {
      saveCloudProfile(false);
    }, 1800);
  }

  async function saveCloudProfile(showMessage = false) {
    if (!window.arcadeCloud?.saveProfile) {
      setCloudProfileStatus("Cloud sync is not loaded yet. Local progress is safe.", "warning");
      return false;
    }
    setCloudProfileStatus("Saving cloud profile...", "neutral");
    try {
      await window.arcadeCloud.saveProfile(getCloudProgressPayload());
      if (window.arcadeCloud.registerFriendCode) {
        await window.arcadeCloud.registerFriendCode(publicProfileSnapshot());
      }
      const savedAt = new Date().toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });
      setCloudProfileStatus(`Cloud profile saved at ${savedAt}.`, "success");
      if (showMessage && saveFeedback) saveFeedback.textContent = `Cloud profile saved at ${savedAt}.`;
      return true;
    } catch (error) {
      console.warn("Cloud profile save failed.", error);
      setCloudProfileStatus("Cloud profile unavailable. Check Firebase Auth and Firestore setup.", "warning");
      return false;
    }
  }

  async function loadCloudProfile() {
    if (!window.arcadeCloud?.loadProfile) {
      setCloudProfileStatus("Cloud sync is not loaded yet. Local progress is safe.", "warning");
      return false;
    }
    setCloudProfileStatus("Loading cloud profile...", "neutral");
    try {
      const cloudProfile = await window.arcadeCloud.loadProfile();
      if (!cloudProfile) {
        setCloudProfileStatus("No cloud profile found yet. Save once to create it.", "warning");
        return false;
      }
      applyCloudProgressPayload(cloudProfile);
      const savedAt = cloudProfile.savedAt ? new Date(cloudProfile.savedAt).toLocaleString([], { dateStyle: "short", timeStyle: "short" }) : "just now";
      setCloudProfileStatus(`Cloud profile loaded from ${savedAt}.`, "success");
      return true;
    } catch (error) {
      console.warn("Cloud profile load failed.", error);
      setCloudProfileStatus("Cloud profile unavailable. Check Firebase Auth and Firestore setup.", "warning");
      return false;
    }
  }

  function initializeCloudProfileStatus() {
    if (!window.arcadeCloud?.ready) {
      setCloudProfileStatus("Connecting cloud profile...", "neutral");
      window.addEventListener("arcade-cloud-ready", initializeCloudProfileStatus, { once: true });
      window.setTimeout(() => {
        if (!window.arcadeCloud?.ready) {
          setCloudProfileStatus("Cloud sync is offline. Local progress is safe.", "warning");
        }
      }, 3500);
      return;
    }
    setCloudProfileStatus("Connecting cloud profile...", "neutral");
    window.arcadeCloud.ready
      .then((user) => {
        if (user) {
          setCloudProfileStatus("Cloud sync ready. Save or load this profile from any device.", "success");
          renderCloudAccountStatus(user);
          if (cloudSaveButton) cloudSaveButton.disabled = false;
          if (cloudLoadButton) cloudLoadButton.disabled = false;
          return;
        }
        renderCloudAccountStatus(null);
        setCloudProfileStatus("Enable Anonymous Auth in Firebase to sync this profile.", "warning");
      })
      .catch((error) => {
        console.warn("Cloud profile setup failed.", error);
        renderCloudAccountStatus(null, "Cloud sync is unavailable. Local progress is safe.");
        setCloudProfileStatus("Cloud sync is unavailable. Local progress is safe.", "warning");
      });
  }

  function getProfileLevel() {
    return Math.floor(profile.xp / 250) + 1;
  }

  function getSeasonLevel() {
    return clamp(Math.floor(profile.xp / 300) + 1, 1, 10);
  }

  function getSeasonLevelXp(level = getSeasonLevel()) {
    return Math.max(0, (level - 1) * 300);
  }

  function getSeasonProgress() {
    const level = getSeasonLevel();
    const currentFloor = getSeasonLevelXp(level);
    const nextFloor = getSeasonLevelXp(Math.min(10, level + 1));
    const span = Math.max(1, nextFloor - currentFloor);
    const progress = level >= 10 ? 1 : clamp((profile.xp - currentFloor) / span, 0, 1);
    return { level, currentFloor, nextFloor, progress };
  }

  function getMasteryForGame(game) {
    const score = getBestScore(game.id);
    const time = getBestTime(game.id);
    const plays = getPlayCount(game.id);
    const scorePoints = Math.floor(score / 550);
    const timePoints = Math.floor(time / 15);
    const playPoints = Math.floor(plays / 2);
    const level = clamp(1 + scorePoints + timePoints + playPoints, 1, 10);
    const nextTarget = level >= 10 ? "Maxed" : `${Math.max(0, level * 550 - score)} score or ${(level + 1) * 2} plays`;
    return { level, score, time, plays, nextTarget };
  }

  function masteryRewardFor(game, level) {
    if (level >= 10) return { tier: "master", title: `${game.title} Master`, coins: 120, xp: 220 };
    if (level >= 6) return { tier: "adept", title: `${game.title} Adept`, coins: 70, xp: 130 };
    if (level >= 3) return { tier: "rookie", title: `${game.title} Regular`, coins: 35, xp: 70 };
    return null;
  }

  function checkMasteryReward(game) {
    const mastery = getMasteryForGame(game);
    const reward = masteryRewardFor(game, mastery.level);
    if (!reward) return null;
    const key = `${game.id}-${reward.tier}`;
    if (profile.masteryRewards?.[key]) return null;
    profile.masteryRewards = {
      ...profile.masteryRewards,
      [key]: new Date().toISOString(),
    };
    profile.coins += reward.coins;
    profile.xp += reward.xp;
    saveProfile();
    unlockAchievement("mastery-tier");
    return reward;
  }

  function claimSeasonReward(level) {
    const reward = seasonRewards.find((item) => item.level === level);
    if (!reward || profile.claimedSeasonRewards.includes(level) || getSeasonLevel() < level) {
      audio.beep(180, 0.08, "sawtooth");
      return;
    }
    profile.claimedSeasonRewards.push(level);
    profile.coins += reward.coins;
    profile.xp += reward.xp;
    saveProfile();
    renderProgression();
    renderSocialHub(`Season reward claimed: ${reward.coins} coins.`);
    audio.chord([620, 820, 1080], 0.06, "triangle");
  }

  function addProgress({ coins = 0, xp = 0 } = {}) {
    profile.coins += Math.max(0, Math.floor(coins));
    profile.xp += Math.max(0, Math.floor(xp));
    saveProfile();
  }

  function activeSkin() {
    return skinDefinitions.find((skin) => skin.id === profile.skin) || skinDefinitions[0];
  }

  function applySkin() {
    const skin = activeSkin();
    document.documentElement.style.setProperty("--hot", skin.hot);
    document.documentElement.style.setProperty("--sun", skin.sun);
    document.documentElement.style.setProperty("--cool", skin.cool);
    document.documentElement.style.setProperty("--mint", skin.mint);
    document.documentElement.style.setProperty("--bg", skin.bg);
    document.body.dataset.skin = skin.id;
  }

  function renderProfile() {
    profileAvatar.textContent = profile.avatar;
    profileNameLabel.textContent = profile.name;
    profileLevelLabel.textContent = `Level ${getProfileLevel()}`;
    profileCoinsLabel.textContent = profile.coins.toString();
    profileXpLabel.textContent = profile.xp.toString();
    profileNameInput.value = profile.name;
    renderProfileTitles();
    driftSensitivitySlider.value = profile.driftSensitivity;
    driftSensitivityValue.textContent = `${profile.driftSensitivity}%`;
    avatarPicker.querySelectorAll("button").forEach((button) => {
      button.classList.toggle("active", button.dataset.avatar === profile.avatar);
    });
  }

  function activeTitle() {
    return titleDefinitions.find((title) => title.id === profile.title) || titleDefinitions[0];
  }

  function renderProfileTitles() {
    if (!profileTitleSelect) return;
    profileTitleSelect.innerHTML = titleDefinitions
      .map((title) => {
        const unlocked = title.unlock();
        const selected = title.id === profile.title;
        return `<option value="${title.id}" ${selected ? "selected" : ""} ${unlocked ? "" : "disabled"}>${title.title}${unlocked ? "" : " - locked"}</option>`;
      })
      .join("");
    if (!activeTitle().unlock()) {
      profile.title = "rookie";
      profileTitleSelect.value = "rookie";
    }
    profileLevelLabel.textContent = `${activeTitle().title} · Level ${getProfileLevel()}`;
  }

  function renderAvatarPicker() {
    avatarPicker.innerHTML = "";
    avatarOptions.forEach((avatar) => {
      const button = document.createElement("button");
      button.className = "avatar-choice";
      button.type = "button";
      button.dataset.avatar = avatar;
      button.textContent = avatar;
      button.addEventListener("click", () => {
        profile.avatar = avatar;
        saveProfile();
        audio.beep(520, 0.05, "triangle");
      });
      avatarPicker.append(button);
    });
  }

  function renderSkins() {
    skinGrid.innerHTML = "";
    skinDefinitions.forEach((skin) => {
      const unlocked = profile.unlockedSkins.includes(skin.id);
      const equipped = profile.skin === skin.id;
      const button = document.createElement("button");
      button.className = `skin-card${equipped ? " equipped" : ""}`;
      button.type = "button";
      button.style.setProperty("--skin-hot", skin.hot);
      button.style.setProperty("--skin-cool", skin.cool);
      button.innerHTML = `
        <span class="skin-swatch" aria-hidden="true"></span>
        <strong>${skin.title}</strong>
        <small>${skin.description}</small>
        <em>${equipped ? "Equipped" : unlocked ? "Equip" : `${skin.cost} coins`}</em>
      `;
      button.addEventListener("click", () => {
        if (!unlocked) {
          if (profile.coins < skin.cost) {
            audio.beep(180, 0.08, "sawtooth");
            return;
          }
          profile.coins -= skin.cost;
          profile.unlockedSkins.push(skin.id);
        }
        profile.skin = skin.id;
        saveProfile();
        audio.beep(660, 0.07, "triangle");
      });
      skinGrid.append(button);
    });
  }

  function getArcadeBoosterCount(id) {
    return Math.max(0, Math.floor(Number(profile.arcadeBoosters?.[id]) || 0));
  }

  function renderArcadeMarket() {
    if (!arcadeMarket) return;
    arcadeMarket.innerHTML = `
      <div class="drift-shop-header">
        <span>Coin balance</span>
        <strong>${profile.coins}</strong>
        <small>${profile.selectedArcadeBooster ? `Next run: ${arcadeMarketItems.find((item) => item.id === profile.selectedArcadeBooster)?.title}` : "No ticket selected"}</small>
      </div>
      <div class="market-items">
        ${arcadeMarketItems.map((item) => {
          const isTitle = item.type === "title";
          const ownedTitle = isTitle && profile.ownedTitles?.includes(item.id);
          const ownedBoosters = !isTitle ? getArcadeBoosterCount(item.id) : 0;
          const selected = profile.selectedArcadeBooster === item.id;
          const action = isTitle
            ? ownedTitle ? "Unlocked" : `${item.cost} coins`
            : selected ? "Selected" : ownedBoosters ? `Use next · Owned ${ownedBoosters}` : `${item.cost} coins`;
          return `
            <button class="market-card${selected ? " selected" : ""}${ownedTitle ? " owned" : ""}" type="button" data-market-item="${item.id}">
              <b>${item.icon}</b>
              <strong>${item.title}</strong>
              <small>${item.description}</small>
              <em>${action}</em>
            </button>
          `;
        }).join("")}
      </div>
    `;
    arcadeMarket.querySelectorAll("[data-market-item]").forEach((button) => {
      button.addEventListener("click", () => buyOrSelectMarketItem(button.dataset.marketItem));
    });
  }

  function buyOrSelectMarketItem(id) {
    const item = arcadeMarketItems.find((entry) => entry.id === id);
    if (!item) return;
    if (item.type === "title") {
      if (profile.ownedTitles?.includes(item.id)) {
        profile.title = item.id;
        saveProfile();
        audio.sfx("menu");
        return;
      }
      if (profile.coins < item.cost) {
        audio.beep(180, 0.08, "sawtooth");
        return;
      }
      profile.coins -= item.cost;
      profile.ownedTitles = [...new Set([...(profile.ownedTitles || []), item.id])];
      profile.title = item.id;
      saveProfile();
      audio.sfx("reward");
      return;
    }
    if (getArcadeBoosterCount(item.id) > 0) {
      profile.selectedArcadeBooster = profile.selectedArcadeBooster === item.id ? "" : item.id;
      saveProfile();
      audio.sfx("menu");
      return;
    }
    if (profile.coins < item.cost) {
      audio.beep(180, 0.08, "sawtooth");
      return;
    }
    profile.coins -= item.cost;
    profile.arcadeBoosters[item.id] = getArcadeBoosterCount(item.id) + 1;
    profile.selectedArcadeBooster = item.id;
    saveProfile();
    audio.sfx("reward");
  }

  function consumeSelectedArcadeBooster() {
    const id = profile.selectedArcadeBooster;
    const item = arcadeMarketItems.find((entry) => entry.type === "booster" && entry.id === id);
    if (!item || getArcadeBoosterCount(id) <= 0) {
      profile.selectedArcadeBooster = "";
      saveProfile(false);
      return null;
    }
    profile.arcadeBoosters[id] = getArcadeBoosterCount(id) - 1;
    profile.selectedArcadeBooster = "";
    saveProfile(false);
    renderArcadeMarket();
    return item;
  }

  function activeDriftCar() {
    return driftCars.find((car) => car.id === profile.driftCar) || driftCars[0];
  }

  function getBoosterCount(id) {
    return Math.max(0, Math.floor(Number(profile.driftBoosters?.[id]) || 0));
  }

  function selectedBoosterCount() {
    return Object.values(selectedDriftBoosters).filter(Boolean).length;
  }

  function normalizeSelectedDriftBoosters() {
    driftBoosters.forEach((booster) => {
      if (getBoosterCount(booster.id) <= 0) selectedDriftBoosters[booster.id] = false;
    });
  }

  function consumeDriftBoosters() {
    normalizeSelectedDriftBoosters();
    const activeBoosters = {
      doubleScore: Boolean(selectedDriftBoosters.doubleScore && getBoosterCount("doubleScore") > 0),
      insurance: Boolean(selectedDriftBoosters.insurance && getBoosterCount("insurance") > 0),
      coinRush: Boolean(selectedDriftBoosters.coinRush && getBoosterCount("coinRush") > 0),
    };
    Object.entries(activeBoosters).forEach(([id, enabled]) => {
      if (enabled) {
        profile.driftBoosters[id] = getBoosterCount(id) - 1;
        selectedDriftBoosters[id] = false;
      }
    });
    if (Object.values(activeBoosters).some(Boolean)) saveProfile();
    return activeBoosters;
  }

  function renderDriftShop() {
    [driftShop, driftStartShop].forEach((container) => renderDriftShopInto(container));
  }

  function renderDriftShopInto(container) {
    if (!container) return;
    normalizeSelectedDriftBoosters();
    const isStartShop = container === driftStartShop;
    const active = activeDriftCar();
    container.innerHTML = `
      <div class="drift-shop-header">
        <span>Coin balance</span>
        <strong>${profile.coins}</strong>
        <small>${isStartShop ? `${selectedBoosterCount()} boosters selected` : `Equipped: ${active.name}`}</small>
      </div>
      <div class="drift-shop-grid drift-cars">
        ${driftCars
          .map((car) => {
            const owned = profile.driftCars.includes(car.id);
            const equipped = profile.driftCar === car.id;
            return `
              <button class="drift-card${equipped ? " equipped" : ""}" type="button" data-car="${car.id}">
                <span class="mini-car" style="--car:${car.color}; --roof:${car.roof}; --stripe:${car.stripe}"></span>
                <strong>${car.name}</strong>
                <small>${car.bonus}</small>
                <em>${equipped ? "Equipped" : owned ? "Equip" : `${car.cost} coins`}</em>
              </button>
            `;
          })
          .join("")}
      </div>
      <div class="drift-shop-grid drift-boosters">
        ${driftBoosters
          .map((booster) => {
            const owned = getBoosterCount(booster.id);
            const selected = Boolean(selectedDriftBoosters[booster.id] && owned > 0);
            return `
              <button class="booster-card${selected ? " selected" : ""}" type="button" data-booster="${booster.id}">
                <b>${booster.icon}</b>
                <strong>${booster.name}</strong>
                <small>${booster.description}</small>
                <em>${isStartShop && owned ? selected ? "Selected for next run" : `Tap to select · Owned ${owned}` : `${booster.cost} coins · Owned ${owned}`}</em>
              </button>
            `;
          })
          .join("")}
      </div>
    `;
    container.querySelectorAll("[data-car]").forEach((button) => {
      button.addEventListener("click", () => {
        const car = driftCars.find((item) => item.id === button.dataset.car);
        if (!car) return;
        const owned = profile.driftCars.includes(car.id);
        if (!owned) {
          if (profile.coins < car.cost) {
            audio.beep(180, 0.08, "sawtooth");
            return;
          }
          profile.coins -= car.cost;
          profile.driftCars.push(car.id);
        }
        profile.driftCar = car.id;
        saveProfile();
        audio.beep(620, 0.06, "triangle");
      });
    });
    container.querySelectorAll("[data-booster]").forEach((button) => {
      button.addEventListener("click", () => {
        const booster = driftBoosters.find((item) => item.id === button.dataset.booster);
        if (!booster) return;
        if (isStartShop && getBoosterCount(booster.id) > 0) {
          selectedDriftBoosters[booster.id] = !selectedDriftBoosters[booster.id];
          renderDriftShop();
          audio.beep(selectedDriftBoosters[booster.id] ? 820 : 360, 0.05, "triangle");
          return;
        }
        if (profile.coins < booster.cost) {
          audio.beep(180, 0.08, "sawtooth");
          return;
        }
        profile.coins -= booster.cost;
        profile.driftBoosters[booster.id] = getBoosterCount(booster.id) + 1;
        saveProfile();
        audio.beep(720, 0.06, "square");
      });
    });
  }

  function getBestScore(id) {
    return Number(localStorage.getItem(`arcade-best-${id}`) || 0);
  }

  function getBestTime(id) {
    return Number(localStorage.getItem(`arcade-best-time-${id}`) || 0);
  }

  function getPlayCount(id) {
    return Number(localStorage.getItem(`arcade-plays-${id}`) || 0);
  }

  function recordPlay(id) {
    localStorage.setItem(`arcade-plays-${id}`, (getPlayCount(id) + 1).toString());
  }

  function saveBestScore(id, score) {
    if (score > getBestScore(id)) {
      localStorage.setItem(`arcade-best-${id}`, score.toString());
      updateIntroDashboard();
    }
  }

  function saveBestTime(id, seconds) {
    const value = Math.min(60, Math.max(0, Number(seconds) || 0));
    if (value > getBestTime(id)) {
      localStorage.setItem(`arcade-best-time-${id}`, value.toFixed(1));
      updateIntroDashboard();
    }
  }

  function getLeaderboard(id) {
    const entries = loadJson(`arcade-leaderboard-${id}`, []);
    return Array.isArray(entries) ? entries : [];
  }

  function saveLeaderboardEntry(id, entry) {
    const leaderboard = getLeaderboard(id);
    leaderboard.push({
      player: entry.player || profile.name,
      score: Math.floor(entry.score || 0),
      time: Math.min(60, Math.max(0, Number(entry.time) || 0)),
      mode: entry.mode || "Solo",
      date: new Date().toISOString(),
    });
    leaderboard.sort((a, b) => b.score - a.score || b.time - a.time);
    localStorage.setItem(`arcade-leaderboard-${id}`, JSON.stringify(leaderboard.slice(0, 5)));
  }

  function getRecentPlays() {
    const recent = loadJson("arcade-recent-plays", []);
    return Array.isArray(recent) ? recent : [];
  }

  function saveRecentPlay(result) {
    const game = gameDefinitions.find((definition) => definition.id === result.gameId);
    const recent = getRecentPlays().filter((entry) => entry.gameId !== result.gameId);
    recent.unshift({
      gameId: result.gameId,
      title: game?.title || "Unknown Cabinet",
      score: Math.floor(result.score || 0),
      time: Math.min(60, Math.max(0, Number(result.time) || 0)),
      mode: result.mode || "Solo",
      date: new Date().toISOString(),
    });
    localStorage.setItem("arcade-recent-plays", JSON.stringify(recent.slice(0, 5)));
  }

  function markRecentlyPlayed(gameId, mode = "Solo") {
    const bestScore = getBestScore(gameId);
    const bestTime = getBestTime(gameId);
    saveRecentPlay({ gameId, score: bestScore, time: bestTime, mode });
    renderRecentPlays();
  }

  function saveRunResult(game, playerName = profile.name, mode = "Solo") {
    const score = Math.floor(game.score);
    const time = Math.min(60, game.elapsed);
    const driftCoins = game.definition.id === "driftboss" ? Math.floor((game.trackCoins || 0) / 5) : 0;
    const baseCoinReward = Math.max(5, Math.floor(score / 220) + Math.floor(time / 15) + (mode === "Daily Challenge" ? 10 : 0));
    const booster = game.arcadeBooster;
    const coinBonus = booster?.id === "coinTicket" ? 45 : 0;
    const xpBonus = booster?.id === "xpTicket" ? 90 : 0;
    const coinReward = Math.min(game.definition.id === "driftboss" ? 135 : 185, baseCoinReward + driftCoins + coinBonus);
    const xpReward = Math.max(12, Math.floor(score / 12) + Math.floor(time * 1.5) + xpBonus);
    saveBestScore(game.definition.id, score);
    saveBestTime(game.definition.id, time);
    saveLeaderboardEntry(game.definition.id, { player: playerName, score, time, mode });
    checkRunAchievements({ gameId: game.definition.id, score, time, mode });
    addProgress({ coins: coinReward, xp: xpReward });
    const featuredReward = claimFeaturedPlayReward(game.definition.id);
    const masteryReward = checkMasteryReward(game.definition);
    renderGameCards();
    renderLeaderboards();
    renderAchievements();
    renderSocialHub();
    renderProgression();
    const result = { gameId: game.definition.id, player: playerName, score, time, mode, coinReward, xpReward, masteryReward, featuredReward, booster };
    saveRecentPlay(result);
    saveCloudRunResult(result);
    renderRecentPlays();
    checkDailyChallenge(result);
    checkFriendChallenge(result);
    return result;
  }

  function saveCloudRunResult(result) {
    if (!window.arcadeCloud?.saveScore) return;
    window.arcadeCloud.saveScore(result)
      .then((response) => {
        if (response) unlockAchievement("cloud-seed");
      })
      .catch((error) => {
        console.warn("Cloud leaderboard save failed. Local leaderboard still works.", error);
      });
  }

  function checkRunAchievements(result) {
    unlockAchievement("first-run");
    if (result.time >= 59.5) unlockAchievement("full-minute");
    if (result.score >= 500) unlockAchievement("score-500");
    if (result.score >= 1000) unlockAchievement("score-1000");
    if (result.gameId === "tictactoe" && result.score >= 200) unlockAchievement("noughts-master");
    const played = getPlayedGameCount();
    if (played >= 5) unlockAchievement("five-cabinets");
    if (played >= gameDefinitions.length) unlockAchievement("all-cabinets");
  }

  function claimFeaturedPlayReward(gameId) {
    const challenge = getDailyChallenge();
    const key = todayKey();
    if (gameId !== challenge.game.id || profile.featuredRewards?.[key]) return null;
    const reward = { coins: 35, xp: 75, title: "Featured Play" };
    profile.featuredRewards = { ...profile.featuredRewards, [key]: gameId };
    profile.coins += reward.coins;
    profile.xp += reward.xp;
    saveProfile();
    audio.sfx("reward");
    return reward;
  }

  function checkTournamentAchievements(winner, mode) {
    if (!winner) return;
    unlockAchievement("tournament-win");
    if (mode === "bot") unlockAchievement("bot-win");
    addProgress({ coins: mode === "bot" ? 60 : 45, xp: 120 });
    renderAchievements();
  }

  function formatRunTime(seconds) {
    const value = Math.max(0, Number(seconds) || 0);
    return value >= 60 ? "60s" : `${value.toFixed(value >= 10 ? 0 : 1)}s`;
  }

  function createTournamentState() {
    return {
      active: false,
      mode: "local",
      gameId: "random",
      gameIds: [],
      difficulty: "normal",
      players: [],
      rounds: [],
      results: [],
      currentIndex: 0,
      roundIndex: 0,
      matchWins: [0, 0],
      waitingForNext: false,
      winnerText: "",
    };
  }

  function getAchievements() {
    const unlocked = loadJson("arcade-achievements", []);
    return Array.isArray(unlocked) ? unlocked : [];
  }

  function unlockAchievement(id) {
    const unlocked = getAchievements();
    if (unlocked.includes(id)) return false;
    unlocked.push(id);
    localStorage.setItem("arcade-achievements", JSON.stringify(unlocked));
    addProgress({ coins: 40, xp: 100 });
    return true;
  }

  function getPlayedGameCount() {
    return gameDefinitions.filter((game) => getPlayCount(game.id) > 0).length;
  }

  function getTournamentHistory() {
    const history = loadJson("arcade-tournament-history", []);
    return Array.isArray(history) ? history : [];
  }

  function saveTournamentHistory(entry) {
    const history = getTournamentHistory();
    history.unshift({
      ...entry,
      date: new Date().toISOString(),
    });
    localStorage.setItem("arcade-tournament-history", JSON.stringify(history.slice(0, 8)));
  }

  function saveSettings() {
    localStorage.setItem("arcade-settings", JSON.stringify(settings));
    applySettings();
    scheduleCloudProfileSave();
  }

  function saveKeybinds() {
    localStorage.setItem("arcade-keybinds", JSON.stringify(keybinds));
    renderKeybinds();
    scheduleCloudProfileSave();
  }

  function getDebugReports() {
    const reports = loadJson("arcade-debug-reports", []);
    return Array.isArray(reports) ? reports : [];
  }

  function saveDebugReports(reports) {
    localStorage.setItem("arcade-debug-reports", JSON.stringify(reports.slice(0, 8)));
  }

  function isUpdatingNoticeEnabled() {
    return localStorage.getItem("arcade-site-updating") === "true";
  }

  function setUpdatingNotice(enabled) {
    localStorage.setItem("arcade-site-updating", enabled ? "true" : "false");
    renderDebugSystem();
  }

  function renderDebugSystem(message = "") {
    const updating = isUpdatingNoticeEnabled();
    if (siteStatusBanner) {
      siteStatusBanner.classList.toggle("visible", updating);
      siteStatusBanner.textContent = updating ? "Cool Arcade is being updated. Some games may change while you play." : "";
    }
    if (debugStatusTitle) debugStatusTitle.textContent = updating ? "Updating" : "Live";
    if (debugStatusText) {
      debugStatusText.textContent = updating
        ? "The website is currently being updated. If something looks broken, submit a report and try again after the update finishes."
        : "The arcade is ready. If a game breaks, send a report with the cabinet name and what happened.";
    }
    if (toggleUpdateNoticeButton) toggleUpdateNoticeButton.textContent = updating ? "Mark Website Live" : "Show Updating Notice";
    if (debugFeedback && message) debugFeedback.textContent = message;
    if (debugReportTitle) debugReportTitle.textContent = `Recent reports · ${getDebugReports().filter((report) => report.status !== "fixed").length} open`;
    if (!debugReportList) return;
    const reports = getDebugReports();
    debugReportList.innerHTML = reports.length
      ? reports.map((report, index) => `
          <article class="debug-report${report.status === "fixed" ? " fixed" : ""}">
            <strong>${escapeHtml(report.type)} · ${escapeHtml(report.area || "General")}</strong>
            <p>${escapeHtml(report.message)}</p>
            <span>${report.status === "fixed" ? "Fixed" : "Open"} · ${new Date(report.date).toLocaleString()}</span>
            <div class="debug-report-actions">
              <button class="secondary-button compact" type="button" data-report-fixed="${index}" ${report.status === "fixed" ? "disabled" : ""}>Mark Fixed</button>
              <button class="secondary-button compact" type="button" data-report-delete="${index}">Delete</button>
            </div>
          </article>
        `).join("")
      : `<p class="empty-cabinets">No reports yet.</p>`;
  }

  function submitDebugReport(event) {
    event.preventDefault();
    const message = debugMessage.value.trim();
    if (!message) {
      renderDebugSystem("Add a short description before submitting.");
      return;
    }
    const reports = getDebugReports();
    const report = {
      type: debugType.value,
      area: debugArea.value.trim(),
      message,
      screen: currentScreen,
      date: new Date().toISOString(),
      userAgent: navigator.userAgent,
      status: "open",
    };
    reports.unshift(report);
    saveDebugReports(reports);
    debugForm.reset();
    audio.beep(760, 0.06, "triangle");
    renderDebugSystem("Report saved on this device.");
    if (window.arcadeCloud?.sendReport) {
      window.arcadeCloud.sendReport(report)
        .then((response) => {
          if (response) renderDebugSystem("Report saved locally and sent to Firebase.");
        })
        .catch(() => renderDebugSystem("Report saved locally. Cloud report is not available yet."));
    }
  }

  function updateDebugReport(index, action) {
    const reports = getDebugReports();
    if (!reports[index]) return;
    if (action === "fixed") reports[index] = { ...reports[index], status: "fixed", fixedAt: new Date().toISOString() };
    if (action === "delete") reports.splice(index, 1);
    saveDebugReports(reports);
    renderDebugSystem(action === "fixed" ? "Report marked fixed." : "Report deleted.");
  }

  function applySettings() {
    settings.playLevel = normalizedPlayLevel(settings.playLevel);
    settings.autoCloudSync = settings.autoCloudSync !== false;
    audioToggle.checked = settings.audio;
    musicToggle.checked = settings.music;
    motionToggle.checked = settings.reducedMotion;
    if (autoCloudSyncToggle) autoCloudSyncToggle.checked = settings.autoCloudSync;
    volumeSlider.value = settings.volume;
    volumeValue.textContent = `${settings.volume}%`;
    muteIcon.textContent = settings.audio ? "♪" : "x";
    playLevelButtons.forEach((button) => {
      button.classList.toggle("active", Number(button.dataset.playLevel) === settings.playLevel);
    });
    document.body.classList.toggle("reduced-motion", settings.reducedMotion);
    audio.refresh();
  }

  function normalizedPlayLevel(level) {
    return clamp(Math.round(Number(level) || 1), 1, 3);
  }

  function playLevelName(level = settings.playLevel) {
    return ["", "Level 1", "Level 2", "Level 3"][normalizedPlayLevel(level)];
  }

  function playLevelStart(level = settings.playLevel) {
    return [1, 1, 3, 5][normalizedPlayLevel(level)];
  }

  function playLevelPace(level = settings.playLevel) {
    return [1, 1, 1.2, 1.45][normalizedPlayLevel(level)];
  }

  function playLevelScoreBonus(level = settings.playLevel) {
    return [1, 1, 1.15, 1.35][normalizedPlayLevel(level)];
  }

  function showScreen(name) {
    Object.entries(screens).forEach(([screenName, element]) => {
      element.classList.toggle("screen-active", screenName === name);
    });
    if (screens[name]) screens[name].scrollTop = 0;
    window.scrollTo?.(0, 0);
    currentScreen = name;
    document.body.dataset.screen = name;
    updateRailState(name);
    const titleMap = {
      intro: "Mini Arcade",
      daily: "Daily Challenge",
      games: "Pick Game",
      about: selectedAboutGame?.title ?? "About",
      leaderboards: "Leaderboards",
      achievements: "Achievements",
      social: "Missions & Friends",
      progression: "Season Pass",
      tournament: "Tournament",
      history: "History",
      settings: "Settings",
      keybinds: "Keybinds",
      debug: "Debug & Status",
      play: activeGame?.title ?? "Playing",
    };
    screenTitle.textContent = titleMap[name];
    backButton.classList.toggle("hidden", name === "intro");
    if (name !== "play") {
      stopGameLoop();
      activeRunContext = null;
    }
    if (name === "games") renderGameCards();
    if (name === "daily") renderDailyChallenge();
    if (name === "leaderboards") renderLeaderboards();
    if (name === "achievements") renderAchievements();
    if (name === "social") renderSocialHub();
    if (name === "progression") renderProgression();
    if (name === "tournament") renderTournament();
    if (name === "history") renderHistory();
    if (name === "debug") renderDebugSystem();
    if (name === "settings") {
      renderProfile();
      renderSkins();
      renderArcadeMarket();
      renderDriftShop();
      renderCloudAccountStatus();
    }
    audio.refresh();
  }

  function renderGameCards() {
    renderCollections();
    gameGrid.innerHTML = "";
    const query = gameSearch.value.trim().toLowerCase();
    const collection = activeCollectionDefinition();
    const visibleGames = gameDefinitions.filter((game) => {
      const matchesFilter = activeFilter === "all" || game.tag === activeFilter;
      const matchesCollection = collection.test(game);
      const haystack = `${game.title} ${game.subtitle} ${game.hook} ${game.tag}`.toLowerCase();
      return matchesFilter && matchesCollection && haystack.includes(query);
    });

    if (!visibleGames.length) {
      gameGrid.innerHTML = `<div class="empty-cabinets">No cabinets match that search.</div>`;
      return;
    }

    visibleGames.forEach((game, index) => {
      const card = document.createElement("article");
      card.className = "game-card";
      card.dataset.game = game.id;
      card.style.setProperty("--preview-bg", game.background);
      card.style.setProperty("--preview-accent", game.accent);
      card.style.setProperty("--preview-glow", game.glow);
      card.style.setProperty("--stagger", `${index * 55}ms`);
      card.innerHTML = `
        <div class="game-preview" aria-hidden="true">
          <span class="preview-score">Best ${getBestScore(game.id)}</span>
          <span class="preview-line preview-line-a"></span>
          <span class="preview-line preview-line-b"></span>
          <span class="preview-token"></span>
          <span class="preview-scene preview-${game.id}">${previewSceneFor(game.id)}</span>
          <strong class="preview-symbol">${previewSymbolFor(game.id)}</strong>
          <span class="preview-caption">${previewCaptionFor(game.id)}</span>
        </div>
        <div class="game-card-body">
          <div>
            <p class="kicker">${game.tag}</p>
            <h3>${game.title}</h3>
          </div>
          <div class="card-actions">
            <button class="primary-button compact" type="button" data-action="play">Play</button>
            <button class="secondary-button compact" type="button" data-action="about">About</button>
          </div>
        </div>
      `;
      gameGrid.append(card);
    });
    renderGameDetailDock(visibleGames[0] || null);
  }

  function resetGameBrowser() {
    activeFilter = "all";
    activeCollection = "all";
    gameSearch.value = "";
    globalSearch.value = "";
    filterTabs.querySelectorAll(".filter-tab").forEach((tab) => {
      tab.classList.toggle("active", tab.dataset.filter === "all");
    });
    renderCollections();
    renderGameCards();
  }

  function renderCollections() {
    if (!collectionStrip) return;
    collectionStrip.innerHTML = gameCollections
      .map((collection) => {
        const count = gameDefinitions.filter((game) => collection.test(game)).length;
        return `
          <button class="collection-chip${collection.id === activeCollection ? " active" : ""}" type="button" data-collection="${collection.id}">
            <span>${collection.icon}</span>
            <strong>${collection.title}</strong>
            <em>${count}</em>
          </button>
        `;
      })
      .join("");
  }

  function activeCollectionDefinition() {
    return gameCollections.find((collection) => collection.id === activeCollection) || gameCollections[0];
  }

  function renderGameDetailDock(game = null) {
    if (!gameDetailDock) return;
    const target = game || getDailyChallenge().game;
    const mastery = getMasteryForGame(target);
    const collection = activeCollectionDefinition();
    gameDetailDock.style.setProperty("--preview-bg", target.background);
    gameDetailDock.style.setProperty("--preview-accent", target.accent);
    gameDetailDock.style.setProperty("--preview-glow", target.glow);
    gameDetailDock.innerHTML = `
      <div class="detail-preview game-preview" aria-hidden="true">
        <span class="preview-score">Best ${getBestScore(target.id)}</span>
        <span class="preview-line preview-line-a"></span>
        <span class="preview-line preview-line-b"></span>
        <span class="preview-token"></span>
        <span class="preview-scene preview-${target.id}">${previewSceneFor(target.id)}</span>
      </div>
      <div class="detail-copy">
        <span class="kicker">${collection.title} · ${target.tag}</span>
        <h3>${target.title}</h3>
        <p>${target.subtitle}</p>
        <div class="leaderboard-metrics">
          <span><strong>${mastery.level}</strong> Mastery</span>
          <span><strong>${getBestScore(target.id)}</strong> Best</span>
          <span><strong>${formatRunTime(getBestTime(target.id))}</strong> Time</span>
        </div>
        <div class="detail-actions">
          <button class="primary-button compact" type="button" data-detail-play="${target.id}">Play</button>
          <button class="secondary-button compact" type="button" data-detail-about="${target.id}">About</button>
        </div>
      </div>
    `;
  }

  function previewSymbolFor(id) {
    const symbols = {
      dodger: "RIFT",
      popper: "TARGET",
      runner: "LANE",
      flap: "WINGS",
      tictactoe: "X/O",
      tetris: "BLOCKS",
      twenty48: "2048",
      driftboss: "DRIFT",
      beatfoundry: "BEAT",
      snake: "SNAKE",
      breaker: "PADDLE",
      pinball: "FLIPPER",
      river: "RAPIDS",
      keeper: "GOAL",
      memory: "MATCH",
      asteroids: "MINER",
      lunar: "LANDER",
      repair: "CIRCUIT",
      cipher: "CODE",
      orbitguard: "SHIELD",
      hoopsduel: "COURT",
      freethrow: "HOOP",
      rallyrush: "RALLY",
      trafficrush: "LANES",
      archeryrange: "BULLSEYE",
      arrowstorm: "TRICKSHOT",
      doodleroad: "ROAD",
      wordflux: "WORDLE",
      bubblecannon: "BUBBLES",
      lockpick: "VAULT",
    };
    return symbols[id] || "PLAY";
  }

  function previewSceneFor(id) {
    const scenes = {
      dodger: `<i class="mini-player"></i><i class="mini-hazard a"></i><i class="mini-hazard b"></i><i class="mini-ring"></i>`,
      popper: `<i class="mini-crosshair"></i><i class="mini-target a"></i><i class="mini-target b"></i>`,
      runner: `<i class="mini-lanes"></i><i class="mini-runner"></i><i class="mini-block a"></i><i class="mini-block b"></i>`,
      flap: `<i class="mini-bird"></i><i class="mini-pipe a"></i><i class="mini-pipe b"></i>`,
      tictactoe: `<i class="mini-grid xo"></i><b>X</b><b>O</b>`,
      tetris: `<i class="mini-stack a"></i><i class="mini-stack b"></i><i class="mini-stack c"></i>`,
      twenty48: `<i class="mini-tile a">2</i><i class="mini-tile b">4</i><i class="mini-tile c">8</i>`,
      driftboss: `<i class="mini-road"></i><i class="mini-car"></i><i class="mini-coin a"></i><i class="mini-coin b"></i>`,
      beatfoundry: `<i class="mini-dial"></i><i class="mini-pulse"></i><i class="mini-core a"></i><i class="mini-core b"></i>`,
      snake: `<i class="mini-snake-grid"></i><i class="mini-snake"></i><i class="mini-packet a"></i><i class="mini-uplink"></i><i class="mini-portal"></i>`,
      breaker: `<i class="mini-bricks"></i><i class="mini-ball"></i><i class="mini-paddle"></i>`,
      pinball: `<i class="mini-bumper a"></i><i class="mini-bumper b"></i><i class="mini-flipper a"></i><i class="mini-flipper b"></i>`,
      river: `<i class="mini-river"></i><i class="mini-raft"></i><i class="mini-gate"></i>`,
      keeper: `<i class="mini-goal"></i><i class="mini-keeper"></i><i class="mini-ball soccer"></i>`,
      memory: `<i class="mini-card a"></i><i class="mini-card b"></i><i class="mini-card c"></i>`,
      asteroids: `<i class="mini-ship"></i><i class="mini-asteroid a"></i><i class="mini-asteroid b"></i><i class="mini-beam"></i>`,
      lunar: `<i class="mini-lander"></i><i class="mini-pad"></i><i class="mini-thrust"></i>`,
      repair: `<i class="mini-nodes"></i><i class="mini-cursor"></i>`,
      cipher: `<i class="mini-cipher a"></i><i class="mini-cipher b"></i><i class="mini-cipher c"></i>`,
      orbitguard: `<i class="mini-core-orbit"></i><i class="mini-shield"></i><i class="mini-meteor a"></i><i class="mini-meteor b"></i>`,
      hoopsduel: `<i class="mini-court"></i><i class="mini-hoop"></i><i class="mini-baller a"></i><i class="mini-baller b"></i><i class="mini-ball basket"></i>`,
      freethrow: `<i class="mini-backboard"></i><i class="mini-hoop moving"></i><i class="mini-arc"></i><i class="mini-ball basket shot"></i>`,
      rallyrush: `<i class="mini-rally-road"></i><i class="mini-rally-car"></i><i class="mini-dust a"></i><i class="mini-dust b"></i>`,
      trafficrush: `<i class="mini-highway"></i><i class="mini-traffic-car player"></i><i class="mini-traffic-car a"></i><i class="mini-traffic-car b"></i>`,
      archeryrange: `<i class="mini-bow"></i><i class="mini-arrow"></i><i class="mini-archery-target"></i><i class="mini-wind"></i>`,
      arrowstorm: `<i class="mini-archery-target storm"></i><i class="mini-shield-block"></i><i class="mini-arrow high"></i><i class="mini-ring-shot"></i>`,
      doodleroad: `<i class="mini-pencil"></i><i class="mini-doodle-line"></i><i class="mini-doodle-car"></i><i class="mini-flag"></i>`,
      wordflux: `<i class="mini-word-tile a">G</i><i class="mini-word-tile b">A</i><i class="mini-word-tile c">M</i><i class="mini-word-tile d">E</i>`,
      bubblecannon: `<i class="mini-bubble a"></i><i class="mini-bubble b"></i><i class="mini-bubble c"></i><i class="mini-cannon"></i>`,
      lockpick: `<i class="mini-vault"></i><i class="mini-needle"></i><i class="mini-pin a"></i><i class="mini-pin b"></i>`,
    };
    return scenes[id] || `<i class="mini-player"></i>`;
  }

  function previewCaptionFor(id) {
    const captions = {
      dodger: "Seal rifts",
      popper: "Hit target",
      runner: "Switch lanes",
      flap: "Thread gates",
      tictactoe: "Win rows",
      tetris: "Clear lines",
      twenty48: "Merge cores",
      driftboss: "Hold turns",
      beatfoundry: "Strike beat",
      snake: "Upload quota",
      breaker: "Break wall",
      pinball: "Hit bumpers",
      river: "Run gates",
      keeper: "Save shots",
      memory: "Match pairs",
      asteroids: "Mine ore",
      lunar: "Soft land",
      repair: "Patch nodes",
      cipher: "Align dials",
      orbitguard: "Block meteors",
      hoopsduel: "Score buckets",
      freethrow: "Sink shots",
      rallyrush: "Clip apexes",
      trafficrush: "Pass traffic",
      archeryrange: "Hit bullseyes",
      arrowstorm: "Arc shots",
      doodleroad: "Draw roads",
      wordflux: "Guess words",
      bubblecannon: "Pop clusters",
      lockpick: "Crack vault",
    };
    return captions[id] || "Play run";
  }

  function difficultyFor(game) {
    const scale = {
      Survival: "Medium",
      Precision: "Sharp",
      Reflex: "Fast",
      Timing: "Tricky",
      Strategy: "Smart",
      Puzzle: "Brainy",
    };
    return scale[game.tag] || "Normal";
  }

  function getDailyGame() {
    const daySeed = Math.floor(Date.now() / 86_400_000);
    return gameDefinitions[daySeed % gameDefinitions.length];
  }

  function getDailyKey() {
    return new Date().toISOString().slice(0, 10);
  }

  function getDailyChallenge() {
    const daySeed = Math.floor(Date.now() / 86_400_000);
    const game = gameDefinitions[daySeed % gameDefinitions.length];
    const scoreBase = {
      Survival: 520,
      Precision: 620,
      Reflex: 560,
      Timing: 500,
      Strategy: 460,
    }[game.tag] || 500;
    const scoreTarget = scoreBase + (daySeed % 5) * 70;
    const timeTarget = 35 + (daySeed % 4) * 5;
    const useTime = daySeed % 3 === 0;
    return {
      key: getDailyKey(),
      game,
      type: useTime ? "time" : "score",
      target: useTime ? timeTarget : scoreTarget,
      label: useTime ? `Survive ${timeTarget}s` : `Score ${scoreTarget}`,
    };
  }

  function getDailyResult() {
    return loadJson(`arcade-daily-${getDailyKey()}`, null);
  }

  function saveDailyResult(result, challenge, completed) {
    const current = getDailyResult();
    const value = {
      gameId: challenge.game.id,
      gameTitle: challenge.game.title,
      type: challenge.type,
      target: challenge.target,
      completed,
      score: result.score,
      time: result.time,
      date: challenge.key,
    };
    if (!current || completed || result.score > current.score || result.time > current.time) {
      localStorage.setItem(`arcade-daily-${challenge.key}`, JSON.stringify(value));
    }
  }

  function checkDailyChallenge(result) {
    if (!activeRunContext?.daily) return;
    const challenge = activeRunContext.challenge;
    const completed = challenge.type === "score" ? result.score >= challenge.target : result.time >= challenge.target;
    saveDailyResult(result, challenge, completed);
    dailyStatusTitle.textContent = completed ? "Challenge complete" : "Run saved";
    dailyStatus.textContent = completed
      ? `${result.player} beat today's ${challenge.label} goal with ${result.score} points and ${formatRunTime(result.time)}.`
      : `${result.player} logged ${result.score} points and ${formatRunTime(result.time)}. Try again for ${challenge.label}.`;
    renderDailyChallenge();
  }

  function dailyRewardValue() {
    const streak = profile.lastDailyReward === previousDayKey() ? profile.rewardStreak + 1 : profile.lastDailyReward === todayKey() ? profile.rewardStreak : 1;
    return {
      streak,
      coins: Math.min(260, 70 + streak * 15),
      xp: Math.min(520, 150 + streak * 35),
    };
  }

  function previousDayKey() {
    const date = new Date();
    date.setDate(date.getDate() - 1);
    return todayKey(date);
  }

  function claimDailyReward() {
    if (profile.lastDailyReward === todayKey()) {
      renderSocialHub("Daily reward already claimed.");
      audio.beep(180, 0.08, "sawtooth");
      return;
    }
    const reward = dailyRewardValue();
    profile.rewardStreak = reward.streak;
    profile.lastDailyReward = todayKey();
    profile.coins += reward.coins;
    profile.xp += reward.xp;
    saveProfile();
    renderSocialHub(`Claimed ${reward.coins} coins and ${reward.xp} XP.`);
    audio.chord([520, 760, 980], 0.07, "triangle");
  }

  function getMissionState(id) {
    return profile.missions?.[id] || {};
  }

  function claimMission(id) {
    const mission = missionDefinitions.find((item) => item.id === id);
    if (!mission) return;
    const progress = Math.min(mission.target, mission.progress());
    const state = getMissionState(id);
    if (state.claimed || progress < mission.target) {
      audio.beep(180, 0.08, "sawtooth");
      return;
    }
    profile.missions = {
      ...profile.missions,
      [id]: {
        claimed: true,
        claimedAt: new Date().toISOString(),
      },
    };
    profile.coins += mission.rewardCoins;
    profile.xp += mission.rewardXp;
    saveProfile();
    renderSocialHub(`Mission reward claimed: ${mission.rewardCoins} coins.`);
    audio.chord([640, 840, 1040], 0.06, "triangle");
  }

  function addFriendFromInput() {
    const code = cleanFriendCode(friendCodeInput.value);
    if (!code) {
      setFriendFeedback("Enter a friend code first.", "warning");
      return;
    }
    if (code === profile.friendCode) {
      setFriendFeedback("That is your own friend code.", "warning");
      return;
    }
    if (profile.friends.some((friend) => friend.code === code)) {
      setFriendFeedback("That friend is already on your board.", "warning");
      return;
    }
    const friend = {
      code,
      name: `Friend ${code.slice(-3)}`,
      avatar: "P2",
      totalBest: 0,
      level: 1,
      addedAt: new Date().toISOString(),
    };
    profile.friends = [...profile.friends, friend].slice(0, 12);
    friendCodeInput.value = "";
    saveProfile();
    setFriendFeedback("Friend added. Cloud lookup will fill in their stats when available.", "success");
    renderFriendsBoard();
    loadCloudFriend(code);
  }

  function setFriendFeedback(message, tone = "neutral") {
    if (!friendFeedback) return;
    friendFeedback.textContent = message;
    friendFeedback.dataset.tone = tone;
  }

  function updateFriend(friendData) {
    if (!friendData?.code) return;
    profile.friends = profile.friends.map((friend) => friend.code === friendData.code ? { ...friend, ...friendData } : friend);
    saveProfile();
    renderFriendsBoard();
  }

  function loadCloudFriend(code) {
    if (!window.arcadeCloud?.findFriend) return;
    window.arcadeCloud.findFriend(code)
      .then((friend) => {
        if (!friend) return;
        updateFriend(friend);
        setFriendFeedback(`${friend.name} synced to your friends board.`, "success");
      })
      .catch((error) => {
        console.warn("Friend lookup failed.", error);
      });
  }

  function createFriendChallenge(code) {
    const friend = profile.friends.find((item) => item.code === code);
    if (!friend) return;
    const game = getDailyGame();
    const target = Math.max(350, getBestScore(game.id), Math.floor((friend.totalBest || totalBestScoreValue() || 1200) / 6));
    const challenge = {
      id: `${code}-${game.id}-${todayKey()}`,
      code,
      friendName: friend.name,
      gameId: game.id,
      gameTitle: game.title,
      target,
      completed: false,
      createdAt: new Date().toISOString(),
    };
    profile.friendChallenges = [
      challenge,
      ...profile.friendChallenges.filter((item) => item.id !== challenge.id),
    ].slice(0, 6);
    unlockAchievement("friend-rival");
    saveProfile();
    renderFriendChallenges(`${friend.name} challenge created.`);
    audio.beep(720, 0.06, "triangle");
  }

  function startFriendChallenge(id) {
    const challenge = profile.friendChallenges.find((item) => item.id === id);
    if (!challenge) return;
    startGame(challenge.gameId, {
      friendChallenge: challenge,
      player: profile.name,
      mode: "Friend Challenge",
    });
  }

  function checkFriendChallenge(result) {
    const challenge = activeRunContext?.friendChallenge;
    if (!challenge) return;
    const completed = result.gameId === challenge.gameId && result.score >= challenge.target;
    profile.friendChallenges = profile.friendChallenges.map((item) => item.id === challenge.id
      ? { ...item, completed, bestScore: Math.max(item.bestScore || 0, result.score), completedAt: completed ? new Date().toISOString() : item.completedAt }
      : item);
    if (completed) {
      profile.coins += 75;
      profile.xp += 180;
      unlockAchievement("friend-rival");
      audio.sfx("bank");
    }
    saveProfile();
    renderSocialHub(completed ? `Friend challenge cleared: ${challenge.friendName}.` : `Friend challenge best: ${result.score}/${challenge.target}.`);
  }

  function renderSocialHub(message = "") {
    renderDailyReward(message);
    renderMissions();
    renderFriendChallenges();
    renderFriendsBoard();
  }

  function renderFriendChallenges(message = "") {
    if (!friendChallengePanel) return;
    const challenges = profile.friendChallenges || [];
    friendChallengePanel.innerHTML = `
      <article class="leaderboard-row friends-title">
        <div class="leaderboard-rank">VS</div>
        <div>
          <span class="kicker">Friend challenges</span>
          <h3>${message || (challenges.length ? "Beat a friend's target" : "No active challenges")}</h3>
          <p>${challenges.length ? "Start a challenge run and beat the target score for bonus coins and XP." : "Add a friend, then press Challenge on their row."}</p>
        </div>
      </article>
      ${challenges
        .map((challenge) => `
          <article class="leaderboard-row friend-row">
            <div class="leaderboard-rank">${challenge.completed ? "✓" : "!"}</div>
            <div>
              <span class="kicker">${challenge.friendName}</span>
              <h3>${challenge.gameTitle}</h3>
              <div class="leaderboard-metrics">
                <span><strong>${challenge.target}</strong> Target</span>
                <span><strong>${challenge.bestScore || 0}</strong> Your best</span>
                <span><strong>${challenge.completed ? "Done" : "Open"}</strong> Status</span>
              </div>
            </div>
            <button class="secondary-button compact" type="button" data-start-friend-challenge="${challenge.id}" ${challenge.completed ? "disabled" : ""}>
              ${challenge.completed ? "Cleared" : "Start"}
            </button>
          </article>
        `)
        .join("")}
    `;
    friendChallengePanel.querySelectorAll("[data-start-friend-challenge]").forEach((button) => {
      button.addEventListener("click", () => startFriendChallenge(button.dataset.startFriendChallenge));
    });
  }

  function renderDailyReward(message = "") {
    const claimed = profile.lastDailyReward === todayKey();
    const reward = dailyRewardValue();
    dailyRewardTitle.textContent = claimed ? `Streak ${profile.rewardStreak}` : `${reward.coins} Coins`;
    dailyRewardStatus.textContent = message || (claimed
      ? "Today's reward is claimed. Come back tomorrow to keep the streak alive."
      : `Claim ${reward.coins} coins and ${reward.xp} XP. Current streak: ${profile.rewardStreak}.`);
    claimDailyRewardButton.disabled = claimed;
    claimDailyRewardButton.textContent = claimed ? "Claimed Today" : "Claim Daily Reward";
  }

  function renderMissions() {
    missionGrid.innerHTML = "";
    missionDefinitions.forEach((mission) => {
      const progress = Math.min(mission.target, mission.progress());
      const percent = Math.round((progress / mission.target) * 100);
      const state = getMissionState(mission.id);
      const complete = progress >= mission.target;
      const card = document.createElement("article");
      card.className = `mission-card${complete ? " complete" : ""}${state.claimed ? " claimed" : ""}`;
      card.innerHTML = `
        <div>
          <span class="kicker">${state.claimed ? "Claimed" : complete ? "Ready" : "Mission"}</span>
          <h3>${mission.title}</h3>
          <p>${mission.description}</p>
        </div>
        <div class="mission-progress" aria-label="${mission.title} progress">
          <span style="width: ${percent}%"></span>
        </div>
        <div class="mission-footer">
          <strong>${Math.floor(progress)}/${mission.target}</strong>
          <button class="secondary-button compact" type="button" ${complete && !state.claimed ? "" : "disabled"}>
            ${state.claimed ? "Claimed" : `Claim ${mission.rewardCoins}`}
          </button>
        </div>
      `;
      card.querySelector("button").addEventListener("click", () => claimMission(mission.id));
      missionGrid.append(card);
    });
  }

  function renderFriendsBoard() {
    friendCodeValue.textContent = profile.friendCode;
    const rows = [publicProfileSnapshot(), ...profile.friends]
      .sort((a, b) => Number(b.totalBest || 0) - Number(a.totalBest || 0));
    friendsBoard.innerHTML = `
      <article class="leaderboard-row friends-title">
        <div class="leaderboard-rank">◎</div>
        <div>
          <span class="kicker">Friends board</span>
          <h3>${profile.friends.length ? `${profile.friends.length} friends connected` : "No friends yet"}</h3>
          <p>Add a code to compare total best scores. Cloud lookup updates names when Firebase Auth is enabled.</p>
        </div>
      </article>
      ${rows
        .map(
          (friend, index) => `
            <article class="leaderboard-row friend-row">
              <div class="leaderboard-rank">${index + 1}</div>
              <div>
                <span class="kicker">${friend.code === profile.friendCode ? "You" : friend.code}</span>
                <h3>${friend.name}</h3>
                <div class="leaderboard-metrics">
                  <span><strong>${friend.totalBest || 0}</strong> Total best</span>
                  <span><strong>${friend.level || 1}</strong> Level</span>
                  <span><strong>${friend.favorite || "Pending"}</strong> Favorite</span>
                </div>
              </div>
              ${friend.code === profile.friendCode ? "" : `<button class="secondary-button compact" type="button" data-challenge-friend="${friend.code}">Challenge</button>`}
            </article>
          `,
        )
        .join("")}
    `;
    friendsBoard.querySelectorAll("[data-challenge-friend]").forEach((button) => {
      button.addEventListener("click", () => createFriendChallenge(button.dataset.challengeFriend));
    });
  }

  function renderProgression() {
    const season = getSeasonProgress();
    const masteredCount = gameDefinitions.filter((game) => getMasteryForGame(game).level >= 10).length;
    seasonLevelTitle.textContent = `Level ${season.level}`;
    seasonProgressText.textContent = season.level >= 10
      ? "Season track complete. Keep playing to raise cabinet mastery."
      : `${profile.xp - season.currentFloor}/${season.nextFloor - season.currentFloor} XP to Level ${season.level + 1}.`;
    seasonProgressBar.style.width = `${Math.round(season.progress * 100)}%`;
    masterySummaryTitle.textContent = `${masteredCount}/${gameDefinitions.length} mastered`;

    seasonTrack.innerHTML = seasonRewards
      .map((reward) => {
        const unlocked = season.level >= reward.level;
        const claimed = profile.claimedSeasonRewards.includes(reward.level);
        return `
          <article class="season-reward-card${unlocked ? " unlocked" : ""}${claimed ? " claimed" : ""}">
            <span class="kicker">Level ${reward.level}</span>
            <h3>${reward.title}</h3>
            <p>${reward.description}</p>
            <div class="mission-footer">
              <strong>${reward.coins} coins${reward.xp ? ` · ${reward.xp} XP` : ""}</strong>
              <button class="secondary-button compact" type="button" data-season-reward="${reward.level}" ${unlocked && !claimed ? "" : "disabled"}>
                ${claimed ? "Claimed" : unlocked ? "Claim" : "Locked"}
              </button>
            </div>
          </article>
        `;
      })
      .join("");

    seasonTrack.querySelectorAll("[data-season-reward]").forEach((button) => {
      button.addEventListener("click", () => claimSeasonReward(Number(button.dataset.seasonReward)));
    });

    masteryGrid.innerHTML = gameDefinitions
      .map((game) => {
        const mastery = getMasteryForGame(game);
        return `
          <article class="mastery-card" style="--preview-accent: ${game.accent}; --preview-glow: ${game.glow};">
            <div>
              <span class="kicker">${game.tag} mastery</span>
              <h3>${game.title}</h3>
            </div>
            <strong>Lv ${mastery.level}</strong>
            <div class="mission-progress" aria-label="${game.title} mastery progress">
              <span style="width: ${mastery.level * 10}%"></span>
            </div>
            <div class="leaderboard-metrics">
              <span><strong>${mastery.score}</strong> Best</span>
              <span><strong>${formatRunTime(mastery.time)}</strong> Time</span>
              <span><strong>${mastery.plays}</strong> Plays</span>
            </div>
            <p>${mastery.nextTarget}</p>
          </article>
        `;
      })
      .join("");
  }

  function renderDailyChallenge() {
    const challenge = getDailyChallenge();
    const result = getDailyResult();
    const featuredClaimed = profile.featuredRewards?.[todayKey()] === challenge.game.id;
    dailyCard.style.setProperty("--preview-accent", challenge.game.accent);
    dailyCard.style.setProperty("--preview-glow", challenge.game.glow);
    dailyCard.innerHTML = `
      <span class="kicker">${challenge.game.tag} cabinet</span>
      <h3>${challenge.game.title}</h3>
      <p>${challenge.game.hook}</p>
      <div class="leaderboard-metrics">
        <span><strong>${challenge.label}</strong> Goal</span>
        <span><strong>${result?.completed ? "Done" : "Open"}</strong> Status</span>
        <span><strong>${featuredClaimed ? "Claimed" : "+35"}</strong> Featured</span>
        <span><strong>${result ? result.score : 0}</strong> Best daily</span>
      </div>
    `;
    if (!result) {
      dailyStatusTitle.textContent = "Ready";
      dailyStatus.textContent = `Today's goal is ${challenge.label} in ${challenge.game.title}. Featured play bonus: ${featuredClaimed ? "claimed" : "35 coins and 75 XP"}.`;
    } else if (result.completed) {
      dailyStatusTitle.textContent = "Complete";
      dailyStatus.textContent = `Cleared with ${result.score} points and ${formatRunTime(result.time)}.`;
    } else {
      dailyStatusTitle.textContent = "Still open";
      dailyStatus.textContent = `Best daily run: ${result.score} points, ${formatRunTime(result.time)}.`;
    }
  }

  function startDailyChallenge() {
    const challenge = getDailyChallenge();
    startGame(challenge.game.id, {
      daily: true,
      player: profile.name,
      mode: "Daily Challenge",
      challenge,
    });
  }

  function updateIntroDashboard() {
    const totalBest = gameDefinitions.reduce((sum, game) => sum + getBestScore(game.id), 0);
    const mostPlayed = [...gameDefinitions].sort((a, b) => getPlayCount(b.id) - getPlayCount(a.id))[0];
    const daily = getDailyChallenge();
    totalBestScore.textContent = totalBest.toString();
    favoriteCabinet.textContent = getPlayCount(mostPlayed.id) ? mostPlayed.title : "None";
    dailyChallenge.textContent = daily.game.title;
    const feature = getFeaturedCabinet();
    renderCabinetSpotlight(feature.game, feature.label);
    renderProfile();
    renderRecentPlays();
  }

  function getFeaturedCabinet() {
    const daily = getDailyChallenge().game;
    const newest = gameDefinitions.find((game) => game.id === "lockpick") || gameDefinitions[gameDefinitions.length - 1];
    const mostPlayed = [...gameDefinitions].sort((a, b) => getPlayCount(b.id) - getPlayCount(a.id))[0] || daily;
    const mastery = [...gameDefinitions].sort((a, b) => getMasteryForGame(b).level - getMasteryForGame(a).level)[0] || daily;
    const features = [
      { label: "Daily Challenge", game: daily },
      { label: "Newest Cabinet", game: newest },
      { label: getPlayCount(mostPlayed.id) ? "Most Played" : "Starter Pick", game: getPlayCount(mostPlayed.id) ? mostPlayed : newest },
      { label: "Highest Mastery", game: mastery },
    ];
    return features[Math.floor(Date.now() / 7000) % features.length];
  }

  function renderRecentPlays() {
    const recent = getRecentPlays();
    if (!recentStatus || !recentList) return;
    recentStatus.textContent = recent.length ? `${recent[0].title} · ${recent[0].score}` : "No runs yet";
    recentList.innerHTML = "";
    if (!recent.length) {
      recentList.innerHTML = `<button class="recent-chip empty" type="button">Play a cabinet</button>`;
      return;
    }
    recent.forEach((entry) => {
      const game = gameDefinitions.find((definition) => definition.id === entry.gameId);
      const chip = document.createElement("button");
      chip.className = "recent-chip";
      chip.type = "button";
      chip.style.setProperty("--preview-accent", game?.accent || "var(--cool)");
      chip.innerHTML = `
        <span>${entry.title}</span>
        <strong>${entry.score}</strong>
        <em>${formatRunTime(entry.time)}</em>
      `;
      chip.addEventListener("click", () => startGame(entry.gameId));
      recentList.append(chip);
    });
  }

  function renderCabinetSpotlight(game, label = "Featured Cabinet") {
    cabinetSpotlight.style.setProperty("--preview-accent", game.accent);
    cabinetSpotlight.style.setProperty("--preview-glow", game.glow);
    cabinetSpotlight.innerHTML = `
      <div>
        <span>${label}</span>
        <strong>${game.title}</strong>
        <p>${game.subtitle}. ${game.strategy}</p>
      </div>
      <button class="secondary-button compact" type="button">Quick Play</button>
    `;
    cabinetSpotlight.querySelector("button").addEventListener("click", () => startGame(game.id));
  }

  function renderLeaderboards() {
    const totalBest = gameDefinitions.reduce((sum, game) => sum + getBestScore(game.id), 0);
    const bestTime = gameDefinitions.reduce((best, game) => Math.max(best, getBestTime(game.id)), 0);
    const mostPlayed = [...gameDefinitions].sort((a, b) => getPlayCount(b.id) - getPlayCount(a.id))[0];
    leaderboardTotal.textContent = totalBest.toString();
    leaderboardBestTime.textContent = formatRunTime(bestTime);
    leaderboardFavorite.textContent = getPlayCount(mostPlayed.id) ? mostPlayed.title : "None";
    renderCloudAccountStatus();
    leaderboardRows.innerHTML = "";
    gameDefinitions.forEach((game, index) => {
      const row = document.createElement("article");
      row.className = "leaderboard-row";
      row.style.setProperty("--preview-accent", game.accent);
      row.style.setProperty("--preview-glow", game.glow);
      const entries = getLeaderboard(game.id);
      row.innerHTML = `
        <div class="leaderboard-rank">${index + 1}</div>
        <div>
          <span class="kicker">${game.tag}</span>
          <h3>${game.title}</h3>
          <div class="leaderboard-metrics">
            <span><strong>${getBestScore(game.id)}</strong> Best score</span>
            <span><strong>${formatRunTime(getBestTime(game.id))}</strong> Best time</span>
            <span><strong>${getPlayCount(game.id)}</strong> Plays</span>
          </div>
        </div>
        <ol data-cloud-board="${game.id}">${leaderboardEntryMarkup(entries, "Local")}</ol>
      `;
      leaderboardRows.append(row);
    });
    renderCloudLeaderboards();
  }

  function leaderboardEntryMarkup(entries, source = "") {
    return entries.length
      ? entries
          .map(
            (entry, entryIndex) => `
              <li>
                <span>#${entryIndex + 1} ${entry.player}</span>
                <strong>${entry.score}</strong>
                <em>${formatRunTime(entry.time)} · ${entry.mode}${source ? ` · ${source}` : ""}</em>
              </li>
            `,
          )
          .join("")
      : `<li><span>No runs yet</span><strong>0</strong><em>Play this cabinet to rank</em></li>`;
  }

  function renderCloudLeaderboards() {
    if (!window.arcadeCloud?.getScores) {
      if (leaderboardCloudStatus) leaderboardCloudStatus.textContent = "Cloud score service is still loading. Local leaderboards are shown.";
      return;
    }
    if (leaderboardCloudStatus) leaderboardCloudStatus.textContent = "Loading global scores...";
    let loadedBoards = 0;
    let failedBoards = 0;
    const requests = gameDefinitions.map((game) => {
      const list = leaderboardRows.querySelector(`[data-cloud-board="${game.id}"]`);
      if (!list) return Promise.resolve();
      return window.arcadeCloud
        .getScores(game.id, 5)
        .then((entries) => {
          if (!entries?.length) return;
          loadedBoards += 1;
          list.innerHTML = leaderboardEntryMarkup(entries, "Cloud");
        })
        .catch((error) => {
          failedBoards += 1;
          console.warn(`Cloud leaderboard load failed for ${game.id}.`, error);
        });
    });
    Promise.allSettled(requests).then(() => {
      if (!leaderboardCloudStatus) return;
      if (loadedBoards) {
        leaderboardCloudStatus.textContent = `Showing global scores for ${loadedBoards} cabinets. Local scores fill any empty boards.`;
        return;
      }
      leaderboardCloudStatus.textContent = failedBoards
        ? "Global scores could not load. Local leaderboards are still available."
        : "No global scores yet. Finish a run to seed the cloud board.";
    });
  }

  function renderAchievements() {
    const unlocked = getAchievements();
    achievementCount.textContent = `${unlocked.length}/${achievementDefinitions.length}`;
    achievementGrid.innerHTML = "";
    achievementDefinitions.forEach((achievement) => {
      const isUnlocked = unlocked.includes(achievement.id);
      const card = document.createElement("article");
      card.className = `achievement-card${isUnlocked ? " unlocked" : ""}`;
      card.innerHTML = `
        <div class="achievement-icon">${achievement.icon}</div>
        <div>
          <span>${isUnlocked ? "Unlocked" : "Locked"}</span>
          <h3>${achievement.title}</h3>
          <p>${achievement.description}</p>
        </div>
      `;
      achievementGrid.append(card);
    });
  }

  function renderHistory() {
    const history = getTournamentHistory();
    historyList.innerHTML = "";
    if (!history.length) {
      historyList.innerHTML = `<article class="empty-cabinets">No tournaments finished yet.</article>`;
      return;
    }
    history.forEach((entry, index) => {
      const card = document.createElement("article");
      card.className = "history-card";
      const rounds = entry.rounds
        .map((round, roundIndex) => `<li>Round ${roundIndex + 1}: ${round.gameTitle} · ${round.winner}</li>`)
        .join("");
      const date = new Date(entry.date).toLocaleDateString(undefined, { month: "short", day: "numeric" });
      card.innerHTML = `
        <div class="leaderboard-rank">${index + 1}</div>
        <div>
          <span class="kicker">${entry.mode === "bot" ? "Bot tournament" : "Local tournament"} · ${date}</span>
          <h3>${entry.winner || "Tie game"}</h3>
          <p>${entry.players.join(" vs ")} · Final ${entry.matchWins.join("-")}</p>
          <ol>${rounds}</ol>
        </div>
      `;
      historyList.append(card);
    });
  }

  function populateTournamentGames() {
    tournamentGameSelect.innerHTML = `<option value="random">3 random cabinets</option>`;
    tournamentGameSelect.disabled = true;
  }

  function updateTournamentModeFields() {
    const isBot = tournamentMode.value === "bot";
    playerTwoField.classList.toggle("hidden-field", isBot);
    botDifficultyField.classList.toggle("hidden-field", !isBot);
  }

  function startTournament(event) {
    event.preventDefault();
    const mode = tournamentMode.value;
    const gameIds = pickRandomGames(3);
    const firstGame = gameDefinitions.find((definition) => definition.id === gameIds[0]);
    const playerOne = cleanPlayerName(playerOneName.value, profile.name);
    const playerTwo = mode === "bot" ? `Bot ${capitalize(botDifficulty.value)}` : cleanPlayerName(playerTwoName.value, "Player 2");
    tournament = {
      active: true,
      mode,
      gameId: gameIds[0],
      gameIds,
      difficulty: botDifficulty.value,
      players: [playerOne, playerTwo],
      rounds: gameIds.map((id) => ({ gameId: id, results: [], winner: null })),
      results: [],
      currentIndex: 0,
      roundIndex: 0,
      matchWins: [0, 0],
      waitingForNext: true,
      winnerText: "",
    };
    tournamentStatusTitle.textContent = `Round 1: ${firstGame.title}`;
    tournamentStatus.textContent = `${playerOne} goes first. ${playerTwo} waits in the queue.`;
    renderTournament();
    audio.beep(620, 0.06, "square");
    startNextTournamentRun();
  }

  function renderTournament() {
    tournamentGameSelect.value = "random";
    tournamentMode.value = tournament.mode || "local";
    botDifficulty.value = tournament.difficulty || "normal";
    updateTournamentModeFields();
    const game = getTournamentGame();
    const currentPlayer = tournament.players[tournament.currentIndex] || cleanPlayerName(playerOneName.value, profile.name);

    if (!tournament.active && !tournament.rounds.length) {
      tournamentStatusTitle.textContent = "Ready";
      tournamentStatus.textContent = "Start a tournament to get 3 random games. Each side gets one run per round.";
    } else if (tournament.active && tournament.waitingForNext) {
      tournamentStatusTitle.textContent = `Round ${tournament.roundIndex + 1}/3: ${currentPlayer}`;
      tournamentStatus.textContent = `${game.title} is loaded. Round score: ${tournament.matchWins[0]}-${tournament.matchWins[1]}.`;
    } else if (tournament.winnerText) {
      tournamentStatusTitle.textContent = "Tournament complete";
      tournamentStatus.textContent = tournament.winnerText;
    }

    nextTournamentRunButton.classList.toggle("hidden-field", !tournament.active || !tournament.waitingForNext);
    nextTournamentRunButton.textContent = `Start Round ${tournament.roundIndex + 1}: ${currentPlayer}`;
    renderTournamentScores();
  }

  function renderTournamentScores() {
    tournamentScores.innerHTML = "";
    if (!tournament.rounds.length) {
      tournamentScores.innerHTML = `
        <div class="score-chip">
          <span>Format</span>
          <strong>${tournamentMode.value === "bot" ? "Player vs Bot" : "Local Versus"}</strong>
          <small>Best of 3 random games</small>
        </div>
      `;
      return;
    }
    tournament.players.forEach((player, index) => {
      const chip = document.createElement("div");
      chip.className = "score-chip";
      chip.innerHTML = `
        <span>${player}</span>
        <strong>${tournament.matchWins[index]}</strong>
        <small>Round wins</small>
      `;
      tournamentScores.append(chip);
    });
    tournament.rounds.forEach((round, index) => {
      const game = gameDefinitions.find((definition) => definition.id === round.gameId);
      const chip = document.createElement("div");
      chip.className = "score-chip round-chip";
      const summary = round.results.length
        ? round.results.map((result) => `${result.player}: ${result.score}`).join(" vs ")
        : "Waiting";
      chip.innerHTML = `
        <span>Round ${index + 1} · ${game.title}</span>
        <strong>${round.winner || (index === tournament.roundIndex && tournament.active ? "Live" : "-")}</strong>
        <small>${summary}</small>
      `;
      tournamentScores.append(chip);
    });
  }

  function startNextTournamentRun() {
    if (!tournament.active || !tournament.waitingForNext) return;
    const player = tournament.players[tournament.currentIndex];
    tournament.waitingForNext = false;
    renderTournament();
    startGame(getTournamentGame().id, {
      tournament: true,
      player,
      mode: tournament.mode === "bot" ? "Tournament Bot" : "Tournament",
    });
  }

  function cancelTournamentRun() {
    if (!activeRunContext?.tournament || !tournament.active || tournament.waitingForNext) return;
    tournament.waitingForNext = true;
    tournamentStatusTitle.textContent = `Round ${tournament.roundIndex + 1}: ${tournament.players[tournament.currentIndex]}`;
    tournamentStatus.textContent = "Run cancelled. Start again when the player is ready.";
  }

  function completeTournamentRun(result) {
    if (!tournament.active) return;
    const round = tournament.rounds[tournament.roundIndex];
    tournament.results.push(result);
    round.results.push(result);
    if (tournament.mode === "bot") {
      const botResult = createBotResult(result, round.gameId);
      tournament.results.push(botResult);
      round.results.push(botResult);
      resolveTournamentRound();
      return;
    }
    if (tournament.currentIndex === 0) {
      tournament.currentIndex = 1;
      tournament.waitingForNext = true;
      tournamentStatusTitle.textContent = `Round ${tournament.roundIndex + 1}: ${tournament.players[1]}`;
      tournamentStatus.textContent = `${result.player} scored ${result.score}. Pass the keyboard for ${getTournamentGame().title}.`;
      renderTournament();
      return;
    }
    resolveTournamentRound();
  }

  function resolveTournamentRound() {
    const round = tournament.rounds[tournament.roundIndex];
    const [first, second] = round.results;
    const winner = first.score === second.score
      ? first.time === second.time
        ? null
        : first.time > second.time
          ? first
          : second
      : first.score > second.score
        ? first
        : second;
    round.winner = winner ? winner.player : "Tie";
    if (winner) {
      const winnerIndex = tournament.players.indexOf(winner.player);
      if (winnerIndex >= 0) tournament.matchWins[winnerIndex] += 1;
    }
    if (tournament.roundIndex < tournament.rounds.length - 1) {
      tournament.roundIndex += 1;
      tournament.currentIndex = 0;
      tournament.waitingForNext = true;
      renderTournament();
      return;
    }
    finishTournament();
  }

  function finishTournament() {
    tournament.active = false;
    tournament.waitingForNext = false;
    const totals = tournament.players.map((player) => ({
      player,
      wins: tournament.matchWins[tournament.players.indexOf(player)],
      score: tournament.results.filter((result) => result.player === player).reduce((sum, result) => sum + result.score, 0),
      time: tournament.results.filter((result) => result.player === player).reduce((sum, result) => sum + result.time, 0),
    }));
    const [first, second] = totals;
    const winner = first.wins === second.wins
      ? first.score === second.score
        ? first.time === second.time
          ? null
          : first.time > second.time
            ? first
            : second
        : first.score > second.score
          ? first
          : second
      : first.wins > second.wins
        ? first
        : second;
    tournamentStatusTitle.textContent = "Tournament complete";
    tournament.winnerText = winner
      ? `${winner.player} wins the tournament ${first.wins}-${second.wins} across 3 random games.`
      : `Tournament tie: both players split the rounds and matched total score/time.`;
    checkTournamentAchievements(winner, tournament.mode);
    saveTournamentHistory({
      mode: tournament.mode,
      difficulty: tournament.difficulty,
      players: tournament.players,
      winner: winner?.player || "Tie",
      matchWins: tournament.matchWins,
      rounds: tournament.rounds.map((round) => {
        const game = gameDefinitions.find((definition) => definition.id === round.gameId);
        return {
          gameId: round.gameId,
          gameTitle: game?.title || round.gameId,
          winner: round.winner || "Tie",
          results: round.results,
        };
      }),
    });
    renderHistory();
    tournamentStatus.textContent = tournament.winnerText;
    renderTournament();
  }

  function createBotResult(playerResult, gameId) {
    const difficulty = {
      easy: { label: "Easy Bot", score: 0.62, time: 0.78 },
      normal: { label: "Normal Bot", score: 0.9, time: 0.92 },
      hard: { label: "Hard Bot", score: 1.14, time: 1.02 },
      expert: { label: "Expert Bot", score: 1.38, time: 1.08 },
    }[tournament.difficulty];
    const game = gameDefinitions.find((definition) => definition.id === gameId);
    const heatBonus = { Survival: 38, Precision: 45, Reflex: 50, Timing: 42, Strategy: 48 }[game.tag] || 40;
    const score = Math.max(10, Math.round(playerResult.score * random(difficulty.score - 0.16, difficulty.score + 0.18) + heatBonus * random(1, 5)));
    const time = clamp(playerResult.time * random(difficulty.time - 0.16, difficulty.time + 0.12), 4, 60);
    const botResult = {
      gameId,
      player: tournament.players[1],
      score,
      time,
      mode: difficulty.label,
    };
    saveLeaderboardEntry(gameId, botResult);
    saveBestScore(gameId, score);
    saveBestTime(gameId, time);
    renderLeaderboards();
    return botResult;
  }

  function getTournamentGame() {
    const id = tournament.gameIds[tournament.roundIndex] || tournament.gameId || gameDefinitions[0].id;
    return gameDefinitions.find((definition) => definition.id === id) || gameDefinitions[0];
  }

  function pickRandomGames(count) {
    return [...gameDefinitions]
      .sort(() => Math.random() - 0.5)
      .slice(0, count)
      .map((game) => game.id);
  }

  function cleanPlayerName(value, fallback) {
    return String(value || "").trim().slice(0, 18) || fallback;
  }

  function cleanFriendCode(value) {
    return String(value || "").toUpperCase().replace(/[^A-Z0-9]/g, "").slice(0, 10);
  }

  function generateFriendCode(seed = "player") {
    const base = cleanPlayerName(seed, "Player").toUpperCase().replace(/[^A-Z0-9]/g, "").slice(0, 4) || "PLAY";
    const saved = localStorage.getItem("arcade-friend-code");
    if (saved) return cleanFriendCode(saved);
    const suffix = Math.random().toString(36).slice(2, 6).toUpperCase();
    const code = cleanFriendCode(`${base}${suffix}`);
    localStorage.setItem("arcade-friend-code", code);
    return code;
  }

  function todayKey(date = new Date()) {
    return date.toISOString().slice(0, 10);
  }

  function totalBestScoreValue() {
    return gameDefinitions.reduce((sum, game) => sum + getBestScore(game.id), 0);
  }

  function publicProfileSnapshot() {
    return {
      code: profile.friendCode,
      name: profile.name,
      avatar: profile.avatar,
      level: getProfileLevel(),
      totalBest: totalBestScoreValue(),
      favorite: favoriteGameTitle(),
      updatedAt: new Date().toISOString(),
    };
  }

  function favoriteGameTitle() {
    const mostPlayed = [...gameDefinitions].sort((a, b) => getPlayCount(b.id) - getPlayCount(a.id))[0];
    return getPlayCount(mostPlayed.id) ? mostPlayed.title : "None";
  }

  function capitalize(value) {
    return `${value.charAt(0).toUpperCase()}${value.slice(1)}`;
  }

  function showAbout(id) {
    const game = gameDefinitions.find((definition) => definition.id === id);
    if (!game) return;
    const mastery = getMasteryForGame(game);
    const estimatedReward = rewardEstimateFor(game);
    const nextReward = masteryRewardFor(game, mastery.level + 1) || masteryRewardFor(game, mastery.level);
    const challengeTarget = personalChallengeTarget(game);
    selectedAboutGame = game;
    aboutKicker.textContent = `${game.tag} cabinet`;
    aboutTitle.textContent = game.title;
    aboutDescription.textContent = game.hook;
    aboutMarquee.style.setProperty("--preview-bg", game.background);
    aboutMarquee.style.setProperty("--preview-accent", game.accent);
    aboutMarquee.style.setProperty("--preview-glow", game.glow);
    aboutMarquee.dataset.game = game.id;
    aboutMarquee.innerHTML = `
      <span class="preview-line preview-line-a"></span>
      <span class="preview-line preview-line-b"></span>
      <span class="preview-token"></span>
      <span class="preview-scene preview-${game.id}">${previewSceneFor(game.id)}</span>
      <strong class="preview-symbol">${previewSymbolFor(game.id)}</strong>
      <span class="preview-caption">${previewCaptionFor(game.id)}</span>
    `;
    aboutInfo.innerHTML = `
      <section class="about-stat-card">
        <strong>Difficulty</strong>
        <p>${difficultyFor(game)} · ${playLevelName()}</p>
      </section>
      <section class="about-stat-card">
        <strong>Mastery</strong>
        <p>Level ${mastery.level} · ${mastery.nextTarget}</p>
      </section>
      <section class="about-stat-card">
        <strong>Rewards</strong>
        <p>Typical run: ${estimatedReward.coins} coins / ${estimatedReward.xp} XP</p>
      </section>
      <section class="about-stat-card">
        <strong>Unlock Path</strong>
        <p>${nextReward ? `${nextReward.title}: ${nextReward.coins} coins at the next mastery tier` : "Max mastery reached"}</p>
      </section>
      <section class="about-stat-card">
        <strong>Personal Challenge</strong>
        <p>Beat ${challengeTarget} points to push your local and global rank.</p>
      </section>
      <section>
        <strong>Rules</strong>
        <p>${game.rules}</p>
      </section>
      <section>
        <strong>Controls</strong>
        <p>${game.controls}</p>
      </section>
      <section>
        <strong>Strategy</strong>
        <p>${game.strategy}</p>
      </section>
      <section>
        <strong>Best Score</strong>
        <p>${getBestScore(game.id)}</p>
      </section>
      <section>
        <strong>Best Time</strong>
        <p>${formatRunTime(getBestTime(game.id))}</p>
      </section>
    `;
    showScreen("about");
    audio.beep(420, 0.06, "triangle");
  }

  function rewardEstimateFor(game) {
    const score = Math.max(320, getBestScore(game.id) || { Survival: 620, Precision: 720, Reflex: 640, Timing: 580, Strategy: 520, Puzzle: 560 }[game.tag] || 560);
    return {
      coins: Math.min(game.id === "driftboss" ? 90 : 140, Math.max(5, Math.floor(score / 220) + 4)),
      xp: Math.max(12, Math.floor(score / 12) + 45),
    };
  }

  function personalChallengeTarget(game) {
    const best = getBestScore(game.id);
    const base = { Survival: 650, Precision: 750, Reflex: 680, Timing: 620, Strategy: 580, Puzzle: 640 }[game.tag] || 620;
    return Math.max(base, Math.ceil((best + 140) / 25) * 25);
  }

  function renderKeybinds() {
    keybindGrid.innerHTML = "";
    Object.entries(keybindLabels).forEach(([action, [title, description]]) => {
      const row = document.createElement("div");
      row.className = "keybind-row";
      row.innerHTML = `
        <span>
          <strong>${title}</strong>
          <small>${description}</small>
        </span>
        <button class="key-button" type="button" data-action="${action}">${formatKey(keybinds[action])}</button>
      `;
      const button = row.querySelector("button");
      button.addEventListener("click", () => {
        listeningFor = action;
        document.querySelectorAll(".key-button").forEach((keyButton) => {
          keyButton.classList.toggle("listening", keyButton === button);
        });
        button.textContent = "Press a key";
        audio.beep(660, 0.06, "triangle");
      });
      keybindGrid.append(row);
    });
  }

  function formatKey(code) {
    const names = {
      ArrowLeft: "<",
      ArrowRight: ">",
      ArrowUp: "^",
      ArrowDown: "v",
      Space: "Space",
      Escape: "Esc",
    };
    return names[code] ?? code.replace(/^Key/, "").replace(/^Digit/, "");
  }

  function actionPressed(action) {
    return pressed.has(keybinds[action]) || Boolean(touchActionKeys[action]);
  }

  function setTouchAction(action, isDown, button = null) {
    touchActionKeys[action] = isDown;
    if (button) button.classList.toggle("touch-active", isDown);
    if (isDown) audio.beep(action === "action" ? 520 : 340, 0.025, "triangle");
  }

  function releaseTouchControls() {
    Object.keys(touchActionKeys).forEach((action) => {
      touchActionKeys[action] = false;
    });
    touchControls.querySelectorAll(".touch-active").forEach((button) => button.classList.remove("touch-active"));
  }

  function startGame(id, runContext = null) {
    stopGameLoop();
    const definition = gameDefinitions.find((game) => game.id === id);
    driftStartOverlay.classList.toggle("hidden-field", definition.id !== "driftboss");
    activeRunContext = runContext;
    recordPlay(definition.id);
    markRecentlyPlayed(definition.id, runContext?.mode || "Solo");
    updateIntroDashboard();
    renderGameCards();
    activeGame = createGame(definition);
    activeGame.arcadeBooster = consumeSelectedArcadeBooster();
    if (activeGame.arcadeBooster?.id === "comboSpark") {
      activeGame.combo = 2;
      activeGame.comboTimer = 8;
    }
    if (definition.id === "driftboss") renderDriftShop();
    playTitle.textContent = definition.title;
    const playerLabel = runContext?.player || profile.name;
    gameSubtitle.textContent = `${definition.subtitle} · ${playerLabel} · ${playLevelName()}${activeGame.arcadeBooster ? ` · ${activeGame.arcadeBooster.title}` : ""}`;
    scoreValue.textContent = "0";
    levelValue.textContent = playLevelStart().toString();
    comboValue.textContent = "x1";
    bestValue.textContent = getBestScore(definition.id).toString();
    timeValue.textContent = "60";
    showScreen("play");
    audio.beep(540, 0.08);
    lastFrameTime = performance.now();
    gameLoopId = requestAnimationFrame(gameLoop);
  }

  function stopGameLoop() {
    if (gameLoopId) cancelAnimationFrame(gameLoopId);
    gameLoopId = 0;
    lastFrameTime = 0;
    pressed.clear();
    releaseTouchControls();
    driftStartOverlay.classList.add("hidden-field");
  }

  function gameLoop(time) {
    if (!activeGame || currentScreen !== "play") return;
    const delta = Math.min(0.04, (time - lastFrameTime) / 1000 || 0);
    lastFrameTime = time;
    activeGame.update(delta);
    activeGame.draw(gameContext);
    scoreValue.textContent = Math.floor(activeGame.score).toString();
    levelValue.textContent = activeGame.level.toString();
    comboValue.textContent = `x${activeGame.combo}`;
    bestValue.textContent = Math.max(getBestScore(activeGame.definition.id), Math.floor(activeGame.score)).toString();
    timeValue.textContent = Math.max(0, Math.ceil(activeGame.timeLeft)).toString();
    if (activeGame.over && activeRunContext?.tournament && !activeGame.tournamentHandled) {
      activeGame.tournamentHandled = true;
      completeTournamentRun(activeGame.result);
      window.setTimeout(() => {
        if (currentScreen === "play") showScreen("tournament");
      }, 900);
    }
    gameLoopId = requestAnimationFrame(gameLoop);
  }

  function createGame(definition) {
    const base = createBaseGame(definition);
    if (definition.id === "dodger") return createDodger(base);
    if (definition.id === "popper") return createPopper(base);
    if (definition.id === "flap") return createFlap(base);
    if (definition.id === "tictactoe") return createTicTacToe(base);
    if (definition.id === "tetris") return createTetris(base);
    if (definition.id === "twenty48") return createTwenty48(base);
    if (definition.id === "driftboss") return createDriftBoss(base);
    if (definition.id === "beatfoundry") return createBeatFoundry(base);
    if (definition.id === "snake") return createSnake(base);
    if (definition.id === "breaker") return createBreaker(base);
    if (definition.id === "pinball") return createPinball(base);
    if (definition.id === "river") return createRiverRush(base);
    if (definition.id === "keeper") return createKeeper(base);
    if (definition.id === "memory") return createMemoryMatch(base);
    if (definition.id === "asteroids") return createAsteroids(base);
    if (definition.id === "lunar") return createLunarDock(base);
    if (definition.id === "repair") return createCircuitRepair(base);
    if (definition.id === "cipher") return createCipherChain(base);
    if (definition.id === "orbitguard") return createOrbitGuard(base);
    if (definition.id === "hoopsduel") return createHoopsDuel(base);
    if (definition.id === "freethrow") return createFreeThrow(base);
    if (definition.id === "rallyrush") return createRallyRush(base);
    if (definition.id === "trafficrush") return createTrafficRush(base);
    if (definition.id === "archeryrange") return createArcheryRange(base);
    if (definition.id === "arrowstorm") return createArrowStorm(base);
    if (definition.id === "doodleroad") return createDoodleRoad(base);
    if (definition.id === "wordflux") return createWordFlux(base);
    if (definition.id === "bubblecannon") return createBubbleCannon(base);
    if (definition.id === "lockpick") return createVaultTumbler(base);
    return createRunner(base);
  }

  function createBaseGame(definition) {
    return {
      definition,
      score: 0,
      elapsed: 0,
      timeLeft: 60,
      playLevel: settings.playLevel,
      level: playLevelStart(settings.playLevel),
      combo: 1,
      comboTimer: 0,
      over: false,
      savedBest: false,
      flash: 0,
      particles: [],
      messages: [],
      updateTimer(delta) {
        if (this.over) return;
        this.elapsed += delta;
        this.timeLeft = Math.max(0, 60 - this.elapsed);
        this.level = Math.min(12, playLevelStart(this.playLevel) + Math.floor((this.elapsed * playLevelPace(this.playLevel)) / levelInterval));
        this.comboTimer = Math.max(0, this.comboTimer - delta);
        if (this.comboTimer <= 0) this.combo = 1;
        if (this.timeLeft <= 0) this.finish();
        this.flash = Math.max(0, this.flash - delta);
        this.updateEffects(delta);
      },
      addScore(points, x = gameCanvas.width / 2, y = 90, label = "") {
        const value = Math.ceil(points * this.combo * playLevelScoreBonus(this.playLevel));
        this.score += value;
        if (label) {
          const text = label === "Graze bonus" ? `Graze bonus +${value}` : `${label} +${value}`;
          this.messages.push({ x, y, text, age: 0, life: 0.85 });
        }
      },
      pushCombo(amount = 1) {
        this.combo = Math.min(9, this.combo + amount);
        this.comboTimer = 2.8;
      },
      breakCombo() {
        this.combo = 1;
        this.comboTimer = 0;
      },
      burst(x, y, color, count = 12) {
        for (let i = 0; i < count; i += 1) {
          const angle = random(0, Math.PI * 2);
          const speed = random(60, 230);
          this.particles.push({
            x,
            y,
            vx: Math.cos(angle) * speed,
            vy: Math.sin(angle) * speed,
            size: random(2, 6),
            color,
            age: 0,
            life: random(0.35, 0.8),
          });
        }
      },
      updateEffects(delta) {
        this.particles.forEach((particle) => {
          particle.x += particle.vx * delta;
          particle.y += particle.vy * delta;
          particle.vx *= 0.96;
          particle.vy *= 0.96;
          particle.age += delta;
        });
        this.particles = this.particles.filter((particle) => particle.age < particle.life);
        this.messages.forEach((message) => {
          message.y -= 42 * delta;
          message.age += delta;
        });
        this.messages = this.messages.filter((message) => message.age < message.life);
      },
      finish() {
        if (this.savedBest) {
          this.over = true;
          return;
        }
        this.over = true;
        this.result = saveRunResult(
          this,
          activeRunContext?.player || profile.name,
          activeRunContext?.mode || "Solo",
        );
        this.savedBest = true;
      },
      drawBase(context) {
        drawGameBackground(context, this.elapsed);
      },
      drawEffects(context) {
        this.particles.forEach((particle) => {
          const alpha = 1 - particle.age / particle.life;
          context.globalAlpha = alpha;
          context.fillStyle = particle.color;
          context.shadowColor = particle.color;
          context.shadowBlur = 16;
          context.beginPath();
          context.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          context.fill();
        });
        context.globalAlpha = 1;
        context.shadowBlur = 0;
        this.messages.forEach((message) => {
          const alpha = 1 - message.age / message.life;
          context.globalAlpha = alpha;
          drawText(context, message.text, message.x, message.y, "#ffd166", "900 24px system-ui", "center");
        });
        context.globalAlpha = 1;
      },
      drawEnd(context, label) {
        if (!this.over) return;
        const best = getBestScore(this.definition.id);
        const mastery = getMasteryForGame(this.definition);
        const season = getSeasonProgress();
        const challenge = activeRunContext?.friendChallenge;
        const challengeText = challenge
          ? `${this.score >= challenge.target ? "Challenge cleared" : "Challenge target"}: ${challenge.target}`
          : "Missions and season progress updated";
        context.fillStyle = "rgba(6, 7, 15, 0.82)";
        context.fillRect(0, 0, gameCanvas.width, gameCanvas.height);
        context.strokeStyle = this.definition.accent;
        context.lineWidth = 3;
        roundedRect(context, 222, 118, 516, 314, 18);
        context.fillStyle = "rgba(14, 19, 34, 0.92)";
        context.fill();
        context.stroke();
        context.fillStyle = "#f5f7ff";
        context.font = "900 46px system-ui";
        context.textAlign = "center";
        context.fillText(label, gameCanvas.width / 2, 180);
        context.fillStyle = "#ffd166";
        context.font = "800 22px system-ui";
        context.fillText(`Score ${Math.floor(this.score)} | Best ${best}`, gameCanvas.width / 2, 222);
        const masteryBonus = this.result?.masteryReward
          ? ` | Milestone: +${this.result.masteryReward.coins} coins`
          : "";
        const reward = this.result ? `+${this.result.coinReward} coins | +${this.result.xpReward} XP${masteryBonus}` : "Restart or quit from the cabinet controls";
        const rows = [
          reward,
          `Mastery Lv ${mastery.level} | Season Lv ${season.level} (${Math.round(season.progress * 100)}%)`,
          challengeText,
          "Replay, pick another cabinet, or check Missions for rewards",
        ];
        rows.forEach((row, index) => {
          context.fillStyle = index === 0 ? "#58f29f" : index === 2 && challenge ? "#ffd166" : "#a9b1ce";
          context.font = index === 0 ? "900 19px system-ui" : "800 17px system-ui";
          context.fillText(row, gameCanvas.width / 2, 268 + index * 34);
        });
      },
    };
  }

  function createVaultTumbler(base) {
    return {
      ...base,
      angle: -Math.PI / 2,
      needleSpeed: 2.1,
      targetIndex: 0,
      vaults: 0,
      strikes: 0,
      actionWasDown: false,
      pins: [],
      resetPins() {
        const count = Math.min(5, 3 + Math.floor(this.level / 4));
        const width = Math.max(0.2, 0.46 - this.level * 0.018);
        this.pins = Array.from({ length: count }, (_, index) => ({
          angle: -Math.PI + ((Math.PI * 2) / count) * index + random(-0.28, 0.28),
          width,
          locked: false,
        })).sort((a, b) => a.angle - b.angle);
        this.targetIndex = 0;
      },
      setup() {
        this.resetPins();
      },
      update(delta) {
        this.updateTimer(delta);
        if (this.over) return;
        if (!this.pins.length) this.resetPins();
        const tune = Number(actionPressed("right")) - Number(actionPressed("left"));
        this.needleSpeed = clamp(this.needleSpeed + tune * delta * 1.7, 1.2, 4.8 + this.level * 0.18);
        this.angle += (this.needleSpeed + this.level * 0.12) * delta;
        while (this.angle > Math.PI) this.angle -= Math.PI * 2;
        const action = actionPressed("action");
        if (action && !this.actionWasDown) {
          const pin = this.pins[this.targetIndex];
          const diff = Math.abs(angleDelta(this.angle, pin.angle));
          if (pin && diff <= pin.width) {
            pin.locked = true;
            this.addScore(90 + this.level * 12, 480, 114, "Tumbler");
            this.pushCombo(1);
            this.burst(480 + Math.cos(pin.angle) * 130, 280 + Math.sin(pin.angle) * 130, this.definition.accent, 16);
            audio.sfx("hit");
            this.targetIndex += 1;
            if (this.targetIndex >= this.pins.length) {
              this.vaults += 1;
              this.addScore(360 + this.level * 30, 480, 84, "Vault open");
              this.flash = 0.2;
              this.needleSpeed += 0.22;
              this.resetPins();
              audio.sfx("bank");
            }
          } else {
            this.strikes += 1;
            this.breakCombo();
            this.flash = 0.16;
            audio.sfx("danger");
            if (this.strikes >= 6) this.finish();
          }
        }
        this.actionWasDown = action;
      },
      draw(context) {
        this.drawBase(context);
        drawVaultTumbler(context, this);
        this.drawEffects(context);
        this.drawEnd(context, "Vault sealed");
      },
    };
  }

  function createDodger(base) {
    return {
      ...base,
      player: { x: 480, y: 462, size: 34, speed: 330, shield: 0 },
      hazards: [],
      charges: [],
      rifts: [],
      spawn: 0,
      chargeSpawn: 1.4,
      riftSpawn: 2.2,
      lives: 3,
      energy: 0,
      sealed: 0,
      actionWasDown: false,
      update(delta) {
        this.updateTimer(delta);
        if (this.over) return;
        const direction = Number(actionPressed("right")) - Number(actionPressed("left"));
        const vertical = Number(actionPressed("down")) - Number(actionPressed("up"));
        const action = actionPressed("action");
        const boost = action ? 1.5 : 1;
        this.player.x += direction * this.player.speed * boost * delta;
        this.player.y += vertical * this.player.speed * 0.72 * delta;
        this.player.x = clamp(this.player.x, 28, gameCanvas.width - 28);
        this.player.y = clamp(this.player.y, gameCanvas.height * 0.34, gameCanvas.height - 32);
        this.player.shield = Math.max(0, this.player.shield - delta);

        this.spawn -= delta;
        if (this.spawn <= 0) {
          this.spawn = Math.max(0.13, 0.72 - this.level * 0.045);
          const waves = 1 + Number(this.level >= 4 && Math.random() < 0.45) + Number(this.level >= 8 && Math.random() < 0.25);
          for (let i = 0; i < waves; i += 1) {
            this.hazards.push({
              x: random(24, gameCanvas.width - 24),
              y: -34 - i * 22,
              r: random(14, 29 + this.level),
              speed: random(175, 260) + this.level * 28,
              wobble: random(0.6, 1.6),
              phase: random(0, Math.PI * 2),
              grazed: false,
            });
          }
        }

        this.chargeSpawn -= delta;
        if (this.chargeSpawn <= 0) {
          this.chargeSpawn = random(1.7, 3.1);
          this.charges.push({
            x: random(40, gameCanvas.width - 40),
            y: -30,
            r: 13,
            speed: 130 + this.level * 18,
            shield: Math.random() < 0.28,
          });
        }

        this.riftSpawn -= delta;
        if (this.riftSpawn <= 0) {
          this.riftSpawn = Math.max(2.7, random(5.1, 7.3) - this.level * 0.12);
          this.rifts.push({
            x: random(90, gameCanvas.width - 90),
            y: random(118, 330),
            r: random(36, 52),
            timer: Math.max(4.2, 8.2 - this.level * 0.28),
            max: Math.max(4.2, 8.2 - this.level * 0.28),
            pulse: random(0, Math.PI * 2),
          });
        }

        this.hazards.forEach((hazard) => {
          hazard.x += Math.sin(this.elapsed * hazard.wobble + hazard.phase) * this.level * 14 * delta;
          hazard.y += hazard.speed * delta;
        });
        this.charges.forEach((charge) => {
          charge.y += charge.speed * delta;
        });
        this.rifts.forEach((rift) => {
          rift.timer -= delta;
          rift.pulse += delta * 4;
          if (rift.timer <= 0 && !rift.burst) {
            rift.burst = true;
            this.flash = 0.15;
            this.breakCombo();
            for (let i = 0; i < 5; i += 1) {
              this.hazards.push({
                x: rift.x + random(-36, 36),
                y: rift.y + random(-18, 18),
                r: random(14, 24 + this.level),
                speed: random(170, 240) + this.level * 24,
                wobble: random(0.8, 1.8),
                phase: random(0, Math.PI * 2),
                grazed: false,
              });
            }
            audio.sfx("danger");
          }
        });
        this.hazards = this.hazards.filter((hazard) => hazard.y < gameCanvas.height + 40);
        this.charges = this.charges.filter((charge) => charge.y < gameCanvas.height + 40);
        this.rifts = this.rifts.filter((rift) => !rift.sealed && rift.timer > -0.4);

        if (action && !this.actionWasDown && this.energy >= 2) {
          const rift = this.rifts.find((item) => distance(item.x, item.y, this.player.x, this.player.y) < item.r + this.player.size * 1.65);
          if (rift) {
            rift.sealed = true;
            this.energy -= 2;
            this.sealed += 1;
            this.pushCombo(2);
            this.addScore(150 + this.level * 12 + Math.floor(rift.timer * 10), rift.x, rift.y, "Rift sealed");
            this.burst(rift.x, rift.y, "#58f29f", 24);
            audio.sfx("coin");
          }
        }
        this.actionWasDown = action;

        for (const hazard of this.hazards) {
          const gap = distance(hazard.x, hazard.y, this.player.x, this.player.y);
          if (!hazard.grazed && gap < hazard.r + this.player.size * 1.1 && gap > hazard.r + this.player.size * 0.56) {
            hazard.grazed = true;
            this.pushCombo();
            this.addScore(8 + this.level, hazard.x, hazard.y, "Graze bonus");
            this.burst(hazard.x, hazard.y, "#ffd166", 7);
          }
          if (gap < hazard.r + this.player.size * 0.52) {
            hazard.y = gameCanvas.height + 80;
            if (this.player.shield > 0) {
              this.player.shield = 0;
              this.addScore(18, this.player.x, this.player.y - 38, "Shield");
            } else {
              this.lives -= 1;
              this.breakCombo();
            }
            this.flash = 0.18;
            this.burst(this.player.x, this.player.y, "#ff5b5b", 18);
            audio.beep(120, 0.12, "sawtooth");
            if (this.lives <= 0) this.finish();
          }
        }

        for (const charge of this.charges) {
          if (distance(charge.x, charge.y, this.player.x, this.player.y) < charge.r + this.player.size * 0.58) {
            charge.y = gameCanvas.height + 80;
            this.pushCombo(charge.shield ? 2 : 1);
            if (charge.shield) this.player.shield = 5;
            else this.energy = Math.min(6, this.energy + 1);
            this.addScore(charge.shield ? 45 : 24, charge.x, charge.y, charge.shield ? "Shield" : "Charge");
            this.burst(charge.x, charge.y, charge.shield ? "#58f29f" : "#34d6ff", 14);
            audio.beep(charge.shield ? 860 : 680, 0.06, "triangle");
          }
        }
        this.score += delta * (13 + this.level * 3 + this.sealed * 0.8);
      },
      draw(context) {
        drawDodgerCity(context, this);
        drawBadge(context, `Lives ${this.lives}`, 24, 34, "#ffd166");
        drawBadge(context, `Energy ${this.energy}/6`, 140, 34, "#34d6ff");
        drawBadge(context, `Sealed ${this.sealed}`, 276, 34, "#58f29f");
        this.rifts.forEach((rift) => drawRift(context, rift));
        this.charges.forEach((charge) => drawEnergyCell(context, charge.x, charge.y, charge.r, charge.shield));
        this.hazards.forEach((hazard) => drawVoltageShard(context, hazard.x, hazard.y, hazard.r, this.elapsed));
        drawRescueShip(context, this.player.x, this.player.y, this.player.size, this.player.shield > 0, this.energy);
        this.drawEffects(context);
        if (this.flash) {
          context.fillStyle = `rgba(255, 91, 91, ${this.flash * 2})`;
          context.fillRect(0, 0, gameCanvas.width, gameCanvas.height);
        }
        this.drawEnd(context, this.lives <= 0 ? "Run Lost" : "Run Complete");
      },
    };
  }

  function createPopper(base) {
    return {
      ...base,
      cursor: { x: 480, y: 270, speed: 430 },
      target: makeTarget(1),
      decoys: [],
      shots: 0,
      hits: 0,
      focus: 0,
      actionWasDown: false,
      update(delta) {
        this.updateTimer(delta);
        if (this.over) return;
        this.cursor.x += (Number(actionPressed("right")) - Number(actionPressed("left"))) * this.cursor.speed * delta;
        this.cursor.y += (Number(actionPressed("down")) - Number(actionPressed("up"))) * this.cursor.speed * delta;
        this.cursor.x = clamp(this.cursor.x, 24, gameCanvas.width - 24);
        this.cursor.y = clamp(this.cursor.y, 24, gameCanvas.height - 24);

        this.target.x += this.target.vx * delta;
        this.target.y += this.target.vy * delta;
        if (this.target.x < this.target.r || this.target.x > gameCanvas.width - this.target.r) this.target.vx *= -1;
        if (this.target.y < this.target.r || this.target.y > gameCanvas.height - this.target.r) this.target.vy *= -1;
        this.target.timer -= delta;

        this.decoys.forEach((decoy) => {
          decoy.x += decoy.vx * delta;
          decoy.y += decoy.vy * delta;
          decoy.life -= delta;
          if (decoy.x < decoy.r || decoy.x > gameCanvas.width - decoy.r) decoy.vx *= -1;
          if (decoy.y < decoy.r || decoy.y > gameCanvas.height - decoy.r) decoy.vy *= -1;
        });
        this.decoys = this.decoys.filter((decoy) => decoy.life > 0);

        if (this.target.timer <= 0) {
          this.target = makeTarget(this.level);
          this.score = Math.max(0, this.score - 8);
          this.breakCombo();
          audio.beep(160, 0.06, "triangle");
        }
        if (this.decoys.length < Math.min(6, Math.floor(this.level / 2)) && Math.random() < delta * (0.35 + this.level * 0.08)) {
          this.decoys.push(makeDecoy(this.level));
        }

        const actionIsDown = actionPressed("action");
        if (actionIsDown && !this.actionWasDown) {
          this.shots += 1;
          const hit = distance(this.cursor.x, this.cursor.y, this.target.x, this.target.y) < this.target.r;
          const decoyHit = this.decoys.find((decoy) => distance(this.cursor.x, this.cursor.y, decoy.x, decoy.y) < decoy.r);
          if (hit) {
            this.target.hp -= 1;
            if (this.target.hp > 0) {
              this.target.r = Math.max(18, this.target.r * 0.84);
              this.target.vx *= 1.28;
              this.target.vy *= 1.28;
              this.target.timer = Math.min(this.target.maxTimer, this.target.timer + 0.42);
              this.addScore(18 + this.level * 2, this.target.x, this.target.y, "Crack");
              this.burst(this.target.x, this.target.y, "#b78cff", 14);
              audio.beep(520, 0.04, "triangle");
            } else {
              this.hits += 1;
              this.focus = Math.min(100, this.focus + (this.target.kind === "vault" ? 28 : this.target.bonus ? 22 : 14));
              this.pushCombo(this.target.bonus || this.target.kind === "vault" ? 2 : 1);
              this.addScore((this.target.bonus ? 52 : 32) + this.target.timer * 6 + this.level * 4 + (this.target.kind === "vault" ? 38 : 0), this.target.x, this.target.y, this.target.bonus ? "Bonus" : this.target.kind === "vault" ? "Vault" : "Hit");
              this.burst(this.target.x, this.target.y, this.target.bonus ? "#ffd166" : this.target.kind === "vault" ? "#b78cff" : "#34d6ff", this.target.bonus ? 28 : 18);
              if (this.focus >= 100) {
                this.focus = 0;
                this.addScore(75 + this.level * 8, this.cursor.x, this.cursor.y, "Focus clear");
                this.decoys.forEach((decoy) => this.burst(decoy.x, decoy.y, "#ff5b5b", 7));
                this.decoys = [];
                audio.beep(980, 0.08, "square");
              } else {
                audio.beep(760, 0.06, "square");
              }
              this.target = makeTarget(this.level);
            }
          } else if (decoyHit) {
            this.score = Math.max(0, this.score - 18);
            this.focus = Math.max(0, this.focus - 18);
            this.breakCombo();
            decoyHit.life = 0;
            this.burst(decoyHit.x, decoyHit.y, "#ff5b5b", 12);
            audio.beep(110, 0.08, "sawtooth");
          } else {
            this.score = Math.max(0, this.score - 3);
            this.focus = Math.max(0, this.focus - 5);
            audio.beep(180, 0.05, "triangle");
          }
        }
        this.actionWasDown = actionIsDown;
      },
      draw(context) {
        this.drawBase(context);
        drawBadge(context, `Hits ${this.hits}`, 24, 34, "#34d6ff");
        drawBadge(context, `Focus ${Math.floor(this.focus)}%`, 146, 34, "#ffd166");
        this.decoys.forEach((decoy) => drawTarget(context, decoy.x, decoy.y, decoy.r, "#ff5b5b", decoy.life / 4));
        drawTarget(context, this.target.x, this.target.y, this.target.r, targetColor(this.target), this.target.timer / this.target.maxTimer, this.target.hp);
        drawCrosshair(context, this.cursor.x, this.cursor.y);
        this.drawEffects(context);
        this.drawEnd(context, "Signal Cleared");
      },
    };
  }

  function createRunner(base) {
    return {
      ...base,
      lane: 1,
      runnerX: 150,
      obstacles: [],
      chips: [],
      spawn: 0.45,
      chipSpawn: 1.2,
      shield: 0,
      update(delta) {
        this.updateTimer(delta);
        if (this.over) return;
        const actionIsDown = actionPressed("action");
        if ((actionPressed("up") || actionPressed("left")) && !this.upWasDown) {
          this.lane = clamp(this.lane - 1, 0, 2);
          audio.beep(360, 0.04, "triangle");
        }
        if ((actionPressed("down") || actionPressed("right")) && !this.downWasDown) {
          this.lane = clamp(this.lane + 1, 0, 2);
          audio.beep(440, 0.04, "triangle");
        }
        this.upWasDown = actionPressed("up") || actionPressed("left");
        this.downWasDown = actionPressed("down") || actionPressed("right");
        this.runnerX = actionIsDown ? 204 : 150;
        this.shield = Math.max(0, this.shield - delta);

        this.spawn -= delta;
        if (this.spawn <= 0) {
          this.spawn = Math.max(0.32, random(0.92, 1.28) - this.level * 0.07);
          const count = 1 + Number(this.level >= 5 && Math.random() < 0.38) + Number(this.level >= 9 && Math.random() < 0.24);
          const used = new Set();
          for (let i = 0; i < count; i += 1) {
            let lane = Math.floor(random(0, 3));
            if (used.size < 3) while (used.has(lane)) lane = Math.floor(random(0, 3));
            used.add(lane);
            this.obstacles.push({
              x: gameCanvas.width + 58 + i * 44,
              lane,
              w: random(34, 64),
              speed: 260 + this.level * 38 + Number(actionIsDown) * 55,
              type: Math.random() < 0.18 ? "gate" : "block",
            });
          }
        }

        this.chipSpawn -= delta;
        if (this.chipSpawn <= 0) {
          this.chipSpawn = random(1.6, 2.8);
          this.chips.push({
            x: gameCanvas.width + 35,
            lane: Math.floor(random(0, 3)),
            speed: 235 + this.level * 24,
            shield: Math.random() < 0.22,
          });
        }

        this.obstacles.forEach((obstacle) => {
          obstacle.x -= obstacle.speed * delta;
        });
        this.chips.forEach((chip) => {
          chip.x -= chip.speed * delta;
        });
        this.obstacles = this.obstacles.filter((obstacle) => obstacle.x > -90);
        this.chips = this.chips.filter((chip) => chip.x > -50);

        for (const chip of this.chips) {
          if (chip.lane === this.lane && Math.abs(chip.x - this.runnerX) < 36) {
            chip.x = -80;
            this.pushCombo(chip.shield ? 2 : 1);
            if (chip.shield) this.shield = 4.5;
            this.addScore(chip.shield ? 52 : 30, this.runnerX, laneY(chip.lane), chip.shield ? "Guard" : "Chip");
            this.burst(this.runnerX, laneY(this.lane), chip.shield ? "#58f29f" : "#ffd166", 14);
            audio.beep(chip.shield ? 840 : 680, 0.05, "triangle");
          }
        }

        for (const obstacle of this.obstacles) {
          if (obstacle.lane === this.lane && Math.abs(obstacle.x - this.runnerX) < obstacle.w + 22) {
            obstacle.x = -120;
            if (this.shield > 0 || obstacle.type === "gate") {
              this.addScore(obstacle.type === "gate" ? 26 : 14, this.runnerX, laneY(this.lane), obstacle.type === "gate" ? "Gate" : "Guard");
              this.burst(this.runnerX, laneY(this.lane), obstacle.type === "gate" ? "#34d6ff" : "#58f29f", 12);
              if (obstacle.type !== "gate") this.shield = 0;
            } else {
              this.breakCombo();
              this.flash = 0.2;
              this.finish();
              audio.beep(90, 0.18, "sawtooth");
            }
          }
        }
        this.score += delta * (20 + this.level * 4 + (actionIsDown ? 16 : 0));
      },
      draw(context) {
        this.drawBase(context);
        [0, 1, 2].forEach((lane) => {
          const y = laneY(lane);
          context.strokeStyle = lane === this.lane ? "rgba(88,242,159,0.84)" : "rgba(255,255,255,0.14)";
          context.lineWidth = lane === this.lane ? 6 : 2;
          context.beginPath();
          context.moveTo(40, y);
          context.lineTo(gameCanvas.width - 40, y);
          context.stroke();
        });
        this.chips.forEach((chip) => drawChip(context, chip.x, laneY(chip.lane), chip.shield ? "#58f29f" : "#ffd166"));
        this.obstacles.forEach((obstacle) => drawObstacle(context, obstacle.x, laneY(obstacle.lane), obstacle.w, obstacle.type));
        drawRunner(context, this.runnerX, laneY(this.lane), this.shield > 0);
        if (this.shield > 0) drawBadge(context, `Guard ${Math.ceil(this.shield)}`, 24, 34, "#58f29f");
        this.drawEffects(context);
        if (this.flash) {
          context.fillStyle = `rgba(255, 91, 91, ${this.flash * 2})`;
          context.fillRect(0, 0, gameCanvas.width, gameCanvas.height);
        }
        this.drawEnd(context, this.timeLeft <= 0 ? "Board Cleared" : "Crash");
      },
    };
  }

  function createFlap(base) {
    return {
      ...base,
      bird: { x: 210, y: 260, vy: 0, r: 18 },
      gates: [],
      spawn: 0,
      flapWasDown: false,
      update(delta) {
        this.updateTimer(delta);
        if (this.over) return;
        const flapDown = actionPressed("action") || actionPressed("up");
        if (flapDown && !this.flapWasDown) {
          this.bird.vy = -330 - this.level * 9;
          this.pushCombo(0);
          this.burst(this.bird.x - 10, this.bird.y + 12, "#ffd166", 5);
          audio.beep(560, 0.04, "triangle");
        }
        this.flapWasDown = flapDown;

        const wind = Math.sin(this.elapsed * 1.3) * this.level * 7;
        this.bird.vy += (760 + this.level * 22) * delta;
        this.bird.y += this.bird.vy * delta;
        this.bird.x = 210 + wind;
        this.spawn -= delta;

        if (this.spawn <= 0) {
          const gap = Math.max(128, 190 - this.level * 7);
          const center = random(120 + gap / 2, gameCanvas.height - 100 - gap / 2);
          this.spawn = Math.max(0.92, 1.55 - this.level * 0.045);
          this.gates.push({
            x: gameCanvas.width + 50,
            width: 70,
            center,
            gap,
            speed: 220 + this.level * 22,
            passed: false,
          });
        }

        this.gates.forEach((gate) => {
          gate.x -= gate.speed * delta;
          if (!gate.passed && gate.x + gate.width < this.bird.x) {
            gate.passed = true;
            this.pushCombo();
            this.addScore(32 + this.level * 4, this.bird.x + 40, this.bird.y, "Gate");
            this.burst(this.bird.x, this.bird.y, "#58f29f", 12);
            audio.beep(780, 0.05, "square");
          }
        });
        this.gates = this.gates.filter((gate) => gate.x > -100);

        const hitCeiling = this.bird.y - this.bird.r < 0;
        const hitFloor = this.bird.y + this.bird.r > gameCanvas.height - 40;
        const hitGate = this.gates.some((gate) => {
          const inColumn = this.bird.x + this.bird.r > gate.x && this.bird.x - this.bird.r < gate.x + gate.width;
          const outsideGap = this.bird.y - this.bird.r < gate.center - gate.gap / 2 || this.bird.y + this.bird.r > gate.center + gate.gap / 2;
          return inColumn && outsideGap;
        });

        if (hitCeiling || hitFloor || hitGate) {
          this.breakCombo();
          this.flash = 0.22;
          this.burst(this.bird.x, this.bird.y, "#ff5b5b", 22);
          audio.beep(100, 0.18, "sawtooth");
          this.finish();
        }
        this.score += delta * (8 + this.level * 2);
      },
      draw(context) {
        this.drawBase(context);
        drawBadge(context, "Flap", 24, 34, "#ffd166");
        this.gates.forEach((gate) => drawGate(context, gate));
        drawBird(context, this.bird.x, this.bird.y, this.bird.r, this.bird.vy);
        context.fillStyle = "rgba(255,255,255,0.1)";
        context.fillRect(0, gameCanvas.height - 40, gameCanvas.width, 40);
        this.drawEffects(context);
        if (this.flash) {
          context.fillStyle = `rgba(255, 91, 91, ${this.flash * 2})`;
          context.fillRect(0, 0, gameCanvas.width, gameCanvas.height);
        }
        this.drawEnd(context, this.timeLeft <= 0 ? "Flight Complete" : "Flight Down");
      },
    };
  }

  function createTicTacToe(base) {
    return {
      ...base,
      board: Array(9).fill(""),
      cursor: 4,
      playerTurn: true,
      round: 1,
      wins: 0,
      draws: 0,
      losses: 0,
      roundMessage: "Your move",
      resetTimer: 0,
      aiDelay: 0,
      inputGrace: 0,
      moveWasDown: false,
      actionWasDown: false,
      update(delta) {
        this.updateTimer(delta);
        if (this.over) return;
        if (this.resetTimer > 0) {
          this.resetTimer -= delta;
          if (this.resetTimer <= 0) this.resetBoard();
          return;
        }

        if (this.inputGrace > 0) {
          this.inputGrace = Math.max(0, this.inputGrace - delta);
          this.actionWasDown = actionPressed("action");
          this.moveWasDown = actionPressed("left") || actionPressed("right") || actionPressed("up") || actionPressed("down");
          return;
        }

        if (!this.playerTurn) {
          this.aiDelay -= delta;
          if (this.aiDelay <= 0) {
            this.aiMove();
            this.resolveBoard();
            if (!this.resetTimer && !this.over) {
              this.playerTurn = true;
              this.roundMessage = "Your move";
            }
          }
          return;
        }

        const horizontal = Number(actionPressed("right")) - Number(actionPressed("left"));
        const vertical = Number(actionPressed("down")) - Number(actionPressed("up"));
        const moving = horizontal !== 0 || vertical !== 0;
        if (moving && !this.moveWasDown) {
          const row = Math.floor(this.cursor / 3);
          const col = this.cursor % 3;
          this.cursor = clamp(row + vertical, 0, 2) * 3 + clamp(col + horizontal, 0, 2);
          audio.beep(330, 0.035, "triangle");
        }
        this.moveWasDown = moving;

        const actionDown = actionPressed("action");
        if (actionDown && !this.actionWasDown && this.playerTurn && !this.board[this.cursor]) {
          this.board[this.cursor] = "X";
          this.burst(cellCenter(this.cursor).x, cellCenter(this.cursor).y, "#34d6ff", 10);
          audio.beep(620, 0.05, "square");
          this.resolveBoard();
          if (!this.resetTimer && !this.over) {
            this.startBotTurn();
          }
        }
        this.actionWasDown = actionDown;
      },
      startBotTurn() {
        this.playerTurn = false;
        this.aiDelay = Math.max(0.18, 0.42 - this.level * 0.015);
        this.roundMessage = "Bot thinking";
      },
      aiMove() {
        const empty = this.board.map((value, index) => (value ? null : index)).filter((value) => value !== null);
        if (!empty.length) return;
        const smartChance = Math.min(0.92, 0.38 + this.level * 0.05 + this.wins * 0.05);
        let move = null;
        if (Math.random() < smartChance) {
          move = findWinningMove(this.board, "O") ?? findWinningMove(this.board, "X");
          if (move === null && !this.board[4]) move = 4;
          if (move === null) {
            const corners = [0, 2, 6, 8].filter((index) => !this.board[index]);
            if (corners.length) move = corners[Math.floor(random(0, corners.length))];
          }
        }
        if (move === null) move = empty[Math.floor(random(0, empty.length))];
        this.board[move] = "O";
        this.burst(cellCenter(move).x, cellCenter(move).y, "#ff3d81", 10);
        audio.beep(260, 0.05, "triangle");
      },
      resolveBoard() {
        const winner = getWinner(this.board);
        if (winner === "X") {
          this.wins += 1;
          this.roundMessage = "Round won";
          this.pushCombo(2);
          this.addScore(130 + this.level * 12 + this.wins * 18, gameCanvas.width / 2, 96, "Win");
          this.resetTimer = 1.1;
        } else if (winner === "O") {
          this.losses += 1;
          this.roundMessage = "Round lost";
          this.breakCombo();
          this.score = Math.max(0, this.score - 35);
          this.resetTimer = 1.25;
        } else if (this.board.every(Boolean)) {
          this.draws += 1;
          this.roundMessage = "Draw";
          this.addScore(35 + this.level * 5, gameCanvas.width / 2, 96, "Draw");
          this.resetTimer = 1;
        }
      },
      resetBoard() {
        this.round += 1;
        this.board = Array(9).fill("");
        this.cursor = 4;
        this.playerTurn = true;
        this.aiDelay = 0;
        this.inputGrace = 0.22;
        this.moveWasDown = actionPressed("left") || actionPressed("right") || actionPressed("up") || actionPressed("down");
        this.actionWasDown = actionPressed("action");
        this.roundMessage = "Your move";
      },
      draw(context) {
        this.drawBase(context);
        drawBadge(context, `Round ${this.round}`, 24, 34, "#b78cff");
        drawBadge(context, `W ${this.wins} D ${this.draws} L ${this.losses}`, 140, 34, "#ffd166");
        drawTicTacToeBoard(context, this.board, this.cursor, this.roundMessage);
        this.drawEffects(context);
        this.drawEnd(context, "Match Over");
      },
    };
  }

  const tetrisPieces = [
    { color: "#34d6ff", cells: [[1, 0], [0, 1], [1, 1], [2, 1]] },
    { color: "#ffd166", cells: [[0, 0], [1, 0], [0, 1], [1, 1]] },
    { color: "#ff3d81", cells: [[0, 1], [1, 1], [2, 1], [3, 1]] },
    { color: "#58f29f", cells: [[1, 0], [2, 0], [0, 1], [1, 1]] },
    { color: "#b78cff", cells: [[0, 0], [1, 0], [1, 1], [2, 1]] },
    { color: "#ff8a3d", cells: [[0, 0], [0, 1], [1, 1], [2, 1]] },
    { color: "#8ee8ff", cells: [[2, 0], [0, 1], [1, 1], [2, 1]] },
  ];

  function createTetris(base) {
    const cols = 10;
    const rows = 18;
    return {
      ...base,
      cols,
      rows,
      grid: Array.from({ length: rows }, () => Array(cols).fill(null)),
      current: makeTetrisPiece(),
      dropTimer: 0,
      lines: 0,
      input: {},
      update(delta) {
        this.updateTimer(delta);
        if (this.over) return;
        const left = actionPressed("left");
        const right = actionPressed("right");
        const down = actionPressed("down");
        const up = actionPressed("up");
        const action = actionPressed("action");
        if (left && !this.input.left) this.tryMove(-1, 0);
        if (right && !this.input.right) this.tryMove(1, 0);
        if (up && !this.input.up) this.tryRotate();
        if (action && !this.input.action) {
          while (this.tryMove(0, 1)) this.addScore(1);
          this.lockPiece();
        }
        this.input = { left, right, down, up, action };

        const interval = Math.max(0.08, 0.82 - this.level * 0.055);
        this.dropTimer += delta * (down ? 7 : 1);
        while (this.dropTimer >= interval && !this.over) {
          this.dropTimer -= interval;
          if (!this.tryMove(0, 1)) this.lockPiece();
        }
        this.score += delta * 4;
      },
      tryMove(dx, dy) {
        const next = { ...this.current, x: this.current.x + dx, y: this.current.y + dy };
        if (this.collides(next)) return false;
        this.current = next;
        return true;
      },
      tryRotate() {
        const rotated = this.current.cells.map(([x, y]) => [1 - y, x]);
        const kicks = [0, -1, 1, -2, 2];
        for (const kick of kicks) {
          const next = { ...this.current, x: this.current.x + kick, cells: rotated };
          if (!this.collides(next)) {
            this.current = next;
            audio.beep(520, 0.035, "triangle");
            return;
          }
        }
      },
      collides(piece) {
        return piece.cells.some(([cx, cy]) => {
          const x = piece.x + cx;
          const y = piece.y + cy;
          return x < 0 || x >= cols || y >= rows || (y >= 0 && this.grid[y][x]);
        });
      },
      lockPiece() {
        this.current.cells.forEach(([cx, cy]) => {
          const x = this.current.x + cx;
          const y = this.current.y + cy;
          if (y >= 0 && y < rows && x >= 0 && x < cols) this.grid[y][x] = this.current.color;
        });
        const before = this.grid.length;
        this.grid = this.grid.filter((row) => row.some((cell) => !cell));
        const cleared = before - this.grid.length;
        while (this.grid.length < rows) this.grid.unshift(Array(cols).fill(null));
        if (cleared) {
          this.lines += cleared;
          this.pushCombo(cleared);
          this.addScore((cleared * cleared * 90) + this.level * 20, gameCanvas.width / 2, 94, `${cleared} Line`);
          this.burst(gameCanvas.width / 2, 280, "#34d6ff", 18 + cleared * 6);
          audio.beep(700 + cleared * 70, 0.06, "square");
        }
        this.current = makeTetrisPiece();
        if (this.collides(this.current)) {
          this.flash = 0.2;
          this.finish();
        }
      },
      draw(context) {
        this.drawBase(context);
        drawBadge(context, `Lines ${this.lines}`, 24, 34, "#34d6ff");
        drawTetrisBoard(context, this);
        this.drawEffects(context);
        this.drawEnd(context, this.timeLeft <= 0 ? "Stack Saved" : "Stack Locked");
      },
    };
  }

  function createTwenty48(base) {
    return {
      ...base,
      grid: make2048Grid(),
      input: {},
      moves: 0,
      biggest: 2,
      update(delta) {
        this.updateTimer(delta);
        if (this.over) return;
        const direction = getPressedDirection();
        if (direction && !this.input[direction]) {
          const result = slide2048(this.grid, direction);
          if (result.moved) {
            this.grid = result.grid;
            this.moves += 1;
            this.biggest = Math.max(this.biggest, result.biggest);
            this.addScore(result.gained || 4, gameCanvas.width / 2, 95, result.gained ? "Merge" : "Move");
            if (result.gained) this.pushCombo(result.gained >= 64 ? 2 : 1);
            add2048Tile(this.grid);
            audio.beep(result.gained ? 720 : 420, 0.045, "triangle");
            if (!canMove2048(this.grid)) this.finish();
          } else {
            audio.beep(150, 0.035, "triangle");
          }
        }
        this.input = {
          left: actionPressed("left"),
          right: actionPressed("right"),
          up: actionPressed("up"),
          down: actionPressed("down"),
        };
      },
      draw(context) {
        this.drawBase(context);
        drawBadge(context, `Moves ${this.moves}`, 24, 34, "#ffd166");
        drawBadge(context, `Best ${this.biggest}`, 140, 34, "#58f29f");
        draw2048Board(context, this.grid);
        this.drawEffects(context);
        this.drawEnd(context, this.timeLeft <= 0 ? "Reactor Stable" : "Grid Locked");
      },
    };
  }

  function createDriftBoss(base) {
    const carSpec = activeDriftCar();
    const activeBoosters = { doubleScore: false, insurance: false, coinRush: false };
    const points = [];
    const startY = 420;
    const startCenter = gameCanvas.width / 2;
    for (let y = -180; y <= gameCanvas.height + 180; y += 90) {
      const previous = points[points.length - 1]?.x ?? gameCanvas.width / 2;
      const safeStartZone = y >= startY - 180 && y <= startY + 90;
      points.push({
        x: safeStartZone ? startCenter : clamp(previous + random(-145, 145), 170, gameCanvas.width - 170),
        y,
      });
    }
    const startX = roadCenterAt(points, startY);
    return {
      ...base,
      car: { x: startX, y: startY, angle: 0 },
      carSpec,
      activeBoosters,
      road: points,
      coins: [],
      trackCoins: 0,
      distance: 0,
      checkpoint: 0,
      insured: activeBoosters.insurance,
      started: false,
      readyCountdown: 3,
      spawnGrace: 1.25,
      update(delta) {
        if (this.over) return;
        if (!this.started) return;
        if (this.readyCountdown > 0) {
          this.readyCountdown = Math.max(0, this.readyCountdown - delta);
          this.car.x = roadCenterAt(this.road, this.car.y);
          return;
        }
        this.updateTimer(delta);
        if (this.over) return;
        const speed = 150 + this.level * 22;
        const width = Math.max(128, 250 - this.level * 9);
        const turningRight = actionPressed("action") || actionPressed("right");
        const sensitivity = profile.driftSensitivity / 100;
        this.car.x += (turningRight ? 1 : -1) * (180 + this.level * 10) * this.carSpec.handling * sensitivity * delta;
        this.car.angle = turningRight ? 0.36 : -0.36;
        this.road.forEach((point) => {
          point.y += speed * delta;
        });
        this.coins.forEach((coin) => {
          coin.y += speed * delta;
        });
        while (this.road[0].y > -130) {
          const nextX = clamp(this.road[0].x + random(-185, 185), 150, gameCanvas.width - 150);
          this.road.unshift({ x: nextX, y: this.road[0].y - 90 });
          if (Math.random() < 0.55) this.coins.push({ x: nextX + random(-34, 34), y: this.road[0].y + 36, value: this.activeBoosters.coinRush ? 2 : 1 });
        }
        this.road = this.road.filter((point) => point.y < gameCanvas.height + 190);
        this.coins = this.coins.filter((coin) => coin.y < gameCanvas.height + 80 && !coin.collected);
        this.distance += speed * delta;
        this.score += delta * (24 + this.level * 7) * (this.activeBoosters.doubleScore ? 2 : 1);
        this.spawnGrace = Math.max(0, this.spawnGrace - delta);
        if (this.distance - this.checkpoint > 720) {
          this.checkpoint = this.distance;
          this.pushCombo();
          this.addScore(90 + this.level * 8, this.car.x, this.car.y - 55, "Check");
          this.burst(this.car.x, this.car.y, "#ff3d81", 12);
          audio.beep(760, 0.05, "square");
        }
        this.coins.forEach((coin) => {
          const hit = Math.hypot(this.car.x - coin.x, this.car.y - coin.y) < 34;
          if (!hit) return;
          coin.collected = true;
          this.trackCoins += coin.value;
          this.addScore(18 * coin.value, coin.x, coin.y, "Coin");
          this.burst(coin.x, coin.y, "#ffd166", 8);
          audio.beep(900, 0.035, "triangle");
        });

        const center = roadCenterAt(this.road, this.car.y);
        if (this.spawnGrace > 0) {
          this.car.x += (center - this.car.x) * Math.min(1, delta * 5);
          return;
        }
        if (Math.abs(this.car.x - center) > width / 2 - 18) {
          if (this.insured) {
            this.insured = false;
            this.car.x = center;
            this.flash = 0.18;
            this.addScore(30, this.car.x, this.car.y - 48, "Insurance");
            audio.beep(520, 0.08, "square");
            return;
          }
          this.flash = 0.22;
          this.burst(this.car.x, this.car.y, "#ff5b5b", 24);
          audio.beep(90, 0.18, "sawtooth");
          this.finish();
        }
      },
      draw(context) {
        drawDriftScene(context, this);
        drawBadge(context, `${Math.floor(this.distance / 10)}m`, 24, 34, "#ff3d81");
        drawBadge(context, `${this.trackCoins} coins`, 150, 34, "#ffd166");
        drawDriftRoad(context, this.road, Math.max(128, 250 - this.level * 9), this.distance);
        if (this.started && this.readyCountdown > 0) drawDriftStartGuide(context, this);
        drawDriftCoins(context, this.coins);
        drawDriftCar(context, this.car, this.carSpec);
        if (!this.started) drawDriftTutorial(context);
        if (this.started && this.readyCountdown > 0) drawCountdown(context, Math.ceil(this.readyCountdown), this);
        this.drawEffects(context);
        if (this.flash) {
          context.fillStyle = `rgba(255, 91, 91, ${this.flash * 2})`;
          context.fillRect(0, 0, gameCanvas.width, gameCanvas.height);
        }
        this.drawEnd(context, this.timeLeft <= 0 ? "Boss Run" : "Off Road");
      },
    };
  }

  function createBeatFoundry(base) {
    return {
      ...base,
      lane: 1,
      pulse: random(0, Math.PI * 2),
      target: random(0, Math.PI * 2),
      input: { action: false, move: false },
      misses: 0,
      heat: 0,
      recipe: makeBeatRecipe(3),
      recipeStep: 0,
      laneColors: ["#34d6ff", "#fb7185", "#ffd166"],
      update(delta) {
        this.updateTimer(delta);
        if (this.over) return;
        const vertical = Number(actionPressed("down")) - Number(actionPressed("up"));
        if (vertical && !this.input.move) {
          this.lane = clamp(this.lane + vertical, 0, 2);
          this.target = random(0, Math.PI * 2);
          audio.beep(420 + this.lane * 80, 0.035, "triangle");
        }
        const speed = 2.15 + this.level * 0.22 + this.heat * 0.006;
        this.pulse = (this.pulse + speed * delta) % (Math.PI * 2);
        const action = actionPressed("action");
        if (action && !this.input.action) {
          const window = Math.max(0.16, 0.48 - this.level * 0.022);
          const gap = angularDistance(this.pulse, this.target);
          if (gap <= window) {
            const expectedLane = this.recipe[this.recipeStep];
            if (this.lane !== expectedLane) {
              this.misses += 1;
              this.heat = Math.max(0, this.heat - 12);
              this.breakCombo();
              this.flash = 0.14;
              this.addScore(6, 480, 170 + this.lane * 92, "Wrong core");
              audio.beep(150, 0.09, "sawtooth");
              if (this.misses >= 5) this.finish();
              this.input = { action, move: Boolean(vertical) };
              return;
            }
            const perfect = gap <= window * 0.42;
            const points = perfect ? 120 + this.level * 12 : 65 + this.level * 8;
            this.heat = Math.min(100, this.heat + (perfect ? 12 : 7));
            this.pushCombo(perfect ? 2 : 1);
            this.addScore(points, 480, 170 + this.lane * 92, perfect ? "Perfect" : "Strike");
            this.burst(480, 170 + this.lane * 92, this.laneColors[this.lane], perfect ? 22 : 14);
            this.recipeStep += 1;
            if (this.recipeStep >= this.recipe.length) {
              this.addScore(210 + this.level * 18 + Math.floor(this.heat), 480, 470, "Pattern forged");
              this.burst(480, 470, "#ffd166", 30);
              this.heat = Math.min(100, this.heat + 18);
              this.recipe = makeBeatRecipe(this.level >= 7 ? 5 : 4);
              this.recipeStep = 0;
            }
            this.target = random(0, Math.PI * 2);
            if (perfect && Math.random() < 0.3) this.lane = this.recipe[this.recipeStep];
            audio.beep(perfect ? 920 : 700, 0.045, "square");
          } else {
            this.misses += 1;
            this.heat = Math.max(0, this.heat - 16);
            this.breakCombo();
            this.flash = 0.16;
            this.addScore(8, 480, 170 + this.lane * 92, "Early");
            audio.beep(130, 0.1, "sawtooth");
            if (this.misses >= 5) this.finish();
          }
        }
        this.input = { action, move: Boolean(vertical) };
        this.score += delta * (8 + this.level * 2 + this.heat * 0.08);
      },
      draw(context) {
        drawBeatFoundry(context, this);
        drawBadge(context, `Heat ${Math.floor(this.heat)}%`, 24, 34, "#fb7185");
        drawBadge(context, `Miss ${this.misses}/5`, 160, 34, "#ffd166");
        this.drawEffects(context);
        if (this.flash) {
          context.fillStyle = `rgba(255, 91, 91, ${this.flash * 2})`;
          context.fillRect(0, 0, gameCanvas.width, gameCanvas.height);
        }
        this.drawEnd(context, this.misses >= 5 ? "Forge Cracked" : "Shift Complete");
      },
    };
  }

  function createSnake(base) {
    return {
      ...base,
      cols: 24,
      rows: 15,
      snake: [{ x: 7, y: 7 }, { x: 6, y: 7 }, { x: 5, y: 7 }],
      dir: { x: 1, y: 0 },
      nextDir: { x: 1, y: 0 },
      pellet: { x: 16, y: 7, type: "packet" },
      uplink: { x: 20, y: 11 },
      exit: null,
      firewalls: [],
      stepTimer: 0,
      input: { action: false },
      cache: 0,
      delivered: 0,
      contract: 6,
      contractBanked: 0,
      contracts: 0,
      decoys: 2,
      update(delta) {
        this.updateTimer(delta);
        if (this.over) return;
        const next = directionFromKeys(this.nextDir);
        if (next && !(next.x === -this.dir.x && next.y === -this.dir.y)) this.nextDir = next;
        const action = actionPressed("action");
        if (action && !this.input.action && this.cache >= 2 && this.decoys > 0) {
          const tail = this.snake[this.snake.length - 1];
          const before = this.firewalls.length;
          this.firewalls = this.firewalls.filter((wall) => distance(wall.x, wall.y, tail.x, tail.y) > 2.25);
          this.cache -= 1;
          this.decoys -= 1;
          this.addScore(before > this.firewalls.length ? 42 : 18, gameCanvas.width / 2, 96, "Trace scrub");
          this.burst(480, 270, "#ffd166", 10);
          audio.beep(540, 0.04, "triangle");
        }
        this.input.action = action;
        this.stepTimer += delta;
        const interval = Math.max(0.07, 0.22 - this.level * 0.012);
        while (this.stepTimer >= interval && !this.over) {
          this.stepTimer -= interval;
          this.dir = this.nextDir;
          const head = this.snake[0];
          const nextHead = { x: head.x + this.dir.x, y: head.y + this.dir.y };
          const hitWall = nextHead.x < 0 || nextHead.x >= this.cols || nextHead.y < 0 || nextHead.y >= this.rows;
          const hitSelf = this.snake.some((part) => part.x === nextHead.x && part.y === nextHead.y);
          const hitFirewall = this.firewalls.some((wall) => wall.x === nextHead.x && wall.y === nextHead.y);
          if (hitWall || hitSelf || hitFirewall) {
            this.flash = 0.2;
            this.finish();
            audio.beep(100, 0.16, "sawtooth");
            return;
          }
          this.snake.unshift(nextHead);
          let grow = false;
          if (nextHead.x === this.pellet.x && nextHead.y === this.pellet.y) {
            this.cache += this.pellet.type === "key" ? 2 : 1;
            this.pushCombo();
            this.addScore(this.pellet.type === "key" ? 68 : 36, gameCanvas.width / 2, 94, this.pellet.type === "key" ? "Key" : "Packet");
            this.pellet = makeSnakePellet(this.cols, this.rows, this.snake, [...this.firewalls, this.uplink, this.exit].filter(Boolean));
            this.pellet.type = Math.random() < 0.18 ? "key" : "packet";
            grow = true;
            if (this.cache >= 3 && Math.random() < 0.55) {
              const firewall = makeSnakePellet(this.cols, this.rows, this.snake, [this.pellet, this.uplink, this.exit, ...this.firewalls].filter(Boolean));
              this.firewalls.push(firewall);
              this.firewalls = this.firewalls.slice(-Math.min(10, 3 + this.level));
            }
            this.burst(480, 270, this.pellet.type === "key" ? "#ffd166" : "#58f29f", 10);
            audio.beep(720, 0.045, "triangle");
          }
          if (nextHead.x === this.uplink.x && nextHead.y === this.uplink.y && this.cache > 0) {
            const banked = this.cache;
            this.delivered += banked;
            this.contractBanked = Math.min(this.contract, this.contractBanked + banked);
            this.addScore(85 * banked + this.level * 12, gameCanvas.width / 2, 126, "Upload");
            this.cache = 0;
            this.decoys = Math.min(3, this.decoys + 1);
            const newLength = Math.max(3, this.snake.length - Math.max(1, banked));
            this.snake = this.snake.slice(0, newLength);
            grow = true;
            if (this.pellet && this.snake.some((part) => part.x === this.pellet.x && part.y === this.pellet.y)) {
              this.pellet = makeSnakePellet(this.cols, this.rows, this.snake, [this.uplink, this.exit, ...this.firewalls].filter(Boolean));
              this.pellet.type = Math.random() < 0.18 ? "key" : "packet";
            }
            if (this.contractBanked >= this.contract && !this.exit) {
              this.exit = makeSnakePellet(this.cols, this.rows, this.snake, [this.pellet, this.uplink, ...this.firewalls]);
              this.addScore(120 + this.level * 10, gameCanvas.width / 2, 162, "Exit open");
              audio.sfx("bank");
            } else {
              this.uplink = makeSnakePellet(this.cols, this.rows, this.snake, [this.pellet, this.exit, ...this.firewalls].filter(Boolean));
            }
            this.burst(480, 270, "#34d6ff", 18);
            audio.beep(940, 0.06, "square");
          }
          if (this.exit && nextHead.x === this.exit.x && nextHead.y === this.exit.y) {
            this.contracts += 1;
            this.pushCombo(3);
            this.addScore(360 + this.contract * 22 + this.level * 20, gameCanvas.width / 2, 142, "Contract");
            this.contract = Math.min(14, 6 + this.contracts * 2 + Math.floor(this.level / 2));
            this.contractBanked = 0;
            this.exit = null;
            this.cache = 0;
            this.decoys = Math.min(3, this.decoys + 1);
            this.firewalls = this.firewalls.slice(-Math.max(1, Math.floor(this.firewalls.length * 0.55)));
            this.uplink = makeSnakePellet(this.cols, this.rows, this.snake, [this.pellet, ...this.firewalls]);
            this.burst(480, 270, "#58f29f", 26);
            audio.sfx("coin");
          }
          if (!grow) {
            this.snake.pop();
          }
        }
        this.score += delta * (6 + this.level + this.cache * 0.8);
      },
      draw(context) {
        drawDataVaultScene(context, this);
        drawBadge(context, `Cache ${this.cache}`, 24, 34, "#58f29f");
        drawBadge(context, `Quota ${this.contractBanked}/${this.contract}`, 142, 34, "#34d6ff");
        drawBadge(context, `Runs ${this.contracts}`, 306, 34, "#ffd166");
        drawSnakeBoard(context, this);
        this.drawEffects(context);
        this.drawEnd(context, this.timeLeft <= 0 ? "Data Escaped" : "Trace Caught");
      },
    };
  }

  function createBreaker(base) {
    return {
      ...base,
      paddle: { x: 480, y: 492, width: 140 },
      ball: { x: 480, y: 410, vx: 210, vy: -250, r: 10 },
      bricks: makeBricks(1),
      lives: 3,
      wave: 1,
      update(delta) {
        this.updateTimer(delta);
        if (this.over) return;
        const paddleSpeed = (actionPressed("action") ? 560 : 410) + this.level * 10;
        this.paddle.width = Math.max(92, 146 - this.level * 4);
        this.paddle.x += (Number(actionPressed("right")) - Number(actionPressed("left"))) * paddleSpeed * delta;
        this.paddle.x = clamp(this.paddle.x, this.paddle.width / 2 + 20, gameCanvas.width - this.paddle.width / 2 - 20);

        this.ball.x += this.ball.vx * delta;
        this.ball.y += this.ball.vy * delta;
        const speedBoost = 1 + this.level * 0.012;
        if (this.ball.x < this.ball.r || this.ball.x > gameCanvas.width - this.ball.r) this.ball.vx *= -1;
        if (this.ball.y < this.ball.r) this.ball.vy = Math.abs(this.ball.vy);
        const paddleHit =
          this.ball.vy > 0 &&
          this.ball.y + this.ball.r > this.paddle.y - 12 &&
          this.ball.y - this.ball.r < this.paddle.y + 14 &&
          Math.abs(this.ball.x - this.paddle.x) < this.paddle.width / 2 + this.ball.r;
        if (paddleHit) {
          const offset = (this.ball.x - this.paddle.x) / (this.paddle.width / 2);
          this.ball.vx = offset * 310 * speedBoost;
          this.ball.vy = -Math.abs(this.ball.vy) * 1.01;
          audio.beep(420, 0.035, "triangle");
        }

        for (const brick of this.bricks) {
          if (!brick.live) continue;
          if (
            this.ball.x + this.ball.r > brick.x &&
            this.ball.x - this.ball.r < brick.x + brick.w &&
            this.ball.y + this.ball.r > brick.y &&
            this.ball.y - this.ball.r < brick.y + brick.h
          ) {
            brick.live = false;
            this.ball.vy *= -1;
            this.pushCombo();
            this.addScore(32 + this.level * 4, brick.x + brick.w / 2, brick.y, "Break");
            this.burst(brick.x + brick.w / 2, brick.y + brick.h / 2, brick.color, 8);
            audio.beep(680, 0.04, "square");
            break;
          }
        }

        if (this.ball.y > gameCanvas.height + 30) {
          this.lives -= 1;
          this.breakCombo();
          if (this.lives <= 0) {
            this.finish();
          } else {
            this.ball = { x: this.paddle.x, y: 410, vx: random(-210, 210), vy: -260, r: 10 };
            audio.beep(130, 0.1, "sawtooth");
          }
        }
        if (!this.bricks.some((brick) => brick.live)) {
          this.wave += 1;
          this.bricks = makeBricks(this.wave);
          this.addScore(180 + this.level * 20, gameCanvas.width / 2, 94, "Wave");
          this.burst(gameCanvas.width / 2, 170, "#b78cff", 22);
        }
      },
      draw(context) {
        this.drawBase(context);
        drawBadge(context, `Lives ${this.lives}`, 24, 34, "#ffd166");
        drawBadge(context, `Wave ${this.wave}`, 140, 34, "#b78cff");
        drawBreaker(context, this);
        this.drawEffects(context);
        this.drawEnd(context, this.timeLeft <= 0 ? "Wall Cleared" : "Signal Lost");
      },
    };
  }

  function createPinball(base) {
    return {
      ...base,
      ball: { x: 480, y: 302, vx: 135, vy: -245, r: 11 },
      lives: 3,
      table: { left: 170, right: 790, top: 74, drain: 520 },
      bumpers: [
        { x: 360, y: 190, r: 30, color: "#ff8a3d", label: "HOT", pulse: 0 },
        { x: 500, y: 150, r: 28, color: "#34d6ff", label: "RAMP", pulse: 0 },
        { x: 610, y: 230, r: 32, color: "#ffd166", label: "BANK", pulse: 0 },
      ],
      flipCooldown: 0,
      leftFlip: 0,
      rightFlip: 0,
      targetBumper: 1,
      update(delta) {
        this.updateTimer(delta);
        if (this.over) return;
        const left = actionPressed("left") || actionPressed("action");
        const right = actionPressed("right") || actionPressed("action");
        this.flipCooldown = Math.max(0, this.flipCooldown - delta);
        this.leftFlip = Math.max(0, this.leftFlip - delta * 4);
        this.rightFlip = Math.max(0, this.rightFlip - delta * 4);
        this.bumpers.forEach((bumper) => { bumper.pulse = Math.max(0, bumper.pulse - delta * 2.8); });
        this.ball.vy += (500 + this.level * 15) * delta;
        this.ball.x += this.ball.vx * delta;
        this.ball.y += this.ball.vy * delta;
        const leftWall = this.table.left + this.ball.r;
        const rightWall = this.table.right - this.ball.r;
        if (this.ball.x < leftWall) {
          this.ball.x = leftWall;
          this.ball.vx = Math.max(150, Math.abs(this.ball.vx) * 0.96);
          audio.beep(260, 0.025, "triangle");
        }
        if (this.ball.x > rightWall) {
          this.ball.x = rightWall;
          this.ball.vx = -Math.max(150, Math.abs(this.ball.vx) * 0.96);
          audio.beep(260, 0.025, "triangle");
        }
        if (this.ball.y < this.table.top + this.ball.r) {
          this.ball.y = this.table.top + this.ball.r;
          this.ball.vy = Math.max(180, Math.abs(this.ball.vy) * 0.96);
          audio.beep(320, 0.025, "triangle");
        }
        if (this.ball.y > 410 && this.ball.y < this.table.drain) {
          const railProgress = clamp((this.ball.y - 410) / (this.table.drain - 410), 0, 1);
          const leftRail = this.table.left + 22 + railProgress * 118 + this.ball.r;
          const rightRail = this.table.right - 22 - railProgress * 118 - this.ball.r;
          if (this.ball.x < leftRail) {
            this.ball.x = leftRail;
            this.ball.vx = Math.max(190, Math.abs(this.ball.vx) * 0.9);
            this.ball.vy = Math.min(this.ball.vy, 120) - 90;
            audio.beep(300, 0.025, "triangle");
          }
          if (this.ball.x > rightRail) {
            this.ball.x = rightRail;
            this.ball.vx = -Math.max(190, Math.abs(this.ball.vx) * 0.9);
            this.ball.vy = Math.min(this.ball.vy, 120) - 90;
            audio.beep(300, 0.025, "triangle");
          }
        }
        const leftHit = left && this.ball.x < 480 && this.ball.y > 416 && this.ball.y < 498 && this.ball.vy > -90;
        const rightHit = right && this.ball.x >= 480 && this.ball.y > 416 && this.ball.y < 498 && this.ball.vy > -90;
        if ((leftHit || rightHit) && this.flipCooldown <= 0) {
          this.flipCooldown = 0.12;
          if (leftHit) this.leftFlip = 1;
          if (rightHit) this.rightFlip = 1;
          const flipperCenter = leftHit ? 374 : 586;
          const offset = clamp((this.ball.x - flipperCenter) / 90, -1, 1);
          this.ball.vy = -Math.max(340, Math.abs(this.ball.vy) + 150);
          this.ball.vx = offset * 360 + (leftHit ? 150 : -150) + random(-24, 24);
          this.addScore(18 + this.level, this.ball.x, this.ball.y, "Flip");
          audio.sfx("launch");
        }
        if (this.ball.y > 500 && (this.ball.x < 310 || this.ball.x > 650)) {
          this.ball.vx += this.ball.x < 480 ? 120 * delta : -120 * delta;
          this.ball.vy -= 80 * delta;
        }
        this.bumpers.forEach((bumper, index) => {
          const gap = distance(this.ball.x, this.ball.y, bumper.x, bumper.y);
          if (gap < this.ball.r + bumper.r) {
            const wasTarget = index === this.targetBumper;
            const angle = gap > 0 ? Math.atan2(this.ball.y - bumper.y, this.ball.x - bumper.x) : random(0, Math.PI * 2);
            const edge = this.ball.r + bumper.r + 1;
            this.ball.x = bumper.x + Math.cos(angle) * edge;
            this.ball.y = bumper.y + Math.sin(angle) * edge;
            this.ball.vx = Math.cos(angle) * (310 + this.level * 16);
            this.ball.vy = Math.sin(angle) * (310 + this.level * 16);
            bumper.pulse = 1;
            this.pushCombo();
            this.addScore(wasTarget ? 95 + this.level * 8 : 55 + this.level * 6, bumper.x, bumper.y, wasTarget ? "Lit target" : "Bumper");
            if (wasTarget) this.targetBumper = (this.targetBumper + 1) % this.bumpers.length;
            this.burst(bumper.x, bumper.y, bumper.color, 14);
            audio.sfx(wasTarget ? "coin" : "hit");
          }
        });
        if (this.ball.y > this.table.drain || Math.abs(this.ball.vx) > 900 || Math.abs(this.ball.vy) > 900) {
          this.lives -= 1;
          this.breakCombo();
          if (this.lives <= 0) this.finish();
          this.ball = { x: 480, y: 260, vx: random(-160, 160), vy: -260, r: 11 };
          audio.sfx("danger");
        }
        this.score += delta * (8 + this.level);
      },
      draw(context) {
        this.drawBase(context);
        drawBadge(context, `Lives ${this.lives}`, 24, 34, "#ffd166");
        drawPinballTable(context, this);
        this.drawEffects(context);
        this.drawEnd(context, this.timeLeft <= 0 ? "Table Mastered" : "Ball Drained");
      },
    };
  }

  function createRiverRush(base) {
    return {
      ...base,
      timeLeft: 35,
      raft: { x: 480, y: 445, w: 54, h: 32 },
      rocks: [],
      flags: [],
      gates: [],
      spawn: 0,
      gateSpawn: 0.6,
      checkpoints: 0,
      hits: 0,
      update(delta) {
        if (this.over) return;
        this.elapsed += delta;
        this.timeLeft = Math.max(0, 35 - this.elapsed);
        this.level = Math.min(12, Math.floor(this.checkpoints / 2.55) + 1);
        this.comboTimer = Math.max(0, this.comboTimer - delta);
        if (this.comboTimer <= 0) this.combo = 1;
        this.flash = Math.max(0, this.flash - delta);
        this.updateEffects(delta);
        if (this.timeLeft <= 0) this.finish();
        if (this.over) return;
        const boost = actionPressed("action") ? 1.35 : 1;
        this.raft.x += (Number(actionPressed("right")) - Number(actionPressed("left"))) * 330 * delta;
        this.raft.y += (Number(actionPressed("down")) - Number(actionPressed("up"))) * 250 * delta;
        this.raft.x = clamp(this.raft.x, 120, gameCanvas.width - 120);
        this.raft.y = clamp(this.raft.y, 190, gameCanvas.height - 45);
        const flow = (210 + this.level * 24) * boost;
        this.gateSpawn -= delta * boost;
        if (this.gateSpawn <= 0) {
          this.gateSpawn = Math.max(0.8, 1.75 - this.level * 0.06);
          const gap = Math.max(118, 172 - this.level * 5);
          const center = random(210, gameCanvas.width - 210);
          this.gates.push({ x: center, y: -42, gap, passed: false });
          if (Math.random() < 0.5) this.flags.push({ x: center + random(-gap * 0.35, gap * 0.35), y: -104, r: 14, time: 2 });
        }
        this.spawn -= delta;
        if (this.spawn <= 0) {
          this.spawn = Math.max(0.3, 0.95 - this.level * 0.04);
          const x = random(155, gameCanvas.width - 155);
          this.rocks.push({ x, y: -40, r: random(18, 32), spin: random(-1, 1), hit: false });
        }
        this.rocks.forEach((rock) => { rock.y += flow * delta; });
        this.flags.forEach((flag) => { flag.y += flow * delta; });
        this.gates.forEach((gate) => { gate.y += flow * delta; });
        this.rocks = this.rocks.filter((rock) => rock.y < gameCanvas.height + 60);
        this.flags = this.flags.filter((flag) => flag.y < gameCanvas.height + 60 && !flag.collected);
        this.gates = this.gates.filter((gate) => gate.y < gameCanvas.height + 60 && !gate.passed);
        this.gates.forEach((gate) => {
          if (gate.y > this.raft.y && Math.abs(gate.x - this.raft.x) < gate.gap / 2) {
            gate.passed = true;
            this.checkpoints += 1;
            this.pushCombo();
            this.elapsed = Math.max(0, this.elapsed - 2.4);
            this.addScore(95 + this.level * 9, gate.x, this.raft.y - 42, "Gate");
            this.burst(this.raft.x, this.raft.y, "#2dd4bf", 16);
            audio.beep(820, 0.05, "triangle");
          }
        });
        for (const rock of this.rocks) {
          if (!rock.hit && distance(rock.x, rock.y, this.raft.x, this.raft.y) < rock.r + 24) {
            rock.hit = true;
            this.hits += 1;
            this.elapsed += 3.2;
            this.flash = 0.2;
            this.burst(this.raft.x, this.raft.y, "#ff5b5b", 22);
            audio.beep(100, 0.14, "sawtooth");
            this.breakCombo();
          }
        }
        this.flags.forEach((flag) => {
          if (distance(flag.x, flag.y, this.raft.x, this.raft.y) < flag.r + 26) {
            flag.collected = true;
            this.pushCombo();
            this.elapsed = Math.max(0, this.elapsed - flag.time);
            this.addScore(48 + this.level * 5, flag.x, flag.y, "+Time");
            this.burst(flag.x, flag.y, "#ffd166", 12);
          }
        });
        this.score += delta * (18 + this.level * 4) * boost;
      },
      draw(context) {
        drawRiverScene(context, this.elapsed);
        drawBadge(context, `${this.checkpoints} gates`, 24, 34, "#2dd4bf");
        drawBadge(context, `${this.hits} hits`, 150, 34, "#ff5b5b");
        drawRiverObjects(context, this);
        this.drawEffects(context);
        this.drawEnd(context, "Time Washed Out");
      },
    };
  }

  function createKeeper(base) {
    return {
      ...base,
      keeper: { x: 480, y: 474, w: 76 },
      balls: [],
      spawn: 0.8,
      goals: 0,
      saves: 0,
      goal: { x: 480, y: 402, w: 360, h: 98 },
      update(delta) {
        this.updateTimer(delta);
        if (this.over) return;
        const dive = actionPressed("action") ? 1.45 : 1;
        const goalLeft = this.goal.x - this.goal.w / 2;
        const goalRight = this.goal.x + this.goal.w / 2;
        this.keeper.x += (Number(actionPressed("right")) - Number(actionPressed("left"))) * 465 * delta;
        this.keeper.x = clamp(this.keeper.x, goalLeft + 24, goalRight - 24);
        this.keeper.w = actionPressed("action") ? 116 : 76;
        this.spawn -= delta;
        if (this.spawn <= 0) {
          this.spawn = Math.max(0.28, 1.08 - this.level * 0.08);
          const targetX = random(goalLeft + 26, goalRight - 26);
          const startX = random(250, gameCanvas.width - 250);
          const typeRoll = Math.random();
          const type = typeRoll > 0.66 ? "power" : typeRoll > 0.3 ? "curve" : "normal";
          const speed = (type === "power" ? 430 : type === "curve" ? 330 : 300) + this.level * (type === "power" ? 46 : 38);
          const curve = type === "curve" ? random(-420, 420) : type === "power" ? random(-150, 150) : random(-42, 42);
          const goalY = this.keeper.y + 24;
          const flightTime = (goalY - 86) / speed;
          const vx = (targetX - startX - 0.5 * curve * flightTime * flightTime) / flightTime;
          this.balls.push({
            x: startX,
            y: 86,
            vx,
            vy: speed,
            r: type === "power" ? 16 : 13,
            type,
            curve,
            targetX,
            trail: [],
          });
        }
        this.balls.forEach((ball) => {
          ball.trail.push({ x: ball.x, y: ball.y });
          if (ball.trail.length > 8) ball.trail.shift();
          ball.vx += ball.curve * delta;
          ball.x += ball.vx * delta;
          ball.y += ball.vy * delta;
        });
        for (const ball of this.balls) {
          if (ball.saved) continue;
          const saved = ball.y > this.keeper.y - 24 && Math.abs(ball.x - this.keeper.x) < this.keeper.w / 2 + ball.r;
          if (saved) {
            ball.saved = true;
            this.saves += 1;
            this.pushCombo();
            const label = ball.type === "power" ? "Power save" : ball.type === "curve" ? "Curve save" : "Save";
            this.addScore(68 + this.level * 9 + (ball.type === "power" ? 24 : 0), ball.x, ball.y, label);
            this.burst(ball.x, ball.y, ball.type === "power" ? "#ff5b5b" : "#facc15", 14);
            audio.beep(ball.type === "power" ? 840 : 720, 0.04, "square");
          } else if (ball.y > this.keeper.y + 24) {
            ball.saved = true;
            ball.x = clamp(ball.x, goalLeft + ball.r, goalRight - ball.r);
            this.goals += 1;
            this.breakCombo();
            if (this.goals >= 5) this.finish();
          }
        }
        this.balls = this.balls.filter((ball) => ball.y < gameCanvas.height + 70 && !ball.saved);
        this.score += delta * (9 + this.level);
      },
      draw(context) {
        drawSoccerField(context);
        drawBadge(context, `Saves ${this.saves}`, 24, 34, "#facc15");
        drawBadge(context, `Goals ${this.goals}/5`, 150, 34, "#ff5b5b");
        drawKeeper(context, this);
        this.drawEffects(context);
        this.drawEnd(context, this.goals >= 5 ? "Net Broken" : "Clean Sheet");
      },
    };
  }

  function createMemoryMatch(base) {
    const symbols = ["A", "B", "C", "D", "E", "F"];
    const deck = [...symbols, ...symbols].sort(() => Math.random() - 0.5).map((symbol) => ({ symbol, open: false, matched: false }));
    return {
      ...base,
      deck,
      cursor: 0,
      opened: [],
      lock: 0,
      matches: 0,
      input: {},
      update(delta) {
        this.updateTimer(delta);
        if (this.over) return;
        if (this.lock > 0) {
          this.lock -= delta;
          if (this.lock <= 0) {
            this.opened.forEach((index) => { if (!this.deck[index].matched) this.deck[index].open = false; });
            this.opened = [];
          }
          return;
        }
        const horizontal = Number(actionPressed("right")) - Number(actionPressed("left"));
        const vertical = Number(actionPressed("down")) - Number(actionPressed("up"));
        const moving = horizontal || vertical;
        if (moving && !this.input.move) {
          const col = this.cursor % 4;
          const row = Math.floor(this.cursor / 4);
          this.cursor = clamp(row + vertical, 0, 2) * 4 + clamp(col + horizontal, 0, 3);
        }
        const action = actionPressed("action");
        if (action && !this.input.action && !this.deck[this.cursor].open && !this.deck[this.cursor].matched) {
          this.deck[this.cursor].open = true;
          this.opened.push(this.cursor);
          if (this.opened.length === 2) {
            const [a, b] = this.opened;
            if (this.deck[a].symbol === this.deck[b].symbol) {
              this.deck[a].matched = true;
              this.deck[b].matched = true;
              this.matches += 1;
              this.opened = [];
              this.pushCombo();
              this.addScore(90 + this.level * 10, gameCanvas.width / 2, 92, "Match");
              if (this.matches === symbols.length) {
                this.addScore(240, gameCanvas.width / 2, 130, "Clear");
                this.deck = [...symbols, ...symbols].sort(() => Math.random() - 0.5).map((symbol) => ({ symbol, open: false, matched: false }));
                this.matches = 0;
              }
            } else {
              this.lock = 0.7;
              this.breakCombo();
            }
          }
        }
        this.input = { move: Boolean(moving), action };
        this.score += delta * (5 + this.level);
      },
      draw(context) {
        this.drawBase(context);
        drawBadge(context, `Pairs ${this.matches}/6`, 24, 34, "#c084fc");
        drawMemoryBoard(context, this);
        this.drawEffects(context);
        this.drawEnd(context, "Memory Closed");
      },
    };
  }

  function createAsteroids(base) {
    return {
      ...base,
      ship: { x: 480, y: 430, beam: 0 },
      refinery: { x: 480, y: 494, r: 44 },
      rocks: [
        makeAsteroidRock(260, 190, 38, "iron"),
        makeAsteroidRock(620, 230, 46, "crystal"),
        makeAsteroidRock(470, 120, 32, "gold"),
      ],
      ore: [],
      spawn: 3,
      lives: 3,
      cargo: { iron: 0, crystal: 0, gold: 0 },
      banked: 0,
      contracts: 0,
      contract: makeMiningContract(1),
      beamHeat: 0,
      overheated: 0,
      beamTarget: null,
      update(delta) {
        this.updateTimer(delta);
        if (this.over) return;
        this.ship.x += (Number(actionPressed("right")) - Number(actionPressed("left"))) * 360 * delta;
        this.ship.y += (Number(actionPressed("down")) - Number(actionPressed("up"))) * 260 * delta;
        this.ship.x = clamp(this.ship.x, 30, gameCanvas.width - 30);
        this.ship.y = clamp(this.ship.y, 95, gameCanvas.height - 35);
        this.spawn -= delta;
        if (this.spawn <= 0) {
          this.spawn = Math.max(1.8, 4.6 - this.level * 0.18);
          this.rocks.push(makeAsteroidRock(random(120, gameCanvas.width - 120), random(95, 310), random(28, 50)));
          this.rocks = this.rocks.slice(-7);
        }
        this.rocks.forEach((rock) => {
          rock.x += rock.vx * delta;
          rock.y += rock.vy * delta;
          rock.spin += delta;
          if (rock.x < rock.r + 18 || rock.x > gameCanvas.width - rock.r - 18) rock.vx *= -1;
          if (rock.y < rock.r + 78 || rock.y > gameCanvas.height - rock.r - 88) rock.vy *= -1;
        });
        this.ore.forEach((ore) => {
          ore.x += ore.vx * delta;
          ore.y += ore.vy * delta;
          ore.vx *= 0.985;
          ore.vy *= 0.985;
        });
        this.beamTarget = null;
        this.overheated = Math.max(0, this.overheated - delta);
        const mining = actionPressed("action") && this.overheated <= 0;
        if (mining) {
          const target = this.rocks
            .filter((rock) => !rock.dead)
            .sort((a, b) => distance(this.ship.x, this.ship.y, a.x, a.y) - distance(this.ship.x, this.ship.y, b.x, b.y))[0];
          if (target && distance(this.ship.x, this.ship.y, target.x, target.y) < 170) {
            this.beamTarget = target;
            this.ship.beam = 0.1;
            this.beamHeat += (34 + this.level * 2) * delta;
            if (this.beamHeat >= 100) {
              this.beamHeat = 100;
              this.overheated = 1.4;
              audio.sfx("danger");
            }
            target.hp -= (42 + this.level * 4) * delta * (this.overheated > 0 ? 0 : 1);
            this.score += delta * (8 + this.level);
            if (Math.random() < 0.18) this.burst(target.x, target.y, "#93c5fd", 1);
            if (target.hp <= 0) {
              target.dead = true;
              for (let i = 0; i < target.ore; i += 1) {
                this.ore.push({ x: target.x, y: target.y, vx: random(-90, 90), vy: random(-80, 80), r: 10, value: 1, mineral: target.mineral });
              }
              this.pushCombo();
              this.addScore(80 + this.level * 8, target.x, target.y, `${target.mineral} core`);
              this.burst(target.x, target.y, mineralColor(target.mineral), 20);
              audio.sfx("coin");
            } else if (Math.random() < 0.08) {
              audio.beep(520, 0.018, "sawtooth");
            }
          }
        } else {
          this.beamHeat = Math.max(0, this.beamHeat - 28 * delta);
        }
        this.ship.beam = Math.max(0, this.ship.beam - delta);
        this.rocks = this.rocks.filter((rock) => !rock.dead);
        this.ore = this.ore.filter((item) => !item.collected);
        for (const rock of this.rocks) {
          if (distance(rock.x, rock.y, this.ship.x, this.ship.y) < rock.r + 22) {
            this.lives -= 1;
            drainCargo(this.cargo, 1);
            this.ship.x = this.refinery.x;
            this.ship.y = this.refinery.y - 68;
            this.flash = 0.18;
            this.breakCombo();
            audio.sfx("danger");
            if (this.lives <= 0) this.finish();
          }
        }
        this.ore.forEach((item) => {
          if (distance(item.x, item.y, this.ship.x, this.ship.y) < item.r + 24) {
            item.collected = true;
            this.cargo[item.mineral] = (this.cargo[item.mineral] || 0) + item.value;
            this.pushCombo();
            this.addScore(30 + this.level * 3, item.x, item.y, item.mineral);
            this.burst(item.x, item.y, mineralColor(item.mineral), 12);
            audio.beep(840, 0.03, "triangle");
          }
        });
        const totalCargo = cargoTotal(this.cargo);
        if (totalCargo > 0 && distance(this.ship.x, this.ship.y, this.refinery.x, this.refinery.y) < this.refinery.r + 20) {
          const cargo = totalCargo;
          const contractMet = this.cargo[this.contract.mineral] >= this.contract.amount;
          if (contractMet) {
            this.contracts += 1;
            this.addScore(240 + this.level * 25, this.refinery.x, this.refinery.y - 88, "Contract");
            this.contract = makeMiningContract(this.level + this.contracts);
          }
          this.cargo = { iron: 0, crystal: 0, gold: 0 };
          this.banked += cargo;
          this.addScore(95 * cargo + this.level * 15, this.refinery.x, this.refinery.y - 60, "Bank");
          this.burst(this.refinery.x, this.refinery.y, "#34d6ff", 18);
          audio.sfx("bank");
        }
        this.score += delta * (5 + this.level + totalCargo * 0.8);
      },
      draw(context) {
        drawSpaceScene(context, this.elapsed);
        drawBadge(context, `Lives ${this.lives}`, 24, 34, "#93c5fd");
        drawBadge(context, `Cargo ${cargoTotal(this.cargo)}`, 140, 34, "#ffd166");
        drawBadge(context, `${this.contract.mineral} ${this.cargo[this.contract.mineral] || 0}/${this.contract.amount}`, 260, 34, mineralColor(this.contract.mineral));
        drawBadge(context, `Heat ${Math.floor(this.beamHeat)}%`, 430, 34, this.overheated ? "#ff5b5b" : "#93c5fd");
        drawAsteroids(context, this);
        this.drawEffects(context);
        if (this.flash) {
          context.fillStyle = `rgba(255, 91, 91, ${this.flash * 2})`;
          context.fillRect(0, 0, gameCanvas.width, gameCanvas.height);
        }
        this.drawEnd(context, this.lives <= 0 ? "Ship Lost" : "Orbit Cleared");
      },
    };
  }

  function createLunarDock(base) {
    return {
      ...base,
      pod: { x: 480, y: 92, vx: random(-32, 32), vy: 0, angle: 0 },
      pad: { x: random(250, 710), w: 150, vx: random(-32, 32) },
      fuel: 100,
      hull: 3,
      docks: 0,
      update(delta) {
        this.updateTimer(delta);
        if (this.over) return;
        const thrust = actionPressed("action") || actionPressed("up");
        const steer = Number(actionPressed("right")) - Number(actionPressed("left"));
        this.fuel = Math.max(0, this.fuel - (thrust ? 10 : 0) * delta - Math.abs(steer) * 3 * delta);
        const fuelLive = this.fuel > 0;
        this.pod.vx += steer * (fuelLive ? 120 : 42) * delta;
        this.pod.vy += (145 + this.level * 5) * delta;
        if (thrust && fuelLive) this.pod.vy -= 260 * delta;
        this.pod.x += this.pod.vx * delta;
        this.pod.y += this.pod.vy * delta;
        this.pod.angle = clamp(this.pod.vx / 240, -0.45, 0.45);
        this.pad.x += this.pad.vx * delta;
        if (this.pad.x < 180 || this.pad.x > gameCanvas.width - 180) this.pad.vx *= -1;
        if (this.pod.x < 30 || this.pod.x > gameCanvas.width - 30) {
          this.pod.x = clamp(this.pod.x, 30, gameCanvas.width - 30);
          this.pod.vx *= -0.52;
        }
        if (this.pod.y > 438) {
          const landed = Math.abs(this.pod.x - this.pad.x) < this.pad.w / 2 && Math.abs(this.pod.vx) < 70 && this.pod.vy < 118;
          if (landed) {
            this.docks += 1;
            this.pushCombo(2);
            this.addScore(220 + this.level * 20 + Math.floor(this.fuel), this.pod.x, this.pod.y - 45, "Dock");
            this.burst(this.pod.x, this.pod.y, "#a3e635", 22);
            this.pod = { x: random(250, 710), y: 86, vx: random(-42, 42), vy: 0, angle: 0 };
            this.pad = { x: random(250, 710), w: Math.max(82, 150 - this.level * 5), vx: random(-42, 42) };
            this.fuel = Math.min(100, 74 + this.docks * 4);
            audio.sfx("coin");
          } else {
            this.hull -= 1;
            this.breakCombo();
            this.burst(this.pod.x, this.pod.y, "#ff5b5b", 24);
            this.pod = { x: 480, y: 92, vx: random(-36, 36), vy: 0, angle: 0 };
            this.fuel = 100;
            audio.sfx("danger");
            if (this.hull <= 0) this.finish();
          }
        }
        this.score += delta * (5 + this.level + this.docks * 0.8);
      },
      draw(context) {
        drawLunarDock(context, this);
        drawBadge(context, `Hull ${this.hull}`, 24, 34, "#a3e635");
        drawBadge(context, `Fuel ${Math.floor(this.fuel)}%`, 138, 34, "#ffd166");
        drawBadge(context, `Docks ${this.docks}`, 284, 34, "#34d6ff");
        this.drawEffects(context);
        this.drawEnd(context, this.hull <= 0 ? "Pod Lost" : "Docking Complete");
      },
    };
  }

  function createCircuitRepair(base) {
    return {
      ...base,
      cursor: 4,
      nodes: Array(9).fill(null),
      spawn: 0.45,
      repairs: 0,
      damage: 0,
      moveWasDown: false,
      actionWasDown: false,
      update(delta) {
        this.updateTimer(delta);
        if (this.over) return;
        const horizontal = Number(actionPressed("right")) - Number(actionPressed("left"));
        const vertical = Number(actionPressed("down")) - Number(actionPressed("up"));
        const moving = horizontal || vertical;
        if (moving && !this.moveWasDown) {
          const row = Math.floor(this.cursor / 3);
          const col = this.cursor % 3;
          this.cursor = clamp(row + vertical, 0, 2) * 3 + clamp(col + horizontal, 0, 2);
          audio.beep(360, 0.025, "triangle");
        }
        this.moveWasDown = Boolean(moving);
        this.nodes = this.nodes.map((node) => {
          if (!node) return null;
          node.life -= delta;
          node.pulse += delta * 7;
          if (node.life > 0) return node;
          if (node.type !== "trap") {
            this.damage += 1;
            this.breakCombo();
            audio.sfx("danger");
            if (this.damage >= 5) this.finish();
          }
          return null;
        });
        this.spawn -= delta;
        if (this.spawn <= 0) {
          this.spawn = Math.max(0.34, random(0.92, 1.35) - this.level * 0.045);
          const empty = this.nodes.map((node, index) => (node ? null : index)).filter((index) => index !== null);
          if (empty.length) {
            const index = empty[Math.floor(random(0, empty.length))];
            const roll = Math.random();
            const life = roll > 0.82 ? 2.6 : Math.max(1.15, 2.9 - this.level * 0.09);
            this.nodes[index] = { type: roll > 0.82 ? "trap" : roll > 0.64 ? "gold" : "fault", life, max: life, pulse: 0 };
          }
        }
        const action = actionPressed("action");
        if (action && !this.actionWasDown) {
          const node = this.nodes[this.cursor];
          if (!node) {
            this.score = Math.max(0, this.score - 4);
            audio.beep(160, 0.04, "triangle");
          } else if (node.type === "trap") {
            this.damage += 1;
            this.nodes[this.cursor] = null;
            this.breakCombo();
            const center = cellCenter(this.cursor);
            this.burst(center.x, center.y, "#ff5b5b", 18);
            audio.sfx("danger");
            if (this.damage >= 5) this.finish();
          } else {
            this.repairs += 1;
            this.pushCombo(node.type === "gold" ? 2 : 1);
            this.addScore(node.type === "gold" ? 115 + this.level * 9 : 62 + this.level * 6, cellCenter(this.cursor).x, cellCenter(this.cursor).y, node.type === "gold" ? "Overclock" : "Repair");
            this.burst(cellCenter(this.cursor).x, cellCenter(this.cursor).y, node.type === "gold" ? "#ffd166" : "#22d3ee", 16);
            this.nodes[this.cursor] = null;
            audio.sfx("coin");
          }
        }
        this.actionWasDown = action;
        this.score += delta * (7 + this.level + this.repairs * 0.06);
      },
      draw(context) {
        this.drawBase(context);
        drawBadge(context, `Fix ${this.repairs}`, 24, 34, "#22d3ee");
        drawBadge(context, `Damage ${this.damage}/5`, 140, 34, "#ff5b5b");
        drawRepairGrid(context, this);
        this.drawEffects(context);
        this.drawEnd(context, this.damage >= 5 ? "Circuit Burned" : "Board Stable");
      },
    };
  }

  function createCipherChain(base) {
    return {
      ...base,
      symbols: ["◆", "▲", "●", "■", "✦", "⌁", "◇", "✕"],
      dials: [0, 2, 5],
      target: [3, 6, 1],
      activeDial: 0,
      corrupt: 0,
      solves: 0,
      solveTimer: 9,
      maxSolveTimer: 9,
      codeReady: false,
      moveWasDown: false,
      actionWasDown: false,
      resetCode(success = false) {
        const size = this.symbols.length;
        this.target = this.dials.map(() => Math.floor(random(0, size)));
        this.dials = this.target.map((target) => (target + Math.floor(random(2, size - 1))) % size);
        this.maxSolveTimer = Math.max(4.2, 9 - this.level * 0.22 - this.solves * 0.08);
        this.solveTimer = this.maxSolveTimer;
        this.codeReady = true;
        if (success) {
          this.burst(480, 270, "#f472b6", 28);
          audio.sfx("coin");
        }
      },
      update(delta) {
        this.updateTimer(delta);
        if (this.over) return;
        if (!this.codeReady) this.resetCode();
        this.solveTimer -= delta;
        if (this.solveTimer <= 0) {
          this.corrupt += 1;
          this.breakCombo();
          this.flash = 0.18;
          audio.sfx("danger");
          this.resetCode();
          if (this.corrupt >= 4) this.finish();
        }

        const vertical = Number(actionPressed("down")) - Number(actionPressed("up"));
        const horizontal = Number(actionPressed("right")) - Number(actionPressed("left"));
        const moving = vertical || horizontal;
        if (moving && !this.moveWasDown) {
          if (vertical) {
            this.activeDial = clamp(this.activeDial + vertical, 0, 2);
            audio.beep(360 + this.activeDial * 80, 0.025, "triangle");
          }
          if (horizontal) {
            const size = this.symbols.length;
            this.dials[this.activeDial] = (this.dials[this.activeDial] + horizontal + size) % size;
            audio.beep(560 + this.dials[this.activeDial] * 18, 0.025, "triangle");
          }
        }
        this.moveWasDown = Boolean(moving);

        const action = actionPressed("action");
        if (action && !this.actionWasDown) {
          const solved = this.dials.every((value, index) => value === this.target[index]);
          if (solved) {
            this.solves += 1;
            this.pushCombo(2);
            this.addScore(210 + this.level * 18 + Math.floor(this.solveTimer * 18), 480, 142, "Decrypt");
            this.resetCode(true);
          } else {
            this.corrupt += 1;
            this.breakCombo();
            this.flash = 0.16;
            audio.sfx("danger");
            if (this.corrupt >= 4) this.finish();
          }
        }
        this.actionWasDown = action;
        this.score += delta * (6 + this.level + this.solves * 0.8);
      },
      draw(context) {
        drawCipherChain(context, this);
        drawBadge(context, `Solved ${this.solves}`, 24, 34, "#f472b6");
        drawBadge(context, `Corrupt ${this.corrupt}/4`, 162, 34, "#ff5b5b");
        drawBadge(context, `${Math.ceil(this.solveTimer)}s`, 322, 34, "#ffd166");
        this.drawEffects(context);
        if (this.flash) {
          context.fillStyle = `rgba(255, 91, 91, ${this.flash * 2})`;
          context.fillRect(0, 0, gameCanvas.width, gameCanvas.height);
        }
        this.drawEnd(context, this.corrupt >= 4 ? "Cipher Locked" : "Code Solved");
      },
    };
  }

  function createOrbitGuard(base) {
    return {
      ...base,
      shield: 0,
      meteors: [],
      spawn: 0.75,
      core: 5,
      blocks: 0,
      update(delta) {
        this.updateTimer(delta);
        if (this.over) return;
        const turn = Number(actionPressed("right")) - Number(actionPressed("left"));
        this.shield += turn * (2.8 + this.level * 0.06) * delta;
        if (actionPressed("action")) this.shield += 1.7 * delta;
        this.spawn -= delta;
        if (this.spawn <= 0) {
          this.spawn = Math.max(0.24, random(0.72, 1.1) - this.level * 0.045);
          const angle = random(0, Math.PI * 2);
          this.meteors.push({ angle, dist: 360, speed: random(82, 118) + this.level * 9, r: random(9, 16), spin: random(-2, 2) });
        }
        this.meteors.forEach((meteor) => {
          meteor.dist -= meteor.speed * delta;
          meteor.angle += meteor.spin * 0.06 * delta;
        });
        for (const meteor of this.meteors) {
          if (meteor.hit) continue;
          if (meteor.dist < 96) {
            const gap = angularDistance(meteor.angle, this.shield);
            if (gap < 0.48) {
              meteor.hit = true;
              this.blocks += 1;
              this.pushCombo();
              this.addScore(70 + this.level * 7, 480 + Math.cos(meteor.angle) * 92, 270 + Math.sin(meteor.angle) * 92, "Block");
              this.burst(480 + Math.cos(meteor.angle) * 98, 270 + Math.sin(meteor.angle) * 98, "#60a5fa", 14);
              audio.beep(820, 0.035, "square");
            } else if (meteor.dist < 34) {
              meteor.hit = true;
              this.core -= 1;
              this.breakCombo();
              this.flash = 0.18;
              audio.sfx("danger");
              if (this.core <= 0) this.finish();
            }
          }
        }
        this.meteors = this.meteors.filter((meteor) => !meteor.hit && meteor.dist > 20);
        this.score += delta * (10 + this.level + this.blocks * 0.12);
      },
      draw(context) {
        drawOrbitGuard(context, this);
        drawBadge(context, `Core ${this.core}/5`, 24, 34, "#60a5fa");
        drawBadge(context, `Blocks ${this.blocks}`, 150, 34, "#ffd166");
        this.drawEffects(context);
        if (this.flash) {
          context.fillStyle = `rgba(255, 91, 91, ${this.flash * 2})`;
          context.fillRect(0, 0, gameCanvas.width, gameCanvas.height);
        }
        this.drawEnd(context, this.core <= 0 ? "Core Down" : "Orbit Held");
      },
    };
  }

  function createHoopsDuel(base) {
    return {
      ...base,
      player: { x: 250, y: 340 },
      ball: { x: 250, y: 340, vx: 0, vy: 0, held: true },
      hoop: { x: 760, y: 214 },
      defenders: [{ x: 520, y: 326 }, { x: 620, y: 388 }],
      shotCharge: 0,
      buckets: 0,
      steals: 0,
      update(delta) {
        this.updateTimer(delta);
        if (this.over) return;
        const speed = (210 + this.level * 7) * delta;
        this.player.x = clamp(this.player.x + (Number(actionPressed("right")) - Number(actionPressed("left"))) * speed, 120, 820);
        this.player.y = clamp(this.player.y + (Number(actionPressed("down")) - Number(actionPressed("up"))) * speed, 190, 450);
        this.defenders.forEach((defender, index) => {
          defender.x += (this.player.x - defender.x) * delta * (0.7 + this.level * 0.04 + index * 0.08);
          defender.y += (this.player.y - defender.y) * delta * (0.55 + this.level * 0.035);
        });
        if (this.ball.held) {
          this.ball.x = this.player.x + 18;
          this.ball.y = this.player.y - 18;
          if (actionPressed("action")) this.shotCharge = clamp(this.shotCharge + delta * 1.35, 0, 1.25);
          else if (this.shotCharge > 0) {
            const dx = this.hoop.x - this.ball.x;
            const dy = this.hoop.y - this.ball.y;
            const power = 420 + this.shotCharge * 310;
            const distance = Math.hypot(dx, dy) || 1;
            this.ball = { x: this.ball.x, y: this.ball.y, vx: (dx / distance) * power, vy: (dy / distance) * power - 130 * this.shotCharge, held: false };
            this.shotCharge = 0;
            audio.sfx("launch");
          }
          for (const defender of this.defenders) {
            if (Math.hypot(defender.x - this.player.x, defender.y - this.player.y) < 42 && Math.random() < delta * (0.8 + this.level * 0.08)) {
              this.steals += 1;
              this.breakCombo();
              this.player.x = 230;
              this.player.y = 350;
              audio.sfx("danger");
            }
          }
        } else {
          this.ball.vy += 420 * delta;
          this.ball.x += this.ball.vx * delta;
          this.ball.y += this.ball.vy * delta;
          if (Math.hypot(this.ball.x - this.hoop.x, this.ball.y - this.hoop.y) < 34 && this.ball.vy > -90) {
            this.buckets += 1;
            this.pushCombo(2);
            this.addScore(260 + this.level * 18, this.hoop.x, this.hoop.y - 38, "Bucket");
            this.burst(this.hoop.x, this.hoop.y, "#fb923c", 22);
            this.ball = { x: this.player.x, y: this.player.y, vx: 0, vy: 0, held: true };
            audio.sfx("coin");
          } else if (this.ball.x < 40 || this.ball.x > 920 || this.ball.y > 520) {
            this.breakCombo();
            this.ball = { x: this.player.x, y: this.player.y, vx: 0, vy: 0, held: true };
          }
        }
        this.score += delta * (9 + this.level + this.buckets * 0.8);
      },
      draw(context) {
        drawBasketballCourt(context, this);
        drawBadge(context, `Buckets ${this.buckets}`, 24, 34, "#fb923c");
        drawBadge(context, `Steals ${this.steals}`, 170, 34, "#34d6ff");
        this.drawEffects(context);
        this.drawEnd(context, "Final Buzzer");
      },
    };
  }

  function createFreeThrow(base) {
    return {
      ...base,
      aim: 0,
      power: 0,
      charging: false,
      hoopX: 560,
      hoopDir: 1,
      ball: null,
      made: 0,
      misses: 0,
      update(delta) {
        this.updateTimer(delta);
        if (this.over) return;
        this.hoopX += this.hoopDir * (90 + this.level * 8) * delta;
        if (this.hoopX < 430 || this.hoopX > 760) this.hoopDir *= -1;
        this.aim = clamp(this.aim + (Number(actionPressed("right")) - Number(actionPressed("left"))) * delta * 1.25, -0.75, 0.75);
        if (!this.ball && actionPressed("action")) {
          this.charging = true;
          this.power = (this.power + delta * 0.9) % 1.12;
        } else if (!this.ball && this.charging) {
          const force = 460 + this.power * 260;
          this.ball = { x: 250, y: 432, vx: Math.sin(this.aim) * 240 + 210, vy: -force };
          this.charging = false;
          this.power = 0;
          audio.sfx("launch");
        }
        if (this.ball) {
          this.ball.vy += 720 * delta;
          this.ball.x += this.ball.vx * delta;
          this.ball.y += this.ball.vy * delta;
          const rimY = 230;
          if (Math.abs(this.ball.x - this.hoopX) < 31 && Math.abs(this.ball.y - rimY) < 28 && this.ball.vy > 0) {
            const swish = Math.abs(this.ball.x - this.hoopX) < 13;
            this.made += 1;
            this.pushCombo(swish ? 2 : 1);
            this.addScore(swish ? 230 + this.level * 15 : 150 + this.level * 10, this.hoopX, rimY - 36, swish ? "Swish" : "Make");
            this.burst(this.hoopX, rimY, "#f97316", swish ? 24 : 14);
            this.ball = null;
            audio.sfx("coin");
          } else if (this.ball.y > 540 || this.ball.x > 980) {
            this.misses += 1;
            this.breakCombo();
            this.ball = null;
            audio.sfx("danger");
          }
        }
        this.score += delta * (4 + this.made * 0.7);
      },
      draw(context) {
        drawFreeThrowCourt(context, this);
        drawBadge(context, `Made ${this.made}`, 24, 34, "#f97316");
        drawBadge(context, `Miss ${this.misses}`, 148, 34, "#ff5b5b");
        this.drawEffects(context);
        this.drawEnd(context, "Shootaround Done");
      },
    };
  }

  function createRallyRush(base) {
    return {
      ...base,
      car: { x: 480, y: 398, vx: 0 },
      distance: 0,
      checkpoints: 0,
      offroad: 0,
      update(delta) {
        this.updateTimer(delta);
        if (this.over) return;
        const accel = actionPressed("action") ? 1.35 : actionPressed("down") ? 0.62 : 1;
        this.distance += delta * (180 + this.level * 12) * accel;
        this.car.vx += (Number(actionPressed("right")) - Number(actionPressed("left"))) * delta * 680;
        this.car.vx *= 0.9;
        this.car.x += this.car.vx * delta;
        const center = 480 + Math.sin(this.distance * 0.012) * 170 + Math.sin(this.distance * 0.028) * 54;
        const roadWidth = Math.max(150, 245 - this.level * 5);
        const off = Math.abs(this.car.x - center) > roadWidth / 2;
        if (off) {
          this.offroad += delta;
          this.breakCombo();
          this.car.x += (center - this.car.x) * delta * 0.7;
        }
        if (Math.floor(this.distance / 420) > this.checkpoints) {
          this.checkpoints += 1;
          this.pushCombo(off ? 0 : 1);
          this.addScore(off ? 80 : 190 + this.level * 12, this.car.x, this.car.y - 48, off ? "Scrape" : "Apex");
          this.burst(this.car.x, this.car.y, off ? "#ff5b5b" : "#facc15", 14);
          audio.sfx(off ? "hit" : "coin");
        }
        this.score += delta * (16 + this.level * 2 + this.checkpoints);
      },
      draw(context) {
        drawRallyTrack(context, this);
        drawBadge(context, `Gate ${this.checkpoints}`, 24, 34, "#facc15");
        drawBadge(context, `Slip ${this.offroad.toFixed(1)}s`, 150, 34, "#ff5b5b");
        this.drawEffects(context);
        this.drawEnd(context, "Finish Line");
      },
    };
  }

  function createTrafficRush(base) {
    return {
      ...base,
      lane: 1,
      cars: [],
      spawn: 0.4,
      passed: 0,
      damage: 0,
      laneWasDown: false,
      update(delta) {
        this.updateTimer(delta);
        if (this.over) return;
        const move = Number(actionPressed("right")) - Number(actionPressed("left"));
        if (move && !this.laneWasDown) {
          this.lane = clamp(this.lane + move, 0, 3);
          audio.beep(420 + this.lane * 70, 0.025, "triangle");
        }
        this.laneWasDown = Boolean(move);
        const speed = (190 + this.level * 12) * (actionPressed("action") ? 1.45 : 1);
        this.spawn -= delta;
        if (this.spawn <= 0) {
          this.spawn = Math.max(0.28, random(0.6, 1.1) - this.level * 0.035);
          this.cars.push({ lane: Math.floor(random(0, 4)), y: -80, speed: random(95, 155) + this.level * 8, color: ["#f97316", "#38bdf8", "#facc15", "#c084fc"][Math.floor(random(0, 4))] });
        }
        this.cars.forEach((car) => {
          car.y += (car.speed + speed) * delta;
          if (!car.passed && car.y > 430) {
            car.passed = true;
            this.passed += 1;
            const close = Math.abs(car.lane - this.lane) === 1;
            this.pushCombo(close ? 2 : 1);
            this.addScore(close ? 120 + this.level * 8 : 70 + this.level * 5, 285 + car.lane * 130, 410, close ? "Near miss" : "Pass");
          }
          if (!car.hit && car.lane === this.lane && car.y > 340 && car.y < 430) {
            car.hit = true;
            this.damage += 1;
            this.breakCombo();
            this.flash = 0.18;
            audio.sfx("danger");
            if (this.damage >= 4) this.finish();
          }
        });
        this.cars = this.cars.filter((car) => car.y < 620 && !car.hit);
        this.score += delta * (14 + this.level * 2 + this.passed * 0.2);
      },
      draw(context) {
        drawTrafficRoad(context, this);
        drawBadge(context, `Pass ${this.passed}`, 24, 34, "#38bdf8");
        drawBadge(context, `Damage ${this.damage}/4`, 146, 34, "#ff5b5b");
        this.drawEffects(context);
        if (this.flash) {
          context.fillStyle = `rgba(255, 91, 91, ${this.flash * 2})`;
          context.fillRect(0, 0, gameCanvas.width, gameCanvas.height);
        }
        this.drawEnd(context, this.damage >= 4 ? "Wrecked" : "Traffic Cleared");
      },
    };
  }

  function createArcheryRange(base) {
    return {
      ...base,
      aim: 0,
      power: 0,
      charging: false,
      wind: random(-0.45, 0.45),
      target: { x: 760, y: 250, vy: 80 },
      arrow: null,
      hits: 0,
      misses: 0,
      update(delta) {
        this.updateTimer(delta);
        if (this.over) return;
        this.target.y += this.target.vy * delta;
        if (this.target.y < 150 || this.target.y > 405) this.target.vy *= -1;
        this.wind += Math.sin(this.elapsed * 0.7) * delta * 0.12;
        this.wind = clamp(this.wind, -0.7, 0.7);
        this.aim = clamp(this.aim + (Number(actionPressed("up")) - Number(actionPressed("down"))) * delta * 1.3, -0.75, 0.75);
        if (!this.arrow && actionPressed("action")) {
          this.charging = true;
          this.power = clamp(this.power + delta * 0.8, 0, 1);
        } else if (!this.arrow && this.charging) {
          this.arrow = { x: 180, y: 350, vx: 520 + this.power * 260, vy: -Math.sin(this.aim + 0.42) * 520 - this.power * 120 };
          this.power = 0;
          this.charging = false;
          audio.sfx("launch");
        }
        if (this.arrow) {
          this.arrow.vx += this.wind * 120 * delta;
          this.arrow.vy += 310 * delta;
          this.arrow.x += this.arrow.vx * delta;
          this.arrow.y += this.arrow.vy * delta;
          const dist = Math.hypot(this.arrow.x - this.target.x, this.arrow.y - this.target.y);
          if (dist < 55) {
            const bull = dist < 18;
            this.hits += 1;
            this.pushCombo(bull ? 2 : 1);
            this.addScore(bull ? 240 + this.level * 16 : 120 + this.level * 8, this.target.x, this.target.y - 40, bull ? "Bullseye" : "Hit");
            this.burst(this.target.x, this.target.y, bull ? "#84cc16" : "#ffd166", bull ? 26 : 14);
            this.arrow = null;
            this.target = { x: random(690, 820), y: random(160, 390), vy: random(60, 120) * (Math.random() > 0.5 ? 1 : -1) };
            audio.sfx("coin");
          } else if (this.arrow.x > 960 || this.arrow.y > 540 || this.arrow.y < -40) {
            this.misses += 1;
            this.breakCombo();
            this.arrow = null;
            audio.sfx("danger");
          }
        }
        this.score += delta * (5 + this.hits * 0.7);
      },
      draw(context) {
        drawArcheryRange(context, this, false);
        drawBadge(context, `Hits ${this.hits}`, 24, 34, "#84cc16");
        drawBadge(context, `Wind ${this.wind > 0 ? ">" : "<"}`, 138, 34, "#34d6ff");
        this.drawEffects(context);
        this.drawEnd(context, "Range Closed");
      },
    };
  }

  function createArrowStorm(base) {
    const game = createArcheryRange(base);
    return {
      ...game,
      shields: [{ x: 540, y: 275, r: 44 }, { x: 650, y: 190, r: 34 }],
      rings: [{ x: 440, y: 220, r: 28 }, { x: 610, y: 360, r: 24 }],
      update(delta) {
        game.update.call(this, delta);
        if (this.over || !this.arrow) return;
        for (const shield of this.shields) {
          if (Math.hypot(this.arrow.x - shield.x, this.arrow.y - shield.y) < shield.r) {
            this.misses += 1;
            this.breakCombo();
            this.burst(this.arrow.x, this.arrow.y, "#c084fc", 16);
            this.arrow = null;
            audio.sfx("danger");
            return;
          }
        }
        this.rings.forEach((ring) => {
          if (!ring.used && Math.hypot(this.arrow.x - ring.x, this.arrow.y - ring.y) < ring.r) {
            ring.used = true;
            this.arrow.vx += 90;
            this.arrow.vy -= 130;
            this.pushCombo();
            this.addScore(55 + this.level * 4, ring.x, ring.y, "Ring");
            audio.beep(820, 0.035, "triangle");
          }
        });
        if (this.rings.every((ring) => ring.used)) this.rings = [{ x: random(380, 520), y: random(170, 350), r: 26 }, { x: random(560, 690), y: random(160, 380), r: 24 }];
      },
      draw(context) {
        drawArcheryRange(context, this, true);
        drawBadge(context, `Tricks ${this.hits}`, 24, 34, "#c084fc");
        drawBadge(context, `Miss ${this.misses}`, 150, 34, "#ff5b5b");
        this.drawEffects(context);
        this.drawEnd(context, "Storm Cleared");
      },
    };
  }

  function createDoodleRoad(base) {
    const doodleLevels = [
      { gapStart: 310, gapEnd: 455, finishX: 835, base: 426, wave: 18, ridge: 8, ink: 380, prompt: "Bridge the clean starter gap" },
      { gapStart: 250, gapEnd: 430, finishX: 850, base: 414, wave: 28, ridge: 12, ink: 360, prompt: "Draw a soft landing ramp" },
      { gapStart: 390, gapEnd: 585, finishX: 870, base: 438, wave: 18, ridge: 24, ink: 350, prompt: "Support the long middle break" },
      { gapStart: 210, gapEnd: 330, finishX: 825, base: 402, wave: 38, ridge: 11, ink: 330, prompt: "Climb early, coast late" },
      { gapStart: 470, gapEnd: 660, finishX: 890, base: 430, wave: 34, ridge: 17, ink: 340, prompt: "Keep the bridge shallow" },
      { gapStart: 300, gapEnd: 520, finishX: 885, base: 420, wave: 42, ridge: 22, ink: 315, prompt: "Use one strong sweeping curve" },
      { gapStart: 565, gapEnd: 735, finishX: 900, base: 440, wave: 24, ridge: 30, ink: 305, prompt: "Launch gently over the late pit" },
      { gapStart: 230, gapEnd: 505, finishX: 915, base: 418, wave: 46, ridge: 18, ink: 290, prompt: "Final exam: long bridge, tiny ink" },
    ];
    const specFor = (level) => doodleLevels[(level - 1) % doodleLevels.length];
    const terrain = (x, level = 1) => {
      const spec = specFor(level);
      return spec.base + Math.sin(x * 0.008 + level * 0.9) * spec.wave + Math.sin(x * 0.021 + level) * spec.ridge;
    };
    const makeLevel = (level) => ({ ...specFor(level), number: level });
    return {
      ...base,
      puzzleLevel: 1,
      mode: "draw",
      ink: 360,
      cursor: { x: 170, y: 350 },
      car: { x: 120, y: 390, vx: 0, vy: 0, angle: 0, landed: false },
      lines: [],
      activeLine: null,
      readyToDrive: false,
      terrain,
      puzzle: makeLevel(1),
      resetPuzzle() {
        this.mode = "draw";
        this.puzzle = makeLevel(this.puzzleLevel);
        this.ink = Math.max(190, this.puzzle.ink - Math.floor((this.puzzleLevel - 1) / doodleLevels.length) * 18);
        this.cursor = { x: 170, y: 350 };
        this.car = { x: 120, y: this.terrain(120, this.puzzleLevel) - 22, vx: 0, vy: 0, angle: 0, landed: false };
        this.lines = [];
        this.activeLine = null;
        this.readyToDrive = false;
      },
      pointerDown(x, y) {
        if (this.mode !== "draw" || this.over) return;
        if (this.lines.length && y < 120) {
          this.startDrive();
          return;
        }
        this.activeLine = [{ x, y }];
        this.lines.push(this.activeLine);
        this.readyToDrive = false;
      },
      pointerMove(x, y) {
        if (this.mode !== "draw" || !this.activeLine || this.ink <= 0) return;
        const last = this.activeLine[this.activeLine.length - 1];
        const step = distance(last.x, last.y, x, y);
        if (step < 7) return;
        const spend = Math.min(this.ink, step * 0.45);
        this.ink -= spend;
        this.activeLine.push({ x, y });
      },
      pointerUp() {
        this.activeLine = null;
        if (this.lines.length) this.readyToDrive = true;
      },
      handleKey(event) {
        if (event.code === "Enter" || event.code === "KeyD") this.startDrive();
        if (event.code === "Backspace") {
          this.lines = [];
          this.activeLine = null;
          this.readyToDrive = false;
          this.ink = Math.max(190, this.puzzle.ink - Math.floor((this.puzzleLevel - 1) / doodleLevels.length) * 18);
        }
      },
      startDrive() {
        if (this.mode === "drive") return;
        this.mode = "drive";
        this.activeLine = null;
        this.car.vx = 125 + this.level * 5;
        audio.sfx("launch");
      },
      supportAt(x, y) {
        let best = null;
        const ground = this.terrain(x, this.puzzleLevel);
        const inGap = x > this.puzzle.gapStart && x < this.puzzle.gapEnd;
        if (!inGap && Math.abs(y - ground) < 50) best = { y: ground, slope: (this.terrain(x + 6, this.puzzleLevel) - this.terrain(x - 6, this.puzzleLevel)) / 12 };
        this.lines.forEach((line) => {
          for (let i = 0; i < line.length - 1; i += 1) {
            const a = line[i];
            const b = line[i + 1];
            const near = pointSegmentDistance(x, y, a.x, a.y, b.x, b.y);
            if (near > 34) continue;
            const t = clamp((x - a.x) / ((b.x - a.x) || 1), 0, 1);
            const roadY = a.y + (b.y - a.y) * t;
            if (y <= roadY + 34 && (!best || roadY < best.y + 40)) {
              best = { y: roadY, slope: (b.y - a.y) / Math.max(1, b.x - a.x) };
            }
          }
        });
        return best;
      },
      update(delta) {
        this.updateTimer(delta);
        if (this.over) return;
        if (this.mode === "draw") {
          const move = 220 * delta;
          this.cursor.x = clamp(this.cursor.x + (Number(actionPressed("right")) - Number(actionPressed("left"))) * move, 40, 920);
          this.cursor.y = clamp(this.cursor.y + (Number(actionPressed("down")) - Number(actionPressed("up"))) * move, 80, 500);
          const actionDown = actionPressed("action");
          if (actionDown) {
            if (!this.actionWasDown && this.readyToDrive && this.lines.length) this.startDrive();
            else if (!this.activeLine && !this.readyToDrive) this.pointerDown(this.cursor.x, this.cursor.y);
            else this.pointerMove(this.cursor.x, this.cursor.y);
          } else if (this.activeLine) {
            this.pointerUp();
          }
          this.actionWasDown = actionDown;
          this.score += delta * 1.5;
        } else {
          this.car.vy += 620 * delta;
          this.car.vx += 18 * delta;
          this.car.x += this.car.vx * delta;
          this.car.y += this.car.vy * delta;
          const support = this.supportAt(this.car.x, this.car.y + 20);
          if (support && this.car.vy >= -40) {
            this.car.y = support.y - 22;
            this.car.vy = Math.min(0, support.slope * 90);
            this.car.angle += (clamp(support.slope, -0.7, 0.7) - this.car.angle) * 0.18;
            this.car.vx = clamp(this.car.vx + (0.22 - Math.abs(support.slope)) * 42 * delta, 80, 270);
          } else {
            this.car.angle += this.car.vy * delta * 0.003;
          }
          if (Math.abs(this.car.angle) > 1.22 || this.car.y > 565) {
            this.breakCombo();
            this.addScore(10, this.car.x, 120, "Crash");
            this.resetPuzzle();
            audio.sfx("danger");
          }
          if (this.car.x > this.puzzle.finishX) {
            this.puzzleLevel += 1;
            this.pushCombo(2);
            this.addScore(360 + this.level * 30 + this.ink, 780, 128, `Map ${((this.puzzleLevel - 1) % doodleLevels.length) + 1}`);
            this.burst(830, 360, "#38bdf8", 28);
            this.resetPuzzle();
            audio.sfx("coin");
          }
        }
      },
      draw(context) {
        drawDoodleRoad(context, this);
        drawBadge(context, this.mode === "draw" ? "Draw" : "Drive", 24, 34, "#38bdf8");
        drawBadge(context, `Ink ${Math.floor(this.ink)}`, 132, 34, "#111827");
        this.drawEffects(context);
        this.drawEnd(context, "Sketchbook Closed");
      },
    };
  }

  function createWordFlux(base) {
    const words = ["BRAVE", "CRANE", "SPARK", "PIXEL", "DRIFT", "QUEST", "GHOST", "LASER", "VAULT", "RIVER", "ARROW", "BOOST", "TOKEN", "CROWN", "PLANE", "ROBOT", "MUSIC", "BRAIN", "FLAME", "SCORE"];
    const pickWord = (previous = "") => {
      let word = words[Math.floor(Math.random() * words.length)];
      if (word === previous) word = words[(words.indexOf(word) + 7) % words.length];
      return word;
    };
    return {
      ...base,
      words,
      target: pickWord(),
      guesses: [],
      current: ["", "", "", "", ""],
      cursor: 0,
      solved: 0,
      badGuesses: 0,
      feedback: "",
      nextWord() {
        const previous = this.target;
        this.target = pickWord(previous);
        this.guesses = [];
        this.current = ["", "", "", "", ""];
        this.cursor = 0;
        this.feedback = "";
      },
      handleKey(event) {
        if (this.over) return;
        if (/^Key[A-Z]$/.test(event.code)) {
          this.current[this.cursor] = event.code.replace("Key", "");
          this.cursor = clamp(this.cursor + 1, 0, 4);
          audio.beep(540, 0.025, "triangle");
        } else if (event.code === "Backspace") {
          this.current[this.cursor] = "";
          this.cursor = clamp(this.cursor - 1, 0, 4);
        } else if (event.code === "Enter") {
          this.submitGuess();
        }
      },
      submitGuess() {
        const guess = this.current.join("");
        if (guess.length < 5 || this.current.some((letter) => !letter)) {
          this.feedback = "Fill all tiles";
          audio.sfx("danger");
          return;
        }
        const marks = scoreWordGuess(guess, this.target);
        this.guesses.push({ guess, marks });
        if (guess === this.target) {
          const bonus = Math.max(1, 7 - this.guesses.length);
          this.solved += 1;
          this.pushCombo(2);
          this.addScore(160 * bonus + this.level * 25, gameCanvas.width / 2, 110, "Solved");
          this.burst(480, 260, "#22c55e", 30);
          this.nextWord();
          audio.sfx("coin");
        } else if (this.guesses.length >= 6) {
          this.badGuesses += 1;
          this.breakCombo();
          this.feedback = `Word was ${this.target}`;
          this.nextWord();
          audio.sfx("danger");
        } else {
          this.current = ["", "", "", "", ""];
          this.cursor = 0;
        }
      },
      update(delta) {
        this.updateTimer(delta);
        if (this.over) return;
        const horizontal = Number(actionPressed("right")) - Number(actionPressed("left"));
        const vertical = Number(actionPressed("up")) - Number(actionPressed("down"));
        if (!this.keyCooldown) this.keyCooldown = 0;
        this.keyCooldown = Math.max(0, this.keyCooldown - delta);
        if (this.keyCooldown <= 0 && horizontal) {
          this.cursor = clamp(this.cursor + horizontal, 0, 4);
          this.keyCooldown = 0.16;
        }
        if (this.keyCooldown <= 0 && vertical) {
          const code = this.current[this.cursor]?.charCodeAt(0) || 64;
          this.current[this.cursor] = String.fromCharCode(clamp(code + vertical, 65, 90));
          this.keyCooldown = 0.12;
        }
        if (!this.actionWasDown && actionPressed("action")) this.submitGuess();
        this.actionWasDown = actionPressed("action");
        this.score += delta * (3 + this.solved);
      },
      draw(context) {
        drawWordFlux(context, this);
        drawBadge(context, `Solved ${this.solved}`, 24, 34, "#22c55e");
        drawBadge(context, `Word ${this.target.length}`, 160, 34, "#ffd166");
        this.drawEffects(context);
        this.drawEnd(context, "Dictionary Closed");
      },
    };
  }

  function createBubbleCannon(base) {
    const colors = ["#38bdf8", "#f472b6", "#facc15", "#22c55e"];
    const makeRows = () => {
      const bubbles = [];
      for (let row = 0; row < 5; row += 1) {
        for (let col = 0; col < 10; col += 1) {
          bubbles.push({ row, col, color: colors[Math.floor(Math.random() * colors.length)], falling: false });
        }
      }
      return bubbles;
    };
    return {
      ...base,
      colors,
      bubbles: makeRows(),
      angle: -Math.PI / 2,
      shot: null,
      nextColor: colors[0],
      drops: 0,
      popped: 0,
      rowOffset: 0,
      shotCount: 0,
      bubblePosition(bubble) {
        const size = 44;
        const x = 250 + bubble.col * size + (bubble.row % 2 ? size / 2 : 0);
        const y = 95 + bubble.row * 38 + this.rowOffset;
        return { x, y };
      },
      fire() {
        if (this.shot) return;
        this.shot = {
          x: 480,
          y: 506,
          vx: Math.cos(this.angle) * 520,
          vy: Math.sin(this.angle) * 520,
          color: this.nextColor,
        };
        this.nextColor = this.colors[Math.floor(Math.random() * this.colors.length)];
        this.shotCount += 1;
        audio.sfx("launch");
      },
      attachShot() {
        if (!this.shot) return;
        const row = clamp(Math.round((this.shot.y - 95 - this.rowOffset) / 38), 0, 9);
        const col = clamp(Math.round((this.shot.x - 250 - (row % 2 ? 22 : 0)) / 44), 0, 9);
        if (!this.bubbles.some((bubble) => bubble.row === row && bubble.col === col)) {
          this.bubbles.push({ row, col, color: this.shot.color });
        }
        const target = this.bubbles.find((bubble) => bubble.row === row && bubble.col === col) || this.bubbles[this.bubbles.length - 1];
        const cluster = this.findCluster(target);
        if (cluster.length >= 3) {
          cluster.forEach((bubble) => {
            bubble.popped = true;
            const pos = this.bubblePosition(bubble);
            this.burst(pos.x, pos.y, bubble.color, 6);
          });
          this.bubbles = this.bubbles.filter((bubble) => !bubble.popped);
          this.popped += cluster.length;
          this.pushCombo();
          this.addScore(90 * cluster.length + this.level * 12, this.shot.x, this.shot.y, "Pop");
          audio.sfx("coin");
        } else {
          this.breakCombo();
        }
        if (this.shotCount % Math.max(3, 7 - Math.floor(this.level / 2)) === 0) this.rowOffset += 18;
        this.shot = null;
      },
      findCluster(start) {
        const key = (bubble) => `${bubble.row}:${bubble.col}`;
        const seen = new Set();
        const queue = [start];
        const cluster = [];
        while (queue.length) {
          const bubble = queue.shift();
          if (!bubble || seen.has(key(bubble)) || bubble.color !== start.color) continue;
          seen.add(key(bubble));
          cluster.push(bubble);
          this.bubbles.forEach((candidate) => {
            if (seen.has(key(candidate))) return;
            const dr = Math.abs(candidate.row - bubble.row);
            const dc = Math.abs(candidate.col - bubble.col);
            if ((dr === 0 && dc === 1) || (dr === 1 && dc <= 1)) queue.push(candidate);
          });
        }
        return cluster;
      },
      update(delta) {
        this.updateTimer(delta);
        if (this.over) return;
        this.angle = clamp(this.angle + (Number(actionPressed("right")) - Number(actionPressed("left"))) * delta * 1.8, -2.7, -0.45);
        if (!this.actionWasDown && actionPressed("action")) this.fire();
        this.actionWasDown = actionPressed("action");
        this.rowOffset += delta * (2.8 + this.level * 0.35);
        if (this.shot) {
          this.shot.x += this.shot.vx * delta;
          this.shot.y += this.shot.vy * delta;
          if (this.shot.x < 60 || this.shot.x > 900) this.shot.vx *= -1;
          const hit = this.bubbles.some((bubble) => {
            const pos = this.bubblePosition(bubble);
            return distance(this.shot.x, this.shot.y, pos.x, pos.y) < 39;
          });
          if (hit || this.shot.y < 70) this.attachShot();
        }
        if (this.bubbles.some((bubble) => this.bubblePosition(bubble).y > 455)) {
          this.drops += 1;
          this.rowOffset = 0;
          this.bubbles = makeRows();
          this.breakCombo();
          audio.sfx("danger");
          if (this.drops >= 3) this.finish();
        }
        this.score += delta * (5 + this.popped * 0.05);
      },
      draw(context) {
        drawBubbleCannon(context, this);
        drawBadge(context, `Popped ${this.popped}`, 24, 34, "#f472b6");
        drawBadge(context, `Drops ${this.drops}/3`, 174, 34, "#ff5b5b");
        this.drawEffects(context);
        this.drawEnd(context, "Bubbles Dropped");
      },
    };
  }

  function drawDoodleRoad(context, game) {
    context.save();
    const paper = context.createLinearGradient(0, 0, 0, gameCanvas.height);
    paper.addColorStop(0, "#f8fafc");
    paper.addColorStop(1, "#dbeafe");
    context.fillStyle = paper;
    context.fillRect(0, 0, gameCanvas.width, gameCanvas.height);
    context.strokeStyle = "rgba(59,130,246,0.16)";
    context.lineWidth = 1;
    for (let x = 0; x < gameCanvas.width; x += 48) {
      context.beginPath();
      context.moveTo(x, 0);
      context.lineTo(x, gameCanvas.height);
      context.stroke();
    }
    for (let y = 0; y < gameCanvas.height; y += 48) {
      context.beginPath();
      context.moveTo(0, y);
      context.lineTo(gameCanvas.width, y);
      context.stroke();
    }
    context.fillStyle = "#334155";
    context.beginPath();
    context.moveTo(0, gameCanvas.height);
    for (let x = 0; x <= gameCanvas.width; x += 18) {
      const inGap = x > game.puzzle.gapStart && x < game.puzzle.gapEnd;
      context.lineTo(x, inGap ? gameCanvas.height + 20 : game.terrain(x, game.puzzleLevel));
    }
    context.lineTo(gameCanvas.width, gameCanvas.height);
    context.fill();
    context.fillStyle = "rgba(15,23,42,0.7)";
    roundedRect(context, game.puzzle.gapStart, 430, game.puzzle.gapEnd - game.puzzle.gapStart, 90, 12);
    context.fill();
    game.lines.forEach((line) => {
      context.strokeStyle = "#111827";
      context.lineWidth = 9;
      context.lineCap = "round";
      context.lineJoin = "round";
      context.beginPath();
      line.forEach((point, index) => {
        if (index) context.lineTo(point.x, point.y);
        else context.moveTo(point.x, point.y);
      });
      context.stroke();
      context.strokeStyle = "#38bdf8";
      context.lineWidth = 4;
      context.stroke();
    });
    context.fillStyle = "#22c55e";
    context.fillRect(game.puzzle.finishX, game.terrain(game.puzzle.finishX, game.puzzleLevel) - 92, 8, 92);
    context.fillStyle = "#f97316";
    context.beginPath();
    context.moveTo(game.puzzle.finishX + 8, game.terrain(game.puzzle.finishX, game.puzzleLevel) - 92);
    context.lineTo(game.puzzle.finishX + 58, game.terrain(game.puzzle.finishX, game.puzzleLevel) - 72);
    context.lineTo(game.puzzle.finishX + 8, game.terrain(game.puzzle.finishX, game.puzzleLevel) - 52);
    context.fill();
    drawDoodleCar(context, game.car.x, game.car.y, game.car.angle);
    if (game.mode === "draw") {
      context.strokeStyle = "#f59e0b";
      context.lineWidth = 4;
      context.beginPath();
      context.arc(game.cursor.x, game.cursor.y, 13, 0, Math.PI * 2);
      context.stroke();
      drawText(context, game.puzzle.prompt || "Draw a bridge, then press Action to drive", 480, 94, "#111827", "900 22px system-ui", "center");
      drawText(context, "Enter/D starts drive · Backspace clears ink", 480, 122, "#334155", "800 15px system-ui", "center");
    } else {
      drawText(context, "Drive mode", 480, 94, "#111827", "900 22px system-ui", "center");
    }
    context.restore();
  }

  function drawDoodleCar(context, x, y, angle) {
    context.save();
    context.translate(x, y);
    context.rotate(angle);
    context.fillStyle = "#ef4444";
    roundedRect(context, -26, -18, 52, 26, 8);
    context.fill();
    context.fillStyle = "#0f172a";
    roundedRect(context, -10, -30, 26, 18, 6);
    context.fill();
    context.fillStyle = "#111827";
    [-18, 18].forEach((wheel) => {
      context.beginPath();
      context.arc(wheel, 10, 9, 0, Math.PI * 2);
      context.fill();
    });
    context.restore();
  }

  function drawWordFlux(context, game) {
    context.save();
    const gradient = context.createLinearGradient(0, 0, 0, gameCanvas.height);
    gradient.addColorStop(0, "#052e16");
    gradient.addColorStop(0.55, "#10233d");
    gradient.addColorStop(1, "#050816");
    context.fillStyle = gradient;
    context.fillRect(0, 0, gameCanvas.width, gameCanvas.height);
    drawText(context, "Guess the generated word", 480, 92, "#d1fae5", "900 25px system-ui", "center");
    const startX = gameCanvas.width / 2 - 174;
    const startY = 128;
    const size = 58;
    const gap = 10;
    const rows = [...game.guesses, { guess: game.current.join("").padEnd(5, " "), marks: [] }];
    for (let row = 0; row < 6; row += 1) {
      const entry = rows[row] || { guess: "     ", marks: [] };
      for (let col = 0; col < 5; col += 1) {
        const x = startX + col * (size + gap);
        const y = startY + row * (size + gap);
        const mark = entry.marks[col];
        const color = mark === "hit" ? "#22c55e" : mark === "near" ? "#eab308" : mark === "miss" ? "#475569" : "rgba(255,255,255,0.08)";
        context.fillStyle = color;
        context.strokeStyle = row === game.guesses.length && col === game.cursor ? "#38bdf8" : "rgba(255,255,255,0.25)";
        context.lineWidth = 3;
        roundedRect(context, x, y, size, size, 9);
        context.fill();
        context.stroke();
        drawText(context, entry.guess[col]?.trim() || "", x + size / 2, y + 39, "#f8fafc", "1000 31px system-ui", "center");
      }
    }
    drawText(context, game.feedback || "Keyboard or arrows + Action", 480, 548, "#f8fafc", "800 19px system-ui", "center");
    context.restore();
  }

  function drawBubbleCannon(context, game) {
    context.save();
    const gradient = context.createLinearGradient(0, 0, 0, gameCanvas.height);
    gradient.addColorStop(0, "#301026");
    gradient.addColorStop(0.58, "#10283d");
    gradient.addColorStop(1, "#050816");
    context.fillStyle = gradient;
    context.fillRect(0, 0, gameCanvas.width, gameCanvas.height);
    context.strokeStyle = "rgba(255,255,255,0.18)";
    context.lineWidth = 3;
    context.beginPath();
    context.moveTo(80, 462);
    context.lineTo(880, 462);
    context.stroke();
    game.bubbles.forEach((bubble) => {
      const pos = game.bubblePosition(bubble);
      drawBubble(context, pos.x, pos.y, 19, bubble.color);
    });
    if (game.shot) drawBubble(context, game.shot.x, game.shot.y, 18, game.shot.color);
    context.save();
    context.translate(480, 514);
    context.rotate(game.angle + Math.PI / 2);
    context.fillStyle = "#e5e7eb";
    roundedRect(context, -13, -70, 26, 82, 12);
    context.fill();
    context.restore();
    drawBubble(context, 534, 518, 17, game.nextColor);
    drawText(context, "Next", 534, 558, "#d6deff", "800 14px system-ui", "center");
    context.restore();
  }

  function drawBubble(context, x, y, radius, color) {
    context.save();
    const bubble = context.createRadialGradient(x - radius * 0.35, y - radius * 0.35, 2, x, y, radius);
    bubble.addColorStop(0, "#ffffff");
    bubble.addColorStop(0.24, color);
    bubble.addColorStop(1, "#111827");
    context.fillStyle = bubble;
    context.shadowColor = color;
    context.shadowBlur = 16;
    context.beginPath();
    context.arc(x, y, radius, 0, Math.PI * 2);
    context.fill();
    context.restore();
  }

  function drawBasketballCourt(context, game) {
    drawGameBackground(context, game.elapsed);
    context.save();
    const floor = context.createLinearGradient(0, 160, 0, 540);
    floor.addColorStop(0, "#7c3f1d");
    floor.addColorStop(1, "#2b1608");
    context.fillStyle = floor;
    context.fillRect(80, 150, 800, 340);
    context.strokeStyle = "rgba(255,255,255,0.7)";
    context.lineWidth = 4;
    context.strokeRect(80, 150, 800, 340);
    context.beginPath();
    context.arc(480, 320, 72, 0, Math.PI * 2);
    context.moveTo(760, 150);
    context.lineTo(760, 490);
    context.stroke();
    drawHoop(context, game.hoop.x, game.hoop.y);
    drawBaller(context, game.player.x, game.player.y, "#34d6ff", game.ball.held);
    game.defenders.forEach((defender) => drawBaller(context, defender.x, defender.y, "#ff5b5b", false));
    if (!game.ball.held) drawBall(context, game.ball.x, game.ball.y, 13, "#fb923c");
    if (game.ball.held) {
      context.strokeStyle = "#ffd166";
      context.lineWidth = 6;
      context.beginPath();
      context.arc(game.player.x, game.player.y - 42, 26 + game.shotCharge * 18, -Math.PI * 0.8, -Math.PI * 0.2);
      context.stroke();
    }
    context.restore();
  }

  function drawFreeThrowCourt(context, game) {
    drawGameBackground(context, game.elapsed);
    context.save();
    context.fillStyle = "#1f2937";
    context.fillRect(0, 0, gameCanvas.width, gameCanvas.height);
    context.fillStyle = "#733b19";
    context.fillRect(90, 150, 780, 340);
    context.strokeStyle = "rgba(255,255,255,0.55)";
    context.lineWidth = 4;
    context.strokeRect(90, 150, 780, 340);
    context.beginPath();
    context.arc(250, 432, 92, -Math.PI * 0.82, Math.PI * 0.1);
    context.stroke();
    drawHoop(context, game.hoopX, 230);
    drawBaller(context, 215, 430, "#f97316", !game.ball);
    context.strokeStyle = "#ffd166";
    context.lineWidth = 5;
    context.beginPath();
    context.moveTo(250, 432);
    context.lineTo(250 + Math.sin(game.aim) * 120 + 120, 432 - Math.cos(game.aim) * 120);
    context.stroke();
    if (game.charging) {
      context.fillStyle = "rgba(255,255,255,0.14)";
      roundedRect(context, 140, 470, 210, 14, 7);
      context.fill();
      context.fillStyle = "#f97316";
      roundedRect(context, 140, 470, 210 * game.power, 14, 7);
      context.fill();
    }
    if (game.ball) drawBall(context, game.ball.x, game.ball.y, 12, "#f97316");
    context.restore();
  }

  function drawHoop(context, x, y) {
    context.save();
    context.fillStyle = "rgba(255,255,255,0.86)";
    context.fillRect(x - 48, y - 54, 96, 58);
    context.strokeStyle = "#f97316";
    context.lineWidth = 6;
    context.beginPath();
    context.ellipse(x, y, 34, 10, 0, 0, Math.PI * 2);
    context.stroke();
    context.strokeStyle = "rgba(255,255,255,0.55)";
    context.lineWidth = 2;
    for (let i = -24; i <= 24; i += 12) {
      context.beginPath();
      context.moveTo(x + i, y + 6);
      context.lineTo(x + i * 0.4, y + 42);
      context.stroke();
    }
    context.restore();
  }

  function drawBaller(context, x, y, color, hasBall) {
    context.save();
    context.fillStyle = color;
    context.shadowColor = color;
    context.shadowBlur = 18;
    context.beginPath();
    context.arc(x, y - 34, 14, 0, Math.PI * 2);
    context.fill();
    roundedRect(context, x - 18, y - 20, 36, 44, 10);
    context.fill();
    context.strokeStyle = "#f5f7ff";
    context.lineWidth = 5;
    context.beginPath();
    context.moveTo(x - 12, y + 22);
    context.lineTo(x - 24, y + 48);
    context.moveTo(x + 12, y + 22);
    context.lineTo(x + 24, y + 48);
    context.stroke();
    if (hasBall) drawBall(context, x + 24, y - 20, 10, "#fb923c");
    context.restore();
  }

  function drawBall(context, x, y, radius, color) {
    context.save();
    context.fillStyle = color;
    context.strokeStyle = "rgba(5,6,12,0.55)";
    context.lineWidth = 2;
    context.beginPath();
    context.arc(x, y, radius, 0, Math.PI * 2);
    context.fill();
    context.stroke();
    context.restore();
  }

  function drawRallyTrack(context, game) {
    context.save();
    context.fillStyle = "#4d7c0f";
    context.fillRect(0, 0, gameCanvas.width, gameCanvas.height);
    context.fillStyle = "#ca8a04";
    context.beginPath();
    for (let y = -80; y <= 620; y += 30) {
      const d = game.distance + (540 - y);
      const center = 480 + Math.sin(d * 0.012) * 170 + Math.sin(d * 0.028) * 54;
      const width = Math.max(150, 245 - game.level * 5);
      if (y === -80) context.moveTo(center - width, y);
      else context.lineTo(center - width, y);
    }
    for (let y = 620; y >= -80; y -= 30) {
      const d = game.distance + (540 - y);
      const center = 480 + Math.sin(d * 0.012) * 170 + Math.sin(d * 0.028) * 54;
      const width = Math.max(150, 245 - game.level * 5);
      context.lineTo(center + width, y);
    }
    context.closePath();
    context.fill();
    context.strokeStyle = "rgba(255,255,255,0.35)";
    context.lineWidth = 3;
    for (let y = -40; y < 560; y += 86) {
      context.beginPath();
      context.moveTo(380, y + (game.distance % 86));
      context.lineTo(580, y + 34 + (game.distance % 86));
      context.stroke();
    }
    drawTopCar(context, game.car.x, game.car.y, "#facc15", game.car.vx * 0.002);
    context.restore();
  }

  function drawTrafficRoad(context, game) {
    context.save();
    const road = context.createLinearGradient(0, 0, 0, 540);
    road.addColorStop(0, "#1f2937");
    road.addColorStop(1, "#05070e");
    context.fillStyle = road;
    context.fillRect(160, 0, 640, 540);
    context.fillStyle = "#0f172a";
    context.fillRect(0, 0, 160, 540);
    context.fillRect(800, 0, 160, 540);
    context.strokeStyle = "rgba(255,255,255,0.32)";
    context.lineWidth = 3;
    [320, 450, 580].forEach((x) => {
      for (let y = -40; y < 580; y += 86) {
        context.beginPath();
        context.moveTo(x, y + ((game.elapsed * 240) % 86));
        context.lineTo(x, y + 42 + ((game.elapsed * 240) % 86));
        context.stroke();
      }
    });
    game.cars.forEach((car) => drawTopCar(context, 255 + car.lane * 130, car.y, car.color, 0));
    drawTopCar(context, 255 + game.lane * 130, 430, "#38bdf8", 0);
    context.restore();
  }

  function drawTopCar(context, x, y, color, tilt = 0) {
    context.save();
    context.translate(x, y);
    context.rotate(tilt);
    context.fillStyle = color;
    context.shadowColor = color;
    context.shadowBlur = 18;
    roundedRect(context, -24, -42, 48, 84, 10);
    context.fill();
    context.fillStyle = "rgba(255,255,255,0.72)";
    roundedRect(context, -16, -24, 32, 24, 6);
    context.fill();
    context.fillStyle = "rgba(5,6,12,0.6)";
    context.fillRect(-28, -30, 6, 18);
    context.fillRect(22, -30, 6, 18);
    context.fillRect(-28, 16, 6, 18);
    context.fillRect(22, 16, 6, 18);
    context.restore();
  }

  function drawArcheryRange(context, game, storm = false) {
    drawGameBackground(context, game.elapsed);
    context.save();
    context.fillStyle = storm ? "#1e1635" : "#173016";
    context.fillRect(0, 280, 960, 260);
    context.fillStyle = "#7c4a1d";
    context.fillRect(146, 314, 16, 132);
    context.strokeStyle = "#f5f7ff";
    context.lineWidth = 6;
    context.beginPath();
    context.arc(162, 360, 42, -Math.PI / 2, Math.PI / 2);
    context.stroke();
    context.strokeStyle = "#ffd166";
    context.lineWidth = 4;
    context.beginPath();
    context.moveTo(162, 360);
    context.lineTo(162 + 112, 360 - Math.sin(game.aim + 0.42) * 112);
    context.stroke();
    drawArcheryTarget(context, game.target.x, game.target.y, 56);
    if (storm) {
      game.shields?.forEach((shield) => {
        context.fillStyle = "rgba(192,132,252,0.22)";
        context.strokeStyle = "#c084fc";
        context.lineWidth = 5;
        context.beginPath();
        context.arc(shield.x, shield.y, shield.r, 0, Math.PI * 2);
        context.fill();
        context.stroke();
      });
      game.rings?.forEach((ring) => {
        context.strokeStyle = ring.used ? "rgba(255,255,255,0.2)" : "#ffd166";
        context.lineWidth = 5;
        context.beginPath();
        context.arc(ring.x, ring.y, ring.r, 0, Math.PI * 2);
        context.stroke();
      });
    }
    context.fillStyle = game.wind > 0 ? "#34d6ff" : "#ff3d81";
    context.fillRect(360, 84, Math.abs(game.wind) * 180, 8);
    if (game.charging) {
      context.fillStyle = "rgba(255,255,255,0.14)";
      roundedRect(context, 96, 470, 220, 14, 7);
      context.fill();
      context.fillStyle = storm ? "#c084fc" : "#84cc16";
      roundedRect(context, 96, 470, 220 * game.power, 14, 7);
      context.fill();
    }
    if (game.arrow) drawArrow(context, game.arrow.x, game.arrow.y, Math.atan2(game.arrow.vy, game.arrow.vx), storm ? "#c084fc" : "#84cc16");
    context.restore();
  }

  function drawArcheryTarget(context, x, y, radius) {
    context.save();
    ["#f8fafc", "#ef4444", "#f8fafc", "#2563eb", "#facc15"].forEach((color, index) => {
      context.fillStyle = color;
      context.beginPath();
      context.arc(x, y, radius - index * 10, 0, Math.PI * 2);
      context.fill();
    });
    context.restore();
  }

  function drawArrow(context, x, y, angle, color) {
    context.save();
    context.translate(x, y);
    context.rotate(angle);
    context.strokeStyle = color;
    context.lineWidth = 4;
    context.beginPath();
    context.moveTo(-28, 0);
    context.lineTo(30, 0);
    context.stroke();
    context.fillStyle = color;
    context.beginPath();
    context.moveTo(38, 0);
    context.lineTo(20, -9);
    context.lineTo(20, 9);
    context.closePath();
    context.fill();
    context.restore();
  }

  function drawPinballTable(context, game) {
    context.save();
    context.fillStyle = "rgba(10, 12, 20, 0.78)";
    roundedRect(context, game.table.left - 20, game.table.top - 12, game.table.right - game.table.left + 40, game.table.drain - game.table.top + 16, 18);
    context.fill();
    context.strokeStyle = "#ff8a3d";
    context.lineWidth = 4;
    context.stroke();
    context.strokeStyle = "rgba(255,255,255,0.16)";
    context.lineWidth = 2;
    context.beginPath();
    context.moveTo(game.table.left + 22, 410);
    context.lineTo(310, 510);
    context.moveTo(game.table.right - 22, 410);
    context.lineTo(650, 510);
    context.stroke();
    game.bumpers.forEach((bumper) => {
      const isTarget = game.bumpers[game.targetBumper] === bumper;
      context.fillStyle = bumper.color;
      context.shadowColor = bumper.color;
      context.shadowBlur = isTarget ? 34 : 22 + bumper.pulse * 18;
      context.beginPath();
      context.arc(bumper.x, bumper.y, bumper.r + bumper.pulse * 8, 0, Math.PI * 2);
      context.fill();
      context.strokeStyle = isTarget ? "#ffffff" : "rgba(255,255,255,0.42)";
      context.lineWidth = isTarget ? 5 : 2;
      context.stroke();
      context.shadowBlur = 0;
      drawText(context, bumper.label, bumper.x, bumper.y + 6, "#08111f", "900 14px system-ui", "center");
    });
    const target = game.bumpers[game.targetBumper];
    context.strokeStyle = "#ffffff";
    context.lineWidth = 3;
    context.setLineDash([10, 8]);
    context.beginPath();
    context.arc(target.x, target.y, target.r + 18 + Math.sin(game.elapsed * 8) * 4, 0, Math.PI * 2);
    context.stroke();
    context.setLineDash([]);
    drawText(context, "NEXT LIT TARGET", target.x, target.y - target.r - 30, "#ffd166", "900 14px system-ui", "center");
    context.fillStyle = "#34d6ff";
    context.save();
    context.translate(375, 462);
    context.rotate(-0.14 - game.leftFlip * 0.42);
    roundedRect(context, -75, -9, 150, 18, 9);
    context.fill();
    context.restore();
    context.save();
    context.translate(585, 462);
    context.rotate(0.14 + game.rightFlip * 0.42);
    roundedRect(context, -75, -9, 150, 18, 9);
    context.fill();
    context.restore();
    drawText(context, "Left / Right flip. Hit the lit target for bonus.", 480, 505, "#dff6ff", "800 18px system-ui", "center");
    context.fillStyle = "#f5f7ff";
    context.shadowColor = "rgba(255,255,255,0.65)";
    context.shadowBlur = 18;
    context.beginPath();
    context.arc(game.ball.x, game.ball.y, game.ball.r, 0, Math.PI * 2);
    context.fill();
    context.restore();
  }

  function drawRiverScene(context, elapsed) {
    const gradient = context.createLinearGradient(0, 0, 0, gameCanvas.height);
    gradient.addColorStop(0, "#6fd3ff");
    gradient.addColorStop(0.45, "#137fa0");
    gradient.addColorStop(1, "#0b3e56");
    context.fillStyle = gradient;
    context.fillRect(0, 0, gameCanvas.width, gameCanvas.height);
    context.fillStyle = "#7c5f3d";
    context.beginPath();
    context.moveTo(0, 0);
    context.lineTo(125, 0);
    context.lineTo(65, gameCanvas.height);
    context.lineTo(0, gameCanvas.height);
    context.closePath();
    context.fill();
    context.beginPath();
    context.moveTo(gameCanvas.width, 0);
    context.lineTo(gameCanvas.width - 125, 0);
    context.lineTo(gameCanvas.width - 65, gameCanvas.height);
    context.lineTo(gameCanvas.width, gameCanvas.height);
    context.closePath();
    context.fill();
    context.strokeStyle = "rgba(255,255,255,0.24)";
    context.lineWidth = 3;
    for (let y = -40; y < gameCanvas.height; y += 48) {
      context.beginPath();
      context.moveTo(170, y + (elapsed * 80) % 48);
      context.lineTo(790, y + 20 + (elapsed * 80) % 48);
      context.stroke();
    }
  }

  function drawRiverObjects(context, game) {
    context.save();
    game.gates.forEach((gate) => {
      const left = gate.x - gate.gap / 2;
      const right = gate.x + gate.gap / 2;
      context.strokeStyle = "rgba(255,255,255,0.48)";
      context.lineWidth = 5;
      context.setLineDash([12, 10]);
      context.beginPath();
      context.moveTo(left, gate.y);
      context.lineTo(right, gate.y);
      context.stroke();
      context.setLineDash([]);
      context.fillStyle = "#2dd4bf";
      context.beginPath();
      context.arc(left, gate.y, 12, 0, Math.PI * 2);
      context.arc(right, gate.y, 12, 0, Math.PI * 2);
      context.fill();
    });
    game.rocks.forEach((rock) => {
      context.fillStyle = rock.hit ? "rgba(91, 97, 112, 0.35)" : "#5b6170";
      context.beginPath();
      context.arc(rock.x, rock.y, rock.r, 0, Math.PI * 2);
      context.fill();
    });
    game.flags.forEach((flag) => {
      context.fillStyle = "#ffd166";
      context.beginPath();
      context.arc(flag.x, flag.y, flag.r, 0, Math.PI * 2);
      context.fill();
      drawText(context, "+", flag.x, flag.y + 6, "#5d3b00", "900 18px system-ui", "center");
    });
    context.translate(game.raft.x, game.raft.y);
    context.fillStyle = "#f59e0b";
    roundedRect(context, -27, -16, 54, 32, 8);
    context.fill();
    context.fillStyle = "#7c2d12";
    context.fillRect(-22, -6, 44, 12);
    context.restore();
  }

  function drawSoccerField(context) {
    context.fillStyle = "#1f7a3b";
    context.fillRect(0, 0, gameCanvas.width, gameCanvas.height);
    context.strokeStyle = "rgba(255,255,255,0.42)";
    context.lineWidth = 4;
    context.strokeRect(120, 80, gameCanvas.width - 240, gameCanvas.height - 130);
    context.beginPath();
    context.arc(gameCanvas.width / 2, 300, 84, 0, Math.PI * 2);
    context.stroke();
    context.fillStyle = "rgba(255,255,255,0.08)";
    context.fillRect(120, 430, gameCanvas.width - 240, 74);
  }

  function drawKeeper(context, game) {
    context.save();
    const goalLeft = game.goal.x - game.goal.w / 2;
    const goalTop = game.goal.y;
    context.fillStyle = "#f5f7ff";
    context.fillRect(goalLeft, goalTop + game.goal.h, game.goal.w, 8);
    context.strokeStyle = "#f5f7ff";
    context.lineWidth = 5;
    context.strokeRect(goalLeft, goalTop, game.goal.w, game.goal.h + 8);
    context.strokeStyle = "rgba(255,255,255,0.22)";
    context.lineWidth = 1;
    for (let x = goalLeft + 30; x < goalLeft + game.goal.w; x += 30) {
      context.beginPath();
      context.moveTo(x, goalTop + 5);
      context.lineTo(x, goalTop + game.goal.h + 8);
      context.stroke();
    }
    for (let y = goalTop + 24; y < goalTop + game.goal.h; y += 24) {
      context.beginPath();
      context.moveTo(goalLeft, y);
      context.lineTo(goalLeft + game.goal.w, y);
      context.stroke();
    }
    game.balls.forEach((ball) => {
      ball.trail.forEach((point, index) => {
        context.globalAlpha = (index + 1) / ball.trail.length * 0.28;
        context.fillStyle = ball.type === "power" ? "#ff5b5b" : ball.type === "curve" ? "#34d6ff" : "#ffffff";
        context.beginPath();
        context.arc(point.x, point.y, Math.max(3, ball.r * index / ball.trail.length), 0, Math.PI * 2);
        context.fill();
      });
      context.globalAlpha = 1;
      context.fillStyle = ball.type === "power" ? "#ff5b5b" : "#ffffff";
      context.beginPath();
      context.arc(ball.x, ball.y, ball.r, 0, Math.PI * 2);
      context.fill();
      context.strokeStyle = ball.type === "curve" ? "#34d6ff" : "#111827";
      context.lineWidth = ball.type === "power" ? 4 : 2;
      context.stroke();
      if (ball.type === "curve") {
        context.strokeStyle = "#34d6ff";
        context.beginPath();
        context.arc(ball.x, ball.y, ball.r * 0.52, 0, Math.PI * 1.4);
        context.stroke();
      }
    });
    context.fillStyle = "#facc15";
    roundedRect(context, game.keeper.x - game.keeper.w / 2, game.keeper.y - 16, game.keeper.w, 32, 10);
    context.fill();
    context.fillStyle = "#111827";
    context.fillRect(game.keeper.x - 10, game.keeper.y - 8, 20, 16);
    context.restore();
  }

  function drawMemoryBoard(context, game) {
    const size = 90;
    const gap = 14;
    const startX = gameCanvas.width / 2 - (size * 4 + gap * 3) / 2;
    const startY = 126;
    game.deck.forEach((card, index) => {
      const x = startX + (index % 4) * (size + gap);
      const y = startY + Math.floor(index / 4) * (size + gap);
      context.fillStyle = card.matched ? "rgba(88,242,159,0.32)" : card.open ? "#f5f7ff" : "rgba(192,132,252,0.58)";
      context.strokeStyle = index === game.cursor ? "#ffd166" : "rgba(255,255,255,0.2)";
      context.lineWidth = index === game.cursor ? 4 : 2;
      roundedRect(context, x, y, size, size, 10);
      context.fill();
      context.stroke();
      if (card.open || card.matched) drawText(context, card.symbol, x + size / 2, y + 58, "#111827", "900 42px system-ui", "center");
    });
  }

  function drawSpaceScene(context, elapsed) {
    context.fillStyle = "#060816";
    context.fillRect(0, 0, gameCanvas.width, gameCanvas.height);
    context.fillStyle = "#ffffff";
    for (let i = 0; i < 70; i += 1) {
      const x = (i * 151) % gameCanvas.width;
      const y = (i * 83 + elapsed * (18 + (i % 4) * 8)) % gameCanvas.height;
      context.globalAlpha = 0.25 + (i % 4) * 0.16;
      context.fillRect(x, y, 2, 2);
    }
    context.globalAlpha = 1;
  }

  function drawAsteroids(context, game) {
    context.save();
    context.fillStyle = "rgba(52, 214, 255, 0.12)";
    context.strokeStyle = "#34d6ff";
    context.shadowColor = "rgba(52,214,255,0.5)";
    context.shadowBlur = 18;
    context.beginPath();
    context.arc(game.refinery.x, game.refinery.y, game.refinery.r, 0, Math.PI * 2);
    context.fill();
    context.stroke();
    context.shadowBlur = 0;
    drawText(context, "REFINERY", game.refinery.x, game.refinery.y + 6, "#dff6ff", "900 15px system-ui", "center");
    drawText(context, `CONTRACT: ${game.contract.amount} ${game.contract.mineral.toUpperCase()}`, game.refinery.x, game.refinery.y - 54, mineralColor(game.contract.mineral), "900 15px system-ui", "center");
    game.rocks.forEach((rock) => {
      context.save();
      context.translate(rock.x, rock.y);
      context.rotate(rock.spin);
      context.fillStyle = rock.mineral === "gold" ? "#8a6a2f" : rock.mineral === "crystal" ? "#315f75" : "#6b7280";
      context.beginPath();
      context.arc(0, 0, rock.r, 0, Math.PI * 2);
      context.fill();
      context.fillStyle = mineralColor(rock.mineral);
      context.globalAlpha = 0.42;
      context.beginPath();
      context.arc(-rock.r * 0.25, -rock.r * 0.12, rock.r * 0.22, 0, Math.PI * 2);
      context.arc(rock.r * 0.24, rock.r * 0.22, rock.r * 0.16, 0, Math.PI * 2);
      context.fill();
      context.globalAlpha = 1;
      context.restore();
      context.fillStyle = "rgba(255,255,255,0.18)";
      roundedRect(context, rock.x - rock.r, rock.y + rock.r + 8, rock.r * 2, 6, 3);
      context.fill();
      context.fillStyle = "#ffd166";
      roundedRect(context, rock.x - rock.r, rock.y + rock.r + 8, rock.r * 2 * Math.max(0, rock.hp / rock.maxHp), 6, 3);
      context.fill();
    });
    game.ore.forEach((ore) => {
      context.fillStyle = mineralColor(ore.mineral);
      context.beginPath();
      context.arc(ore.x, ore.y, ore.r, 0, Math.PI * 2);
      context.fill();
    });
    if (game.beamTarget) {
      context.strokeStyle = "#93c5fd";
      context.lineWidth = 5;
      context.shadowColor = "#93c5fd";
      context.shadowBlur = 18;
      context.beginPath();
      context.moveTo(game.ship.x, game.ship.y - 18);
      context.lineTo(game.beamTarget.x, game.beamTarget.y);
      context.stroke();
      context.shadowBlur = 0;
    }
    if (game.overheated) drawText(context, "BEAM OVERHEATED", game.ship.x, game.ship.y - 42, "#ff5b5b", "900 16px system-ui", "center");
    context.translate(game.ship.x, game.ship.y);
    context.fillStyle = "#34d6ff";
    context.beginPath();
    context.moveTo(0, -26);
    context.lineTo(24, 24);
    context.lineTo(0, 12);
    context.lineTo(-24, 24);
    context.closePath();
    context.fill();
    context.restore();
  }

  function drawLunarDock(context, game) {
    drawSpaceScene(context, game.elapsed);
    context.save();
    context.fillStyle = "rgba(163, 230, 53, 0.14)";
    context.strokeStyle = "#a3e635";
    context.lineWidth = 4;
    roundedRect(context, game.pad.x - game.pad.w / 2, 454, game.pad.w, 16, 8);
    context.fill();
    context.stroke();
    context.fillStyle = "rgba(255,255,255,0.08)";
    context.fillRect(0, 470, gameCanvas.width, 70);
    context.strokeStyle = "rgba(255,255,255,0.14)";
    for (let x = 0; x < gameCanvas.width; x += 72) {
      context.beginPath();
      context.moveTo(x, 470);
      context.lineTo(x - 44, gameCanvas.height);
      context.stroke();
    }
    context.translate(game.pod.x, game.pod.y);
    context.rotate(game.pod.angle);
    context.fillStyle = "#e5f7ff";
    context.strokeStyle = "#34d6ff";
    context.lineWidth = 3;
    context.beginPath();
    context.moveTo(0, -26);
    context.lineTo(24, 24);
    context.lineTo(-24, 24);
    context.closePath();
    context.fill();
    context.stroke();
    if ((actionPressed("action") || actionPressed("up")) && game.fuel > 0) {
      context.fillStyle = "#ffd166";
      context.beginPath();
      context.moveTo(-10, 24);
      context.lineTo(0, 48 + Math.sin(game.elapsed * 30) * 6);
      context.lineTo(10, 24);
      context.fill();
    }
    context.restore();
    drawText(context, `VX ${Math.round(game.pod.vx)}  VY ${Math.round(game.pod.vy)}`, 480, 510, "#dff6ff", "800 17px system-ui", "center");
  }

  function drawRepairGrid(context, game) {
    const size = 112;
    const gap = 16;
    const startX = gameCanvas.width / 2 - (size * 3 + gap * 2) / 2;
    const startY = 126;
    context.save();
    for (let index = 0; index < 9; index += 1) {
      const x = startX + (index % 3) * (size + gap);
      const y = startY + Math.floor(index / 3) * (size + gap);
      const node = game.nodes[index];
      const color = node?.type === "gold" ? "#ffd166" : node?.type === "trap" ? "#ff5b5b" : "#22d3ee";
      context.fillStyle = index === game.cursor ? "rgba(183,140,255,0.18)" : "rgba(6,7,15,0.64)";
      context.strokeStyle = index === game.cursor ? "#b78cff" : "rgba(255,255,255,0.13)";
      context.lineWidth = index === game.cursor ? 4 : 2;
      roundedRect(context, x, y, size, size, 8);
      context.fill();
      context.stroke();
      if (node) {
        context.shadowColor = color;
        context.shadowBlur = 20;
        context.fillStyle = color;
        context.beginPath();
        context.arc(x + size / 2, y + size / 2, 20 + Math.sin(node.pulse) * 3, 0, Math.PI * 2);
        context.fill();
        context.shadowBlur = 0;
        drawText(context, node.type === "trap" ? "!" : node.type === "gold" ? "$" : "+", x + size / 2, y + size / 2 + 7, "#08111f", "1000 26px system-ui", "center");
        context.strokeStyle = color;
        context.lineWidth = 5;
        context.beginPath();
        context.arc(x + size / 2, y + size / 2, 42, -Math.PI / 2, -Math.PI / 2 + Math.PI * 2 * clamp(node.life / node.max, 0, 1));
        context.stroke();
      }
    }
    context.restore();
  }

  function drawCipherChain(context, game) {
    const gradient = context.createLinearGradient(0, 0, 0, gameCanvas.height);
    gradient.addColorStop(0, "#301026");
    gradient.addColorStop(0.52, "#112a3d");
    gradient.addColorStop(1, "#120a22");
    context.fillStyle = gradient;
    context.fillRect(0, 0, gameCanvas.width, gameCanvas.height);
    context.save();
    drawText(context, "TARGET CODE", 480, 92, "#ffd166", "900 18px system-ui", "center");
    const targetStart = 390;
    game.target.forEach((target, index) => {
      const x = targetStart + index * 90;
      context.fillStyle = "rgba(255,209,102,0.14)";
      context.strokeStyle = "#ffd166";
      context.lineWidth = 3;
      roundedRect(context, x - 30, 112, 60, 60, 10);
      context.fill();
      context.stroke();
      drawText(context, game.symbols[target], x, 153, "#ffffff", "1000 32px system-ui", "center");
    });
    const timerWidth = 360 * clamp(game.solveTimer / game.maxSolveTimer, 0, 1);
    context.fillStyle = "rgba(255,255,255,0.1)";
    roundedRect(context, 300, 188, 360, 12, 999);
    context.fill();
    context.fillStyle = game.solveTimer < 2 ? "#ff5b5b" : "#f472b6";
    roundedRect(context, 300, 188, timerWidth, 12, 999);
    context.fill();

    const centers = [260, 480, 700];
    centers.forEach((x, dialIndex) => {
      const active = dialIndex === game.activeDial;
      const value = game.dials[dialIndex];
      context.save();
      context.translate(x, 330);
      context.strokeStyle = active ? "#f472b6" : "rgba(255,255,255,0.22)";
      context.lineWidth = active ? 6 : 3;
      context.shadowColor = active ? "#f472b6" : "transparent";
      context.shadowBlur = active ? 24 : 0;
      context.beginPath();
      context.arc(0, 0, active ? 84 : 76, 0, Math.PI * 2);
      context.stroke();
      context.shadowBlur = 0;
      game.symbols.forEach((symbol, symbolIndex) => {
        const angle = ((symbolIndex - value) / game.symbols.length) * Math.PI * 2 - Math.PI / 2;
        const sx = Math.cos(angle) * 58;
        const sy = Math.sin(angle) * 58;
        const selected = symbolIndex === value;
        context.fillStyle = selected ? "#ffffff" : "rgba(214,222,255,0.55)";
        drawText(context, symbol, sx, sy + 9, context.fillStyle, selected ? "1000 30px system-ui" : "900 18px system-ui", "center");
      });
      context.fillStyle = active ? "#f472b6" : "rgba(255,255,255,0.14)";
      roundedRect(context, -40, -22, 80, 44, 10);
      context.fill();
      drawText(context, game.symbols[value], 0, 13, active ? "#18091f" : "#ffffff", "1000 30px system-ui", "center");
      context.restore();
      const locked = game.dials[dialIndex] === game.target[dialIndex];
      drawText(context, locked ? "LOCKED" : `DIAL ${dialIndex + 1}`, x, 444, locked ? "#58f29f" : "#d6deff", "900 15px system-ui", "center");
    });
    drawText(context, "Up/Down selects a dial. Left/Right rotates. Action submits.", 480, 510, "#d6deff", "800 18px system-ui", "center");
    context.restore();
  }

  function drawOrbitGuard(context, game) {
    drawSpaceScene(context, game.elapsed);
    const cx = 480;
    const cy = 270;
    context.save();
    context.strokeStyle = "rgba(96,165,250,0.22)";
    context.lineWidth = 3;
    for (let r = 96; r <= 340; r += 62) {
      context.beginPath();
      context.arc(cx, cy, r, 0, Math.PI * 2);
      context.stroke();
    }
    game.meteors.forEach((meteor) => {
      const x = cx + Math.cos(meteor.angle) * meteor.dist;
      const y = cy + Math.sin(meteor.angle) * meteor.dist;
      context.fillStyle = "#ff8a3d";
      context.shadowColor = "rgba(255,138,61,0.75)";
      context.shadowBlur = 16;
      context.beginPath();
      context.arc(x, y, meteor.r, 0, Math.PI * 2);
      context.fill();
    });
    context.shadowBlur = 0;
    context.fillStyle = "#60a5fa";
    context.shadowColor = "rgba(96,165,250,0.75)";
    context.shadowBlur = 24;
    context.beginPath();
    context.arc(cx, cy, 34 + Math.sin(game.elapsed * 5) * 2, 0, Math.PI * 2);
    context.fill();
    context.shadowBlur = 0;
    context.strokeStyle = "#e5f2ff";
    context.lineWidth = 14;
    context.lineCap = "round";
    context.beginPath();
    context.arc(cx, cy, 104, game.shield - 0.5, game.shield + 0.5);
    context.stroke();
    context.restore();
  }

  function makeTarget(level) {
    const timer = Math.max(1.1, random(2.2, 4.2) - level * 0.14);
    const kindRoll = Math.random();
    const kind = kindRoll > 0.78 ? "vault" : kindRoll > 0.58 ? "runner" : "signal";
    const hp = kind === "vault" ? 2 + Number(level >= 7) : 1;
    return {
      x: random(90, gameCanvas.width - 90),
      y: random(80, gameCanvas.height - 80),
      r: Math.max(22, random(kind === "vault" ? 42 : 34, kind === "vault" ? 62 : 58) - level * 1.6),
      timer,
      maxTimer: timer,
      vx: random(-22, 22) * level * (kind === "runner" ? 1.5 : 1),
      vy: random(-18, 18) * level * (kind === "runner" ? 1.5 : 1),
      bonus: Math.random() < 0.18,
      kind,
      hp,
    };
  }

  function targetColor(target) {
    if (target.bonus) return "#ffd166";
    if (target.kind === "vault") return "#b78cff";
    if (target.kind === "runner") return "#58f29f";
    return "#34d6ff";
  }

  function makeBeatRecipe(length) {
    const recipe = [];
    let previous = Math.floor(random(0, 3));
    for (let index = 0; index < length; index += 1) {
      let lane = Math.floor(random(0, 3));
      if (index > 0) while (lane === previous) lane = Math.floor(random(0, 3));
      recipe.push(lane);
      previous = lane;
    }
    return recipe;
  }

  function makeDecoy(level) {
    return {
      x: random(80, gameCanvas.width - 80),
      y: random(70, gameCanvas.height - 70),
      r: random(24, 44),
      vx: random(-35, 35) + level * random(-7, 7),
      vy: random(-32, 32) + level * random(-6, 6),
      life: random(2.5, 4.4),
    };
  }

  function laneY(lane) {
    return 170 + lane * 110;
  }

  function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
  }

  function random(min, max) {
    return Math.random() * (max - min) + min;
  }

  function distance(ax, ay, bx, by) {
    return Math.hypot(ax - bx, ay - by);
  }

  function pointSegmentDistance(px, py, ax, ay, bx, by) {
    const dx = bx - ax;
    const dy = by - ay;
    const lengthSquared = dx * dx + dy * dy || 1;
    const t = clamp(((px - ax) * dx + (py - ay) * dy) / lengthSquared, 0, 1);
    return distance(px, py, ax + dx * t, ay + dy * t);
  }

  function scoreWordGuess(guess, target) {
    const marks = Array(5).fill("miss");
    const remaining = target.split("");
    for (let i = 0; i < 5; i += 1) {
      if (guess[i] === target[i]) {
        marks[i] = "hit";
        remaining[i] = "";
      }
    }
    for (let i = 0; i < 5; i += 1) {
      if (marks[i] === "hit") continue;
      const index = remaining.indexOf(guess[i]);
      if (index >= 0) {
        marks[i] = "near";
        remaining[index] = "";
      }
    }
    return marks;
  }

  function escapeHtml(value) {
    return String(value ?? "").replace(/[&<>"']/g, (char) => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      "\"": "&quot;",
      "'": "&#39;",
    })[char]);
  }

  function angleDelta(a, b) {
    return Math.atan2(Math.sin(a - b), Math.cos(a - b));
  }

  function mineralColor(mineral) {
    return {
      iron: "#93c5fd",
      crystal: "#34d6ff",
      gold: "#ffd166",
    }[mineral] || "#93c5fd";
  }

  function randomMineral() {
    const roll = Math.random();
    if (roll > 0.72) return "gold";
    if (roll > 0.42) return "crystal";
    return "iron";
  }

  function makeAsteroidRock(x, y, radius, mineral = randomMineral()) {
    const hp = radius * (mineral === "gold" ? 3.4 : mineral === "crystal" ? 3 : 2.6);
    return {
      x,
      y,
      r: radius,
      hp,
      maxHp: hp,
      vx: random(-28, 28),
      vy: random(-18, 22),
      ore: Math.max(2, Math.floor(radius / 12) + (mineral === "gold" ? 1 : 0)),
      mineral,
      spin: random(0, Math.PI * 2),
    };
  }

  function makeMiningContract(level) {
    return {
      mineral: randomMineral(),
      amount: Math.min(6, 2 + Math.floor(level / 3)),
    };
  }

  function cargoTotal(cargo) {
    return Object.values(cargo).reduce((sum, value) => sum + (Number(value) || 0), 0);
  }

  function drainCargo(cargo, amount) {
    for (const mineral of ["gold", "crystal", "iron"]) {
      while (amount > 0 && cargo[mineral] > 0) {
        cargo[mineral] -= 1;
        amount -= 1;
      }
    }
  }

  function angularDistance(a, b) {
    return Math.abs(Math.atan2(Math.sin(a - b), Math.cos(a - b)));
  }

  function getWinner(board) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (const [a, b, c] of lines) {
      if (board[a] && board[a] === board[b] && board[a] === board[c]) return board[a];
    }
    return "";
  }

  function findWinningMove(board, mark) {
    for (let index = 0; index < board.length; index += 1) {
      if (board[index]) continue;
      const testBoard = [...board];
      testBoard[index] = mark;
      if (getWinner(testBoard) === mark) return index;
    }
    return null;
  }

  function cellCenter(index) {
    const size = 112;
    const gap = 14;
    const startX = gameCanvas.width / 2 - (size * 3 + gap * 2) / 2;
    const startY = 132;
    return {
      x: startX + (index % 3) * (size + gap) + size / 2,
      y: startY + Math.floor(index / 3) * (size + gap) + size / 2,
    };
  }

  function makeTetrisPiece() {
    const template = tetrisPieces[Math.floor(random(0, tetrisPieces.length))];
    return {
      color: template.color,
      cells: template.cells.map(([x, y]) => [x, y]),
      x: 3,
      y: -1,
    };
  }

  function make2048Grid() {
    const grid = Array.from({ length: 4 }, () => Array(4).fill(0));
    add2048Tile(grid);
    add2048Tile(grid);
    return grid;
  }

  function add2048Tile(grid) {
    const empty = [];
    grid.forEach((row, y) => {
      row.forEach((value, x) => {
        if (!value) empty.push({ x, y });
      });
    });
    if (!empty.length) return;
    const spot = empty[Math.floor(random(0, empty.length))];
    grid[spot.y][spot.x] = Math.random() < 0.88 ? 2 : 4;
  }

  function getPressedDirection() {
    if (actionPressed("left")) return "left";
    if (actionPressed("right")) return "right";
    if (actionPressed("up")) return "up";
    if (actionPressed("down")) return "down";
    return "";
  }

  function slide2048(grid, direction) {
    const next = grid.map((row) => [...row]);
    let moved = false;
    let gained = 0;
    let biggest = 2;
    const process = (line) => {
      const values = line.filter(Boolean);
      const result = [];
      for (let index = 0; index < values.length; index += 1) {
        if (values[index] === values[index + 1]) {
          const merged = values[index] * 2;
          result.push(merged);
          gained += merged;
          biggest = Math.max(biggest, merged);
          index += 1;
        } else {
          result.push(values[index]);
          biggest = Math.max(biggest, values[index]);
        }
      }
      while (result.length < 4) result.push(0);
      return result;
    };

    for (let index = 0; index < 4; index += 1) {
      const line = direction === "left" || direction === "right"
        ? [...grid[index]]
        : [grid[0][index], grid[1][index], grid[2][index], grid[3][index]];
      const ordered = direction === "right" || direction === "down" ? line.reverse() : line;
      const merged = process(ordered);
      const finalLine = direction === "right" || direction === "down" ? merged.reverse() : merged;
      for (let offset = 0; offset < 4; offset += 1) {
        const y = direction === "left" || direction === "right" ? index : offset;
        const x = direction === "left" || direction === "right" ? offset : index;
        if (next[y][x] !== finalLine[offset]) moved = true;
        next[y][x] = finalLine[offset];
      }
    }
    return { grid: next, moved, gained, biggest };
  }

  function canMove2048(grid) {
    for (let y = 0; y < 4; y += 1) {
      for (let x = 0; x < 4; x += 1) {
        if (!grid[y][x]) return true;
        if (x < 3 && grid[y][x] === grid[y][x + 1]) return true;
        if (y < 3 && grid[y][x] === grid[y + 1][x]) return true;
      }
    }
    return false;
  }

  function roadCenterAt(points, y) {
    for (let index = 0; index < points.length - 1; index += 1) {
      const a = points[index];
      const b = points[index + 1];
      if (y >= a.y && y <= b.y) {
        const progress = (y - a.y) / (b.y - a.y || 1);
        return a.x + (b.x - a.x) * progress;
      }
    }
    return points.reduce((closest, point) => (Math.abs(point.y - y) < Math.abs(closest.y - y) ? point : closest), points[0]).x;
  }

  function directionFromKeys(current) {
    if (actionPressed("left")) return { x: -1, y: 0 };
    if (actionPressed("right")) return { x: 1, y: 0 };
    if (actionPressed("up")) return { x: 0, y: -1 };
    if (actionPressed("down")) return { x: 0, y: 1 };
    return current;
  }

  function makeSnakePellet(cols, rows, snake, blocked = []) {
    const occupied = new Set(snake.map((part) => `${part.x},${part.y}`));
    blocked.forEach((part) => occupied.add(`${part.x},${part.y}`));
    const open = [];
    for (let y = 0; y < rows; y += 1) {
      for (let x = 0; x < cols; x += 1) {
        if (!occupied.has(`${x},${y}`)) open.push({ x, y });
      }
    }
    return open[Math.floor(random(0, open.length))] || { x: 0, y: 0 };
  }

  function makeBricks(wave) {
    const bricks = [];
    const cols = 9;
    const rows = Math.min(7, 4 + wave);
    const gap = 8;
    const width = 82;
    const height = 26;
    const startX = gameCanvas.width / 2 - (cols * width + (cols - 1) * gap) / 2;
    const colors = ["#34d6ff", "#ff3d81", "#ffd166", "#58f29f", "#b78cff"];
    for (let y = 0; y < rows; y += 1) {
      for (let x = 0; x < cols; x += 1) {
        bricks.push({
          x: startX + x * (width + gap),
          y: 72 + y * (height + gap),
          w: width,
          h: height,
          color: colors[(x + y + wave) % colors.length],
          live: true,
        });
      }
    }
    return bricks;
  }

  function drawTetrisBoard(context, game) {
    const cell = 25;
    const boardW = game.cols * cell;
    const boardH = game.rows * cell;
    const startX = gameCanvas.width / 2 - boardW / 2;
    const startY = 54;
    context.save();
    context.fillStyle = "rgba(6, 7, 15, 0.72)";
    context.strokeStyle = "rgba(52,214,255,0.45)";
    context.lineWidth = 3;
    roundedRect(context, startX - 10, startY - 10, boardW + 20, boardH + 20, 8);
    context.fill();
    context.stroke();
    for (let y = 0; y < game.rows; y += 1) {
      for (let x = 0; x < game.cols; x += 1) {
        const color = game.grid[y][x];
        drawTetrisCell(context, startX + x * cell, startY + y * cell, cell, color);
      }
    }
    game.current.cells.forEach(([cx, cy]) => {
      const x = game.current.x + cx;
      const y = game.current.y + cy;
      if (y >= 0) drawTetrisCell(context, startX + x * cell, startY + y * cell, cell, game.current.color);
    });
    context.restore();
  }

  function drawTetrisCell(context, x, y, size, color) {
    context.fillStyle = color || "rgba(255,255,255,0.035)";
    context.strokeStyle = color ? "rgba(255,255,255,0.68)" : "rgba(255,255,255,0.055)";
    context.shadowColor = color || "transparent";
    context.shadowBlur = color ? 12 : 0;
    context.fillRect(x + 1, y + 1, size - 2, size - 2);
    context.strokeRect(x + 1, y + 1, size - 2, size - 2);
    context.shadowBlur = 0;
  }

  function draw2048Board(context, grid) {
    const size = 94;
    const gap = 12;
    const total = size * 4 + gap * 3;
    const startX = gameCanvas.width / 2 - total / 2;
    const startY = 94;
    context.save();
    context.fillStyle = "rgba(6, 7, 15, 0.64)";
    context.strokeStyle = "rgba(255,209,102,0.42)";
    context.lineWidth = 3;
    roundedRect(context, startX - 14, startY - 14, total + 28, total + 28, 8);
    context.fill();
    context.stroke();
    grid.forEach((row, y) => {
      row.forEach((value, x) => {
        const px = startX + x * (size + gap);
        const py = startY + y * (size + gap);
        const tileStyle = tile2048Style(value);
        context.fillStyle = tileStyle.fill;
        context.strokeStyle = value ? "rgba(255,255,255,0.58)" : "rgba(255,255,255,0.1)";
        context.shadowColor = value ? tileStyle.glow : "transparent";
        context.shadowBlur = value ? 18 : 0;
        roundedRect(context, px, py, size, size, 8);
        context.fill();
        context.stroke();
        if (value) {
          context.shadowBlur = 0;
          drawText(context, value.toString(), px + size / 2, py + size / 2 + 11, tileStyle.text, "900 30px system-ui", "center");
        }
      });
    });
    context.restore();
  }

  function tile2048Style(value) {
    const styles = {
      2: ["#7dd3fc", "rgba(125,211,252,0.45)", "#07131c"],
      4: ["#5eead4", "rgba(94,234,212,0.45)", "#071915"],
      8: ["#a7f3d0", "rgba(167,243,208,0.42)", "#082016"],
      16: ["#f9a8d4", "rgba(249,168,212,0.44)", "#260817"],
      32: ["#c4b5fd", "rgba(196,181,253,0.46)", "#130b2a"],
      64: ["#fb7185", "rgba(251,113,133,0.5)", "#ffffff"],
      128: ["#facc15", "rgba(250,204,21,0.5)", "#171306"],
      256: ["#38bdf8", "rgba(56,189,248,0.54)", "#03141f"],
      512: ["#4ade80", "rgba(74,222,128,0.54)", "#052012"],
      1024: ["#f97316", "rgba(249,115,22,0.56)", "#ffffff"],
      2048: ["#8b5cf6", "rgba(139,92,246,0.62)", "#ffffff"],
    };
    const fallback = ["#e879f9", "rgba(232,121,249,0.6)", "#ffffff"];
    const [fill, glow, text] = styles[value] || fallback;
    return { fill, glow, text };
  }

  function drawDriftScene(context, game) {
    const width = gameCanvas.width;
    const height = gameCanvas.height;
    const zone = Math.floor(game.distance / 1400) % 4;
    const palettes = [
      ["#ef9a3c", "#f4b454", "#a9ef8f", "#d6ffbd"],
      ["#d8744d", "#f1a060", "#8ee6d4", "#d9fff3"],
      ["#42506f", "#22283e", "#d9d5ff", "#8d93ff"],
      ["#f5c25c", "#f0934d", "#b7f7a3", "#ecffd8"],
    ][zone];
    context.clearRect(0, 0, width, height);
    const sky = context.createLinearGradient(0, 0, 0, height);
    sky.addColorStop(0, palettes[0]);
    sky.addColorStop(1, palettes[1]);
    context.fillStyle = sky;
    context.fillRect(0, 0, width, height);
    context.save();
    context.globalAlpha = 0.18;
    context.strokeStyle = "#ffffff";
    context.lineWidth = 2;
    for (let x = -width; x < width * 2; x += 60) {
      context.beginPath();
      context.moveTo(x + (game.distance % 60), 0);
      context.lineTo(x - width * 0.36 + (game.distance % 60), height);
      context.stroke();
    }
    context.restore();
  }

  function drawDriftRoad(context, points, width, distance = 0) {
    context.save();
    context.lineCap = "round";
    context.lineJoin = "round";
    context.strokeStyle = "rgba(8, 34, 18, 0.86)";
    context.lineWidth = width + 18;
    context.shadowColor = "rgba(0,0,0,0.38)";
    context.shadowBlur = 18;
    context.beginPath();
    points.forEach((point, index) => {
      if (index === 0) context.moveTo(point.x, point.y);
      else context.lineTo(point.x, point.y);
    });
    context.stroke();
    context.shadowBlur = 0;
    context.strokeStyle = "#d9ffc1";
    context.lineWidth = width;
    context.beginPath();
    points.forEach((point, index) => {
      if (index === 0) context.moveTo(point.x, point.y);
      else context.lineTo(point.x, point.y);
    });
    context.stroke();
    context.strokeStyle = "rgba(122, 216, 100, 0.62)";
    context.lineWidth = 8;
    context.setLineDash([8, 18]);
    context.lineDashOffset = -distance * 0.12;
    context.beginPath();
    points.forEach((point, index) => {
      if (index === 0) context.moveTo(point.x, point.y);
      else context.lineTo(point.x, point.y);
    });
    context.stroke();
    context.setLineDash([]);
    context.restore();
  }

  function drawDriftCoins(context, coins) {
    context.save();
    coins.forEach((coin) => {
      context.fillStyle = "#ffd166";
      context.strokeStyle = "#7a4a00";
      context.shadowColor = "rgba(255, 209, 102, 0.8)";
      context.shadowBlur = 16;
      context.beginPath();
      context.arc(coin.x, coin.y, 13, 0, Math.PI * 2);
      context.fill();
      context.stroke();
      context.shadowBlur = 0;
      drawText(context, "$", coin.x, coin.y + 6, "#5d3b00", "900 18px system-ui", "center");
    });
    context.restore();
  }

  function drawDriftTutorial(context) {
    context.save();
    context.fillStyle = "rgba(6, 12, 18, 0.72)";
    context.strokeStyle = "#11bdf4";
    context.lineWidth = 4;
    roundedRect(context, 300, 74, 360, 120, 8);
    context.fill();
    context.stroke();
    drawText(context, "TUTORIAL", 480, 115, "#ffffff", "900 32px system-ui", "center");
    drawText(context, "Hold Action / Space / Right", 480, 150, "#dff6ff", "900 18px system-ui", "center");
    drawText(context, "Release to drift left", 480, 176, "#dff6ff", "800 17px system-ui", "center");
    context.restore();
  }

  function drawDriftStartGuide(context, game) {
    const center = roadCenterAt(game.road, game.car.y);
    const next = roadCenterAt(game.road, game.car.y - 150);
    const direction = next > center ? "Right turn first" : "Left turn first";
    context.save();
    context.strokeStyle = "#ffffff";
    context.lineWidth = 5;
    context.setLineDash([18, 12]);
    context.beginPath();
    context.moveTo(center - 92, game.car.y + 40);
    context.lineTo(center + 92, game.car.y + 40);
    context.stroke();
    context.setLineDash([]);
    context.fillStyle = "rgba(6, 12, 18, 0.72)";
    context.strokeStyle = "#ffd166";
    context.lineWidth = 3;
    roundedRect(context, center - 136, game.car.y + 56, 272, 58, 8);
    context.fill();
    context.stroke();
    drawText(context, "STARTING LINE", center, game.car.y + 80, "#ffffff", "900 18px system-ui", "center");
    drawText(context, direction, center, game.car.y + 103, "#ffd166", "800 15px system-ui", "center");
    context.restore();
  }

  function drawCountdown(context, value, game = null) {
    context.save();
    context.fillStyle = "rgba(6, 12, 18, 0.36)";
    context.fillRect(0, 0, gameCanvas.width, gameCanvas.height);
    context.fillStyle = "rgba(6, 12, 18, 0.72)";
    context.strokeStyle = "#11bdf4";
    context.lineWidth = 4;
    roundedRect(context, gameCanvas.width / 2 - 150, 82, 300, 164, 10);
    context.fill();
    context.stroke();
    drawText(context, value.toString(), gameCanvas.width / 2, 186, "#ffffff", "1000 94px system-ui", "center");
    drawText(context, "Get ready", gameCanvas.width / 2, 120, "#ffd166", "900 25px system-ui", "center");
    if (game) {
      const center = roadCenterAt(game.road, game.car.y);
      const next = roadCenterAt(game.road, game.car.y - 150);
      drawText(context, next > center ? "First turn: hold right" : "First turn: release left", gameCanvas.width / 2, 225, "#dff6ff", "800 16px system-ui", "center");
    }
    context.restore();
  }

  function drawBeatFoundry(context, game) {
    const gradient = context.createLinearGradient(0, 0, 0, gameCanvas.height);
    gradient.addColorStop(0, "#150b13");
    gradient.addColorStop(0.5, "#172337");
    gradient.addColorStop(1, "#2a160c");
    context.fillStyle = gradient;
    context.fillRect(0, 0, gameCanvas.width, gameCanvas.height);
    context.strokeStyle = "rgba(255,255,255,0.08)";
    context.lineWidth = 2;
    for (let x = 0; x < gameCanvas.width; x += 48) {
      context.beginPath();
      context.moveTo(x, 0);
      context.lineTo(x - 120, gameCanvas.height);
      context.stroke();
    }

    const centerX = gameCanvas.width / 2;
    const radius = 54;
    game.laneColors.forEach((color, index) => {
      const y = 170 + index * 92;
      const expected = game.recipe[game.recipeStep] === index;
      context.save();
      context.globalAlpha = index === game.lane || expected ? 1 : 0.42;
      context.fillStyle = "rgba(6, 7, 15, 0.72)";
      context.strokeStyle = color;
      context.lineWidth = expected ? 7 : index === game.lane ? 5 : 2;
      roundedRect(context, 240, y - 46, 480, 92, 12);
      context.fill();
      context.stroke();
      if (expected) {
        context.fillStyle = "rgba(255, 209, 102, 0.14)";
        roundedRect(context, 248, y - 38, 464, 76, 10);
        context.fill();
      }
      context.strokeStyle = "rgba(255,255,255,0.18)";
      context.lineWidth = 16;
      context.beginPath();
      context.arc(centerX, y, radius, 0, Math.PI * 2);
      context.stroke();
      if (index === game.lane) {
        const window = Math.max(0.16, 0.48 - game.level * 0.022);
        context.strokeStyle = color;
        context.lineWidth = 18;
        context.shadowColor = color;
        context.shadowBlur = 22;
        context.beginPath();
        context.arc(centerX, y, radius, game.target - window, game.target + window);
        context.stroke();
        context.shadowBlur = 0;
        const handX = centerX + Math.cos(game.pulse) * radius;
        const handY = y + Math.sin(game.pulse) * radius;
        context.strokeStyle = "#ffffff";
        context.lineWidth = 4;
        context.beginPath();
        context.moveTo(centerX, y);
        context.lineTo(handX, handY);
        context.stroke();
        context.fillStyle = "#ffffff";
        context.beginPath();
        context.arc(handX, handY, 8, 0, Math.PI * 2);
        context.fill();
      }
      drawText(context, expected ? "NEXT CORE" : index === game.lane ? "ACTIVE CORE" : "STANDBY CORE", 320, y + 6, expected ? "#ffd166" : color, "900 16px system-ui", "left");
      context.restore();
    });
    const recipeX = centerX - game.recipe.length * 24;
    game.recipe.forEach((lane, index) => {
      context.fillStyle = index < game.recipeStep ? "#58f29f" : index === game.recipeStep ? "#ffd166" : "rgba(255,255,255,0.2)";
      context.shadowColor = index === game.recipeStep ? "rgba(255,209,102,0.7)" : "transparent";
      context.shadowBlur = index === game.recipeStep ? 18 : 0;
      context.beginPath();
      context.arc(recipeX + index * 48, 468, 15, 0, Math.PI * 2);
      context.fill();
      drawText(context, (lane + 1).toString(), recipeX + index * 48, 474, "#08111f", "900 14px system-ui", "center");
    });
    context.shadowBlur = 0;
    drawText(context, "Match the lane recipe, then strike the lit arc.", centerX, 512, "#d6deff", "800 18px system-ui", "center");
  }

  function drawDriftCar(context, car, spec = driftCars[0]) {
    context.save();
    context.translate(car.x, car.y);
    context.rotate(car.angle);
    context.shadowColor = "rgba(0,0,0,0.42)";
    context.shadowBlur = 18;
    context.fillStyle = spec.color;
    roundedRect(context, -28, -38, 56, 76, 10);
    context.fill();
    context.fillStyle = spec.roof;
    roundedRect(context, -17, -20, 34, 28, 5);
    context.fill();
    context.fillStyle = spec.stripe;
    context.fillRect(-18, -34, 8, 64);
    context.fillRect(10, -34, 8, 64);
    context.fillStyle = "#10131a";
    context.fillRect(-35, -24, 8, 18);
    context.fillRect(27, -24, 8, 18);
    context.fillRect(-35, 18, 8, 18);
    context.fillRect(27, 18, 8, 18);
    context.restore();
  }

  function drawSnakeBoard(context, game) {
    const cell = 27;
    const boardW = game.cols * cell;
    const boardH = game.rows * cell;
    const startX = gameCanvas.width / 2 - boardW / 2;
    const startY = 88;
    context.save();
    context.fillStyle = "rgba(3, 10, 18, 0.88)";
    context.strokeStyle = "rgba(88,242,159,0.54)";
    context.lineWidth = 3;
    roundedRect(context, startX - 10, startY - 10, boardW + 20, boardH + 20, 8);
    context.fill();
    context.stroke();

    context.strokeStyle = "rgba(88,242,159,0.08)";
    context.lineWidth = 1;
    for (let x = 0; x <= game.cols; x += 1) {
      context.beginPath();
      context.moveTo(startX + x * cell, startY);
      context.lineTo(startX + x * cell, startY + boardH);
      context.stroke();
    }
    for (let y = 0; y <= game.rows; y += 1) {
      context.beginPath();
      context.moveTo(startX, startY + y * cell);
      context.lineTo(startX + boardW, startY + y * cell);
      context.stroke();
    }

    const progress = clamp(game.contractBanked / game.contract, 0, 1);
    context.fillStyle = "rgba(255,255,255,0.08)";
    roundedRect(context, startX, startY + boardH + 16, boardW, 16, 999);
    context.fill();
    context.fillStyle = game.exit ? "#58f29f" : "#34d6ff";
    roundedRect(context, startX, startY + boardH + 16, boardW * progress, 16, 999);
    context.fill();
    drawText(context, game.exit ? "EXTRACTION OPEN" : `CONTRACT ${game.contractBanked}/${game.contract}`, startX + boardW / 2, startY + boardH + 48, game.exit ? "#58f29f" : "#dff6ff", "900 16px system-ui", "center");

    context.fillStyle = "rgba(52, 214, 255, 0.2)";
    context.strokeStyle = "#34d6ff";
    context.shadowColor = "rgba(52,214,255,0.75)";
    context.shadowBlur = 20;
    roundedRect(context, startX + game.uplink.x * cell + 2, startY + game.uplink.y * cell + 2, cell - 4, cell - 4, 7);
    context.fill();
    context.stroke();
    drawText(context, "UP", startX + game.uplink.x * cell + cell / 2, startY + game.uplink.y * cell + 18, "#dff6ff", "900 10px system-ui", "center");
    if (game.exit) {
      context.fillStyle = "rgba(88,242,159,0.26)";
      context.strokeStyle = "#58f29f";
      context.shadowColor = "rgba(88,242,159,0.9)";
      context.shadowBlur = 28;
      roundedRect(context, startX + game.exit.x * cell, startY + game.exit.y * cell, cell, cell, 8);
      context.fill();
      context.stroke();
      drawText(context, "EX", startX + game.exit.x * cell + cell / 2, startY + game.exit.y * cell + 18, "#eafff4", "900 10px system-ui", "center");
    }
    game.firewalls.forEach((wall) => {
      context.fillStyle = "rgba(255, 91, 91, 0.82)";
      context.shadowColor = "rgba(255,91,91,0.75)";
      context.shadowBlur = 14;
      roundedRect(context, startX + wall.x * cell + 5, startY + wall.y * cell + 5, cell - 10, cell - 10, 5);
      context.fill();
      drawText(context, "!", startX + wall.x * cell + cell / 2, startY + wall.y * cell + 18, "#25040a", "1000 13px system-ui", "center");
    });
    context.fillStyle = game.pellet.type === "key" ? "#ffd166" : "#58f29f";
    context.shadowColor = game.pellet.type === "key" ? "rgba(255,209,102,0.8)" : "rgba(88,242,159,0.8)";
    context.shadowBlur = 18;
    roundedRect(context, startX + game.pellet.x * cell + 4, startY + game.pellet.y * cell + 4, cell - 8, cell - 8, 6);
    context.fill();
    drawText(context, game.pellet.type === "key" ? "$" : "+", startX + game.pellet.x * cell + cell / 2, startY + game.pellet.y * cell + 18, "#05120c", "1000 14px system-ui", "center");
    game.snake.forEach((part, index) => {
      const head = index === 0;
      const tailFade = 1 - index / Math.max(1, game.snake.length);
      context.fillStyle = head ? "#58f29f" : `rgba(52, 214, 255, ${0.42 + tailFade * 0.48})`;
      context.strokeStyle = head ? "#d8ffe8" : "rgba(255,255,255,0.22)";
      context.shadowColor = head ? "#58f29f" : "#34d6ff";
      context.shadowBlur = head ? 20 : 8;
      roundedRect(context, startX + part.x * cell + 2, startY + part.y * cell + 2, cell - 4, cell - 4, head ? 9 : 6);
      context.fill();
      context.stroke();
      if (head) {
        const eyeX = game.dir.x * 4;
        const eyeY = game.dir.y * 4;
        context.fillStyle = "#06111f";
        context.beginPath();
        context.arc(startX + part.x * cell + cell / 2 + eyeX, startY + part.y * cell + cell / 2 + eyeY, 3, 0, Math.PI * 2);
        context.fill();
      }
    });
    context.restore();
  }

  function drawBreaker(context, game) {
    context.save();
    game.bricks.forEach((brick) => {
      if (!brick.live) return;
      context.fillStyle = brick.color;
      context.strokeStyle = "rgba(255,255,255,0.62)";
      context.shadowColor = brick.color;
      context.shadowBlur = 12;
      roundedRect(context, brick.x, brick.y, brick.w, brick.h, 7);
      context.fill();
      context.stroke();
    });
    context.fillStyle = "#b78cff";
    context.shadowColor = "rgba(183,140,255,0.85)";
    context.shadowBlur = 20;
    roundedRect(context, game.paddle.x - game.paddle.width / 2, game.paddle.y - 12, game.paddle.width, 24, 8);
    context.fill();
    context.fillStyle = "#ffd166";
    context.shadowColor = "rgba(255,209,102,0.85)";
    context.shadowBlur = 22;
    context.beginPath();
    context.arc(game.ball.x, game.ball.y, game.ball.r, 0, Math.PI * 2);
    context.fill();
    context.restore();
  }

  function drawGameBackground(context, elapsed) {
    const width = gameCanvas.width;
    const height = gameCanvas.height;
    context.clearRect(0, 0, width, height);
    const sky = context.createLinearGradient(0, 0, 0, height);
    sky.addColorStop(0, "#76d7ff");
    sky.addColorStop(0.36, "#17324f");
    sky.addColorStop(0.37, "#111421");
    sky.addColorStop(1, "#07080e");
    context.fillStyle = sky;
    context.fillRect(0, 0, width, height);

    const sun = context.createRadialGradient(width * 0.78, height * 0.18, 10, width * 0.78, height * 0.18, width * 0.28);
    sun.addColorStop(0, "rgba(255,255,255,0.62)");
    sun.addColorStop(0.24, "rgba(255,209,102,0.22)");
    sun.addColorStop(1, "rgba(255,209,102,0)");
    context.fillStyle = sun;
    context.fillRect(0, 0, width, height);

    context.save();
    context.globalAlpha = 0.42;
    context.fillStyle = "#1c2d35";
    context.beginPath();
    context.moveTo(0, height * 0.37);
    for (let x = 0; x <= width; x += 90) {
      context.lineTo(x, height * (0.31 + Math.sin(x * 0.018 + elapsed * 0.08) * 0.035));
    }
    context.lineTo(width, height * 0.45);
    context.lineTo(0, height * 0.45);
    context.closePath();
    context.fill();
    context.restore();

    context.save();
    context.globalAlpha = 0.26;
    for (let i = 0; i < 42; i += 1) {
      const x = (i * 137 + elapsed * 16) % width;
      const y = (i * 71) % height;
      context.fillStyle = i % 3 === 0 ? "#34d6ff" : i % 3 === 1 ? "#ff3d81" : "#ffd166";
      context.fillRect(x, y, 2, 2);
    }
    context.restore();

    context.strokeStyle = "rgba(255,255,255,0.1)";
    context.lineWidth = 2;
    const offset = settings.reducedMotion ? 0 : (elapsed * 38) % 48;
    const horizon = height * 0.47;
    for (let x = -width; x <= width * 2; x += 72) {
      context.beginPath();
      context.moveTo(width / 2 + (x - width / 2) * 0.12, horizon);
      context.lineTo(x - offset, height);
      context.stroke();
    }
    for (let y = horizon; y <= height + 60; y += 42) {
      const depth = (y - horizon) / (height - horizon);
      context.beginPath();
      context.moveTo(0, y + offset * depth);
      context.lineTo(width, y + offset * depth);
      context.stroke();
    }
  }

  function drawText(context, text, x, y, color, font, align) {
    context.fillStyle = color;
    context.font = font;
    context.textAlign = align;
    context.fillText(text, x, y);
  }

  function drawBadge(context, text, x, y, color) {
    context.save();
    context.fillStyle = "rgba(6, 7, 15, 0.72)";
    context.strokeStyle = color;
    context.lineWidth = 2;
    roundedRect(context, x, y - 24, 96, 34, 7);
    context.fill();
    context.stroke();
    drawText(context, text, x + 48, y - 1, color, "800 16px system-ui", "center");
    context.restore();
  }

  function drawDodgerCity(context, game) {
    const width = gameCanvas.width;
    const height = gameCanvas.height;
    const sky = context.createLinearGradient(0, 0, 0, height);
    sky.addColorStop(0, "#14081f");
    sky.addColorStop(0.42, "#09243a");
    sky.addColorStop(1, "#03050b");
    context.fillStyle = sky;
    context.fillRect(0, 0, width, height);

    context.save();
    context.globalAlpha = 0.36;
    for (let i = 0; i < 34; i += 1) {
      const x = (i * 131 + game.elapsed * 18) % width;
      const y = (i * 73) % (height * 0.7);
      context.fillStyle = i % 2 ? "#34d6ff" : "#ff3d81";
      context.fillRect(x, y, 2, 2);
    }
    context.restore();

    const horizon = 350;
    context.save();
    for (let i = 0; i < 14; i += 1) {
      const w = 46 + (i % 4) * 18;
      const h = 100 + (i % 5) * 32;
      const x = i * 74 - 28;
      const y = horizon - h;
      context.fillStyle = i % 2 ? "#0a1222" : "#0d172a";
      roundedRect(context, x, y, w, h + 190, 3);
      context.fill();
      context.fillStyle = i % 3 === 0 ? "rgba(255,61,129,0.58)" : "rgba(52,214,255,0.5)";
      for (let wy = y + 16; wy < horizon - 8; wy += 22) {
        for (let wx = x + 10; wx < x + w - 8; wx += 18) {
          if ((wx + wy + i) % 3) context.fillRect(wx, wy, 7, 3);
        }
      }
    }
    context.restore();

    context.strokeStyle = "rgba(52,214,255,0.12)";
    context.lineWidth = 2;
    const offset = (game.elapsed * 56) % 44;
    for (let y = horizon; y < height + 60; y += 36) {
      context.beginPath();
      context.moveTo(0, y + offset);
      context.lineTo(width, y + offset);
      context.stroke();
    }
    for (let x = -width; x < width * 2; x += 78) {
      context.beginPath();
      context.moveTo(width / 2 + (x - width / 2) * 0.18, horizon);
      context.lineTo(x - offset, height);
      context.stroke();
    }

    drawText(context, "Seal unstable rifts with 2 energy", 480, 520, "rgba(214,222,255,0.88)", "800 17px system-ui", "center");
  }

  function drawDataVaultScene(context, game) {
    const width = gameCanvas.width;
    const height = gameCanvas.height;
    const gradient = context.createLinearGradient(0, 0, 0, height);
    gradient.addColorStop(0, "#03130d");
    gradient.addColorStop(0.5, "#071827");
    gradient.addColorStop(1, "#040710");
    context.fillStyle = gradient;
    context.fillRect(0, 0, width, height);
    context.save();
    context.globalAlpha = 0.5;
    context.strokeStyle = "rgba(88,242,159,0.14)";
    context.lineWidth = 2;
    const drift = (game.elapsed * 22) % 64;
    for (let x = -64; x < width + 64; x += 64) {
      context.beginPath();
      context.moveTo(x + drift, 0);
      context.lineTo(x - 120 + drift, height);
      context.stroke();
    }
    for (let y = -64; y < height + 64; y += 64) {
      context.beginPath();
      context.moveTo(0, y + drift);
      context.lineTo(width, y + drift);
      context.stroke();
    }
    context.restore();
    context.save();
    context.globalAlpha = 0.16;
    for (let i = 0; i < 28; i += 1) {
      const x = (i * 181 + game.elapsed * 26) % width;
      const y = 72 + ((i * 47) % 390);
      drawText(context, i % 2 ? "0101" : "AUTH", x, y, i % 3 ? "#58f29f" : "#34d6ff", "900 13px monospace", "center");
    }
    context.restore();
  }

  function drawRift(context, rift) {
    context.save();
    const progress = clamp(rift.timer / rift.max, 0, 1);
    context.translate(rift.x, rift.y);
    context.rotate(rift.pulse * 0.18);
    context.strokeStyle = progress < 0.28 ? "#ff5b5b" : "#f472b6";
    context.lineWidth = 8;
    context.shadowColor = context.strokeStyle;
    context.shadowBlur = 28;
    context.beginPath();
    context.ellipse(0, 0, rift.r * (1 + Math.sin(rift.pulse) * 0.08), rift.r * 0.62, 0, 0, Math.PI * 2);
    context.stroke();
    context.strokeStyle = "#34d6ff";
    context.lineWidth = 3;
    context.beginPath();
    context.arc(0, 0, rift.r + 14, -Math.PI / 2, -Math.PI / 2 + Math.PI * 2 * progress);
    context.stroke();
    context.shadowBlur = 0;
    drawText(context, "SEAL", 0, 6, "#ffffff", "1000 15px system-ui", "center");
    context.restore();
  }

  function drawEnergyCell(context, x, y, radius, shield) {
    context.save();
    const color = shield ? "#58f29f" : "#34d6ff";
    context.translate(x, y);
    context.fillStyle = color;
    context.shadowColor = color;
    context.shadowBlur = 24;
    context.beginPath();
    context.arc(0, 0, radius, 0, Math.PI * 2);
    context.fill();
    context.strokeStyle = "#ffffff";
    context.lineWidth = 2;
    context.beginPath();
    context.arc(0, 0, radius + 6, 0, Math.PI * 2);
    context.stroke();
    drawText(context, shield ? "S" : "+", 0, 6, "#06111f", "1000 17px system-ui", "center");
    context.restore();
  }

  function drawVoltageShard(context, x, y, radius, elapsed) {
    context.save();
    context.translate(x, y);
    context.rotate(elapsed * 3 + x * 0.01);
    const gradient = context.createLinearGradient(-radius, -radius, radius, radius);
    gradient.addColorStop(0, "#fff7ad");
    gradient.addColorStop(0.4, "#ff3d81");
    gradient.addColorStop(1, "#7c2dff");
    context.fillStyle = gradient;
    context.shadowColor = "rgba(255,61,129,0.9)";
    context.shadowBlur = 26;
    context.beginPath();
    context.moveTo(0, -radius * 1.25);
    context.lineTo(radius * 0.48, -radius * 0.12);
    context.lineTo(radius * 1.06, radius * 0.1);
    context.lineTo(radius * 0.16, radius * 0.32);
    context.lineTo(0, radius * 1.25);
    context.lineTo(-radius * 0.42, radius * 0.08);
    context.lineTo(-radius, -radius * 0.12);
    context.lineTo(-radius * 0.12, -radius * 0.38);
    context.closePath();
    context.fill();
    context.strokeStyle = "rgba(255,255,255,0.52)";
    context.stroke();
    context.restore();
  }

  function drawRescueShip(context, x, y, size, shielded, energy) {
    context.save();
    context.translate(x, y);
    context.fillStyle = "#07111f";
    context.strokeStyle = "#34d6ff";
    context.lineWidth = 4;
    context.shadowColor = "rgba(52,214,255,0.9)";
    context.shadowBlur = 26;
    context.beginPath();
    context.moveTo(0, -size * 1.05);
    context.lineTo(size * 0.9, size * 0.62);
    context.lineTo(size * 0.22, size * 0.44);
    context.lineTo(0, size * 0.86);
    context.lineTo(-size * 0.22, size * 0.44);
    context.lineTo(-size * 0.9, size * 0.62);
    context.closePath();
    context.fill();
    context.stroke();
    context.fillStyle = "#f5f7ff";
    roundedRect(context, -size * 0.2, -size * 0.42, size * 0.4, size * 0.38, 6);
    context.fill();
    context.fillStyle = energy >= 2 ? "#58f29f" : "#ffd166";
    roundedRect(context, -size * 0.34, size * 0.36, size * 0.68, 7, 4);
    context.fill();
    if (shielded) {
      context.strokeStyle = "#58f29f";
      context.lineWidth = 4;
      context.beginPath();
      context.arc(0, 0, size * 1.25, 0, Math.PI * 2);
      context.stroke();
    }
    context.restore();
  }

  function drawOrb(context, x, y, radius, color) {
    context.save();
    context.fillStyle = color;
    context.shadowColor = color;
    context.shadowBlur = 22;
    context.beginPath();
    context.arc(x, y, radius, 0, Math.PI * 2);
    context.fill();
    context.strokeStyle = "rgba(255,255,255,0.75)";
    context.lineWidth = 2;
    context.beginPath();
    context.arc(x, y, radius + 5, 0, Math.PI * 2);
    context.stroke();
    context.restore();
  }

  function drawShard(context, x, y, radius, elapsed) {
    context.save();
    context.translate(x, y);
    context.rotate(elapsed * 2 + x * 0.01);
    context.fillStyle = "#ff3d81";
    context.shadowColor = "rgba(255,61,129,0.75)";
    context.shadowBlur = 22;
    context.beginPath();
    context.moveTo(0, -radius);
    context.lineTo(radius * 0.72, -radius * 0.18);
    context.lineTo(radius * 0.34, radius);
    context.lineTo(-radius * 0.72, radius * 0.22);
    context.closePath();
    context.fill();
    context.strokeStyle = "rgba(255,255,255,0.4)";
    context.stroke();
    context.restore();
  }

  function drawShip(context, x, y, size, shielded) {
    context.save();
    context.fillStyle = "#34d6ff";
    context.shadowColor = "rgba(52,214,255,0.85)";
    context.shadowBlur = 28;
    context.beginPath();
    context.moveTo(x, y - size);
    context.lineTo(x + size * 0.82, y + size * 0.72);
    context.lineTo(x, y + size * 0.42);
    context.lineTo(x - size * 0.82, y + size * 0.72);
    context.closePath();
    context.fill();
    context.fillStyle = "#f5f7ff";
    context.beginPath();
    context.arc(x, y - 4, size * 0.18, 0, Math.PI * 2);
    context.fill();
    if (shielded) {
      context.strokeStyle = "#58f29f";
      context.lineWidth = 4;
      context.beginPath();
      context.arc(x, y, size * 1.1, 0, Math.PI * 2);
      context.stroke();
    }
    context.restore();
  }

  function drawVaultTumbler(context, game) {
    const cx = gameCanvas.width / 2;
    const cy = gameCanvas.height / 2 + 8;
    const radius = 138;
    context.save();
    context.strokeStyle = "rgba(255,255,255,0.16)";
    context.lineWidth = 18;
    context.beginPath();
    context.arc(cx, cy, radius, 0, Math.PI * 2);
    context.stroke();
    game.pins.forEach((pin, index) => {
      context.strokeStyle = pin.locked ? "#58f29f" : index === game.targetIndex ? game.definition.accent : "rgba(255,255,255,0.36)";
      context.lineWidth = index === game.targetIndex ? 20 : 14;
      context.shadowColor = context.strokeStyle;
      context.shadowBlur = index === game.targetIndex ? 24 : 8;
      context.beginPath();
      context.arc(cx, cy, radius, pin.angle - pin.width, pin.angle + pin.width);
      context.stroke();
      const tx = cx + Math.cos(pin.angle) * (radius + 34);
      const ty = cy + Math.sin(pin.angle) * (radius + 34);
      drawText(context, pin.locked ? "LOCK" : `${index + 1}`, tx, ty + 5, pin.locked ? "#58f29f" : "#f5f7ff", "900 15px system-ui", "center");
    });
    const nx = cx + Math.cos(game.angle) * (radius + 4);
    const ny = cy + Math.sin(game.angle) * (radius + 4);
    context.strokeStyle = "#f5f7ff";
    context.lineWidth = 5;
    context.shadowColor = "#f5f7ff";
    context.shadowBlur = 18;
    context.beginPath();
    context.moveTo(cx, cy);
    context.lineTo(nx, ny);
    context.stroke();
    context.fillStyle = game.definition.accent;
    context.beginPath();
    context.arc(cx, cy, 28, 0, Math.PI * 2);
    context.fill();
    context.strokeStyle = "rgba(255,255,255,0.55)";
    context.lineWidth = 3;
    context.stroke();
    context.shadowBlur = 0;
    drawText(context, "VAULT TUMBLER", cx, 72, "#ffd166", "900 28px system-ui", "center");
    drawText(context, `Vaults ${game.vaults} | Strikes ${game.strikes}/6 | Speed ${game.needleSpeed.toFixed(1)}`, cx, 108, "#a9b1ce", "800 17px system-ui", "center");
    drawText(context, "Action when the needle crosses the active gold window", cx, gameCanvas.height - 48, "#f5f7ff", "800 17px system-ui", "center");
    context.restore();
  }

  function drawTarget(context, x, y, radius, color, progress, hp = 1) {
    context.save();
    context.strokeStyle = color;
    context.lineWidth = 5;
    context.shadowColor = color;
    context.shadowBlur = 22;
    context.beginPath();
    context.arc(x, y, radius, 0, Math.PI * 2);
    context.stroke();
    context.beginPath();
    context.arc(x, y, radius * 0.45, 0, Math.PI * 2);
    context.stroke();
    if (hp > 1) {
      context.fillStyle = "#f5f7ff";
      context.font = "900 18px system-ui";
      context.textAlign = "center";
      context.textBaseline = "middle";
      context.fillText(`x${hp}`, x, y);
    }
    context.strokeStyle = "#f5f7ff";
    context.lineWidth = 3;
    context.beginPath();
    context.arc(x, y, radius + 9, -Math.PI / 2, -Math.PI / 2 + Math.PI * 2 * clamp(progress, 0, 1));
    context.stroke();
    context.restore();
  }

  function drawCrosshair(context, x, y) {
    context.save();
    context.strokeStyle = "#ffd166";
    context.lineWidth = 3;
    context.shadowColor = "rgba(255,209,102,0.8)";
    context.shadowBlur = 18;
    context.beginPath();
    context.moveTo(x - 25, y);
    context.lineTo(x + 25, y);
    context.moveTo(x, y - 25);
    context.lineTo(x, y + 25);
    context.stroke();
    context.fillStyle = "rgba(255,209,102,0.2)";
    context.beginPath();
    context.arc(x, y, 8, 0, Math.PI * 2);
    context.fill();
    context.restore();
  }

  function drawChip(context, x, y, color) {
    context.save();
    context.translate(x, y);
    context.rotate(Math.PI / 4);
    context.fillStyle = color;
    context.shadowColor = color;
    context.shadowBlur = 18;
    context.fillRect(-12, -12, 24, 24);
    context.strokeStyle = "rgba(255,255,255,0.65)";
    context.strokeRect(-17, -17, 34, 34);
    context.restore();
  }

  function drawObstacle(context, x, y, width, type) {
    context.save();
    context.fillStyle = type === "gate" ? "rgba(52,214,255,0.34)" : "#ff3d81";
    context.strokeStyle = type === "gate" ? "#34d6ff" : "rgba(255,255,255,0.45)";
    context.shadowColor = type === "gate" ? "#34d6ff" : "rgba(255,61,129,0.75)";
    context.shadowBlur = 20;
    roundedRect(context, x - width / 2, y - 28, width, 56, 8);
    context.fill();
    context.stroke();
    context.restore();
  }

  function drawGate(context, gate) {
    context.save();
    const topHeight = gate.center - gate.gap / 2;
    const bottomY = gate.center + gate.gap / 2;
    context.fillStyle = "rgba(255,209,102,0.86)";
    context.strokeStyle = "#f5f7ff";
    context.shadowColor = "rgba(255,209,102,0.65)";
    context.shadowBlur = 20;
    roundedRect(context, gate.x, -8, gate.width, topHeight + 8, 8);
    context.fill();
    context.stroke();
    roundedRect(context, gate.x, bottomY, gate.width, gameCanvas.height - bottomY - 40, 8);
    context.fill();
    context.stroke();
    context.fillStyle = "rgba(6,7,15,0.42)";
    for (let y = 18; y < topHeight; y += 26) context.fillRect(gate.x + 10, y, gate.width - 20, 4);
    for (let y = bottomY + 18; y < gameCanvas.height - 50; y += 26) context.fillRect(gate.x + 10, y, gate.width - 20, 4);
    context.restore();
  }

  function drawBird(context, x, y, radius, velocity) {
    context.save();
    context.translate(x, y);
    context.rotate(clamp(velocity / 600, -0.45, 0.7));
    context.fillStyle = "#ffd166";
    context.shadowColor = "rgba(255,209,102,0.8)";
    context.shadowBlur = 24;
    context.beginPath();
    context.arc(0, 0, radius, 0, Math.PI * 2);
    context.fill();
    context.fillStyle = "#ff3d81";
    context.beginPath();
    context.moveTo(radius - 1, -4);
    context.lineTo(radius + 20, 4);
    context.lineTo(radius - 1, 12);
    context.closePath();
    context.fill();
    context.fillStyle = "#f5f7ff";
    context.beginPath();
    context.arc(7, -6, 5, 0, Math.PI * 2);
    context.fill();
    context.fillStyle = "#080a12";
    context.beginPath();
    context.arc(9, -6, 2, 0, Math.PI * 2);
    context.fill();
    context.strokeStyle = "#34d6ff";
    context.lineWidth = 4;
    context.beginPath();
    context.moveTo(-8, 5);
    context.quadraticCurveTo(-28, 0, -34, 18);
    context.stroke();
    context.restore();
  }

  function drawTicTacToeBoard(context, board, cursor, message) {
    const size = 112;
    const gap = 14;
    const startX = gameCanvas.width / 2 - (size * 3 + gap * 2) / 2;
    const startY = 132;
    drawText(context, message, gameCanvas.width / 2, 102, "#ffd166", "900 28px system-ui", "center");
    for (let index = 0; index < 9; index += 1) {
      const x = startX + (index % 3) * (size + gap);
      const y = startY + Math.floor(index / 3) * (size + gap);
      context.save();
      context.fillStyle = index === cursor ? "rgba(183,140,255,0.2)" : "rgba(17,21,34,0.74)";
      context.strokeStyle = index === cursor ? "#b78cff" : "rgba(255,255,255,0.16)";
      context.lineWidth = index === cursor ? 4 : 2;
      roundedRect(context, x, y, size, size, 8);
      context.fill();
      context.stroke();
      if (board[index] === "X") {
        context.strokeStyle = "#34d6ff";
        context.shadowColor = "#34d6ff";
        context.shadowBlur = 20;
        context.lineWidth = 9;
        context.beginPath();
        context.moveTo(x + 28, y + 28);
        context.lineTo(x + size - 28, y + size - 28);
        context.moveTo(x + size - 28, y + 28);
        context.lineTo(x + 28, y + size - 28);
        context.stroke();
      } else if (board[index] === "O") {
        context.strokeStyle = "#ff3d81";
        context.shadowColor = "#ff3d81";
        context.shadowBlur = 20;
        context.lineWidth = 9;
        context.beginPath();
        context.arc(x + size / 2, y + size / 2, 31, 0, Math.PI * 2);
        context.stroke();
      }
      context.restore();
    }
  }

  function drawRunner(context, x, y, shielded) {
    context.save();
    context.fillStyle = "#58f29f";
    context.shadowColor = "rgba(88,242,159,0.8)";
    context.shadowBlur = 24;
    roundedRect(context, x - 28, y - 24, 56, 48, 8);
    context.fill();
    context.fillStyle = "#f5f7ff";
    context.fillRect(x + 6, y - 9, 13, 7);
    context.fillStyle = "#0b1020";
    context.fillRect(x - 17, y + 15, 36, 6);
    if (shielded) {
      context.strokeStyle = "#58f29f";
      context.lineWidth = 4;
      context.beginPath();
      context.arc(x, y, 38, 0, Math.PI * 2);
      context.stroke();
    }
    context.restore();
  }

  function roundedRect(context, x, y, width, height, radius) {
    context.beginPath();
    if (typeof context.roundRect === "function") {
      context.roundRect(x, y, width, height, radius);
      return;
    }
    context.moveTo(x + radius, y);
    context.lineTo(x + width - radius, y);
    context.quadraticCurveTo(x + width, y, x + width, y + radius);
    context.lineTo(x + width, y + height - radius);
    context.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
    context.lineTo(x + radius, y + height);
    context.quadraticCurveTo(x, y + height, x, y + height - radius);
    context.lineTo(x, y + radius);
    context.quadraticCurveTo(x, y, x + radius, y);
  }

  function resizeAttractCanvas() {
    const rect = attractCanvas.getBoundingClientRect();
    const ratio = window.devicePixelRatio || 1;
    const width = Math.max(320, Math.floor(rect.width * ratio));
    const height = Math.max(240, Math.floor(rect.height * ratio));
    if (attractCanvas.width !== width) attractCanvas.width = width;
    if (attractCanvas.height !== height) attractCanvas.height = height;
    attractCanvasWidth = rect.width;
    attractCanvasHeight = rect.height;
    attractContext.setTransform(ratio, 0, 0, ratio, 0, 0);
  }

  function runAttractMode(time = 0) {
    resizeAttractCanvas();
    const width = attractCanvasWidth;
    const height = attractCanvasHeight;
    attractContext.clearRect(0, 0, width, height);
    const gradient = attractContext.createLinearGradient(0, 0, width, height);
    gradient.addColorStop(0, "#111522");
    gradient.addColorStop(0.52, "#08182a");
    gradient.addColorStop(1, "#25122b");
    attractContext.fillStyle = gradient;
    attractContext.fillRect(0, 0, width, height);
    const speed = settings.reducedMotion ? 0 : time * 0.036;

    for (let y = 0; y < height; y += 24) {
      attractContext.fillStyle = "rgba(255,255,255,0.08)";
      attractContext.fillRect(0, y, width, 1);
    }
    for (let i = 0; i < 26; i += 1) {
      const x = ((i * 83 + speed) % (width + 100)) - 50;
      const y = 42 + ((i * 57) % Math.max(80, height - 84));
      const color = i % 3 === 0 ? "#ff3d81" : i % 3 === 1 ? "#34d6ff" : "#ffd166";
      attractContext.strokeStyle = color;
      attractContext.fillStyle = color;
      attractContext.lineWidth = 3;
      attractContext.shadowBlur = 20;
      attractContext.shadowColor = color;
      if (i % 4 === 0) {
        attractContext.save();
        attractContext.translate(x, y);
        attractContext.rotate(time * 0.001 + i);
        attractContext.strokeRect(-18, -18, 36, 36);
        attractContext.restore();
      } else {
        attractContext.beginPath();
        attractContext.arc(x, y, 14 + (i % 4) * 5, 0, Math.PI * 2);
        attractContext.stroke();
      }
    }
    attractContext.shadowBlur = 0;
    attractContext.fillStyle = "rgba(6, 7, 15, 0.36)";
    attractContext.fillRect(0, height - 92, width, 92);
    drawText(attractContext, `${gameDefinitions.length} cabinets online`, 28, height - 54, "#f5f7ff", "900 28px system-ui", "left");
    drawText(attractContext, "Difficulty rises every 8 seconds", 30, height - 25, "#a9b1ce", "700 15px system-ui", "left");
    requestAnimationFrame(runAttractMode);
  }

  function wireClick(selector, handler) {
    const element = document.querySelector(selector);
    if (!element) return;
    element.onclick = (event) => {
      event.preventDefault();
      element.dataset.arcadeHandled = "true";
      window.setTimeout(() => {
        element.dataset.arcadeHandled = "false";
      }, 0);
      try {
        handler(event);
      } catch (error) {
        console.error(`Arcade button failed: ${selector}`, error);
        fallbackButtonRoute(selector);
      }
    };
  }

  function fallbackButtonRoute(selector) {
    const routes = {
      "#playButton": "games",
      "#dailyButton": "daily",
      "#tournamentButton": "tournament",
      "#socialButton": "social",
      "#seasonButton": "progression",
      "#progressionButton": "progression",
      "#leaderboardButton": "leaderboards",
      "#achievementsButton": "achievements",
      "#historyButton": "history",
      "#settingsButton": "settings",
      "#keybindButton": "keybinds",
      "#debugButton": "debug",
    };
    if (routes[selector]) showScreen(routes[selector]);
  }

  document.addEventListener("click", (event) => {
    const button = event.target.closest("button");
    if (!button || button.dataset.arcadeHandled === "true") return;
    const delegated = {
      playButton: () => {
        resetGameBrowser();
        showScreen("games");
      },
      dailyButton: () => showScreen("daily"),
      tournamentButton: () => showScreen("tournament"),
      socialButton: () => showScreen("social"),
      seasonButton: () => showScreen("progression"),
      progressionButton: () => showScreen("progression"),
      leaderboardButton: () => showScreen("leaderboards"),
      achievementsButton: () => showScreen("achievements"),
      historyButton: () => showScreen("history"),
      settingsButton: () => showScreen("settings"),
      keybindButton: () => showScreen("keybinds"),
      debugButton: () => showScreen("debug"),
      saveProgressButton: () => saveAllProgress(true),
      startDailyButton: () => startDailyChallenge(),
      nextTournamentRunButton: () => startNextTournamentRun(),
    }[button.id];
    if (!delegated && button.dataset.route) {
      if (button.dataset.route === "games") resetGameBrowser();
      showScreen(button.dataset.route);
      updateRailState(button.dataset.route);
      audio.beep(520, 0.04, "triangle");
      return;
    }
    if (!delegated) return;
    delegated();
  });

  function updateRailState(route = currentScreen) {
    document.querySelectorAll("[data-route]").forEach((button) => {
      button.classList.toggle("active", button.dataset.route === route);
    });
  }

  wireClick("#playButton", () => {
    resetGameBrowser();
    showScreen("games");
    audio.beep(520);
  });
  wireClick("#dailyButton", () => {
    showScreen("daily");
    audio.beep(580, 0.06, "square");
  });
  wireClick("#tournamentButton", () => {
    showScreen("tournament");
    audio.beep(560, 0.06, "square");
  });
  wireClick("#socialButton", () => {
    showScreen("social");
    audio.beep(640, 0.06, "triangle");
  });
  wireClick("#seasonButton", () => {
    showScreen("progression");
    audio.beep(720, 0.06, "triangle");
  });
  wireClick("#progressionButton", () => {
    showScreen("progression");
    audio.beep(720, 0.06, "triangle");
  });
  wireClick("#leaderboardButton", () => {
    showScreen("leaderboards");
    audio.beep(480, 0.06, "triangle");
  });
  wireClick("#achievementsButton", () => {
    showScreen("achievements");
    audio.beep(680, 0.06, "triangle");
  });
  wireClick("#historyButton", () => {
    showScreen("history");
    audio.beep(380, 0.06, "triangle");
  });
  wireClick("#settingsButton", () => {
    audio.beep(440);
    showScreen("settings");
  });
  wireClick("#keybindButton", () => {
    audio.beep(620);
    showScreen("keybinds");
  });
  wireClick("#debugButton", () => {
    audio.beep(500, 0.06, "triangle");
    showScreen("debug");
  });
  wireClick("#saveProgressButton", () => {
    saveAllProgress(true);
    audio.beep(760, 0.06, "triangle");
  });
  wireClick("#cloudSaveButton", () => {
    saveCloudProfile(true);
    audio.beep(760, 0.06, "triangle");
  });
  wireClick("#cloudLoadButton", () => {
    loadCloudProfile();
    audio.beep(520, 0.06, "triangle");
  });
  wireClick("#refreshLeaderboardsButton", () => {
    renderLeaderboards();
    audio.beep(620, 0.05, "triangle");
  });
  wireClick("#claimDailyRewardButton", () => claimDailyReward());
  wireClick("#addFriendButton", () => addFriendFromInput());
  if (debugForm) debugForm.addEventListener("submit", submitDebugReport);
  if (debugReportList) {
    debugReportList.addEventListener("click", (event) => {
      const fixed = event.target.closest("[data-report-fixed]");
      const deleted = event.target.closest("[data-report-delete]");
      if (fixed) updateDebugReport(Number(fixed.dataset.reportFixed), "fixed");
      if (deleted) updateDebugReport(Number(deleted.dataset.reportDelete), "delete");
    });
  }
  wireClick("#toggleUpdateNoticeButton", () => setUpdatingNotice(!isUpdatingNoticeEnabled()));
  wireClick("#clearReportsButton", () => {
    saveDebugReports([]);
    renderDebugSystem("Reports cleared.");
  });
  gameGrid.addEventListener("click", (event) => {
    const button = event.target.closest("[data-action]");
    const card = button?.closest(".game-card");
    if (!button || !card) return;
    if (button.dataset.action === "play") startGame(card.dataset.game);
    if (button.dataset.action === "about") showAbout(card.dataset.game);
  });
  gameGrid.addEventListener("pointerover", (event) => {
    const card = event.target.closest(".game-card");
    if (!card) return;
    const game = gameDefinitions.find((definition) => definition.id === card.dataset.game);
    if (game) renderGameDetailDock(game);
  });
  gameGrid.addEventListener("focusin", (event) => {
    const card = event.target.closest(".game-card");
    if (!card) return;
    const game = gameDefinitions.find((definition) => definition.id === card.dataset.game);
    if (game) renderGameDetailDock(game);
  });
  if (collectionStrip) {
    collectionStrip.addEventListener("click", (event) => {
      const button = event.target.closest("[data-collection]");
      if (!button) return;
      activeCollection = button.dataset.collection;
      renderGameCards();
      audio.sfx("menu");
    });
  }
  if (gameDetailDock) {
    gameDetailDock.addEventListener("click", (event) => {
      const play = event.target.closest("[data-detail-play]");
      const about = event.target.closest("[data-detail-about]");
      if (play) startGame(play.dataset.detailPlay);
      if (about) showAbout(about.dataset.detailAbout);
    });
  }
  gameSearch.addEventListener("input", renderGameCards);
  globalSearch.addEventListener("input", () => {
    gameSearch.value = globalSearch.value;
    showScreen("games");
    renderGameCards();
  });
  filterTabs.addEventListener("click", (event) => {
    const button = event.target.closest(".filter-tab");
    if (!button) return;
    activeFilter = button.dataset.filter;
    filterTabs.querySelectorAll(".filter-tab").forEach((tab) => tab.classList.toggle("active", tab === button));
    renderGameCards();
    audio.sfx(button.dataset.filter === "Racing" ? "racing" : button.dataset.filter === "Sports" ? "sport" : button.dataset.filter === "Puzzle" ? "puzzle" : "menu");
  });
  playLevelButtons.forEach((button) => {
    button.addEventListener("click", () => {
      settings.playLevel = normalizedPlayLevel(button.dataset.playLevel);
      saveSettings();
      renderGameCards();
      audio.beep(420 + settings.playLevel * 120, 0.05, "triangle");
    });
  });
  wireClick("#resetKeysButton", () => {
    keybinds = { ...defaultKeybinds };
    saveKeybinds();
    audio.beep(520);
  });
  profileNameInput.addEventListener("input", () => {
    profile.name = cleanPlayerName(profileNameInput.value, defaultProfile.name);
    playerOneName.value = profile.name;
    saveProfile();
  });
  profileTitleSelect.addEventListener("change", () => {
    const nextTitle = titleDefinitions.find((title) => title.id === profileTitleSelect.value);
    if (!nextTitle?.unlock()) return;
    profile.title = nextTitle.id;
    saveProfile();
    audio.beep(680, 0.06, "triangle");
  });
  driftSensitivitySlider.addEventListener("input", () => {
    profile.driftSensitivity = Number(driftSensitivitySlider.value);
    driftSensitivityValue.textContent = `${profile.driftSensitivity}%`;
    saveProfile();
  });
  wireClick("#startDriftRunButton", () => {
    if (!activeGame || activeGame.definition.id !== "driftboss") return;
    activeGame.carSpec = activeDriftCar();
    activeGame.activeBoosters = consumeDriftBoosters();
    activeGame.insured = activeGame.activeBoosters.insurance;
    activeGame.car.x = roadCenterAt(activeGame.road, activeGame.car.y);
    activeGame.spawnGrace = 1.25;
    activeGame.started = true;
    activeGame.readyCountdown = 3;
    driftStartOverlay.classList.add("hidden-field");
    audio.beep(680, 0.08, "square");
  });
  wireClick("#restartButton", () => {
    if (activeGame) startGame(activeGame.definition.id, activeRunContext ? { ...activeRunContext } : null);
  });
  wireClick("#quitButton", () => {
    const destination = activeRunContext?.tournament ? "tournament" : "games";
    cancelTournamentRun();
    audio.beep(240);
    showScreen(destination);
  });
  tournamentForm.onsubmit = startTournament;
  tournamentMode.addEventListener("change", updateTournamentModeFields);
  wireClick("#startTournamentButton", startTournament);
  wireClick("#nextTournamentRunButton", startNextTournamentRun);
  wireClick("#startDailyButton", startDailyChallenge);
  touchControls.querySelectorAll("[data-touch]").forEach((button) => {
    const action = button.dataset.touch;
    const press = (event) => {
      event.preventDefault();
      setTouchAction(action, true, button);
      button.setPointerCapture?.(event.pointerId);
    };
    const release = (event) => {
      event.preventDefault();
      setTouchAction(action, false, button);
    };
    button.addEventListener("pointerdown", press);
    button.addEventListener("pointerup", release);
    button.addEventListener("pointercancel", release);
    button.addEventListener("pointerleave", release);
  });
  aboutPlayButton.onclick = (event) => {
    event.preventDefault();
    if (selectedAboutGame) startGame(selectedAboutGame.id);
  };
  aboutBackButton.onclick = (event) => {
    event.preventDefault();
    audio.beep(300);
    showScreen("games");
  };

  function canvasPointerPosition(event) {
    const rect = gameCanvas.getBoundingClientRect();
    return {
      x: ((event.clientX - rect.left) / rect.width) * gameCanvas.width,
      y: ((event.clientY - rect.top) / rect.height) * gameCanvas.height,
    };
  }

  gameCanvas.addEventListener("pointerdown", (event) => {
    if (currentScreen !== "play" || !activeGame?.pointerDown) return;
    event.preventDefault();
    const point = canvasPointerPosition(event);
    activeGame.pointerDown(point.x, point.y);
    gameCanvas.setPointerCapture?.(event.pointerId);
  });

  gameCanvas.addEventListener("pointermove", (event) => {
    if (currentScreen !== "play" || !activeGame?.pointerMove) return;
    event.preventDefault();
    const point = canvasPointerPosition(event);
    activeGame.pointerMove(point.x, point.y);
  });

  ["pointerup", "pointercancel", "pointerleave"].forEach((type) => {
    gameCanvas.addEventListener(type, (event) => {
      if (currentScreen !== "play" || !activeGame?.pointerUp) return;
      event.preventDefault();
      activeGame.pointerUp();
    });
  });

  backButton.onclick = (event) => {
    event.preventDefault();
    audio.beep(300);
    if (currentScreen === "play" && activeRunContext?.tournament) {
      cancelTournamentRun();
      showScreen("tournament");
      return;
    }
    showScreen(currentScreen === "play" || currentScreen === "about" ? "games" : "intro");
  };

  muteButton.onclick = (event) => {
    event.preventDefault();
    settings.audio = !settings.audio;
    saveSettings();
    if (settings.audio) audio.beep(520);
  };

  audioToggle.addEventListener("change", () => {
    settings.audio = audioToggle.checked;
    saveSettings();
  });

  musicToggle.addEventListener("change", () => {
    settings.music = musicToggle.checked;
    saveSettings();
    audio.beep(360);
  });

  motionToggle.addEventListener("change", () => {
    settings.reducedMotion = motionToggle.checked;
    saveSettings();
  });

  autoCloudSyncToggle.addEventListener("change", () => {
    settings.autoCloudSync = autoCloudSyncToggle.checked;
    saveSettings();
    if (settings.autoCloudSync) saveCloudProfile(false);
  });

  volumeSlider.addEventListener("input", () => {
    settings.volume = Number(volumeSlider.value);
    saveSettings();
  });

  window.addEventListener("keydown", (event) => {
    if (listeningFor) {
      event.preventDefault();
      keybinds[listeningFor] = event.code;
      listeningFor = null;
      saveKeybinds();
      audio.beep(700, 0.06);
      return;
    }
    if (Object.values(keybinds).includes(event.code)) event.preventDefault();
    if ((currentScreen === "games" || currentScreen === "intro") && /^Digit[0-9]$/.test(event.code)) {
      const digit = Number(event.code.replace("Digit", ""));
      const index = digit === 0 ? 9 : digit - 1;
      const game = gameDefinitions[index];
      if (game) startGame(game.id);
      return;
    }
    if (currentScreen === "play" && activeGame?.handleKey) activeGame.handleKey(event);
    pressed.add(event.code);
    if (currentScreen === "play" && event.code === keybinds.pause) showScreen("games");
  });

  window.addEventListener("keyup", (event) => {
    pressed.delete(event.code);
  });

  window.addEventListener("resize", resizeAttractCanvas);

  populateTournamentGames();
  renderGameCards();
  introCabinetCount.textContent = gameDefinitions.length.toString();
  updateIntroDashboard();
  renderDailyChallenge();
  renderLeaderboards();
  renderAchievements();
  renderSocialHub();
  renderHistory();
  renderTournament();
  renderKeybinds();
  renderDebugSystem();
  renderAvatarPicker();
  renderArcadeMarket();
  applySkin();
  saveProfile(false);
  playerOneName.value = profile.name;
  applySettings();
  initializeCloudProfileStatus();
  showScreen("intro");
  window.setInterval(() => {
    if (currentScreen === "intro") updateIntroDashboard();
  }, 7000);
  runAttractMode();
})();
