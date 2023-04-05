import User from "../db/models/user";

export async function createSuperAdmin(
  MAIL_ADMIN: string,
  CONTRASENA_ADMIN: string
): Promise<void> {
  try {
    let superAdmin = await User.findOne({
      username: MAIL_ADMIN,
    }).exec();
    if (!superAdmin) {
      const usuario = await new User({
        username: MAIL_ADMIN,
        mail: MAIL_ADMIN,
        rol: "superadministrador",
      });
      await User.register(usuario, CONTRASENA_ADMIN);
      console.log("superadministrador creado", usuario.username);
    }
  } catch (error) {
    console.log("error al crear super administrador", error);
  }
}
