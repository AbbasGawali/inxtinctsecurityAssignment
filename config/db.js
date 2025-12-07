import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
mongoose
  .connect(process.env.MONGOURI, { dbName: "inxtinctSecAssign" })
  .then(() => {
    console.log("Db Connection Success");
  })
  .catch(() => {
    console.log("DB Connection Failed");
  });
