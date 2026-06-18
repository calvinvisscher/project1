import express from "express";
import { readFile } from "node:fs/promises";

const app = express();

// We allow express to serve static files so we can use for example /style.css in our html files
app.use(express.static("static"));

app.get("/", async (req, res) => {
    const data = await readFile("./server.html", "utf8");
    res.send(data);
});

app.get("/student-wrapped", async (req, res) => {
    const data = await readFile("./student wrapped/index.html", "utf8");
    res.send(data);
});

app.listen(process.env.PORT, "0.0.0.0", () => {
    console.log(`Server running on port: ${CONFIG.PORT}`);
});
