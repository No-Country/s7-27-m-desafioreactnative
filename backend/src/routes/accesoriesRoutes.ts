import { Router } from "express";
import { estaLogueado } from "../config/authMiddlewares";

import { agregarAccesorios } from "../controllers/accesoriesController";

const accesoriesRouter: Router = Router();

accesoriesRouter.route("/").post(estaLogueado, agregarAccesorios);

export default accesoriesRouter;
