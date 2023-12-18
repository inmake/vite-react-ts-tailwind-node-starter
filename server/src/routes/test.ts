import { Router } from "express";

const router = Router();

router.get("/", (_req, res) => {
  res.json({ ok: 1 });
});

const testRouter = router;

export default testRouter;
