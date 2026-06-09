import { readFile } from "node:fs/promises";
import { Router } from "express";

const router = Router();

router.get("/test", async (req, res) => {
  try {
    const data = await readFile("./public/html/test.html", "utf8");
    res.send(data);
  } catch {
    res.status(500).send("sorry, out of order");
  }
});

export default router;
