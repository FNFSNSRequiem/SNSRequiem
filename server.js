const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Serve everything inside /public
app.use(express.static(path.join(__dirname, "public")));

// Homepage
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

// 404
app.use((req, res) => {
    res.status(404).send(`
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="UTF-8">
            <title>404 - SNS REQUIEM</title>
            <style>
                body {
                    background: #e5dfc9;
                    color: #171717;
                    font-family: Georgia, "Times New Roman", serif;
                    text-align: center;
                    padding-top: 20vh;
                }

                h1 {
                    font-family: Georgia, serif;
                    font-size: 60px;
                }

                a {
                    color: #171717;
                }
            </style>
        </head>
        <body>
            <h1>404</h1>
            <p>THE PICTURE COULD NOT BE FOUND.</p>
            <a href="/">RETURN TO THE THEATER</a>
        </body>
        </html>
    `);
});

// Only expose Node locally.
// Nginx will handle public connections.
app.listen(PORT, "127.0.0.1", () => {
    console.log(`SNS REQUIEM is running on http://127.0.0.1:${PORT}`);
});