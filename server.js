import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.get("/", (req, res) => {
  res.send("Home Route");
});

const PORT = process.env.PORT || 5001;
const MODE = process.env.MODE || "development";

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT} in ${MODE} mode`);
});
