import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRouter from "./routes/userRoute.js";
import toruRouter from "./routes/tourRoute.js";

dotenv.config();

const PORT = process.env.PORT || 3000;
const MONGO_URL = process.env.MONGO_URL;

const app = express();
app.use(express.json());
app.use(cors());

app.use("/user", userRouter);
app.use("/tour", toruRouter);

app.listen(PORT, () => {
  console.log("სერვერი დაისტარტა");
  mongoose
    .connect(MONGO_URL)
    .then(() => console.log("ბაზასთან კავშირი წარმატებულია"))
    .catch((err) => {
      console.log("ბაზასთან კავშირი წარუმატებელია" + err.message);
    });
});
