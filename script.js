
/* =========================================
   MIND FRESH MUSIC
   LUXURY PREMIUM MUSIC PLAYER
   BLACK + PURPLE + GOLD
   Complete script.js
========================================= */

"use strict";

const app = document.getElementById("app");

if (!app) {
    throw new Error('Mind fresh Music: "#app" not found.');
}

/* PREMIUM DESIGN */

const design = document.createElement("style");

design.textContent = `
body {
    padding: 18px 16px 155px !important;
}

#app { width: 100%; }

.screen { animation: fadeIn .25s ease; }

@keyframes fadeIn {
    from { opacity: 0; transform: translateY(7px); }
    to { opacity: 1; transform: translateY(0); }
}

/* FLOATING MINI PLAYER */

.mini-player {
    position: fixed;
    bottom: 76px;
    left: 10px;
    width: calc(100% - 20px);
    height: 68px;
    background: linear-gradient(110deg,#281b38,#15111f) !important;
    border: 1px solid #76519c !important;
    border-radius: 17px !important;
    display: flex;
    align-items: center;
    gap: 11px;
    padding: 8px 12px;
    z-index: 999;
    box-shadow: 0 5px 25px #00000080;
    box-sizing: border-box;
    backdrop-filter: blur(15px);
}

.mini-cover {
    width: 48px;
    height: 48px;
    min-width: 48px;
    border-radius: 12px;
    background: linear-gradient(135deg,#7043a9,#e8c477);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 25px;
    box-shadow: 0 3px 14px #a879ff55;
    overflow: hidden;
}

.mini-cover.playing {
    animation: coverGlow 2s infinite alternate;
}

@keyframes coverGlow {
    from { box-shadow: 0 0 5px #a879ff55; }
    to { box-shadow: 0 0 17px #e8c47799; }
}

.mini-song-info {
    flex: 1;
    min-width: 0;
    cursor: pointer;
}

.mini-song-info strong {
    display: block;
    color: #ffe4a6 !important;
    font-size: 13px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.mini-song-info small {
    display: block;
    color: #aaa2b7 !important;
    font-size: 10px;
    margin-top: 4px;
}

.mini-player button {
    min-width: 38px;
    min-height: 38px;
    border-radius: 50% !important;
    padding: 8px;
    margin: 0;
}

/* FULL PLAYER */

/* HALF SCREEN PREMIUM PLAYER */

.player-panel {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    top: auto;
    width: 100%;
    height: 60vh;
    height: 60dvh;
    max-height: 620px;
    min-height: 400px;
    padding: 15px 20px 25px;
    box-sizing: border-box;

    background:
        radial-gradient(ellipse at top,#44275f 0%,transparent 50%),
        linear-gradient(160deg,#17101f,#08080d 75%);

    z-index: 2000;
    display: none;
    flex-direction: column;
    align-items: center;
    overflow-y: auto;

    border: 1px solid #76519c !important;
    border-bottom: none !important;
    border-radius: 24px 24px 0 0 !important;

    box-shadow: 0 -10px 40px #00000090;
}

.player-panel.open {
    display: flex !important;
    animation: playerOpen .3s ease;
}

@media(max-height:650px) {
    .player-panel {
        height: 75dvh;
        min-height: 350px;
    }
}

@keyframes playerOpen {
    from { opacity: 0; transform: translateY(35px); }
    to { opacity: 1; transform: translateY(0); }
}

.player-top {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
}

.player-top span {
    color: #e8c477;
    font-size: 12px;
    letter-spacing: 2px;
    font-weight: bold;
}

.player-close {
    width: 39px;
    height: 39px;
    border-radius: 50% !important;
    background: #302440 !important;
    border: 1px solid #76519c !important;
    font-size: 20px;
}

.player-art {
    width: min(76vw,310px);
    height: min(76vw,310px);
    min-height: 190px;
    border-radius: 27px;
    margin: 10px auto 26px;
    background:
        radial-gradient(circle at 30% 25%,#d6b0ff55,transparent 30%),
        radial-gradient(circle at 75% 80%,#e8c47766,transparent 35%),
        linear-gradient(145deg,#7444a2,#21132f 60%,#0c0b13);
    border: 1px solid #b78bff;
    box-shadow: 0 15px 45px #00000080,0 0 28px #a879ff35;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
}

.player-art::before {
    content: "";
    position: absolute;
    width: 78%;
    height: 78%;
    border: 1px solid #ffe4a655;
    border-radius: 50%;
    box-shadow: 0 0 25px #e8c47722;
}

.player-art::after {
    content: "";
    position: absolute;
    width: 62%;
    height: 62%;
    border: 1px solid #ffffff25;
    border-radius: 50%;
}

.art-icon {
    font-size: 85px;
    z-index: 1;
    filter: drop-shadow(0 8px 15px #00000080);
}

.player-art.playing .art-icon {
    animation: artFloat 2.5s ease-in-out infinite;
}

@keyframes artFloat {
    0%,100% { transform: translateY(0) scale(1); }
    50% { transform: translateY(-7px) scale(1.04); }
}

.player-song-title {
    width: 100%;
    color: #ffe4a6 !important;
    font-size: 20px;
    text-align: center;
    overflow-wrap: anywhere;
    margin: 0 0 5px;
}

.player-song-subtitle {
    color: #aaa2b7 !important;
    font-size: 12px;
    text-align: center;
    margin-bottom: 17px;
}

/* VISUALIZER */

.visualizer {
    height: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    margin: 3px 0 16px;
}

.visualizer span {
    display: block;
    width: 4px;
    height: 5px;
    border-radius: 5px;
    background: linear-gradient(#ffe4a6,#a879ff);
}

.visualizer.active span {
    animation: soundWave .65s ease-in-out infinite alternate;
}

.visualizer span:nth-child(2n) { animation-delay: .2s; }
.visualizer span:nth-child(3n) { animation-delay: .4s; }
.visualizer span:nth-child(4n) { animation-delay: .1s; }

@keyframes soundWave {
    from { height: 5px; }
    to { height: 26px; }
}

/* PROGRESS */

.player-progress {
    width: 100%;
    margin-top: 5px;
}

.player-progress input {
    width: 100%;
    accent-color: #e8c477;
}

.player-times {
    display: flex;
    justify-content: space-between;
    color: #aaa2b7;
    font-size: 11px;
}

/* PLAYER CONTROLS */

.player-controls {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;
    margin: 22px 0 17px;
}

.player-controls button {
    width: 43px;
    height: 43px;
    min-width: 43px;
    padding: 0;
    border-radius: 50% !important;
    margin: 0;
    background: #302440 !important;
    border: 1px solid #694b83 !important;
    font-size: 16px;
}

.player-controls #panelPlay {
    width: 62px;
    height: 62px;
    min-width: 62px;
    font-size: 24px;
    background: linear-gradient(135deg,#7043a9,#b78bff) !important;
    border: 2px solid #e8c477 !important;
    box-shadow: 0 5px 20px #a879ff66;
}

.player-controls button.selected {
    color: #ffe4a6 !important;
    border-color: #e8c477 !important;
    background: #49345e !important;
}

.player-bottom {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 12px;
}

.player-bottom button {
    background: #211a2d !important;
    border: 1px solid #49345e !important;
    border-radius: 13px !important;
    padding: 12px 15px;
    color: #ffe4a6 !important;
}

.volume-area {
    width: 100%;
    margin-top: 18px;
    color: #aaa2b7;
    font-size: 12px;
}

.volume-area input {
    width: 100%;
    accent-color: #e8c477;
}

/* EXISTING APP DESIGN */

.screen-title {
    color: #e8c477 !important;
    font-size: 25px;
}

.home-welcome {
    background: linear-gradient(135deg,#302044,#17101f) !important;
    border: 1px solid #76519c !important;
    border-radius: 20px !important;
}

.song-row,.setting-card,.stat-card,.shortcut {
    border-color: #49345e !important;
}

.empty-message {
    border: 1px dashed #76519c;
}

@media(max-width:360px) {
    .player-panel { padding: 17px 16px 100px; }
    .player-art { width: 68vw; height: 68vw; }
    .player-controls { gap: 7px; }
    .player-controls button { width: 39px; height: 39px; min-width: 39px; }
    .player-controls #panelPlay { width: 55px; height: 55px; min-width: 55px; }
}
`;

