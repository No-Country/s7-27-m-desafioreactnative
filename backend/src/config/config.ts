type Session = {
  nombre: string;
  secreto: string;
};

type Nodemailer = {
  usuario: string;
  clientId: string;
  clientSecret: string;
  refreshToken: string;
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
  jwt: {
    jwtSecret: string;
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
  nodemailerOAuth: Nodemailer;
}

const config: Configuraciones = {
  dbUrl: process.env.DB_URI as string,
  frontUrl: process.env.PATH_FRONT as string,
  backUrl: process.env.PATH_BACK as string,
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
    jwt: {
      jwtSecret: process.env.JWT_SECRET as string,
    },
  },
  nodemailerOAuth: {
    usuario: process.env.GOOGLE_API_USUARIO as string,
    clientId: process.env.GOOGLE_API_MAIL_ID as string,
    clientSecret: process.env.GOOGLE_API_MAIL_SECRETO as string,
    refreshToken: process.env.GOOGLE_API_MAIL_TOKEN as string,
  },
};

export default config;
