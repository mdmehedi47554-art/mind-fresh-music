/* =====================================
   MIND FRESH MUSIC
   NEW PREMIUM APP VERSION
===================================== */

const app = document.getElementById("app");

/* DESIGN */

const design = document.createElement("style");

design.textContent = `
body {
    padding: 18px 16px 155px;
}

#app {
    width: 100%;
}

.screen {
    animation: fadeIn .2s ease;
}

@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}

.screen-title {
    color: #bb86fc;
    font-size: 25px;
    margin: 12px 0 8px;
}

.screen-subtitle {
    color: #aaaab5;
    font-size: 14px;
}

.home-welcome {
    background: linear-gradient(135deg,#302044,#1b1b24);
    border: 1px solid #49345e;
    border-radius: 20px;
    padding: 20px;
    margin: 20px 0;
}

.home-welcome h2 {
    margin: 0 0 8px;
    color: white;
}

.home-welcome p {
    margin: 0;
}

.home-shortcuts {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
    margin: 16px 0;
}

.shortcut {
    background: #22212e;
    border: 1px solid #383044;
    border-radius: 16px;
    padding: 17px 10px;
    text-align: left;
    color: white;
    margin: 0;
    box-shadow: none;
}

.shortcut span {
    display: block;
    font-size: 25px;
    margin-bottom: 8px;
}

.shortcut small {
    color: #aaaab5;
    font-weight: normal;
}

.home-stats {
    display: flex;
    gap: 12px;
    margin-top: 15px;
}

.stat-card {
    flex: 1;
    background: #1b1b24;
    border: 1px solid #30303c;
    border-radius: 14px;
    padding: 14px;
    text-align: center;
}

.stat-card strong {
    display: block;
    color: #bb86fc;
    font-size: 22px;
}

.stat-card small {
    color: #aaaab5;
}

.screen-search {
    width: 100%;
    padding: 14px;
    margin: 18px 0;
    border-radius: 12px;
    background: #252530;
    color: white;
    border: 1px solid #514064;
    outline: none;
    font-size: 15px;
}

.screen-search:focus {
    border-color: #bb86fc;
}

.add-song-button {
    display: block;
    text-align: center;
    background: linear-gradient(135deg,#8b5cf6,#bb86fc);
    color: white;
    padding: 14px;
    border-radius: 13px;
    font-weight: bold;
    margin: 15px 0;
}

.song-row {
    display: flex;
    align-items: center;
    gap: 10px;
    background: #22222d;
    border: 1px solid #30303c;
    padding: 12px;
    border-radius: 13px;
    margin: 9px 0;
}

.song-name {
    flex: 1;
    color: white;
    overflow-wrap: anywhere;
    cursor: pointer;
    font-size: 14px;
}

.song-row button {
    margin: 0;
    padding: 9px 11px;
    box-shadow: none;
}

.empty-message {
    text-align: center;
    background: #1b1b24;
    border-radius: 14px;
    padding: 22px 12px;
    color: #aaaab5;
    margin-top: 18px;
}

.setting-card {
    background: #1b1b24;
    border: 1px solid #30303c;
    padding: 17px;
    border-radius: 15px;
    margin: 12px 0;
}

.setting-card h3 {
    margin: 0 0 8px;
    color: #bb86fc;
}

.setting-card p {
    margin: 0;
    font-size: 13px;
}

.bottom-nav {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 76px;
    background: #1b1b24;
    border-top: 1px solid #30303c;
    display: flex;
    justify-content: space-around;
    align-items: center;
    z-index: 1000;
    padding: 5px 3px;
}

.nav-item {
    background: transparent;
    box-shadow: none;
    color: #aaaab5;
    width: 20%;
    padding: 5px 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    font-size: 21px;
}

.nav-item small {
    font-size: 10px;
    font-weight: normal;
}

.nav-item.active {
    color: #bb86fc;
}

.nav-home {
    width: 60px;
    height: 60px;
    min-width: 60px;
    min-height: 60px;
    border-radius: 50%;
    padding: 0;
    margin-top: -30px;
    background: linear-gradient(135deg,#8b5cf6,#bb86fc);
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0;
    box-shadow: 0 5px 22px #8b5cf666;
}

.nav-home span {
    font-size: 28px;
    line-height: 30px;
}

.nav-home small {
    font-size: 9px;
}

.nav-home.active {
    color: white;
    outline: 3px solid #302440;
}

/* MINI PLAYER */

.mini-player {
    position: fixed;
    bottom: 76px;
    left: 0;
    width: 100%;
    height: 58px;
    background: #24212f;
    border-top: 1px solid #49345e;
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 7px 13px;
    z-index: 999;
}

.mini-song-info {
    flex: 1;
    min-width: 0;
    cursor: pointer;
}

.mini-song-info strong {
    display: block;
    color: white;
    font-size: 13px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}

.mini-song-info small {
    color: #aaaab5;
    font-size: 10px;
}

.mini-player button {
    margin: 0;
    padding: 9px;
    min-width: 38px;
    min-height: 38px;
    border-radius: 50%;
}

.player-panel {
    position: fixed;
    bottom: 134px;
    left: 0;
    width: 100%;
    background: #1b1b24;
    border-top: 1px solid #49345e;
    padding: 18px;
    z-index: 998;
    display: none;
}

.player-panel.open {
    display: block;
}

.player-panel h3 {
    overflow-wrap: anywhere;
    color: #bb86fc;
}

.player-panel input[type="range"] {
    width: 100%;
    accent-color: #a879ff;
}

.player-panel .controls {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 9px;
    margin: 15px 0;
}

.player-panel .controls button {
    width: 43px;
    height: 43px;
    min-width: 43px;
    padding: 0;
    border-radius: 50%;
    margin: 0;
}

.player-panel .controls #panelPlay {
    width: 54px;
    height: 54px;
}

@media (max-width: 360px) {
    .home-welcome {
        padding: 16px;
    }

    .shortcut {
        padding: 13px 9px;
    }
}
`;