document.head.appendChild(design);


/* APP STRUCTURE */

app.innerHTML = `
    <main id="screenContent"></main>

    <div class="mini-player">
        <div class="mini-cover" id="miniCover">♫</div>

        <div class="mini-song-info" id="miniSongInfo">
            <strong id="miniTitle">No Song Playing</strong>
            <small id="miniSubtitle">Choose your music</small>
        </div>

        <button id="miniPlay" type="button">▶</button>
        <button id="miniNext" type="button">⏭</button>
    </div>

    <section class="player-panel" id="playerPanel">

        <div class="player-top">
            <span>NOW PLAYING</span>
            <button class="player-close" id="closePlayer" type="button">⌄</button>
        </div>

        <div class="player-art" id="playerArt">
            <div class="art-icon">♫</div>
        </div>

        <h2 class="player-song-title" id="panelTitle">No Song Playing</h2>
        <p class="player-song-subtitle" id="panelSubtitle">Mind Fresh Music</p>

        <div class="visualizer" id="visualizer">
            ${Array.from({length:18},()=>"<span></span>").join("")}
        </div>

        <div class="player-progress">
            <input type="range" id="progress" min="0" max="100" value="0">
            <div class="player-times">
                <span id="currentTime">0:00</span>
                <span id="duration">0:00</span>
            </div>
        </div>

        <div class="player-controls">
            <button id="shuffleBtn" type="button">🔀</button>
            <button id="prevBtn" type="button">⏮</button>
            <button id="panelPlay" type="button">▶</button>
            <button id="nextBtn" type="button">⏭</button>
            <button id="repeatBtn" type="button">🔁</button>
        </div>

        <div class="player-bottom">
            <button id="likeBtn" type="button">☆ Favorite</button>
            <span style="color:#aaa2b7;font-size:11px;">MIND FRESH MUSIC</span>
        </div>

        <div class="volume-area">
            🔊 Volume
            <input type="range" id="volumeControl" min="0" max="100" value="80">
        </div>

    </section>

    <audio id="audioPlayer" preload="metadata"></audio>
`;


