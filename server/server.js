import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const PORT = 4000;

const app = express();
app.use(cors());

await mongoose
  .connect(
    "mongodb+srv://lokesh23in:V1w6crjTUquIGdxH@tracker.j27zwu4.mongodb.net/?retryWrites=true&w=majority&appName=tracker"
  )
console.log("MongoDB connection is successful")

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.listen(PORT, () => {
  console.log("Running");
});
