import { Request, Response } from "express";
import wrapAsync from "../utils/wrapAsync";
import PetType from "../db/models/petType";

export const crearTipoMascota = wrapAsync(
  async (req: Request, res: Response) => {
    console.log();
    const { nombre } = req.body;

    const nuevoTipoMascota = await PetType.create({
      nombre,
    });

    return res.status(200).json({ mascota: nuevoTipoMascota });
  }
);

export const obtenerTiposMascota = wrapAsync(
  async (_req: Request, res: Response) => {
    const tiposMascota = await PetType.find({});
    return res.status(200).json({ tiposMascota });
  }
);

export const modificarTipoMascota = wrapAsync(
  async (req: Request, res: Response) => {
    const { id, nombre } = req.body;
    const modificado = await PetType.findByIdAndUpdate(id, { nombre });
    if (!modificado)
      return res.status(404).send("Error al eliminar el tipo de mascota");
    return res.status(200).json({ mascota: modificado });
  }
);

export const eliminarTipoMascota = wrapAsync(
  async (req: Request, res: Response) => {
    const { id } = req.body;
    const eliminado = await PetType.findByIdAndDelete(id);
    if (!eliminado)
      return res.status(404).send("Error al eliminar el tipo de mascota");
    return res.status(200).json({ message: "Eliminado correctamente" });
  }
);
