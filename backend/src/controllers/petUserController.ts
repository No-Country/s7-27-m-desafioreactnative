import { Request, Response } from "express";
import wrapAsync from "../utils/wrapAsync";
import Pet, { InterfacePet } from "../db/models/pet";
import User, { InterfaceUser } from "../db/models/user";

// /mascotas
// GET
export const mostrarMisMascotas = wrapAsync(
  async (req: Request, res: Response) => {
    const usuario: InterfaceUser | null = await User.findById(req.user?._id);
    const mascotas = await usuario?.populate("mascotas", [
      "-usuario",
      "-createdAt",
      "-updatedAt",
      "-__v",
    ]);
    return res.status(200).json({ mascotas: mascotas?.mascotas });
  }
);
// POST
export const adoptarMascota = wrapAsync(async (req: Request, res: Response) => {
  const { nombre, tipoMascota, caracteristicas } = req.body;
  const usuario = (await User.findById(req.user?._id)) as InterfaceUser;
  await usuario.populate("mascotas");
  const mascotas = usuario.mascotas as unknown as InterfacePet[];
  let existe = false;
  for (let i = 0; i < usuario.mascotas.length; i++) {
    if (mascotas[i]?.tipoMascota === tipoMascota) {
      existe = true;
      break;
    }
  }
  if (!existe) {
    const nuevaMascota = await Pet.create({
      nombre,
      tipoMascota,
      caracteristicas,
      usuario: usuario?._id,
    });
    usuario.mascotas.push(nuevaMascota._id);
    await usuario.save();
    return res.status(200).json({
      nuevaMascota: {
        nombre: nuevaMascota.nombre,
        tipoMascota: nuevaMascota.tipoMascota,
        caracteristicas: nuevaMascota.caracteristicas,
        accesoriosEnUso: nuevaMascota.accesoriosEnUso,
        accesoriosGanados: nuevaMascota.accesoriosGanados,
        _id: nuevaMascota._id,
      },
    });
  } else {
    return res
      .status(400)
      .json({ mensaje: "El usuario ya tiene una mascota de este tipo" });
  }
});

// /mascotas/:idMascota
// GET
export const mostrarDetallesMascota = wrapAsync(
  async (req: Request, res: Response) => {
    const mascota = await Pet.findById(req.params.idMascota, [
      "-usuario",
      "-createdAt",
      "-updatedAt",
      "-__v",
    ]);
    if (!mascota)
      return res.status(404).json({ mensaje: "Mascota no encontrada" });
    return res.status(200).json({ mascota });
  }
);
// POST
export const actualizarCaracteristicas = wrapAsync(
  async (req: Request, res: Response) => {
    const { edad, sueno, energia, salud, felicidad, higiene } = req.body;

    const { idMascota } = req.params;

    const mascota = await Pet.findOne({
      _id: idMascota,
      usuario: req.user?._id,
    });

    if (!mascota)
      return res.status(404).json({ mensaje: "Mascota no encontrada" });

    edad ? (mascota.caracteristicas.edad = edad) : null;
    sueno ? (mascota.caracteristicas.sueno = sueno) : null;
    energia ? (mascota.caracteristicas.energia = energia) : null;
    salud ? (mascota.caracteristicas.salud = salud) : null;
    felicidad ? (mascota.caracteristicas.felicidad = felicidad) : null;
    higiene ? (mascota.caracteristicas.higiene = higiene) : null;
    await mascota.save();
    return res.status(200).json({ mascotaModificada: mascota });
  }
);
// PUT
export const actualizarAccesoriosEnUso = wrapAsync(
  async (req: Request, res: Response) => {
    const { fondo, cuadro } = req.body;

    const mascota = await Pet.findOne({
      _id: req.params.idMascota,
      usuario: req.user?._id,
    });

    await mascota?.modificarAccesoriosEnUso(fondo, cuadro);
    const mascotaActualizada = {
      accesoriosEnUso: mascota?.accesoriosEnUso,
      accesoriosGanados: mascota?.accesoriosGanados,
      _id: mascota?._id,
      nombre: mascota?.nombre,
      tipoMascota: mascota?.tipoMascota,
    };
    return res.status(200).json({ mascotaActualizada });
  }
);
// PATCH
export const actualizarAccesoriosGanados = wrapAsync(
  async (req: Request, res: Response) => {
    const { fondos, cuadros } = req.body;
    const mascota = await Pet.findOne({
      _id: req.params.idMascota,
      usuario: req.user?._id,
    });
    if (!mascota)
      return res.status(404).json({ mensaje: "Mascota no encontrada" });
    // fondos
    if (fondos?.length && Array.isArray(fondos)) {
      fondos.forEach((e: "string") => {
        if (!mascota.accesoriosGanados.fondos.includes(e))
          mascota.accesoriosGanados.fondos.push(e);
      });
    }
    if (cuadros?.length && Array.isArray(cuadros)) {
      cuadros.forEach((e: "string") => {
        if (!mascota.accesoriosGanados.cuadros.includes(e))
          mascota.accesoriosGanados.cuadros.push(e);
      });
    }
    await mascota.save();

    const mascotaActualizada = {
      accesoriosEnUso: mascota.accesoriosEnUso,
      accesoriosGanados: mascota.accesoriosGanados,
      _id: mascota._id,
      nombre: mascota.nombre,
      tipoMascota: mascota.tipoMascota,
    };

    return res.status(200).json({ mascotaActualizada });
  }
);
//DELETE
export const liberarMascota = wrapAsync(async (req: Request, res: Response) => {
  const usuario = await User.findById(req.user?._id);
  console.log(req.params);
  await usuario?.liberarMascota(req.params.idMascota as string);
  return res.status(200).json({ mensaje: "Mascota liberada" });
});