/* ELEMENTS */

const screenContent = document.getElementById("screenContent");
const audio = document.getElementById("audioPlayer");

const miniTitle = document.getElementById("miniTitle");
const miniSubtitle = document.getElementById("miniSubtitle");
const miniPlay = document.getElementById("miniPlay");
const miniNext = document.getElementById("miniNext");
const miniCover = document.getElementById("miniCover");

const playerPanel = document.getElementById("playerPanel");
const panelTitle = document.getElementById("panelTitle");
const panelSubtitle = document.getElementById("panelSubtitle");
const playerArt = document.getElementById("playerArt");

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
const visualizer = document.getElementById("visualizer");


/* DATABASE - KEEP EXISTING SONGS */

let db;

function openDatabase() {
    return new Promise((resolve,reject) => {
        if (!("indexedDB" in window)) {
            reject(new Error("IndexedDB সমর্থিত নয়।"));
            return;
        }

        const request = indexedDB.open("MindFreshMusicDB",3);

        request.onupgradeneeded = event => {
            const database = event.target.result;

            if (!database.objectStoreNames.contains("songs")) {
                database.createObjectStore("songs",{
                    keyPath:"id",
                    autoIncrement:true
                });
            }
        };

        request.onsuccess = () => {
            db = request.result;
            db.onversionchange = () => db.close();
            resolve(db);
        };

        request.onerror = () => reject(request.error);
        request.onblocked = () => console.warn("Database upgrade blocked.");
    });
}

