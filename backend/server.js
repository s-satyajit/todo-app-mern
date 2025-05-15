import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import routes from "./routes.js";

const app = express();
app.use(express.json());
app.use(cors());
app.use(routes);
dotenv.config()

const PORT = process.env.PORT

const initialize = async () => {
    try {
        await mongoose.connect(process.env.DB_URI)
        console.log(`DB connected successfully!`)
    } catch (error) {
        console.error(`Error connected DB, ${error.message}`)
    }
}

initialize()

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
