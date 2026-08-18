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
            <title>404 - SNS REQUIEM</title>
            <style>
                body {
                    background: #000;
                    color: #fff;
                    font-family: monospace;
                    text-align: center;
                    padding-top: 20vh;
                }
            </style>
        </head>
        <body>
            <h1>404</h1>
            <p>PAGE NOT FOUND.</p>
            <a href="/">RETURN</a>
        </body>
        </html>
    `);
});

app.listen(PORT, () => {
    console.log(`SNS REQUIEM is running at http://localhost:${PORT}`);
});