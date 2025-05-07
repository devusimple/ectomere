import express from "express";

const app = express();
app.get("/", (req, res) => {
  res.send("Hello from ectomere server!");
});

app.listen(3000, () => {
  console.info("ectomere server running!");
});
