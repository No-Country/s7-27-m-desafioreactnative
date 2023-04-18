import { Router } from "express";
import { estaLogueado } from "../config/authMiddlewares";
import {
  modificarDineroUsuario,
  mostrarDatosUsuario,
} from "../controllers/userControllers";

const userRouter = Router();

userRouter
  .route("/")
  .get(estaLogueado, mostrarDatosUsuario)
  .post(estaLogueado, modificarDineroUsuario);

export default userRouter;
