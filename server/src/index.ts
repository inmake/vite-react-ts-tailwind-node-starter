import "dotenv/config";
import express, { json } from "express";
import cors from "cors";
import testRouter from "./routes/test";

const app = express();
const port = process.env.PORT || 3000;

app.use(json());
app.use(cors());

app.get("/", (_req, res) => {
  res.json({ ok: 1 });
});

app.use("/test", testRouter);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
