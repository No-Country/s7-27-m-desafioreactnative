import { Request, Response } from "express";
import User from "../db/models/user";
import wrapAsync from "../utils/wrapAsync";
import { InterfaceUser } from "../db/models/user";

export const agregarAccesorios = wrapAsync(
  async (req: Request, res: Response) => {
    const { fondos, accesorios } = req.body;
    const usuario = (await User.findOne({ _id: req.user?._id }, [
      "-__v",
    ])) as InterfaceUser;

    if (Array.isArray(accesorios) && accesorios.length) {
      accesorios.forEach((e: string) => {
        !usuario?.accesoriosGanados?.accesorios?.includes(e) &&
          usuario?.accesoriosGanados?.accesorios?.push(e);
      });

      await usuario?.save();
    }
    if (Array.isArray(fondos) && fondos.length) {
      fondos.forEach((e: string) => {
        !usuario?.accesoriosGanados?.fondos?.includes(e) &&
          usuario?.accesoriosGanados?.fondos?.push(e);
      });
      await usuario?.save();
    }
    return res
      .status(200)
      .json({ usuarioModificado: await usuario.extraerPerfil() });
  }
);