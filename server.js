import express from "express";
import "dotenv/config";
// Routes
import indexRouter from "./routes/index.js";
import testRouter from "./routes/test.js";
import gameRouter from "./routes/game.js";

const PORT = process.env.PORT;

// Init server
const server = express();
server.use(express.json()); // We use JSON in request body
server.use(express.static('public')); // We serve static files from the public folder

// Routes
server.use(indexRouter);
server.use(testRouter);
server.use(gameRouter);

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
