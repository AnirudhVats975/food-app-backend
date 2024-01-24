import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import morgan from "morgan";
import connectDB from "./src/config/db.js";
dotenv.config({ path: "./.env" });


const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
const PORT = process.env.PORT || 8000;

// db connection 
connectDB()

app.get("/", (req, res) => {
  return res.status(200).send("<h1>test api i working</h1>");
});

app.listen(PORT, () => {
  console.log(`server is running at ${PORT}`);
});
