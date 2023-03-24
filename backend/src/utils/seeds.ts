import User from "../db/models/user";

export async function createSuperAdmin(
  MAIL_ADMIN: string,
  CONTRASENA_ADMIN: string
): Promise<void> {
  try {
    let superAdmin = await User.findOne({
      email: MAIL_ADMIN,
    }).exec();
    if (!superAdmin) {
      superAdmin = await User.register(
        { email: MAIL_ADMIN, rol: "superadministrador" },
        CONTRASENA_ADMIN
      );
      console.log("superadministrador creado", superAdmin.email);
    }
  } catch (error) {
    console.log("error al crear super administrador", error);
  }
}
