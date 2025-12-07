import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import "./config/db.js";
import askRoutes from "./routes/askRoutes.js"
const app = express();
const port = process.env.port || 8000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("welcome to backend");
});

app.use("/api/v1", askRoutes);

app.listen(port, () => {
  console.log(`Listening at port ${port}`);
});