document.head.appendChild(design);


/* APP STRUCTURE */

app.innerHTML = `
    <main id="screenContent"></main>

    <div class="mini-player">
        <div class="mini-song-info" id="miniSongInfo">
            <strong id="miniTitle">No Song Playing</strong>
            <small id="miniSubtitle">Choose your music</small>
        </div>
        <button id="miniPlay">▶</button>
        <button id="miniNext">⏭</button>
    </div>

    <section class="player-panel" id="playerPanel">
        <h3 id="panelTitle">No Song Playing</h3>

        <input type="range" id="progress"
            min="0" max="100" value="0">

        <div style="display:flex;justify-content:space-between;color:#aaaab5;font-size:11px;">
            <span id="currentTime">0:00</span>
            <span id="duration">0:00</span>
        </div>

        <div class="controls">
            <button id="shuffleBtn">🔀</button>
            <button id="prevBtn">⏮</button>
            <button id="panelPlay">▶</button>
            <button id="nextBtn">⏭</button>
            <button id="repeatBtn">🔁</button>
        </div>

        <button id="likeBtn">☆ Add to Favorites</button>

        <p style="margin-top:12px;">🔊 Volume</p>
        <input type="range" id="volumeControl"
            min="0" max="100" value="80">
    </section>

    <audio id="audioPlayer"></audio>
`;

const screenContent = document.getElementById("screenContent");
const audio = document.getElementById("audioPlayer");

const miniTitle = document.getElementById("miniTitle");
const miniSubtitle = document.getElementById("miniSubtitle");
const miniPlay = document.getElementById("miniPlay");
const miniNext = document.getElementById("miniNext");

const playerPanel = document.getElementById("playerPanel");
const panelTitle = document.getElementById("panelTitle");

const panelPlay = document.getElementById("panelPlay");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const likeBtn = document.getElementById("likeBtn");

const shuffleBtn = document.getElementById("shuffleBtn");
const repeatBtn = document.getElementById("repeatBtn");

const progress = document.getElementById("progress");
const currentTime = document.getElementById("currentTime");
const duration = document.getElementById("duration");
const volumeControl = document.getElementById("volumeControl");


/* DATABASE - KEEP OLD DATA */

let db;


function openDatabase() {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open("MindFreshMusicDB", 2);

        request.onupgradeneeded = (event) => {
            const database = event.target.result;

            if (!database.objectStoreNames.contains("songs")) {
                database.createObjectStore("songs", {
                    keyPath: "id",
                    autoIncrement: true
                });
            }
        };

        request.onsuccess = () => {
            db = request.result;
            resolve(db);
        };

        request.onerror = () => {
            reject(request.error);
        };
    });
}

