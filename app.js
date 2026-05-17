(() => {
  const screens = {
    intro: document.querySelector("#introScreen"),
    daily: document.querySelector("#dailyScreen"),
    games: document.querySelector("#gamesScreen"),
    about: document.querySelector("#aboutScreen"),
    leaderboards: document.querySelector("#leaderboardScreen"),
    achievements: document.querySelector("#achievementsScreen"),
    tournament: document.querySelector("#tournamentScreen"),
    history: document.querySelector("#historyScreen"),
    settings: document.querySelector("#settingsScreen"),
    keybinds: document.querySelector("#keybindScreen"),
    play: document.querySelector("#playScreen"),
  };

  const screenTitle = document.querySelector("#screenTitle");
  const backButton = document.querySelector("#backButton");
  const muteButton = document.querySelector("#muteButton");
  const muteIcon = document.querySelector("#muteIcon");
  const globalSearch = document.querySelector("#globalSearch");
  const gameGrid = document.querySelector("#gameGrid");
  const gameSearch = document.querySelector("#gameSearch");
  const filterTabs = document.querySelector("#filterTabs");
  const introCabinetCount = document.querySelector("#introCabinetCount");
  const totalBestScore = document.querySelector("#totalBestScore");
  const favoriteCabinet = document.querySelector("#favoriteCabinet");
  const dailyChallenge = document.querySelector("#dailyChallenge");
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
  const leaderboardRows = document.querySelector("#leaderboardRows");
  const achievementCount = document.querySelector("#achievementCount");
  const achievementGrid = document.querySelector("#achievementGrid");
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
  const avatarPicker = document.querySelector("#avatarPicker");
  const skinGrid = document.querySelector("#skinGrid");
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
  const gameCanvas = document.querySelector("#gameCanvas");
  const gameContext = gameCanvas.getContext("2d");
  const touchControls = document.querySelector("#touchControls");
  const attractCanvas = document.querySelector("#attractCanvas");
  const attractContext = attractCanvas.getContext("2d");

  const defaultSettings = {
    audio: true,
    music: false,
    volume: 70,
    reducedMotion: false,
  };

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
  };

  const avatarOptions = ["P1", "VX", "KO", "AI", "GG", "XP"];

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
      icon: "15",
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
  ];

  const gameDefinitions = [
    {
      id: "dodger",
      title: "Neon Dodger",
      subtitle: "Drift through falling voltage",
      hook: "Collect charge cells, graze hazards, and chain shields through an accelerating storm.",
      rules: "Survive a 60-second voltage storm. Close calls and pickups build combo, but direct hits burn lives.",
      controls: "Move with the directional keys. Hold Action to boost through tight openings.",
      strategy: "Graze hazards when you have room, then cash in the combo on charge and shield pickups.",
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
      id: "snake",
      title: "Byte Snake",
      subtitle: "Classic snake with neon speed",
      hook: "Eat data pellets, grow longer, and survive as the grid gets tighter every level.",
      rules: "Collect pellets to score and grow. Hitting walls or your own trail ends the run.",
      controls: "Use the directional keys to steer.",
      strategy: "Leave escape lanes around the edges. A perfect pellet is not worth boxing yourself in.",
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
      subtitle: "Raft through canyon rapids",
      hook: "Thread a fast raft between rocks, collect flags, and survive rougher water each level.",
      rules: "Steer through the river for 60 seconds. Rocks end the run; flags score points.",
      controls: "Move with the directional keys. Hold Action for a short speed burst.",
      strategy: "Stay near the center until flags are safe. Boost only when the lane ahead is clear.",
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
      subtitle: "Mine a crowded orbit",
      hook: "Pilot a mining ship through drifting rocks, blast debris, and collect bright ore.",
      rules: "Avoid asteroids and collect ore. Blasting rocks is safer, but ore gives better score.",
      controls: "Move with the directional keys. Press Action to fire.",
      strategy: "Use short bursts of fire to open lanes, then cut across for ore clusters.",
      tag: "Survival",
      accent: "#93c5fd",
      glow: "rgba(147, 197, 253, 0.72)",
      background: "linear-gradient(135deg, #0c1228, #1f1d3f 58%, #102b3a)",
    },
  ];

  let settings = loadStored("arcade-settings", defaultSettings);
  let keybinds = loadStored("arcade-keybinds", defaultKeybinds);
  let profile = normalizeProfile(loadStored("arcade-profile", defaultProfile));
  let currentScreen = "intro";
  let selectedAboutGame = null;
  let activeGame = null;
  let activeFilter = "all";
  let gameLoopId = 0;
  let lastFrameTime = 0;
  let listeningFor = null;
  let attractCanvasWidth = 0;
  let attractCanvasHeight = 0;
  let activeRunContext = null;
  let tournament = createTournamentState();
  const pressed = new Set();
  const touchActionKeys = {};

  const audio = {
    context: null,
    musicOscillator: null,
    musicGain: null,
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
    startMusic() {
      if (!settings.audio || !settings.music || this.musicOscillator) return;
      const context = this.ensure();
      if (!context) return;
      const oscillator = context.createOscillator();
      const gain = context.createGain();
      oscillator.type = "triangle";
      oscillator.frequency.value = 96;
      gain.gain.value = Math.max(0.01, settings.volume / 100) * 0.018;
      oscillator.connect(gain);
      gain.connect(context.destination);
      oscillator.start();
      this.musicOscillator = oscillator;
      this.musicGain = gain;
    },
    stopMusic() {
      if (this.musicOscillator) {
        this.musicOscillator.stop();
        this.musicOscillator.disconnect();
      }
      this.musicOscillator = null;
      this.musicGain = null;
    },
    refresh() {
      if (!settings.audio || !settings.music || currentScreen === "play") {
        this.stopMusic();
        return;
      }
      this.startMusic();
      if (this.musicGain) this.musicGain.gain.value = Math.max(0.01, settings.volume / 100) * 0.018;
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
    const normalizedBoosters = {};
    Object.keys(driftBoosters).forEach((id) => {
      normalizedBoosters[id] = Math.max(0, Math.floor(Number(driftBoosters[id]) || 0));
    });
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
    };
  }

  function saveProfile() {
    profile = normalizeProfile(profile);
    localStorage.setItem("arcade-profile", JSON.stringify(profile));
    applySkin();
    renderProfile();
    renderSkins();
    renderDriftShop();
  }

  function getProfileLevel() {
    return Math.floor(profile.xp / 250) + 1;
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
    driftSensitivitySlider.value = profile.driftSensitivity;
    driftSensitivityValue.textContent = `${profile.driftSensitivity}%`;
    avatarPicker.querySelectorAll("button").forEach((button) => {
      button.classList.toggle("active", button.dataset.avatar === profile.avatar);
    });
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

  function activeDriftCar() {
    return driftCars.find((car) => car.id === profile.driftCar) || driftCars[0];
  }

  function getBoosterCount(id) {
    return Math.max(0, Math.floor(Number(profile.driftBoosters?.[id]) || 0));
  }

  function consumeDriftBoosters() {
    const activeBoosters = {
      doubleScore: getBoosterCount("doubleScore") > 0,
      insurance: getBoosterCount("insurance") > 0,
      coinRush: getBoosterCount("coinRush") > 0,
    };
    Object.entries(activeBoosters).forEach(([id, enabled]) => {
      if (enabled) profile.driftBoosters[id] = getBoosterCount(id) - 1;
    });
    if (Object.values(activeBoosters).some(Boolean)) saveProfile();
    return activeBoosters;
  }

  function renderDriftShop() {
    [driftShop, driftStartShop].forEach((container) => renderDriftShopInto(container));
  }

  function renderDriftShopInto(container) {
    if (!container) return;
    const active = activeDriftCar();
    container.innerHTML = `
      <div class="drift-shop-header">
        <span>Coin balance</span>
        <strong>${profile.coins}</strong>
        <small>Equipped: ${active.name}</small>
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
          .map(
            (booster) => `
              <button class="booster-card" type="button" data-booster="${booster.id}">
                <b>${booster.icon}</b>
                <strong>${booster.name}</strong>
                <small>${booster.description}</small>
                <em>${booster.cost} coins · Owned ${getBoosterCount(booster.id)}</em>
              </button>
            `,
          )
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

  function saveRunResult(game, playerName = profile.name, mode = "Solo") {
    const score = Math.floor(game.score);
    const time = Math.min(60, game.elapsed);
    const driftCoins = game.definition.id === "driftboss" ? Math.floor(game.trackCoins || 0) : 0;
    const coinReward = Math.max(5, Math.floor(score / 80) + Math.floor(time / 12) + (mode === "Daily Challenge" ? 10 : 0)) + driftCoins;
    const xpReward = Math.max(12, Math.floor(score / 12) + Math.floor(time * 1.5));
    saveBestScore(game.definition.id, score);
    saveBestTime(game.definition.id, time);
    saveLeaderboardEntry(game.definition.id, { player: playerName, score, time, mode });
    checkRunAchievements({ gameId: game.definition.id, score, time, mode });
    addProgress({ coins: coinReward, xp: xpReward });
    renderGameCards();
    renderLeaderboards();
    renderAchievements();
    const result = { gameId: game.definition.id, player: playerName, score, time, mode, coinReward, xpReward };
    checkDailyChallenge(result);
    return result;
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
  }

  function saveKeybinds() {
    localStorage.setItem("arcade-keybinds", JSON.stringify(keybinds));
    renderKeybinds();
  }

  function applySettings() {
    audioToggle.checked = settings.audio;
    musicToggle.checked = settings.music;
    motionToggle.checked = settings.reducedMotion;
    volumeSlider.value = settings.volume;
    volumeValue.textContent = `${settings.volume}%`;
    muteIcon.textContent = settings.audio ? "♪" : "x";
    document.body.classList.toggle("reduced-motion", settings.reducedMotion);
    audio.refresh();
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
      tournament: "Tournament",
      history: "History",
      settings: "Settings",
      keybinds: "Keybinds",
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
    if (name === "tournament") renderTournament();
    if (name === "history") renderHistory();
    if (name === "settings") {
      renderProfile();
      renderSkins();
      renderDriftShop();
    }
    audio.refresh();
  }

  function renderGameCards() {
    gameGrid.innerHTML = "";
    const query = gameSearch.value.trim().toLowerCase();
    const visibleGames = gameDefinitions.filter((game) => {
      const matchesFilter = activeFilter === "all" || game.tag === activeFilter;
      const haystack = `${game.title} ${game.subtitle} ${game.hook} ${game.tag}`.toLowerCase();
      return matchesFilter && haystack.includes(query);
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
          <strong class="preview-symbol">${previewSymbolFor(game.id)}</strong>
        </div>
        <div class="game-card-body">
          <div>
            <p class="kicker">${game.tag} cabinet</p>
            <h3>${game.title}</h3>
            <p>${game.subtitle}</p>
            <small class="game-hook">${game.hook}</small>
          </div>
          <div class="cabinet-readout" aria-label="${game.title} cabinet stats">
            <span><strong>${getBestScore(game.id)}</strong> Best</span>
            <span><strong>${formatRunTime(getBestTime(game.id))}</strong> Time</span>
            <span><strong>${difficultyFor(game)}</strong> Heat</span>
          </div>
          <div class="card-meta">
            <span>${game.tag}</span>
            <span>${game.controls.split(".")[0]}</span>
            <span>60s run</span>
          </div>
          <div class="card-actions">
            <button class="primary-button compact" type="button" data-action="play">Play</button>
            <button class="secondary-button compact" type="button" data-action="about">About</button>
          </div>
        </div>
      `;
      card.querySelector('[data-action="play"]').addEventListener("click", () => startGame(game.id));
      card.querySelector('[data-action="about"]').addEventListener("click", () => showAbout(game.id));
      gameGrid.append(card);
    });
  }

  function resetGameBrowser() {
    activeFilter = "all";
    gameSearch.value = "";
    globalSearch.value = "";
    filterTabs.querySelectorAll(".filter-tab").forEach((tab) => {
      tab.classList.toggle("active", tab.dataset.filter === "all");
    });
    renderGameCards();
  }

  function previewSymbolFor(id) {
    const symbols = {
      dodger: "DODGE",
      popper: "LOCK",
      runner: "RUN",
      flap: "FLAP",
      tictactoe: "X/O",
      tetris: "STACK",
      twenty48: "2048",
      driftboss: "DRIFT",
      snake: "BYTE",
      breaker: "BREAK",
      pinball: "PIN",
      river: "RAFT",
      keeper: "SAVE",
      memory: "PAIR",
      asteroids: "ORE",
    };
    return symbols[id] || "PLAY";
  }

  function difficultyFor(game) {
    const scale = {
      Survival: "Medium",
      Precision: "Sharp",
      Reflex: "Fast",
      Timing: "Tricky",
      Strategy: "Smart",
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

  function renderDailyChallenge() {
    const challenge = getDailyChallenge();
    const result = getDailyResult();
    dailyCard.style.setProperty("--preview-accent", challenge.game.accent);
    dailyCard.style.setProperty("--preview-glow", challenge.game.glow);
    dailyCard.innerHTML = `
      <span class="kicker">${challenge.game.tag} cabinet</span>
      <h3>${challenge.game.title}</h3>
      <p>${challenge.game.hook}</p>
      <div class="leaderboard-metrics">
        <span><strong>${challenge.label}</strong> Goal</span>
        <span><strong>${result?.completed ? "Done" : "Open"}</strong> Status</span>
        <span><strong>${result ? result.score : 0}</strong> Best daily</span>
      </div>
    `;
    if (!result) {
      dailyStatusTitle.textContent = "Ready";
      dailyStatus.textContent = `Today's goal is ${challenge.label} in ${challenge.game.title}.`;
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
    renderCabinetSpotlight(daily.game);
    renderProfile();
  }

  function renderCabinetSpotlight(game) {
    cabinetSpotlight.style.setProperty("--preview-accent", game.accent);
    cabinetSpotlight.style.setProperty("--preview-glow", game.glow);
    cabinetSpotlight.innerHTML = `
      <div>
        <span>Featured Cabinet</span>
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
    leaderboardRows.innerHTML = "";
    gameDefinitions.forEach((game, index) => {
      const row = document.createElement("article");
      row.className = "leaderboard-row";
      row.style.setProperty("--preview-accent", game.accent);
      row.style.setProperty("--preview-glow", game.glow);
      const entries = getLeaderboard(game.id);
      const entryMarkup = entries.length
        ? entries
            .map(
              (entry, entryIndex) => `
                <li>
                  <span>#${entryIndex + 1} ${entry.player}</span>
                  <strong>${entry.score}</strong>
                  <em>${formatRunTime(entry.time)} · ${entry.mode}</em>
                </li>
              `,
            )
            .join("")
        : `<li><span>No runs yet</span><strong>0</strong><em>Play this cabinet to rank</em></li>`;
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
        <ol>${entryMarkup}</ol>
      `;
      leaderboardRows.append(row);
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

  function capitalize(value) {
    return `${value.charAt(0).toUpperCase()}${value.slice(1)}`;
  }

  function showAbout(id) {
    const game = gameDefinitions.find((definition) => definition.id === id);
    if (!game) return;
    selectedAboutGame = game;
    aboutKicker.textContent = `${game.tag} cabinet`;
    aboutTitle.textContent = game.title;
    aboutDescription.textContent = game.hook;
    aboutMarquee.style.setProperty("--preview-bg", game.background);
    aboutMarquee.style.setProperty("--preview-accent", game.accent);
    aboutMarquee.style.setProperty("--preview-glow", game.glow);
    aboutInfo.innerHTML = `
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
    updateIntroDashboard();
    renderGameCards();
    activeGame = createGame(definition);
    if (definition.id === "driftboss") renderDriftShop();
    playTitle.textContent = definition.title;
    gameSubtitle.textContent = runContext?.player ? `${definition.subtitle} · ${runContext.player}` : `${definition.subtitle} · ${profile.name}`;
    scoreValue.textContent = "0";
    levelValue.textContent = "1";
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
    if (definition.id === "snake") return createSnake(base);
    if (definition.id === "breaker") return createBreaker(base);
    if (definition.id === "pinball") return createPinball(base);
    if (definition.id === "river") return createRiverRush(base);
    if (definition.id === "keeper") return createKeeper(base);
    if (definition.id === "memory") return createMemoryMatch(base);
    if (definition.id === "asteroids") return createAsteroids(base);
    return createRunner(base);
  }

  function createBaseGame(definition) {
    return {
      definition,
      score: 0,
      elapsed: 0,
      timeLeft: 60,
      level: 1,
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
        this.level = Math.min(12, Math.floor(this.elapsed / 8) + 1);
        this.comboTimer = Math.max(0, this.comboTimer - delta);
        if (this.comboTimer <= 0) this.combo = 1;
        if (this.timeLeft <= 0) this.finish();
        this.flash = Math.max(0, this.flash - delta);
        this.updateEffects(delta);
      },
      addScore(points, x = gameCanvas.width / 2, y = 90, label = "") {
        const value = Math.ceil(points * this.combo);
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
        context.fillStyle = "rgba(6, 7, 15, 0.82)";
        context.fillRect(0, 0, gameCanvas.width, gameCanvas.height);
        context.strokeStyle = this.definition.accent;
        context.lineWidth = 4;
        context.strokeRect(270, 166, 420, 208);
        context.fillStyle = "#f5f7ff";
        context.font = "900 54px system-ui";
        context.textAlign = "center";
        context.fillText(label, gameCanvas.width / 2, gameCanvas.height / 2 - 18);
        context.fillStyle = "#ffd166";
        context.font = "800 22px system-ui";
        context.fillText(`Score ${Math.floor(this.score)} | Best ${best}`, gameCanvas.width / 2, gameCanvas.height / 2 + 30);
        context.fillStyle = "#a9b1ce";
        context.font = "700 17px system-ui";
        const reward = this.result ? `+${this.result.coinReward} coins | +${this.result.xpReward} XP` : "Restart or quit from the cabinet controls";
        context.fillText(reward, gameCanvas.width / 2, gameCanvas.height / 2 + 68);
      },
    };
  }

  function createDodger(base) {
    return {
      ...base,
      player: { x: 480, y: 462, size: 34, speed: 330, shield: 0 },
      hazards: [],
      charges: [],
      spawn: 0,
      chargeSpawn: 1.4,
      lives: 3,
      update(delta) {
        this.updateTimer(delta);
        if (this.over) return;
        const direction = Number(actionPressed("right")) - Number(actionPressed("left"));
        const vertical = Number(actionPressed("down")) - Number(actionPressed("up"));
        const boost = actionPressed("action") ? 1.5 : 1;
        this.player.x += direction * this.player.speed * boost * delta;
        this.player.y += vertical * this.player.speed * 0.72 * delta;
        this.player.x = clamp(this.player.x, 28, gameCanvas.width - 28);
        this.player.y = clamp(this.player.y, gameCanvas.height * 0.48, gameCanvas.height - 32);
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
          this.chargeSpawn = random(2.6, 4.4);
          this.charges.push({
            x: random(40, gameCanvas.width - 40),
            y: -30,
            r: 13,
            speed: 130 + this.level * 18,
            shield: Math.random() < 0.28,
          });
        }

        this.hazards.forEach((hazard) => {
          hazard.x += Math.sin(this.elapsed * hazard.wobble + hazard.phase) * this.level * 14 * delta;
          hazard.y += hazard.speed * delta;
        });
        this.charges.forEach((charge) => {
          charge.y += charge.speed * delta;
        });
        this.hazards = this.hazards.filter((hazard) => hazard.y < gameCanvas.height + 40);
        this.charges = this.charges.filter((charge) => charge.y < gameCanvas.height + 40);

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
            this.addScore(charge.shield ? 45 : 24, charge.x, charge.y, charge.shield ? "Shield" : "Charge");
            this.burst(charge.x, charge.y, charge.shield ? "#58f29f" : "#34d6ff", 14);
            audio.beep(charge.shield ? 860 : 680, 0.06, "triangle");
          }
        }
        this.score += delta * (15 + this.level * 3);
      },
      draw(context) {
        this.drawBase(context);
        drawBadge(context, `Lives ${this.lives}`, 24, 34, "#ffd166");
        if (this.player.shield > 0) drawBadge(context, `Shield ${Math.ceil(this.player.shield)}`, 140, 34, "#58f29f");
        this.charges.forEach((charge) => drawOrb(context, charge.x, charge.y, charge.r, charge.shield ? "#58f29f" : "#34d6ff"));
        this.hazards.forEach((hazard) => drawShard(context, hazard.x, hazard.y, hazard.r, this.elapsed));
        drawShip(context, this.player.x, this.player.y, this.player.size, this.player.shield > 0);
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
            this.pushCombo(this.target.bonus ? 2 : 1);
            this.addScore((this.target.bonus ? 44 : 28) + this.target.timer * 5 + this.level * 3, this.target.x, this.target.y, this.target.bonus ? "Bonus" : "Hit");
            this.burst(this.target.x, this.target.y, this.target.bonus ? "#ffd166" : "#34d6ff", this.target.bonus ? 24 : 16);
            this.target = makeTarget(this.level);
            audio.beep(760, 0.06, "square");
          } else if (decoyHit) {
            this.score = Math.max(0, this.score - 12);
            this.breakCombo();
            decoyHit.life = 0;
            this.burst(decoyHit.x, decoyHit.y, "#ff5b5b", 12);
            audio.beep(110, 0.08, "sawtooth");
          } else {
            this.score = Math.max(0, this.score - 3);
            audio.beep(180, 0.05, "triangle");
          }
        }
        this.actionWasDown = actionIsDown;
      },
      draw(context) {
        this.drawBase(context);
        this.decoys.forEach((decoy) => drawTarget(context, decoy.x, decoy.y, decoy.r, "#ff5b5b", decoy.life / 4));
        drawTarget(context, this.target.x, this.target.y, this.target.r, this.target.bonus ? "#ffd166" : "#34d6ff", this.target.timer / this.target.maxTimer);
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
            this.playerTurn = false;
            this.aiDelay = Math.max(0.18, 0.42 - this.level * 0.015);
            this.roundMessage = "Bot thinking";
          }
        }
        this.actionWasDown = actionDown;
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
        this.moveWasDown = false;
        this.actionWasDown = false;
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
    for (let y = -180; y <= gameCanvas.height + 180; y += 90) {
      const previous = points[points.length - 1]?.x ?? gameCanvas.width / 2;
      points.push({ x: clamp(previous + random(-145, 145), 170, gameCanvas.width - 170), y });
    }
    return {
      ...base,
      car: { x: gameCanvas.width / 2, y: 420, angle: 0 },
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
      update(delta) {
        if (this.over) return;
        if (!this.started) return;
        if (this.readyCountdown > 0) {
          this.readyCountdown = Math.max(0, this.readyCountdown - delta);
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
        drawDriftCoins(context, this.coins);
        drawDriftCar(context, this.car, this.carSpec);
        if (!this.started) drawDriftTutorial(context);
        if (this.started && this.readyCountdown > 0) drawCountdown(context, Math.ceil(this.readyCountdown));
        this.drawEffects(context);
        if (this.flash) {
          context.fillStyle = `rgba(255, 91, 91, ${this.flash * 2})`;
          context.fillRect(0, 0, gameCanvas.width, gameCanvas.height);
        }
        this.drawEnd(context, this.timeLeft <= 0 ? "Boss Run" : "Off Road");
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
      pellet: { x: 16, y: 7 },
      stepTimer: 0,
      eaten: 0,
      update(delta) {
        this.updateTimer(delta);
        if (this.over) return;
        const next = directionFromKeys(this.nextDir);
        if (next && !(next.x === -this.dir.x && next.y === -this.dir.y)) this.nextDir = next;
        this.stepTimer += delta;
        const interval = Math.max(0.07, 0.22 - this.level * 0.012);
        while (this.stepTimer >= interval && !this.over) {
          this.stepTimer -= interval;
          this.dir = this.nextDir;
          const head = this.snake[0];
          const nextHead = { x: head.x + this.dir.x, y: head.y + this.dir.y };
          const hitWall = nextHead.x < 0 || nextHead.x >= this.cols || nextHead.y < 0 || nextHead.y >= this.rows;
          const hitSelf = this.snake.some((part) => part.x === nextHead.x && part.y === nextHead.y);
          if (hitWall || hitSelf) {
            this.flash = 0.2;
            this.finish();
            audio.beep(100, 0.16, "sawtooth");
            return;
          }
          this.snake.unshift(nextHead);
          if (nextHead.x === this.pellet.x && nextHead.y === this.pellet.y) {
            this.eaten += 1;
            this.pushCombo();
            this.addScore(42 + this.level * 5, gameCanvas.width / 2, 94, "Byte");
            this.pellet = makeSnakePellet(this.cols, this.rows, this.snake);
            this.burst(480, 270, "#58f29f", 10);
            audio.beep(720, 0.045, "triangle");
          } else {
            this.snake.pop();
          }
        }
        this.score += delta * (8 + this.level);
      },
      draw(context) {
        this.drawBase(context);
        drawBadge(context, `Bytes ${this.eaten}`, 24, 34, "#58f29f");
        drawSnakeBoard(context, this);
        this.drawEffects(context);
        this.drawEnd(context, this.timeLeft <= 0 ? "Trail Complete" : "Snake Crash");
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
      ball: { x: 480, y: 240, vx: 170, vy: -220, r: 11 },
      lives: 3,
      bumpers: [
        { x: 360, y: 190, r: 30, color: "#ff8a3d" },
        { x: 500, y: 150, r: 28, color: "#34d6ff" },
        { x: 610, y: 230, r: 32, color: "#ffd166" },
      ],
      update(delta) {
        this.updateTimer(delta);
        if (this.over) return;
        const left = actionPressed("left") || actionPressed("action");
        const right = actionPressed("right") || actionPressed("action");
        this.ball.vy += (410 + this.level * 12) * delta;
        this.ball.x += this.ball.vx * delta;
        this.ball.y += this.ball.vy * delta;
        if (this.ball.x < 90 || this.ball.x > gameCanvas.width - 90) this.ball.vx *= -0.92;
        if (this.ball.y < 70) this.ball.vy = Math.abs(this.ball.vy);
        const leftHit = left && this.ball.x < 480 && this.ball.y > 430 && this.ball.y < 500;
        const rightHit = right && this.ball.x >= 480 && this.ball.y > 430 && this.ball.y < 500;
        if (leftHit || rightHit) {
          this.ball.vy = -Math.abs(this.ball.vy) - 160;
          this.ball.vx += (leftHit ? 220 : -220) + random(-40, 40);
          this.addScore(18 + this.level, this.ball.x, this.ball.y, "Flip");
          audio.beep(560, 0.035, "square");
        }
        this.bumpers.forEach((bumper) => {
          const gap = distance(this.ball.x, this.ball.y, bumper.x, bumper.y);
          if (gap < this.ball.r + bumper.r) {
            const angle = Math.atan2(this.ball.y - bumper.y, this.ball.x - bumper.x);
            this.ball.vx = Math.cos(angle) * (310 + this.level * 16);
            this.ball.vy = Math.sin(angle) * (310 + this.level * 16);
            this.pushCombo();
            this.addScore(55 + this.level * 6, bumper.x, bumper.y, "Bumper");
            this.burst(bumper.x, bumper.y, bumper.color, 14);
            audio.beep(760, 0.04, "triangle");
          }
        });
        if (this.ball.y > gameCanvas.height + 30) {
          this.lives -= 1;
          this.breakCombo();
          if (this.lives <= 0) this.finish();
          this.ball = { x: 480, y: 260, vx: random(-160, 160), vy: -260, r: 11 };
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
      raft: { x: 480, y: 445, w: 54, h: 32 },
      rocks: [],
      flags: [],
      spawn: 0,
      update(delta) {
        this.updateTimer(delta);
        if (this.over) return;
        const boost = actionPressed("action") ? 1.35 : 1;
        this.raft.x += (Number(actionPressed("right")) - Number(actionPressed("left"))) * 330 * delta;
        this.raft.y += (Number(actionPressed("down")) - Number(actionPressed("up"))) * 250 * delta;
        this.raft.x = clamp(this.raft.x, 120, gameCanvas.width - 120);
        this.raft.y = clamp(this.raft.y, 190, gameCanvas.height - 45);
        const flow = (180 + this.level * 28) * boost;
        this.spawn -= delta;
        if (this.spawn <= 0) {
          this.spawn = Math.max(0.22, 0.8 - this.level * 0.045);
          const x = random(155, gameCanvas.width - 155);
          if (Math.random() < 0.28) this.flags.push({ x, y: -30, r: 14 });
          else this.rocks.push({ x, y: -40, r: random(18, 34), spin: random(-1, 1) });
        }
        this.rocks.forEach((rock) => { rock.y += flow * delta; });
        this.flags.forEach((flag) => { flag.y += flow * delta; });
        this.rocks = this.rocks.filter((rock) => rock.y < gameCanvas.height + 60);
        this.flags = this.flags.filter((flag) => flag.y < gameCanvas.height + 60 && !flag.collected);
        for (const rock of this.rocks) {
          if (distance(rock.x, rock.y, this.raft.x, this.raft.y) < rock.r + 24) {
            this.flash = 0.2;
            this.burst(this.raft.x, this.raft.y, "#ff5b5b", 22);
            audio.beep(100, 0.14, "sawtooth");
            this.finish();
          }
        }
        this.flags.forEach((flag) => {
          if (distance(flag.x, flag.y, this.raft.x, this.raft.y) < flag.r + 26) {
            flag.collected = true;
            this.pushCombo();
            this.addScore(48 + this.level * 5, flag.x, flag.y, "Flag");
            this.burst(flag.x, flag.y, "#ffd166", 12);
          }
        });
        this.score += delta * (15 + this.level * 3);
      },
      draw(context) {
        drawRiverScene(context, this.elapsed);
        drawBadge(context, "Rapids", 24, 34, "#2dd4bf");
        drawRiverObjects(context, this);
        this.drawEffects(context);
        this.drawEnd(context, this.timeLeft <= 0 ? "River Cleared" : "Raft Wrecked");
      },
    };
  }

  function createKeeper(base) {
    return {
      ...base,
      keeper: { x: 480, y: 474, w: 94 },
      balls: [],
      spawn: 0.8,
      goals: 0,
      saves: 0,
      update(delta) {
        this.updateTimer(delta);
        if (this.over) return;
        const dive = actionPressed("action") ? 1.45 : 1;
        this.keeper.x += (Number(actionPressed("right")) - Number(actionPressed("left"))) * 430 * delta;
        this.keeper.x = clamp(this.keeper.x, 120, gameCanvas.width - 120);
        this.keeper.w = actionPressed("action") ? 142 : 96;
        this.spawn -= delta;
        if (this.spawn <= 0) {
          this.spawn = Math.max(0.42, 1.45 - this.level * 0.08);
          this.balls.push({ x: random(130, gameCanvas.width - 130), y: 90, vx: random(-40, 40), vy: 220 + this.level * 24, r: 13 });
        }
        this.balls.forEach((ball) => {
          ball.x += ball.vx * delta * dive;
          ball.y += ball.vy * delta;
        });
        for (const ball of this.balls) {
          if (ball.saved) continue;
          const saved = ball.y > this.keeper.y - 22 && Math.abs(ball.x - this.keeper.x) < this.keeper.w / 2 + ball.r;
          if (saved) {
            ball.saved = true;
            this.saves += 1;
            this.pushCombo();
            this.addScore(62 + this.level * 8, ball.x, ball.y, "Save");
            this.burst(ball.x, ball.y, "#facc15", 12);
            audio.beep(720, 0.04, "square");
          } else if (ball.y > gameCanvas.height + 20) {
            ball.saved = true;
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
      ship: { x: 480, y: 430, cooldown: 0 },
      shots: [],
      rocks: [],
      ore: [],
      spawn: 0,
      lives: 3,
      update(delta) {
        this.updateTimer(delta);
        if (this.over) return;
        this.ship.x += (Number(actionPressed("right")) - Number(actionPressed("left"))) * 360 * delta;
        this.ship.y += (Number(actionPressed("down")) - Number(actionPressed("up"))) * 260 * delta;
        this.ship.x = clamp(this.ship.x, 30, gameCanvas.width - 30);
        this.ship.y = clamp(this.ship.y, 95, gameCanvas.height - 35);
        this.ship.cooldown = Math.max(0, this.ship.cooldown - delta);
        if (actionPressed("action") && this.ship.cooldown <= 0) {
          this.ship.cooldown = 0.22;
          this.shots.push({ x: this.ship.x, y: this.ship.y - 24, vy: -560 });
          audio.beep(620, 0.025, "square");
        }
        this.spawn -= delta;
        if (this.spawn <= 0) {
          this.spawn = Math.max(0.18, 0.62 - this.level * 0.035);
          this.rocks.push({ x: random(30, gameCanvas.width - 30), y: -30, r: random(16, 36), vy: random(135, 210) + this.level * 20, vx: random(-35, 35) });
          if (Math.random() < 0.22) this.ore.push({ x: random(36, gameCanvas.width - 36), y: -24, r: 11, vy: 160 + this.level * 18 });
        }
        this.shots.forEach((shot) => { shot.y += shot.vy * delta; });
        this.rocks.forEach((rock) => { rock.x += rock.vx * delta; rock.y += rock.vy * delta; });
        this.ore.forEach((ore) => { ore.y += ore.vy * delta; });
        this.shots = this.shots.filter((shot) => shot.y > -30);
        this.rocks = this.rocks.filter((rock) => rock.y < gameCanvas.height + 60 && !rock.dead);
        this.ore = this.ore.filter((item) => item.y < gameCanvas.height + 60 && !item.collected);
        for (const rock of this.rocks) {
          for (const shot of this.shots) {
            if (distance(rock.x, rock.y, shot.x, shot.y) < rock.r + 6) {
              rock.dead = true;
              shot.y = -99;
              this.addScore(35 + this.level * 4, rock.x, rock.y, "Blast");
              this.burst(rock.x, rock.y, "#93c5fd", 10);
            }
          }
          if (distance(rock.x, rock.y, this.ship.x, this.ship.y) < rock.r + 22) {
            rock.dead = true;
            this.lives -= 1;
            this.flash = 0.18;
            this.breakCombo();
            if (this.lives <= 0) this.finish();
          }
        }
        this.ore.forEach((item) => {
          if (distance(item.x, item.y, this.ship.x, this.ship.y) < item.r + 24) {
            item.collected = true;
            this.pushCombo();
            this.addScore(70 + this.level * 6, item.x, item.y, "Ore");
            this.burst(item.x, item.y, "#ffd166", 12);
          }
        });
        this.score += delta * (12 + this.level * 2);
      },
      draw(context) {
        drawSpaceScene(context, this.elapsed);
        drawBadge(context, `Lives ${this.lives}`, 24, 34, "#93c5fd");
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

  function drawPinballTable(context, game) {
    context.save();
    context.fillStyle = "rgba(10, 12, 20, 0.78)";
    roundedRect(context, 150, 62, 660, 454, 18);
    context.fill();
    context.strokeStyle = "#ff8a3d";
    context.lineWidth = 4;
    context.stroke();
    game.bumpers.forEach((bumper) => {
      context.fillStyle = bumper.color;
      context.shadowColor = bumper.color;
      context.shadowBlur = 22;
      context.beginPath();
      context.arc(bumper.x, bumper.y, bumper.r, 0, Math.PI * 2);
      context.fill();
      context.shadowBlur = 0;
    });
    context.fillStyle = "#34d6ff";
    roundedRect(context, 300, 452, 150, 18, 9);
    context.fill();
    roundedRect(context, 510, 452, 150, 18, 9);
    context.fill();
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
    game.rocks.forEach((rock) => {
      context.fillStyle = "#5b6170";
      context.beginPath();
      context.arc(rock.x, rock.y, rock.r, 0, Math.PI * 2);
      context.fill();
    });
    game.flags.forEach((flag) => {
      context.fillStyle = "#ffd166";
      context.beginPath();
      context.arc(flag.x, flag.y, flag.r, 0, Math.PI * 2);
      context.fill();
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
    context.fillStyle = "#f5f7ff";
    context.fillRect(180, 492, 600, 8);
    context.strokeStyle = "#f5f7ff";
    context.strokeRect(180, 395, 600, 105);
    game.balls.forEach((ball) => {
      context.fillStyle = "#ffffff";
      context.beginPath();
      context.arc(ball.x, ball.y, ball.r, 0, Math.PI * 2);
      context.fill();
      context.strokeStyle = "#111827";
      context.stroke();
    });
    context.fillStyle = "#facc15";
    roundedRect(context, game.keeper.x - game.keeper.w / 2, game.keeper.y - 16, game.keeper.w, 32, 10);
    context.fill();
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
    game.rocks.forEach((rock) => {
      context.fillStyle = "#6b7280";
      context.beginPath();
      context.arc(rock.x, rock.y, rock.r, 0, Math.PI * 2);
      context.fill();
    });
    game.ore.forEach((ore) => {
      context.fillStyle = "#ffd166";
      context.beginPath();
      context.arc(ore.x, ore.y, ore.r, 0, Math.PI * 2);
      context.fill();
    });
    context.fillStyle = "#93c5fd";
    game.shots.forEach((shot) => context.fillRect(shot.x - 3, shot.y - 12, 6, 18));
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

  function makeTarget(level) {
    const timer = Math.max(1.1, random(2.2, 4.2) - level * 0.14);
    return {
      x: random(90, gameCanvas.width - 90),
      y: random(80, gameCanvas.height - 80),
      r: Math.max(22, random(34, 58) - level * 1.6),
      timer,
      maxTimer: timer,
      vx: random(-22, 22) * level,
      vy: random(-18, 18) * level,
      bonus: Math.random() < 0.18,
    };
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

  function makeSnakePellet(cols, rows, snake) {
    const occupied = new Set(snake.map((part) => `${part.x},${part.y}`));
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
        const hue = value ? Math.min(54, Math.log2(value) * 5) : 0;
        context.fillStyle = value ? `hsl(${44 + hue}, 88%, ${Math.max(42, 70 - Math.log2(value) * 3)}%)` : "rgba(255,255,255,0.07)";
        context.strokeStyle = value ? "rgba(255,255,255,0.58)" : "rgba(255,255,255,0.1)";
        context.shadowColor = value ? "rgba(255,209,102,0.35)" : "transparent";
        context.shadowBlur = value ? 18 : 0;
        roundedRect(context, px, py, size, size, 8);
        context.fill();
        context.stroke();
        if (value) {
          context.shadowBlur = 0;
          drawText(context, value.toString(), px + size / 2, py + size / 2 + 11, "#08111f", "900 30px system-ui", "center");
        }
      });
    });
    context.restore();
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

  function drawCountdown(context, value) {
    context.save();
    context.fillStyle = "rgba(6, 12, 18, 0.55)";
    context.fillRect(0, 0, gameCanvas.width, gameCanvas.height);
    drawText(context, value.toString(), gameCanvas.width / 2, gameCanvas.height / 2 + 34, "#ffffff", "1000 120px system-ui", "center");
    drawText(context, "Get ready", gameCanvas.width / 2, gameCanvas.height / 2 - 68, "#ffd166", "900 28px system-ui", "center");
    context.restore();
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
    context.fillStyle = "rgba(6, 7, 15, 0.68)";
    context.strokeStyle = "rgba(88,242,159,0.36)";
    context.lineWidth = 3;
    roundedRect(context, startX - 10, startY - 10, boardW + 20, boardH + 20, 8);
    context.fill();
    context.stroke();
    context.fillStyle = "#ffd166";
    context.shadowColor = "rgba(255,209,102,0.8)";
    context.shadowBlur = 18;
    roundedRect(context, startX + game.pellet.x * cell + 4, startY + game.pellet.y * cell + 4, cell - 8, cell - 8, 6);
    context.fill();
    game.snake.forEach((part, index) => {
      context.fillStyle = index === 0 ? "#58f29f" : "#34d6ff";
      context.shadowColor = index === 0 ? "#58f29f" : "#34d6ff";
      context.shadowBlur = index === 0 ? 18 : 9;
      roundedRect(context, startX + part.x * cell + 2, startY + part.y * cell + 2, cell - 4, cell - 4, 7);
      context.fill();
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

  function drawTarget(context, x, y, radius, color, progress) {
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
      "#leaderboardButton": "leaderboards",
      "#achievementsButton": "achievements",
      "#historyButton": "history",
      "#settingsButton": "settings",
      "#keybindButton": "keybinds",
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
      leaderboardButton: () => showScreen("leaderboards"),
      achievementsButton: () => showScreen("achievements"),
      historyButton: () => showScreen("history"),
      settingsButton: () => showScreen("settings"),
      keybindButton: () => showScreen("keybinds"),
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
    audio.beep(420, 0.04, "triangle");
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
  renderHistory();
  renderTournament();
  renderKeybinds();
  renderAvatarPicker();
  applySkin();
  saveProfile();
  playerOneName.value = profile.name;
  applySettings();
  showScreen("intro");
  runAttractMode();
})();
