// SNS REQUIEM
// Main website JavaScript

console.log("SNS: REQUIEM initialized.");


// Random glitch effect
function glitchTitle() {

    const title = document.querySelector(".hero-glitch");

    if (!title) return;

    const original = title.children[0];

    if (!original) return;

    const glitch1 = title.children[1];
    const glitch2 = title.children[2];

    glitch1.style.opacity = "1";
    glitch2.style.opacity = "1";

    glitch1.style.transform =
        `translate(${Math.random() * 8 - 4}px, ${Math.random() * 4 - 2}px)`;

    glitch2.style.transform =
        `translate(${Math.random() * -8 + 4}px, ${Math.random() * 4 - 2}px)`;

    setTimeout(() => {

        glitch1.style.opacity = "0";
        glitch2.style.opacity = "0";

    }, 100 + Math.random() * 200);
}


// Randomly glitch every few seconds
setInterval(() => {

    if (Math.random() > 0.45) {
        glitchTitle();
    }

}, 2500);


// Console message

console.log(
    "%cSNS: REQUIEM",
    "font-size: 30px; font-weight: bold;"
);

console.log(
    "Something is watching."
);