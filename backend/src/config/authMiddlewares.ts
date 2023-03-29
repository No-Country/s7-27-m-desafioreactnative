import Usuario from "../db/models/user";
import { Request, Response, NextFunction } from "express";

export const verificarRolAdmin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let usuario = await Usuario.findOne({
    username: req.user?.username,
  });
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
  let usuario = await Usuario.findOne({
    username: req.user?.username,
  });
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
