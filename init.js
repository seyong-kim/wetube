import app from "./app";

const PORT = "4040";
const handleListtening = () => console.log("localhost on : http//localhost:" + PORT );

app.listen(PORT, handleListtening);