function saveSong(song) {
    return new Promise((resolve, reject) => {
        const transaction = db.transaction("songs", "readwrite");

        transaction.objectStore("songs").add(song);

        transaction.oncomplete = () => resolve();
        transaction.onerror = () => reject(transaction.error);
    });
}

function updateSong(song) {
    return new Promise((resolve, reject) => {
        const transaction = db.transaction("songs", "readwrite");

        transaction.objectStore("songs").put(song);

        transaction.oncomplete = () => resolve();
        transaction.onerror = () => reject(transaction.error);
    });
}


/* APP DATA */

let songs = [];
let currentSong = -1;
let currentScreen = "home";
let shuffle = false;
let repeat = false;
let currentURL = null;


/* NAVIGATION ELEMENTS */

const libraryNav = document.getElementById("libraryNav");
const favoritesNav = document.getElementById("favoritesNav");
const homeNav = document.getElementById("homeNav");
const youtubeNav = document.getElementById("youtubeNav");
const settingsNav = document.getElementById("settingsNav");

function updateNavigation() {
    document.querySelectorAll(".bottom-nav button").forEach(button => {
        button.classList.remove("active");
    });

    const activeButtons = {
        home: homeNav,
        library: libraryNav,
        favorites: favoritesNav,
        youtube: youtubeNav,
        settings: settingsNav
    };

    if (activeButtons[currentScreen]) {
        activeButtons[currentScreen].classList.add("active");
    }
}


/* HOME SCREEN */

function showHome() {
    currentScreen = "home";

    screenContent.innerHTML = `
        <div class="screen">

            <h1 style="color:#bb86fc;margin-top:8px;">
                Mind fresh Music
            </h1>

            <p class="screen-subtitle">
                Your music. Your mood.
            </p>

            <div class="home-welcome">
                <h2>Welcome Back!</h2>
                <p>Make every moment musical.</p>
            </div>

            <h2 style="font-size:17px;">Quick Access</h2>

            <div class="home-shortcuts">

                <button class="shortcut" id="homeLibrary">
                    <span>▤</span>
                    My Library
                    <small>All your songs</small>
                </button>

                <button class="shortcut" id="homeFavorites">
                    <span>♡</span>
                    Favorites
                    <small>Your liked songs</small>
                </button>

            </div>

            <div class="home-stats">

                <div class="stat-card">
                    <strong id="totalSongs">0</strong>
                    <small>Total Songs</small>
                </div>

                <div class="stat-card">
                    <strong id="totalFavorites">0</strong>
                    <small>Favorites</small>
                </div>

            </div>

        </div>
    `;

    document.getElementById("homeLibrary").onclick = showLibrary;
    document.getElementById("homeFavorites").onclick = showFavorites;

    document.getElementById("totalSongs").textContent = songs.length;

    document.getElementById("totalFavorites").textContent =
        songs.filter(song => song.favorite).length;

    updateNavigation();
}


/* LIBRARY SCREEN */

function showLibrary() {
    currentScreen = "library";

    screenContent.innerHTML = `
        <div class="screen">

            <h1 class="screen-title">My Library</h1>

            <p class="screen-subtitle">
                All your music in one place.
            </p>

            <label for="songInput" class="add-song-button">
                + Add Songs from Phone
            </label>

            <input type="file" id="songInput"
                accept="audio/*" multiple hidden>

            <input type="search" id="librarySearch"
                class="screen-search"
                placeholder="Search songs...">

            <h2 style="font-size:18px;">All Songs</h2>

            <div id="librarySongList"></div>

        </div>
    `;

    document.getElementById("songInput").addEventListener(
        "change", addSelectedSongs
    );

    document.getElementById("librarySearch").addEventListener(
        "input", renderLibrarySongs
    );

    renderLibrarySongs();
    updateNavigation();
}

async function addSelectedSongs(event) {
    const files = Array.from(event.target.files);

    try {
        for (const file of files) {
            const duplicate = songs.some(song =>
                song.name === file.name &&
                song.file.size === file.size &&
                song.file.lastModified === file.lastModified
            );

            if (!duplicate) {
                await saveSong({
                    name: file.name,
                    file: file,
                    favorite: false
                });
            }
        }

        await loadSongs();
        showLibrary();

    } catch (error) {
        alert("Could not save songs. Please try again.");
    }
}

