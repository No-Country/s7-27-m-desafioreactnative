import { Router } from "express";
import { estaLogueado } from "../config/authMiddlewares";

const petRouter = Router();

petRouter.route("/crear").post(estaLogueado);
