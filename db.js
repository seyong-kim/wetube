import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

mongoose.connect(
	process.env.MONGO_URL,
	{
		useNewUrlParser : true,
		useFindAndModify : false,
		useUnifiedTopology: true
	}
);

const db = mongoose.connection;

const handleOpen = () => console.log("Connected to DB");
const handleError = () => console.log("Error on DB Connection");

db.once("open", handleOpen); // open 시 한번 실행함.
db.on("error", handleError); // error 발생시마다 실행함.