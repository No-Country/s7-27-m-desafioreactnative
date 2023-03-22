import { Router } from "express";
import passport from "passport";
import {
  registrarUsuario,
  iniciarSesionLocal,
} from "../controllers/authController.js";

const authRouter = Router();

authRouter.route("/registro").post(registrarUsuario);

authRouter
  .route("/iniciarsesion")
  .post(passport.authenticate("local", { session: true }), iniciarSesionLocal);

export default authRouter;
