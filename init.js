import app from "./app";

const PORT = "8080";
const handleListtening = () => console.log("localhost on : http//localhost:" + PORT );

app.listen(PORT, handleListtening);