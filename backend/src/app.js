import express from "express";
import session from "express-session";
import cors from "cors";
import morgan from "morgan";
import MongoStore from "connect-mongo";
import bodyParser from "body-parser";
import passport from "passport";
// import LocalStrategy from "passport-local";
// import "./auth/auth.js";

// Modelos
import User from "./db/models/user.js";

// Rutas
import authRoutes from "./routes/authRoutes.js";

const { DB_URI, PATH_FRONT, SESSION_SECRET } = process.env;

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

// SESSION
const sessionConfig = {
  store: MongoStore.create({
    mongoUrl: DB_URI,
  }),
  secret: `${SESSION_SECRET}`,
  name: "sessionNoCountryS7-27",
  resave: true,
  saveUninitialized: true,
  cookie: {
    sameSite: "none",
  },
};
if (process.env.NODE_ENV === "production") {
  app.set("trust proxy", 1); // trust first proxy
  sessionConfig.cookie.secure = true; // serve secure cookies
}
app.use(session(sessionConfig));

// PASSPORT
app.use(passport.initialize());
app.use(passport.session());
// passport.use(new LocalStrategy(User.authenticate()));
passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Rutas
app.use("/auth", authRoutes);

// Manejo errores
app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || err;
  console.log("Manejo errores: ", message);
  res.status(status).send(message);
});

export default app;
