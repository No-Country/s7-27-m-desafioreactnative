import passport from "passport";
import express from "express";
import { Strategy as LocalStrategy } from "passport-local";
import User, { InterfaceUser } from "../db/models/user";
import session from "express-session";
import MongoStore from "connect-mongo";
import config from "./config";
import "./strategies.config";

export default function iniciarPassportSessions(app: express.Application) {
  let sessionConfig: session.SessionOptions = {
    secret: config.session.secreto,
    resave: true,
    saveUninitialized: true,
    cookie: {
      sameSite: "none",
    },
    name: config.session.nombre,
    store: MongoStore.create({
      mongoUrl: config.dbUrl,
    }),
  };

  if (config.nodeEnv === "production") {
    app.set("trust proxy", 1);
    sessionConfig.cookie ? (sessionConfig.cookie.secure = true) : null;
  }

  app.use(session(sessionConfig));
  app.use(passport.initialize());
  app.use(passport.session());
  // passport.use(User.createStrategy());
  // passport.serializeUser<PassportLocalDocument>(User.serializeUser());
  // passport.deserializeUser(User.deserializeUser());
  passport.use(new LocalStrategy(User.authenticate()));
  passport.serializeUser<InterfaceUser>((user, done) => {
    done(null, user as InterfaceUser);
  });
  passport.deserializeUser<InterfaceUser>((user, done) => {
    done(null, user);
  });

  console.log("passport and sessions loaded");
}
