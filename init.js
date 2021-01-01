import app from "./app";
import dotenv from "dotenv";

const PORT = dotenv.config("PORT");
const handleListtening = () => console.log(`localhost on : http//localhost:${PORT}` );

app.listen(PORT, handleListtening);