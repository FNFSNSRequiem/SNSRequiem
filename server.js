const express = require("express");
const path = require("path");

const app = express();

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || "127.0.0.1";

// Trust Nginx as the reverse proxy
app.set("trust proxy", 1);

// Serve everything inside /public
app.use(express.static(path.join(__dirname, "public")));

// Homepage
app.get("/", (req, res) => {
    res.sendFile(
        path.join(__dirname, "public", "index.html")
    );
});

// 404
app.use((req, res) => {
    res.status(404).send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
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
                    font-family: Georgia, "Times New Roman", serif;
                    font-size: 80px;
                    margin-bottom: 10px;
                }

                p {
                    font-size: 22px;
                }

                a {
                    display: inline-block;
                    margin-top: 25px;
                    padding: 12px 25px;

                    background: #171717;
                    color: #e5dfc9;

                    text-decoration: none;
                }

                a:hover {
                    background: #333;
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

// Start server
app.listen(PORT, HOST, () => {
    console.log(
        `SNS: REQUIEM running at http://${HOST}:${PORT}`
    );
});