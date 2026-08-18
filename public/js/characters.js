async function loadCharacters() {

    const container =
        document.querySelector(".character-grid");

    try {

        const response =
            await fetch("/data/characters.json");

        if (!response.ok) {
            throw new Error("Character database unavailable.");
        }

        const characters =
            await response.json();

        container.innerHTML = "";

        characters.forEach(character => {

            const card =
                document.createElement("article");

            card.className = "character-card";

            card.innerHTML = `

                <div class="character-image">

                    <img
                        src="${character.image}"
                        alt="${character.name}"
                        onerror="
                            this.style.display='none';
                            this.parentElement.classList.add('image-missing');
                        "
                    >

                    <div class="image-placeholder">
                        NO PORTRAIT
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

                        ${character.songs.map(song => `
                            <span>${song}</span>
                        `).join("")}

                    </div>

                </div>

            `;

            container.appendChild(card);

        });

    } catch (error) {

        console.error(error);

        container.innerHTML = `
            <div class="empty-message">
                THE CAST COULD NOT BE FOUND.
            </div>
        `;
    }
}

loadCharacters();