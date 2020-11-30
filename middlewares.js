import router from "./router";

export const localsMiddleware = (req,res,next) => { // local MiddleWare안에 선언한 변수는 템플릿, View에 변수명처럼 존재하게 된다.
    res.locals.siteName = "WeTube";
    res.locals.router = router;
    next();
}