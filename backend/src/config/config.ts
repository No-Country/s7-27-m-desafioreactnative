type Session = {
  nombre: string;
  secreto: string;
};

type Auth = {
  google: {
    clientID: string;
    clientSecret: string;
  };
  facebook: {
    appID: string;
    appSecret: string;
  };
};

interface Configuraciones {
  dbUrl: string;
  frontUrl: string;
  backUrl: string;
  puerto: string;
  adminMail: string;
  adminContrasena: string;
  nodeEnv: string;
  session: Session;
  auth: Auth;
}

const config: Configuraciones = {
  dbUrl: process.env.DB_URƒ || "mongodb://localhost:27017/noCountryS7-27",
  frontUrl: (process.env.PATH_FRONT as string) || "http://localhost:3000",
  backUrl: (process.env.PATH_BACK as string) || "http://localhost:3001",
  puerto: process.env.PORT as string,
  adminMail: process.env.MAIL_ADMIN as string,
  adminContrasena: process.env.CONTRASENA_ADMIN as string,
  nodeEnv: process.env.NODE_ENV as string,
  session: {
    secreto: process.env.SESSION_SECRET as string,
    nombre: process.env.SESSION_NAME as string,
  },
  auth: {
    google: {
      clientID: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    },
    facebook: {
      appID: process.env.FACEBOOK_APP_ID as string,
      appSecret: process.env.FACEBOOK_APP_SECRET as string,
    },
  },
};

export default config;
