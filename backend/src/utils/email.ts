import { google } from "googleapis";
import nodemailer from "nodemailer";
import config from "../config/config";

const oAuth2Client = new google.auth.OAuth2(
  config.nodemailerOAuth.clientId,
  config.nodemailerOAuth.clientSecret,
  "https://developers.google.com/oauthplayground"
);

oAuth2Client.setCredentials({
  refresh_token: config.nodemailerOAuth.refreshToken,
});

async function enviarMail(opciones: Object): Promise<any> {
  try {
    const accessToken = (await oAuth2Client.getAccessToken()) as string;
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: config.nodemailerOAuth.usuario,
        clientId: config.nodemailerOAuth.clientId,
        clientSecret: config.nodemailerOAuth.clientSecret,
        refreshToken: config.nodemailerOAuth.refreshToken,
        accessToken: accessToken,
      },
    });
    const mailEnviado = await transporter.sendMail(opciones);
    return mailEnviado;
  } catch (e) {
    console.log("err: ", e);
  }
}

export const emailRegistro = async (
  mailUsuario: string,
  link: string
): Promise<any> => {
  try {
    let contentHTML = `
        <h3>"Bienvenido a No-Country S7-27"</h3>
        <p>Seguí el siguiente link para completar el proceso de registro</p>
        <a href="${link}">${link}</a>
    `;
    let configuracionesEmail = {
      from: `"Verifica tu cuenta!" ${config.nodemailerOAuth.usuario}`,
      to: `${mailUsuario}`,
      subject: "Completa la verificación de tu cuenta!",
      html: contentHTML,
    };
    const mailEnviado = await enviarMail(configuracionesEmail);
    return mailEnviado;
  } catch (e) {
    console.log("Error envio mail registro: ", e);
  }
};

export const emailCambioContrasena = async (
  mailUsuario: string,
  link: string
): Promise<any> => {
  try {
    let contentHTML = `
        <h3>"Hola y bienvenido de vuelta.."</h3>
        <p>Segui el siguiente link para poder cambiar la contraseña!!</p>
        <a href="${link}">${link}</a>
    `;
    let configuracionesEmail = {
      from: `"Cambia tu contraseña!" ${config.nodemailerOAuth.usuario}`,
      to: `${mailUsuario}`,
      subject: "Cambia tu contraseña!",
      html: contentHTML,
    };
    const mailEnviado = await enviarMail(configuracionesEmail);
    return mailEnviado;
  } catch (e) {
    console.log("Error envio mail cambio contraseña: ", e);
  }
};
