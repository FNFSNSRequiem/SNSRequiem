async function loadSongs() {

    const container =
        document.querySelector(".song-grid");

    try {

        const response =
            await fetch("/data/songs.json");

        if (!response.ok) {
            throw new Error("Song database unavailable.");
        }

        const songs =
            await response.json();

        container.innerHTML = "";

        songs.forEach(song => {

            const card =
                document.createElement("article");

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

    } catch (error) {

        console.error(error);

        container.innerHTML = `
            <div class="empty-message">
                THE SCORE COULD NOT BE FOUND.
            </div>
        `;
    }
}

loadSongs();