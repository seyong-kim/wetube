import app from "./app";

const PORT = "4000";
const handleListtening = () => console.log("localhost on : http//localhost:" + PORT );

app.listen(PORT, handleListtening);