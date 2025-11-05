const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();
const PORT = 8888;

const DATA_FILE = path.join(__dirname, "data/clicks.json");

app.use(express.json());
app.use(express.static(__dirname));

if (!fs.existsSync(DATA_FILE)) {
    fs.writeFileSync(DATA_FILE, JSON.stringify([]));
}

app.get("/api/clicks", (req, res) => {
    const data = JSON.parse(fs.readFileSync(DATA_FILE));
    res.json(data);
});

app.post("/api/clicks", (req, res) => {
    const data = JSON.parse(fs.readFileSync(DATA_FILE));
    data.push(req.body);
    fs.writeFileSync(DATA_FILE, JSON.stringify(data));
    res.sendStatus(200);
});

app.listen(PORT, () => console.log(`Server running on ${PORT}`));
