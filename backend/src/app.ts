import express, { Response } from "express";
import iniciarPassportSessions from "./config/passport-session.config";
import { iniciarExpress, manejoErroresExpress } from "./config/express.config";

// Rutas
import authRoutes from "./routes/authRoutes";

const app = express();

iniciarExpress(app);
iniciarPassportSessions(app);

// Rutas
app.get("/", (_, res: Response) => {
  return res.send("Bienvenido a la api");
});

app.use("/auth", authRoutes);

manejoErroresExpress(app);

export default app;
