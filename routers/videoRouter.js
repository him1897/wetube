import express from "express";
import routes from "../routes";
import{
    getUpload,
    postUpload,
    videoDetail,
    deleteVideo,
    getEditVideo,
    postEditVideo
} from "../controllers/videoController";
import { uploadVideo } from "../middleware";
import { onlyPrivate} from "../middleware";

const videoRouter = express.Router();

//Video Upload
videoRouter.get(routes.upload,onlyPrivate, getUpload);
videoRouter.post(routes.upload, uploadVideo,onlyPrivate, postUpload);

//Video Detail
videoRouter.get(routes.videoDetail(), videoDetail);

// Edit Video
videoRouter.get(routes.editVideo(),onlyPrivate, getEditVideo);
videoRouter.post(routes.editVideo(),onlyPrivate, postEditVideo);

// Delete Video
videoRouter.get(routes.deleteVideo(),onlyPrivate, deleteVideo);

export default videoRouter;
