import { Router } from "express";
import {
  adoptarMascota,
  mostrarMisMascotas,
  liberarMascota,
  mostrarDetallesMascota,
  actualizarAccesoriosGanados,
  actualizarAccesoriosEnUso,
  actualizarCaracteristicas,
} from "../controllers/petUserController";
import { estaLogueado } from "../config/authMiddlewares";

const petRoutes = Router();

petRoutes
  .route("/")
  .get(estaLogueado, mostrarMisMascotas)
  .post(estaLogueado, adoptarMascota);

petRoutes
  .route("/:idMascota")
  .get(estaLogueado, mostrarDetallesMascota)
  .post(estaLogueado, actualizarCaracteristicas)
  .put(estaLogueado, actualizarAccesoriosEnUso)
  .patch(estaLogueado, actualizarAccesoriosGanados)
  .delete(estaLogueado, liberarMascota);

export default petRoutes;
