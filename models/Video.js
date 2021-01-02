import mongoose from "mongoose";

//Schema Shape

const VideoSchema = new mongoose.Schema({
	fileUrl : {
		type : String,
		required : "File Url is required"
	},
	title : {
		type : String,
		required : "Title is required"
	},
	description : String,
	views : {
		type : Number,
		default : 0
	},
	createdAt : {
		type : Date,
		default : Date.now
	}
})

//Model : document of definition
const model = mongoose.model("Video", VideoSchema);

export default model;