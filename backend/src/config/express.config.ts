import express, { Response, Request, NextFunction } from "express";
import cors from "cors";
import morgan from "morgan";
import bodyParser from "body-parser";
import path from "path";
import { InterfaceUser } from "../db/models/user";
import config from "./config";

declare global {
  namespace Express {
    interface User extends InterfaceUser {}
  }
  namespace Express {
    interface Request {
      viewsUrl: string;
    }
  }
}

export function iniciarExpress(app: express.Application): void {
  app.use(morgan("dev"));
  app.use(bodyParser.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(
    cors({
      origin: [`${config.frontUrl}`, `http://localhost:3000`],
      credentials: true,
      methods: "GET,POST,PUT,DELETE,OPTIONS,PATCH",
    })
  );
  app.use((req: Request, _res: Response, next: NextFunction) => {
    req.viewsUrl = path.join(__dirname, "../utils/views");
    next();
  });
}

export function manejoErroresExpress(app: express.Application): void {
  app.use(
    (
      err: Error,
      _req: Request,
      res: Response,
      _next: NextFunction
    ): Response => {
      console.log("el error de mierda", err);
      const estado = _req.statusCode || 500;
      const mensaje = _req.statusMessage || err;
      return res.status(estado).send(mensaje);
    }
  );
}
