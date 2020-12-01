import express from "express";
import { join, login, logout } from "../controllers/userController";
import { home, search } from "../controllers/videoController";
import router from "../router";

const globalRouter = express.Router();

globalRouter.get(router.join, join);
globalRouter.get(router.login, login);
globalRouter.get(router.logout, logout);
globalRouter.get(router.home, home);
globalRouter.get(router.search, search);

export default globalRouter;