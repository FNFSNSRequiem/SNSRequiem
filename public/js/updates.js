async function loadUpdates() {

    const container =
        document.querySelector("#updates");

    try {

        const response =
            await fetch("/data/updates.json");

        if (!response.ok) {
            throw new Error("Updates unavailable.");
        }

        const updates =
            await response.json();

        container.innerHTML = "";

        updates.forEach(update => {

            const article =
                document.createElement("article");

            article.className = "content-box update-card";

            article.innerHTML = `

                <p class="update-date">
                    ${update.date}
                </p>

                <h2>
                    ${update.title}
                </h2>

                <p>
                    ${update.description}
                </p>

            `;

            container.appendChild(article);

        });

    } catch (error) {

        console.error(error);

        container.innerHTML = `
            <div class="empty-message">
                THE PRODUCTION NOTES COULD NOT BE FOUND.
            </div>
        `;
    }
}

loadUpdates();