import { Router } from "express";
import {
  adoptarMascota,
  mostrarMisMascotas,
  liberarMascota,
  mostrarDetallesMascota,
  actualizarAccesoriosEnUso,
  actualizarCaracteristicas,
  eliminarAccesoriosEnUso,
} from "../controllers/petControllers";
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
  .patch(estaLogueado, eliminarAccesoriosEnUso)
  .delete(estaLogueado, liberarMascota);

export default petRoutes;
