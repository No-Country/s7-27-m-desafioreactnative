import "dotenv/config";
import app from "./app";
import db from "./db/db";
import { createSuperAdmin } from "./utils/seeds";
import config from "./config/config";

db.on("error", console.error.bind(console, "Error de conección:"));
db.once("open", () => {
  console.log("Base de datos conectada!");
});

// Semillado
(() => {
  createSuperAdmin(config.adminMail, config.adminContrasena);
})();

app.listen(config.puerto, () => {
  console.log("Servidor escuchando en el puerto " + config.puerto);
});
