import { Request, Response, NextFunction } from "express";
import User from "../db/models/user";
import wrapAsync from "../utils/wrapAsync";
import { InterfaceUser } from "../db/models/user";

export const registrarUsuario = wrapAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { email, password, nombre, nacimiento, telefono } = req.body;

    // Consultamos si el mail esta en uso
    const existe = await User.findOne({ email });

    // Si no existe creamos el usuario => no estamos guardandolo en la DB todavia
    if (!existe) {
      const usuarioNuevo = await new User({
        email,
        username: email,
        nombre,
        nacimiento,
        telefono,
      });

      // Registramos al usuario con la estrategia de passport y mongoose => lo guardamos en la DB al mismo tiempo que creamos la contraseña hasheada
      const usuarioRegistrado = await User.register(usuarioNuevo, password);

      // Serializamos al usuario con session cookie
      await req.login(usuarioRegistrado, (err) => {
        if (err) return next(err);
      });

      // Obtenemos el perfil del usuario
      const usuario = await usuarioRegistrado.extractProfile();

      return res.status(200).send({ mensaje: "Usuario creado", usuario });
    } else {
      // Si ya existe devolvemos error
      if (!existe.activo) {
        return res.status(401).send({ mensaje: "Email baneado" });
      }
      return res.status(400).send({ mensaje: "Email en uso" });
    }
  }
);

export const inicioSesionLocal = wrapAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    let user = req.user as InterfaceUser;
    if (!user) return res.status(400).send("Error");
    // Verificamos que el perfil este activo o baneado
    if (user.activo) {
      // Extraemos perfil del usuario inicializado por passport
      return res.status(200).json({ usuario: await user.extractProfile() });
    } else {
      req.logout((err) => {
        if (err) {
          return next(err);
        }
      });
      return res.status(401).json({ mensaje: "Email baneado" });
    }
  }
);
