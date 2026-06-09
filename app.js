import express from "express";
import "dotenv/config";
import mysql from "mysql2";

// Routes
import indexRouter from "./routes/index.js";
import testRouter from "./routes/test.js";
import gameRouter from "./routes/game.js";

const PORT = process.env.PORT;

// We initialise the app
const app = express();
app.use(express.json()); // We use JSON in request body
app.use(express.static("public")); // We serve static files from the public folder

app.use(indexRouter);
app.use(testRouter);
app.use(gameRouter);

const database = mysql
	.createPool({
		host: "localhost", // The server name
		user: "root",
		password: "root",
		database: "space_miner",
		waitForConnections: true,
		connectionLimit: 10,
		queueLimit: 0,
	})
	.promise();

database
	.getConnection()
	.then(() => console.log("Database connected"))
	.catch((err) => console.error("Database connection failed:", err));

app.listen(PORT, () => {
	console.log(`App is running on http://localhost:${PORT}`);
});
