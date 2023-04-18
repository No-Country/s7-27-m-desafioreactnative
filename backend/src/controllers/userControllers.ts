import { Request, Response } from "express";
import wrapAsync from "../utils/wrapAsync";
import User, { InterfaceUser } from "../db/models/user";

// /usuario
// GET
export const mostrarDatosUsuario = wrapAsync(
  async (req: Request, res: Response) => {
    const usuario: InterfaceUser | null = await User.findById(req.user?._id, [
      "-createdAt",
      "-updatedAt",
      "-__v",
    ]).populate("mascotas", ["-usuario", "-createdAt", "-updatedAt", "-__v"]);
    return res.status(200).json({ usuario });
  }
);

// POST
export const modificarDineroUsuario = wrapAsync(
  async (req: Request, res: Response) => {
    let { cantidad, tipo } = req.body;
    if (!cantidad || !tipo) return res.status(400).send("Error en la petición");
    const usuario: InterfaceUser | null = await User.findById(req.user?._id, [
      "-createdAt",
      "-updatedAt",
      "-__v",
    ]).populate("mascotas", ["-usuario", "-createdAt", "-updatedAt", "-__v"]);
    if (!usuario) return res.status(400).send("Usuario no encontrado");
    if (!usuario.dinero) usuario.dinero = 0;
    cantidad = Math.round(cantidad);
    if (tipo === "sumar") {
      usuario.dinero = usuario.dinero + cantidad;
    } else if (tipo === "restar") {
      usuario.dinero = usuario.dinero - cantidad;
    }
    if (usuario.dinero < 0) usuario.dinero = 0;
    usuario.save();
    return res.status(200).json({ usuario });
  }
);
