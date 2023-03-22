import "dotenv/config";
import app from "./src/app.js";
import db from "./src/db/db.js";
import { createSuperAdmin } from "./seeds.js";

const { PORT, MAIL_ADMIN, CONTRASENA_ADMIN } = process.env;

db.on("error", console.error.bind(console, "Error de conección:"));

db.once("open", () => {
  console.log("Base de datos conectada!");
});

// Semillado
(() => {
  createSuperAdmin(MAIL_ADMIN, CONTRASENA_ADMIN);
})();

app.listen(PORT, () => {
  console.log("Servidor esta escuchando en el puerto: " + PORT || 3001);
});
