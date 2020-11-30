import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import cookie from "cookie-parser";
import bodyParser from "body-parser";
import router from "./router";
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import { localsMiddleware } from "./middleWares";

const app = express();

//Module
app.use(helmet());
//Set View Engine.
app.set("view engine", "pug"); // set view engine
app.use(cookie());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));
app.use(morgan("dev"));

//MiddleWare - 위치 지정을 잘 해야함.
app.use(localsMiddleware);

//Router
app.use(router.home, globalRouter);
app.use(router.videos, videoRouter);
app.use(router.users, userRouter);

//export
export default app;