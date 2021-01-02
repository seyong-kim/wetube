import router from "./router";
import multer from "multer";

const multerVideo = multer({dest : "videos/"});

export const localsMiddleware = (req,res,next) => { // local MiddleWare안에 선언한 전역 변수는 템플릿, View에 변수명처럼 존재하게 된다.
    res.locals.siteName = "WeTube";

    res.locals.router = router; //View에서 사용하기 위함.

    res.locals.user = {
        isAuthenticated : false,
        id : 1
    }
    
    next();
}

export const uploadVideo = multerVideo.single("videoFile");
