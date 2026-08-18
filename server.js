const HOST = "127.0.0.1";
const PORT = process.env.PORT || 3000;

app.listen(PORT, HOST, () => {
    console.log(`SNS: REQUIEM running at http://${HOST}:${PORT}`);
});