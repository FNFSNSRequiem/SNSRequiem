// ========================================
// SNS: REQUIEM
// Main Website JavaScript
// ========================================

console.log("SNS: REQUIEM initialized.");


// ========================================
// GLITCH EFFECT
// ========================================

function glitchTitle() {

    const title = document.querySelector(".hero-glitch");

    if (!title) return;

    const glitch1 = title.children[1];
    const glitch2 = title.children[2];

    if (!glitch1 || !glitch2) return;

    glitch1.style.opacity = "1";
    glitch2.style.opacity = "1";

    glitch1.style.transform =
        `translate(${Math.random() * 12 - 6}px, ${Math.random() * 6 - 3}px)`;

    glitch2.style.transform =
        `translate(${Math.random() * -12 + 6}px, ${Math.random() * 6 - 3}px)`;

    setTimeout(() => {

        glitch1.style.opacity = "0";
        glitch2.style.opacity = "0";

        glitch1.style.transform = "";
        glitch2.style.transform = "";

    }, 80 + Math.random() * 180);
}


setInterval(() => {

    if (Math.random() > 0.45) {
        glitchTitle();
    }

}, 2500);


// ========================================
// LOAD JSON
// ========================================

async function loadData(file) {

    try {

        const response = await fetch(file);

        if (!response.ok) {
            throw new Error(`Failed to load ${file}`);
        }

        return await response.json();

    } catch (error) {

        console.error(error);

        return [];

    }
}


// ========================================
// CHARACTER SYSTEM
// ========================================

async function loadCharacters() {

    const container = document.querySelector(".character-grid");

    if (!container) return;

    const characters =
        await loadData("/data/characters.json");

    container.innerHTML = "";

    if (characters.length === 0) {

        container.innerHTML = `
            <div class="empty-message">
                CHARACTER DATABASE EMPTY.
            </div>
        `;

        return;
    }

    characters.forEach(character => {

        const card = document.createElement("article");

        card.className = "character-card";

        card.innerHTML = `

            <div class="character-image">

                <img
                    src="${character.image}"
                    alt="${character.name}"
                    onerror="this.style.display='none'; this.parentElement.classList.add('image-missing');"
                >

                <div class="image-placeholder">
                    NO IMAGE
                </div>

                <span class="character-status">
                    ${character.status}
                </span>

            </div>

            <div class="character-info">

                <span class="character-role">
                    ${character.role}
                </span>

                <h3>
                    ${character.name}
                </h3>

                <p>
                    ${character.description}
                </p>

                <div class="character-songs">
                    ${character.songs.map(song =>
                        `<span>${song}</span>`
                    ).join("")}
                </div>

            </div>
        `;

        container.appendChild(card);

    });
}


// ========================================
// SONG SYSTEM
// ========================================

async function loadSongs() {

    const container = document.querySelector(".song-grid");

    if (!container) return;

    const songs =
        await loadData("/data/songs.json");

    container.innerHTML = "";

    if (songs.length === 0) {

        container.innerHTML = `
            <div class="empty-message">
                SONG DATABASE EMPTY.
            </div>
        `;

        return;
    }

    songs.forEach(song => {

        const card = document.createElement("article");

        card.className = "song-card";

        card.innerHTML = `

            <div class="song-header">

                <span class="song-number">
                    ${song.number}
                </span>

                <span class="song-status">
                    ${song.status}
                </span>

            </div>

            <h3>
                ${song.name}
            </h3>

            <p>
                ${song.description}
            </p>

            <div class="song-details">

                <span>
                    OPPONENT:
                    <strong>${song.opponent}</strong>
                </span>

                <span>
                    DIFFICULTY:
                    <strong>${song.difficulty}</strong>
                </span>

            </div>

        `;

        container.appendChild(card);

    });
}


// ========================================
// INITIALIZE
// ========================================

async function initializeWebsite() {

    await Promise.all([
        loadCharacters(),
        loadSongs()
    ]);

    console.log("Character database loaded.");
    console.log("Song database loaded.");

}

initializeWebsite();


// ========================================
// CONSOLE MESSAGE
// ========================================

console.log(
    "%cSNS: REQUIEM",
    "font-size: 30px; font-weight: bold;"
);

console.log(
    "Something is watching."
);