function getAllSongs() {
    return new Promise((resolve,reject) => {
        try {
            if (!db || !db.objectStoreNames.contains("songs")) {
                reject(new Error("Songs storage পাওয়া যায়নি।"));
                return;
            }

            const tx = db.transaction("songs","readonly");
            const request = tx.objectStore("songs").getAll();

            request.onsuccess = () => resolve(request.result || []);
            request.onerror = () => reject(request.error);
            tx.onabort = () => reject(tx.error);
        } catch(error) {
            reject(error);
        }
    });
}

function saveSong(song) {
    return new Promise((resolve,reject) => {
        try {
            const tx = db.transaction("songs","readwrite");
            tx.objectStore("songs").add(song);
            tx.oncomplete = resolve;
            tx.onerror = () => reject(tx.error);
            tx.onabort = () => reject(tx.error);
        } catch(error) {
            reject(error);
        }
    });
}

function updateSong(song) {
    return new Promise((resolve,reject) => {
        try {
            const tx = db.transaction("songs","readwrite");
            tx.objectStore("songs").put(song);
            tx.oncomplete = resolve;
            tx.onerror = () => reject(tx.error);
            tx.onabort = () => reject(tx.error);
        } catch(error) {
            reject(error);
        }
    });
}


/* APP DATA */

let songs = [];
let currentSong = -1;
let currentScreen = "home";
let shuffle = false;
let repeat = false;
let currentURL = null;


/* NAVIGATION */

const libraryNav = document.getElementById("libraryNav");
const favoritesNav = document.getElementById("favoritesNav");
const homeNav = document.getElementById("homeNav");
const youtubeNav = document.getElementById("youtubeNav");
const settingsNav = document.getElementById("settingsNav");

function updateNavigation() {
    document.querySelectorAll(".bottom-nav button").forEach(button => {
        button.classList.remove("active");
    });

    const active = {
        home:homeNav,
        library:libraryNav,
        favorites:favoritesNav,
        youtube:youtubeNav,
        settings:settingsNav
    };

    if(active[currentScreen]) active[currentScreen].classList.add("active");
}


/* HOME */