function renderLibrarySongs() {
    const list = document.getElementById("librarySongList");

    if (!list) return;

    list.innerHTML = "";

    const search = document.getElementById("librarySearch")
        .value.toLowerCase();

    const filtered = songs
        .map((song, index) => ({ song, index }))
        .filter(item =>
            item.song.name.toLowerCase().includes(search)
        );

    if (!filtered.length) {
        list.innerHTML = `
            <div class="empty-message">
                No songs found.<br>
                Add songs from your phone.
            </div>
        `;
        return;
    }

    filtered.forEach(item => {
        createSongRow(list, item.song, item.index);
    });
}


/* FAVORITES SCREEN */

function showFavorites() {
    currentScreen = "favorites";

    screenContent.innerHTML = `
        <div class="screen">

            <h1 class="screen-title">My Favorites</h1>

            <p class="screen-subtitle">
                Your favourite music.
            </p>

            <div id="favoriteSongList"></div>

        </div>
    `;

    renderFavoriteSongs();
    updateNavigation();
}

function renderFavoriteSongs() {
    const list = document.getElementById("favoriteSongList");

    if (!list) return;

    list.innerHTML = "";

    const favorites = songs
        .map((song, index) => ({ song, index }))
        .filter(item => item.song.favorite);

    if (!favorites.length) {
        list.innerHTML = `
            <div class="empty-message">
                No favorite songs yet.<br>
                Add songs using the ☆ button.
            </div>
        `;
        return;
    }

    favorites.forEach(item => {
        createSongRow(list, item.song, item.index);
    });
}


/* SONG ROW */

function createSongRow(container, song, index) {
    const row = document.createElement("div");
    row.className = "song-row";

    const name = document.createElement("span");
    name.className = "song-name";
    name.textContent = "🎵 " + song.name;

    name.onclick = () => playSong(index);

    const favorite = document.createElement("button");

    favorite.textContent = song.favorite ? "⭐" : "☆";

    favorite.onclick = async () => {
        song.favorite = !song.favorite;

        await updateSong(song);

        if (currentScreen === "favorites") {
            renderFavoriteSongs();
        } else {
            renderLibrarySongs();
        }

        updateHomeStats();
        updateLikeButton();
    };

    row.append(name, favorite);
    container.appendChild(row);
}


/* HOME COUNTERS */

function updateHomeStats() {
    const total = document.getElementById("totalSongs");
    const favorites = document.getElementById("totalFavorites");

    if (total) total.textContent = songs.length;

    if (favorites) {
        favorites.textContent =
            songs.filter(song => song.favorite).length;
    }
}


/* YOUTUBE SCREEN */

function showYouTube() {
    currentScreen = "youtube";

    screenContent.innerHTML = `
        <div class="screen">

            <h1 class="screen-title">YouTube Search</h1>

            <p class="screen-subtitle">
                Find music on YouTube.
            </p>

            <input type="search"
                id="youtubeSearch"
                class="screen-search"
                placeholder="Search music...">

            <button id="youtubeSearchBtn" style="width:100%;">
                Search YouTube
            </button>

        </div>
    `;

    document.getElementById("youtubeSearchBtn").onclick = () => {
        const query = document.getElementById("youtubeSearch")
            .value.trim();

        if (!query) {
            alert("Please enter a song name.");
            return;
        }

        window.open(
            "https://www.youtube.com/results?search_query=" +
            encodeURIComponent(query),
            "_blank"
        );
    };

    updateNavigation();
}


/* SETTINGS SCREEN */

function showSettings() {
    currentScreen = "settings";

    screenContent.innerHTML = `
        <div class="screen">

            <h1 class="screen-title">Settings</h1>

            <p class="screen-subtitle">
                Manage your app information.
            </p>

            <div class="setting-card">
                <h3>Music Permission</h3>
                <p>
                    Add Songs from the Library to select music
                    from your phone.
                </p>
            </div>

            <div class="setting-card">
                <h3>Account</h3>
                <p>
                    Google Login and account management
                    will be added in a future Android version.
                </p>
            </div>

            <div class="setting-card">
                <h3>App Information</h3>
                <p>
                    Mind fresh Music<br>
                    Version 1.0<br>
                    Premium Dark Edition
                </p>
            </div>

        </div>
    `;

    updateNavigation();
}


/* NAVIGATION EVENTS */

homeNav.addEventListener("click", showHome);
libraryNav.addEventListener("click", showLibrary);
favoritesNav.addEventListener("click", showFavorites);
youtubeNav.addEventListener("click", showYouTube);
settingsNav.addEventListener("click", showSettings);


