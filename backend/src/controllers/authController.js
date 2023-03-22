import wrapAsync from "../../utils/wrapAsync.js";
import User from "../db/models/user.js";

export const registrarUsuario = wrapAsync(async (req, res, next) => {
  const { username, password, nombre, nacimiento, telefono } = req.body;

  // Consultamos si el mail esta en uso
  const existe = await User.findByUsername(username);

  // Si no existe creamos el usuario => no estamos guardandolo en la DB todavia
  if (!existe) {
    const usuarioNuevo = await new User({
      email: username,
      username,
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
});

export const iniciarSesionLocal = wrapAsync(async (req, res, next) => {
  // Verificamos que el perfil este activo o baneado
  if (req.user.activo) {
    // Extraemos perfil del usuario inicializado por passport
    let usuario = await req.user.extractProfile();
    return res.status(200).json({ usuario });
  } else {
    req.logout((err) => {
      if (err) {
        return next(err);
      }
    });
    return res.status(401).json({ mensaje: "Email baneado" });
  }
});
