import express, { Response } from "express";
import iniciarPassportSessions from "./config/passport-session.config";
import { iniciarExpress, manejoErroresExpress } from "./config/express.config";

// Importacion Rutas
import authRoutes from "./routes/authRoutes";
import petRoutes from "./routes/petRoutes";
import accesoriesRouter from "./routes/accesoriesRoutes";

const app = express();

iniciarExpress(app);
iniciarPassportSessions(app);

// Rutas
app.get("/", (_, res: Response) => {
  return res.send("Bienvenido a la api");
});

app.use("/auth", authRoutes);
app.use("/accesorio", accesoriesRouter);
app.use("/mascota", petRoutes);


manejoErroresExpress(app);

export default app;