function showHome() {
    currentScreen = "home";

    screenContent.innerHTML = `
        <div class="screen">
            <h1 style="color:#e8c477;margin-top:8px;">Mind fresh Music</h1>
            <p class="screen-subtitle">Your music. Your mood.</p>

            <div class="home-welcome">
                <h2>Welcome Back!</h2>
                <p>Make every moment musical.</p>
            </div>

            <h2 style="font-size:17px;">Quick Access</h2>

            <div class="home-shortcuts">
                <button class="shortcut" id="homeLibrary" type="button">
                    <span>▤</span>
                    My Library
                    <small>All your songs</small>
                </button>

                <button class="shortcut" id="homeFavorites" type="button">
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

    updateHomeStats();
    updateNavigation();
}


/* LIBRARY */

function showLibrary() {
    currentScreen = "library";

    screenContent.innerHTML = `
        <div class="screen">
            <h1 class="screen-title">My Library</h1>
            <p class="screen-subtitle">All your music in one place.</p>

            <label for="songInput" class="add-song-button">
                + Add Songs from Phone
            </label>

            <input type="file" id="songInput" accept="audio/*" multiple hidden>

            <input type="search" id="librarySearch"
                class="screen-search" placeholder="Search songs...">

            <h2 style="font-size:18px;">All Songs</h2>
            <div id="librarySongList"></div>
        </div>
    `;

    document.getElementById("songInput").addEventListener("change",addSelectedSongs);
    document.getElementById("librarySearch").addEventListener("input",renderLibrarySongs);

    renderLibrarySongs();
    updateNavigation();
}

function isAudioFile(file) {
    if(!file) return false;
    if(file.type && file.type.toLowerCase().startsWith("audio/")) return true;
    return /\.(mp3|m4a|aac|wav|ogg|oga|opus|flac|wma|aiff|mid|midi)$/i.test(file.name || "");
}

async function addSelectedSongs(event) {
    const input = event && event.target;
    const files = Array.from((input && input.files) || []);

    if(!files.length) return;

    let added = 0;
    let duplicates = 0;
    let unsupported = 0;

    try {
        if(!db) throw new Error("Database প্রস্তুত নয়।");

        await loadSongs();

        for(const file of files) {
            if(!isAudioFile(file)) {
                unsupported++;
                continue;
            }

            const duplicate = songs.some(song =>
                song && song.name === file.name &&
                song.file && song.file.size === file.size &&
                song.file.lastModified === file.lastModified
            );

            if(duplicate) {
                duplicates++;
                continue;
            }

            await saveSong({
                name:file.name,
                file:file,
                favorite:false
            });

            added++;
        }

        await loadSongs();
        showLibrary();

        if(added) alert(added + "টি গান Library-তে যোগ হয়েছে।");
        else if(duplicates && !unsupported) alert("গানগুলো আগে থেকেই Library-তে আছে।");
        else if(unsupported && !duplicates) alert("সমর্থিত Audio file পাওয়া যায়নি।");
        else alert("নতুন গান যোগ হয়নি।");

    } catch(error) {
        console.error(error);
        alert("গান সেভ করা যায়নি: " + (error.message || error));
    } finally {
        if(input) input.value = "";
    }
}

function renderLibrarySongs() {
    const list = document.getElementById("librarySongList");
    const searchInput = document.getElementById("librarySearch");

    if(!list || !searchInput) return;

    list.innerHTML = "";

    const search = searchInput.value.trim().toLowerCase();

    const filtered = songs
        .map((song,index) => ({song,index}))
        .filter(item => item.song &&
            (item.song.name || "").toLowerCase().includes(search)
        );

    if(!filtered.length) {
        list.innerHTML = `<div class="empty-message">No songs found.<br>Add songs from your phone.</div>`;
        return;
    }

    filtered.forEach(item => createSongRow(list,item.song,item.index));
}


/* FAVORITES */

function showFavorites() {
    currentScreen = "favorites";

    screenContent.innerHTML = `
        <div class="screen">
            <h1 class="screen-title">My Favorites</h1>
            <p class="screen-subtitle">Your favourite music.</p>
            <div id="favoriteSongList"></div>
        </div>
    `;

    renderFavoriteSongs();
    updateNavigation();
}

function renderFavoriteSongs() {
    const list = document.getElementById("favoriteSongList");
    if(!list) return;

    list.innerHTML = "";

    const favorites = songs
        .map((song,index) => ({song,index}))
        .filter(item => item.song && item.song.favorite);

    if(!favorites.length) {
        list.innerHTML = `<div class="empty-message">No favorite songs yet.<br>Add songs using the ☆ button.</div>`;
        return;
    }

    favorites.forEach(item => createSongRow(list,item.song,item.index));
}


/* SONG ROW */

function createSongRow(container,song,index) {
    const row = document.createElement("div");
    row.className = "song-row";

    const name = document.createElement("span");
    name.className = "song-name";
    name.textContent = "🎵 " + (song.name || "Unknown song");
    name.onclick = () => playSong(index);

    const favorite = document.createElement("button");
    favorite.type = "button";
    favorite.textContent = song.favorite ? "⭐" : "☆";

    favorite.onclick = async () => {
        const old = !!song.favorite;
        song.favorite = !old;
        favorite.disabled = true;

        try {
            await updateSong(song);
            if(currentScreen === "favorites") renderFavoriteSongs();
            else if(currentScreen === "library") renderLibrarySongs();

            updateHomeStats();
            updateLikeButton();
        } catch(error) {
            song.favorite = old;
            alert("Favorite পরিবর্তন করা যায়নি: " + (error.message || error));
            favorite.disabled = false;
            favorite.textContent = song.favorite ? "⭐" : "☆";
        }
    };

    row.append(name,favorite);
    container.appendChild(row);
}


/* HOME COUNTERS */

function updateHomeStats() {
    const total = document.getElementById("totalSongs");
    const favorites = document.getElementById("totalFavorites");

    if(total) total.textContent = songs.length;

    if(favorites) {
        favorites.textContent = songs.filter(song => song && song.favorite).length;
    }
}


/* YOUTUBE */

function showYouTube() {
    currentScreen = "youtube";

    screenContent.innerHTML = `
        <div class="screen">
            <h1 class="screen-title">YouTube Search</h1>
            <p class="screen-subtitle">Find music on YouTube.</p>

            <input type="search" id="youtubeSearch"
                class="screen-search" placeholder="Search music...">

            <button id="youtubeSearchBtn" type="button" style="width:100%;">
                Search YouTube
            </button>
        </div>
    `;

    document.getElementById("youtubeSearchBtn").onclick = () => {
        const query = document.getElementById("youtubeSearch").value.trim();

        if(!query) {
            alert("Please enter a song name.");
            return;
        }

        window.open(
            "https://www.youtube.com/results?search_query=" + encodeURIComponent(query),
            "_blank"
        );
    };

    updateNavigation();
}


/* SETTINGS */

function showSettings() {
    currentScreen = "settings";

    screenContent.innerHTML = `
        <div class="screen">
            <h1 class="screen-title">Settings</h1>
            <p class="screen-subtitle">Manage your app information.</p>

            <div class="setting-card">
                <h3>Music Permission</h3>
                <p>Add Songs from the Library to select music from your phone.</p>
            </div>

            <div class="setting-card">
                <h3>Account</h3>
                <p>Google Login and account management will be added in a future Android version.</p>
            </div>

            <div class="setting-card">
                <h3>App Information</h3>
                <p>Mind fresh Music<br>Version 1.0<br>Luxury Premium Edition</p>
            </div>
        </div>
    `;

    updateNavigation();
}


/* NAVIGATION EVENTS */

if(homeNav) homeNav.addEventListener("click",showHome);
if(libraryNav) libraryNav.addEventListener("click",showLibrary);
if(favoritesNav) favoritesNav.addEventListener("click",showFavorites);
if(youtubeNav) youtubeNav.addEventListener("click",showYouTube);
if(settingsNav) settingsNav.addEventListener("click",showSettings);


/* PLAYER DISPLAY */

function openPlayer() {
    playerPanel.classList.add("open");
}

function closePlayer() {
    playerPanel.classList.remove("open");
}

document.getElementById("miniSongInfo").onclick = openPlayer;
miniCover.onclick = openPlayer;
document.getElementById("closePlayer").onclick = closePlayer;


/* PLAY SONG */

function playSong(index) {
    if(index < 0 || index >= songs.length) return;

    const song = songs[index];

    if(!song || !song.file) {
        alert("এই গানের Audio file পাওয়া যাচ্ছে না।");
        return;
    }

    currentSong = index;

    if(currentURL) {
        URL.revokeObjectURL(currentURL);
        currentURL = null;
    }

    currentURL = URL.createObjectURL(song.file);
    audio.src = currentURL;

    const name = song.name || "Unknown song";

    miniTitle.textContent = name;
    miniSubtitle.textContent = "Local Music • Now Playing";
    panelTitle.textContent = name;
    panelSubtitle.textContent = "Mind Fresh Music • Local Audio";

    miniCover.textContent = "♫";

    audio.currentTime = 0;
    progress.value = 0;
    currentTime.textContent = "0:00";
    duration.textContent = "0:00";

    updateLikeButton();
    openPlayer();

    audio.play().catch(error => {
        console.warn("Playback did not start:",error);
        miniPlay.textContent = "▶";
        panelPlay.textContent = "▶";
    });
}


/* PLAY / PAUSE */

function togglePlayback() {
    if(currentSong < 0) return;

    if(audio.paused) {
        audio.play().catch(error => console.warn("Playback error:",error));
    } else {
        audio.pause();
    }
}

miniPlay.addEventListener("click",togglePlayback);
panelPlay.addEventListener("click",togglePlayback);

audio.addEventListener("play",() => {
    miniPlay.textContent = "Ⅱ";
    panelPlay.textContent = "Ⅱ";
    miniCover.classList.add("playing");
    playerArt.classList.add("playing");
    visualizer.classList.add("active");
});

audio.addEventListener("pause",() => {
    miniPlay.textContent = "▶";
    panelPlay.textContent = "▶";
    miniCover.classList.remove("playing");
    playerArt.classList.remove("playing");
    visualizer.classList.remove("active");
});


/* NEXT / PREVIOUS */

function nextSong() {
    if(!songs.length) return;

    let next;

    if(shuffle && songs.length > 1) {
        do {
            next = Math.floor(Math.random() * songs.length);
        } while(next === currentSong);
    } else {
        next = (currentSong + 1) % songs.length;
    }

    playSong(next);
}

function previousSong() {
    if(!songs.length) return;
    playSong((currentSong - 1 + songs.length) % songs.length);
}

nextBtn.addEventListener("click",nextSong);
miniNext.addEventListener("click",nextSong);
prevBtn.addEventListener("click",previousSong);


/* FAVORITE PLAYER BUTTON */

function updateLikeButton() {
    if(currentSong < 0 || !songs[currentSong]) {
        likeBtn.textContent = "☆ Favorite";
        return;
    }

    likeBtn.textContent = songs[currentSong].favorite
        ? "⭐ Remove Favorite"
        : "☆ Add to Favorites";
}

likeBtn.addEventListener("click",async () => {
    if(currentSong < 0 || !songs[currentSong]) return;

    const song = songs[currentSong];
    const old = !!song.favorite;

    song.favorite = !old;
    likeBtn.disabled = true;

    try {
        await updateSong(song);
        updateLikeButton();

        if(currentScreen === "favorites") renderFavoriteSongs();
        if(currentScreen === "library") renderLibrarySongs();

        updateHomeStats();
    } catch(error) {
        song.favorite = old;
        alert("Favorite পরিবর্তন করা যায়নি: " + (error.message || error));
    } finally {
        likeBtn.disabled = false;
    }
});


/* SHUFFLE / REPEAT */

shuffleBtn.addEventListener("click",() => {
    shuffle = !shuffle;
    shuffleBtn.classList.toggle("selected",shuffle);
});

repeatBtn.addEventListener("click",() => {
    repeat = !repeat;
    repeatBtn.classList.toggle("selected",repeat);
});


/* TIME */

function formatTime(seconds) {
    if(!Number.isFinite(seconds)) return "0:00";

    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);

    return minutes + ":" + String(secs).padStart(2,"0");
}

audio.addEventListener("timeupdate",() => {
    if(!audio.duration || !Number.isFinite(audio.duration)) return;

    progress.value = (audio.currentTime / audio.duration) * 100;
    currentTime.textContent = formatTime(audio.currentTime);
    duration.textContent = formatTime(audio.duration);
});

audio.addEventListener("loadedmetadata",() => {
    duration.textContent = formatTime(audio.duration);
});

progress.addEventListener("input",() => {
    if(audio.duration && Number.isFinite(audio.duration)) {
        audio.currentTime = (Number(progress.value) / 100) * audio.duration;
    }
});


/* AUTO NEXT */

audio.addEventListener("ended",() => {
    if(repeat) {
        audio.currentTime = 0;
        audio.play().catch(error => console.warn(error));
    } else {
        nextSong();
    }
});


/* VOLUME */

audio.volume = 0.8;

volumeControl.addEventListener("input",function() {
    audio.volume = Number(this.value) / 100;
});


/* LOAD SONGS */

async function loadSongs() {
    const storedSongs = await getAllSongs();
    songs = Array.isArray(storedSongs) ? storedSongs : [];
}


/* START APP */

openDatabase()
    .then(async () => {
        await loadSongs();
        showHome();
    })
    .catch(error => {
        console.error("Mind fresh Music startup error:",error);

        screenContent.innerHTML = `
            <div class="empty-message">
                Music storage could not start.<br>
                ${String(error && error.message ? error.message : error)}
                <br><br>
                Please reload the app and try again.
            </div>
        `;
    });

window.addEventListener("beforeunload",() => {
    if(currentURL) URL.revokeObjectURL(currentURL);
    if(db) db.close();
});
