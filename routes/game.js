import { readFile } from "node:fs/promises";
import { Router } from "express";

const router = Router();

router.get("/game", (req, res) => {
  res.send("game works");
});

export default router;
