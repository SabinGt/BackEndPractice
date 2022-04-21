import verifySignUp from '../middlewares/verifySignUp.js'
import express from 'express'
import authController from '../controllers/auth.controller.js';
const authRoute = express.Router();


authRoute.post("/signup",[verifySignUp.usernameAndEmailChecker,verifySignUp.checkRolesExisted],authController.signUp)
authRoute.post("/signin",authController.signIn)
export default authRoute