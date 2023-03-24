import { Router } from "express";
import passport from "passport"; 
import {
  registrarUsuario,
  inicioSesionLocal,
} from "../controllers/authController";

const authRouter: Router = Router();

authRouter.route("/registro").post(registrarUsuario);

authRouter.route("/iniciarsesion").post(
  passport.authenticate("local", { session: true }),
  inicioSesionLocal
);

export default authRouter;