/* AUDIO PLAYER */

function playSong(index) {
    if (index < 0 || index >= songs.length) return;

    currentSong = index;

    if (currentURL) {
        URL.revokeObjectURL(currentURL);
    }

    const song = songs[index];

    currentURL = URL.createObjectURL(song.file);
    audio.src = currentURL;

    miniTitle.textContent = song.name;
    miniSubtitle.textContent = "Local Music";
    panelTitle.textContent = song.name;

    audio.currentTime = 0;

    audio.play().catch(() => {
        miniPlay.textContent = "▶";
        panelPlay.textContent = "▶";
    });

    updateLikeButton();
}


/* PLAY / PAUSE */

function togglePlayback() {
    if (currentSong < 0) return;

    if (audio.paused) {
        audio.play().catch(() => {});
    } else {
        audio.pause();
    }
}

miniPlay.addEventListener("click", togglePlayback);
panelPlay.addEventListener("click", togglePlayback);

audio.addEventListener("play", () => {
    miniPlay.textContent = "Ⅱ";
    panelPlay.textContent = "Ⅱ";
});

audio.addEventListener("pause", () => {
    miniPlay.textContent = "▶";
    panelPlay.textContent = "▶";
});


/* PLAYER PANEL */

document.getElementById("miniSongInfo").onclick = () => {
    playerPanel.classList.toggle("open");
};


/* NEXT AND PREVIOUS */

function nextSong() {
    if (!songs.length) return;

    let next;

    if (shuffle && songs.length > 1) {
        do {
            next = Math.floor(Math.random() * songs.length);
        } while (next === currentSong);
    } else {
        next = (currentSong + 1) % songs.length;
    }

    playSong(next);
}

function previousSong() {
    if (!songs.length) return;

    playSong((currentSong - 1 + songs.length) % songs.length);
}

nextBtn.addEventListener("click", nextSong);
miniNext.addEventListener("click", nextSong);
prevBtn.addEventListener("click", previousSong);


/* FAVORITE PLAYER BUTTON */

function updateLikeButton() {
    if (currentSong < 0) return;

    likeBtn.textContent = songs[currentSong].favorite
        ? "⭐ Remove from Favorites"
        : "☆ Add to Favorites";
}

likeBtn.addEventListener("click", async () => {
    if (currentSong < 0) return;

    songs[currentSong].favorite =
        !songs[currentSong].favorite;

    await updateSong(songs[currentSong]);

    updateLikeButton();

    if (currentScreen === "favorites") {
        renderFavoriteSongs();
    }

    if (currentScreen === "library") {
        renderLibrarySongs();
    }

    updateHomeStats();
});


/* SHUFFLE AND REPEAT */

shuffleBtn.addEventListener("click", () => {
    shuffle = !shuffle;
    shuffleBtn.style.background = shuffle ? "#5b3b91" : "";
});

repeatBtn.addEventListener("click", () => {
    repeat = !repeat;
    repeatBtn.style.background = repeat ? "#5b3b91" : "";
});


/* PROGRESS */

function formatTime(seconds) {
    if (!Number.isFinite(seconds)) return "0:00";

    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);

    return minutes + ":" + String(secs).padStart(2, "0");
}

audio.addEventListener("timeupdate", () => {
    if (!audio.duration) return;

    progress.value =
        (audio.currentTime / audio.duration) * 100;

    currentTime.textContent = formatTime(audio.currentTime);
    duration.textContent = formatTime(audio.duration);
});

audio.addEventListener("loadedmetadata", () => {
    duration.textContent = formatTime(audio.duration);
});

progress.addEventListener("input", () => {
    if (audio.duration) {
        audio.currentTime =
            (progress.value / 100) * audio.duration;
    }
});


/* AUTO NEXT */

audio.addEventListener("ended", () => {
    if (repeat) {
        audio.currentTime = 0;
        audio.play();
    } else {
        nextSong();
    }
});


/* VOLUME */

audio.volume = 0.8;

volumeControl.addEventListener("input", function () {
    audio.volume = Number(this.value) / 100;
});


/* LOAD SONGS */

async function loadSongs() {
    songs = await getAllSongs();
}


/* START */

openDatabase()
    .then(async () => {
        await loadSongs();
        showHome();
    })
    .catch(error => {
        console.error(error);
        screenContent.innerHTML =
            "<p>Music storage could not start.</p>";
    });
