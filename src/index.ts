import express, { Request, Response } from "express";

const app = express();
app.get("/", (req: Request, res: Response) => {
  res.send("Hello from ectomere server!");
});

app.use("/api/v1", (req: Request, res: Response) => {
  res.json({ message: "Hello from ectomere server!" });
});

app.listen(3000, () => {
  console.info("ectomere server running!");
});
