import express from "express";
import { changePassword, editProfile, userDetail } from "../controllers/userController";
import router from "../router";

const userRouter = express.Router();

userRouter.get(router.userDetail(), userDetail); //userDetail에 id를 받아오는 로직을 걸어놓은 함수가 되었기 때문에 ()를 붙인다.
userRouter.get(router.changePassword, changePassword);
userRouter.get(router.editProfile, editProfile);

export default userRouter;