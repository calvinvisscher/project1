import { readFile } from "node:fs/promises";
import { Router } from "express";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const data = await readFile("../public/index.html", "utf8");
    res.send(data);
  } catch {
    res.status(500).send("sorry, out of order");
  }
});

export default router;
