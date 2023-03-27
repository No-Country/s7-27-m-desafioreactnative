import { Router } from "express";
import passport from "passport";
import {
  registrarUsuario,
  inicioSesionLocal,
  inicioSesionRedes,
  verificarMailUsuario,
  recuperarContrasena,
  vistaCambioContrasena,
  cambiarContrasena,
} from "../controllers/authController";
import config from "../config/config";
import "../config/auth/strategies/strategies";

const authRouter: Router = Router();

// Logeo local
authRouter.route("/registro").post(registrarUsuario);

authRouter.get(
  "/verificaremail",
  passport.authenticate("jwt", { session: false }),
  verificarMailUsuario
);

authRouter.post(
  "/iniciarsesion",
  passport.authenticate("local", { session: true }),
  inicioSesionLocal
);

// Logueo google
authRouter.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email", "openid"],
    prompt: "select_account",
  })
);

authRouter.get(
  "/google/redirect",
  passport.authenticate("google", {
    session: true,
    failureRedirect: config.backUrl + "/auth/google/fallo",
  }),
  inicioSesionRedes
);

authRouter.get("/google/fail", (_req, res) => {
  return res.redirect(`${config.frontUrl}/auth?fallo=googleLocal`);
});

// Logueo facebook
authRouter.get(
  "/facebook",
  passport.authenticate("facebook", {
    prompt: "select_account",
  })
);

authRouter.get(
  "/facebook/redirect",
  passport.authenticate("facebook", {
    session: true,
    failureRedirect: config.backUrl + "/auth/google/fallo",
  }),
  inicioSesionRedes
);

authRouter.get("/facebook/fail", (_req, res) => {
  // return res.redirect(`${config.frontUrl}/auth?fallo=facebook`);
  return res.send("Login con facebook fallido");
});

// Recuperar contraseña
authRouter.get("/recuperarcontrasena", recuperarContrasena);

authRouter
  .route("/cambiarcontrasena")
  .get(
    passport.authenticate("jwt", {
      session: false,
    }),
    vistaCambioContrasena
  )
  .post(
    passport.authenticate("jwt", {
      session: false,
    }),
    cambiarContrasena
  );

export default authRouter;
