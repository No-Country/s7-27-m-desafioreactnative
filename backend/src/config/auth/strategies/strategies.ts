import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import { Strategy as FacebookStrategy } from "passport-facebook";
import User from "../../../db/models/user";
import config from "../../config";
import { InterfaceUser } from "../../../db/models/user";

passport.use(
  new GoogleStrategy(
    {
      clientID: config.auth.google.clientID,
      clientSecret: config.auth.google.clientSecret,
      callbackURL: "http://localhost:3001/auth/google/redirect",
    },
    async function (_accessToken, _refreshToken, profile, cb) {
      try {
        const existe = (await User.findOne({
          registradoEn: "google",
          registradoEnId: profile.id,
        })) as InterfaceUser;
        if (existe) {
          // // Para que se logee desde google solo si se registro en google
          // if (existe.createdIn !== "google") {
          //   return cb(null, false, {
          //     message: "Locally created account", });}
          return cb(null, existe);
        } else {
          let usuarioNuevo = await new User({
            username: profile.id,
            nombre: profile.displayName,
            verificado: true,
            registradoEn: "google",
            registradoEnId: profile.id,
          });
          profile.emails?.[0].value &&
            (usuarioNuevo.email = profile.emails?.[0].value);
          await usuarioNuevo.save();
          return cb(null, usuarioNuevo);
        }
      } catch (e: any) {
        return cb(e);
      }
    }
  )
);

passport.use(
  new FacebookStrategy(
    {
      clientID: config.auth.facebook.appID,
      clientSecret: config.auth.facebook.appSecret,
      callbackURL: "http://localhost:3001/auth/facebook/redirect",
      profileFields: ["id", "displayName", "email", "verified"],
    },
    async function (_accessToken, _refreshToken, profile, cb) {
      try {
        const existe = await User.findOne({
          registradoEn: "facebook",
          registradoEnId: profile.id,
        });
        if (existe) {
          return cb(null, existe);
        } else {
          let usuarioNuevo = await new User({
            username: profile.id,
            nombre: profile.displayName,
            verificado: true,
            registradoEn: "facebook",
            registradoEnId: profile.id,
          });
          profile.emails?.[0].value &&
            (usuarioNuevo.email = profile.emails?.[0].value);
          await usuarioNuevo.save();
          return cb(null, usuarioNuevo);
        }
      } catch (e: any) {
        return cb(e);
      }
    }
  )
);
