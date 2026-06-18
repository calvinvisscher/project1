import express from "express";
import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { CONFIG } from "./src/config.js";
import { initializeSockets } from "./src/socket.js";

const app = express();
const httpServer = createServer(app);

initializeSockets(httpServer);

// We allow express to serve static files so we can use for example /style.css in our html files
app.use(express.static("frontend"));

app.get("/", async (req, res) => {
    const data = await readFile("./frontend/server.html", "utf8");
    res.send(data);
});

app.get("/game", async (req, res) => {
    const data = await readFile("./frontend/game.html", "utf8");
    res.send(data);
});

app.get("/todo", async (req, res) => {
    const data = await readFile("./frontend/todo.html", "utf8");
    res.send(data);
});

httpServer.listen(CONFIG.PORT, CONFIG.HOST, () => {
    console.log(`Server running on port: ${CONFIG.PORT}`);
});
