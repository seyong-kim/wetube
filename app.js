import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import cookie from "cookie-parser";
import bodyParser from "body-parser";
import router from "./router";
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";

const app = express();

//Module
app.use(helmet());
app.use(cookie());
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

//Router
app.use(router.home, globalRouter);
app.use(router.videos, videoRouter);
app.use(router.users, userRouter);

//export
export default app;