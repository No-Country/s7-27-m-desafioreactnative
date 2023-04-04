import Usuario from "../db/models/user";
import { Request, Response, NextFunction } from "express";
import { InterfaceUser } from "../db/models/user";

export const verificarRolAdmin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const datos = req.user as InterfaceUser;
  let usuario = await Usuario.findOne({ username: datos.username });
  if (
    usuario?.rol === "administrador" ||
    usuario?.rol === "superadministrador"
  ) {
    next();
  } else {
    res.status(403).send("Not authorized");
  }
};

export const verificarRolSuperAdmin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const datos = req.user as InterfaceUser;
  let usuario = await Usuario.findOne({ username: datos.username });
  if (usuario?.rol === "superadministrador") {
    next();
  } else {
    res.status(403).send("Not authorized");
  }
};

export const estaLogueado = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (req.isAuthenticated()) {
    return next();
  } else {
    res.status(403).send("Not authorized");
  }
};
