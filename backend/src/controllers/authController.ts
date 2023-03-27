import { Request, Response, NextFunction } from "express";
import User from "../db/models/user";
import wrapAsync from "../utils/wrapAsync";
import { InterfaceUser } from "../db/models/user";
import config from "../config/config";
import jwt from "jsonwebtoken";
import { emailCambioContrasena, emailRegistro } from "../utils/email";

export const registrarUsuario = wrapAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { username, password, nombre, nacimiento, telefono } = req.body;
    // Consultamos si el mail esta en uso
    const existe = await User.findOne({ username });
    // Si no existe creamos el usuario => no estamos guardandolo en la DB todavia
    if (!existe) {
      const usuarioNuevo = await new User({
        username,
        email: username,
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
      // ------ Enviar mail con Token para verificar el email del usuario ------
      const token = jwt.sign(
        { id: usuarioRegistrado._id, username: usuarioRegistrado.username },
        config.auth.jwt.jwtSecret,
        {
          expiresIn: "1h",
        }
      );
      const link = `${config.backUrl}/auth/verificaremail?token=${token}`;

      await emailRegistro(usuarioRegistrado.email, link);

      // Obtenemos el perfil del usuario
      const usuario = await usuarioRegistrado.extraerPerfil();
      return res.status(200).send({ mensaje: "Usuario creado", usuario });
    } else {
      // Si ya existe devolvemos error
      if (existe.rol === "baneado") {
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
    if (user.rol !== "baneado") {
      return res.status(200).json({ usuario: await user.extraerPerfil() });
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

export const verificarMailUsuario = wrapAsync(
  async (req: Request, res: Response) => {
    const username: string = req.user?.username as string;
    const usuario: InterfaceUser = await User.findByUsername(username, false);
    usuario.verificado = true;
    await usuario.save();
    return res.sendFile("verifyEmail.html", { root: req.viewsUrl });
  }
);

export const inicioSesionRedes = wrapAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const usuario = req.user as InterfaceUser;
    const root = { root: req.viewsUrl };
    if (usuario.rol === "baneado") {
      req.logout((err) => {
        if (err) {
          return next(err);
        }
      });
      return res.sendFile("userBanned.html", root);
    } else {
      req.login(usuario, (err) => {
        if (err) {
          return next(err);
        }
      });
      return res.sendFile("logeoGoogle.html", root);
    }
  }
);

export const recuperarContrasena = wrapAsync(
  async (req: Request, res: Response) => {
    let usuario = (await User.findOne({
      username: req.body.username,
    })) as InterfaceUser;
    if (usuario === null) {
      res.status(200).send("No se encontro usuario");
    } else if (usuario.registradoEn !== "local") {
      res
        .status(200)
        .send(
          `Iniciaste sesión con: ${usuario.registradoEn}. No puedes cambiar la contraseña`
        );
    } else {
      const token = jwt.sign(
        { username: req.body.username },
        config.auth.jwt.jwtSecret,
        {
          expiresIn: "30m",
        }
      );
      const link = `${config.backUrl}/auth/cambiarcontrasena?token=${token}`;
      await emailCambioContrasena(req.body.username, link);
      res.status(200).send("Mail enviado con exito");
    }
  }
);

export const vistaCambioContrasena = wrapAsync(
  async (req: Request, res: Response) => {
    res.status(200).sendFile("cambioContrasena.html", { root: req.viewsUrl });
  }
);

export const cambiarContrasena = wrapAsync(
  async (req: Request, res: Response) => {
    let usuario = await User.findByUsername(
      req.user?.username as string,
      false
    );
    if (usuario === null) {
      res.status(404).send("Error al encontrar usuario");
    } else {
      const usuarioNuevo = await usuario.setPassword(req.body.password);
      await usuarioNuevo.save();
      res.status(200).send("Contraseña cambiada con exito");
    }
  }
);
