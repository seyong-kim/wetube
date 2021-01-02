import app from "./app";
import dotenv from "dotenv";
import db from "./db"
import "./models/Video";
import "./models/Comment";

dotenv.config();

const PORT = process.env.PORT;
const handleListtening = () => console.log(`localhost on : http//localhost:${PORT}`);

app.listen(PORT, handleListtening);