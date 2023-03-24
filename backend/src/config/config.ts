type Session = {
  nombre: string;
  secreto: string;
};

interface Configuraciones {
  dbUrl: string;
  puerto: string;
  adminMail: string;
  adminContrasena: string;
  nodeEnv: string;
  session: Session;
}

const config: Configuraciones = {
  dbUrl: process.env.DB_URI || "mongodb://localhost:27017/noCountryS7-27",
  puerto: process.env.PORT || "",
  adminMail: process.env.MAIL_ADMIN || "",
  adminContrasena: process.env.CONTRASENA_ADMIN || "",
  nodeEnv: process.env.NODE_ENV || "DEV",
  session: {
    secreto: process.env.SESSION_SECRET || "",
    nombre: process.env.SESSION_NAME || "",
  },
};

export default config;
