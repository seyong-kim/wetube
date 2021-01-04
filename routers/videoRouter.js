import express from "express";
import { deleteVideo, editVideo, getUpload, postUpload, videoDetail } from "../controllers/videoController";
import router from "../router";
import { uploadVideo } from "../middlewares";

const videoRouter = express.Router();

videoRouter.get(router.deleteVideo, deleteVideo);
videoRouter.get(router.editVideo(), editVideo);

videoRouter.get(router.upload, getUpload);
videoRouter.post(router.upload, uploadVideo, postUpload);

videoRouter.get(router.videoDetail(), videoDetail);

export default videoRouter;