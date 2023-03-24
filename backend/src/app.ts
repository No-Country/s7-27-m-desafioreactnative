import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import morgan from "morgan";
import bodyParser from "body-parser";
import iniciarPassportSessions from "./config/passport-session.config";

// Rutas
import authRoutes from "./routes/authRoutes";

const { PATH_FRONT } = process.env;

const app = express();

// Middlewares
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(
  cors({
    origin: [`${PATH_FRONT}`, `http://localhost:3000`],
    credentials: true,
    methods: "GET,POST,PUT,DELETE,OPTIONS,PATCH",
  })
);

iniciarPassportSessions(app);

// Rutas
app.get("/", (_req, res) => {
  console.log("Bienvenido a mi api");
  return res.send("Bienvenido a la api");
});

app.use("/auth", authRoutes);

// Manejo errores
app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
  const estado = _req.statusCode || 500;
  const mensaje = _req.statusMessage || err;
  console.log("Manejo errores: ", mensaje);
  res.status(estado).send(mensaje);
});

export default app;
