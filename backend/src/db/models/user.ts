import {
  model,
  Schema,
  Document,
  PassportLocalDocument,
  Model,
} from "mongoose";
import passportLocalMongoose from "passport-local-mongoose";
import { TypeRolUsuario, TypeRegistradoEn } from "../../types";
import Pet from "./pet";
// import { InterfacePet } from "./pet";

type TypeAccesoriosGanados = {
  fondos: string[];
  accesorios: string[];
};

export interface InterfaceUser extends Document, PassportLocalDocument {
  _id: Schema.Types.ObjectId;
  username: string;
  email?: string;
  rol: TypeRolUsuario;
  verificado: boolean;
  registradoEn: TypeRegistradoEn;
  registradoEnId?: string;
  dinero: number;
  mascotas: Schema.Types.ObjectId[];
  accesoriosGanados: TypeAccesoriosGanados;
  extraerPerfil: () => Object;
  liberarMascota: (idMascota: string) => Boolean;
}

const userSchema = new Schema<InterfaceUser, Model<InterfaceUser>>(
  {
    // username: {
    //   type: String,
    // },
    email: {
      type: String,
      trim: true,
      lowercase: true,
      // unique: true,
      match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "Mail invalido"],
    },
    rol: {
      type: String,
      lowercase: true,
      enum: ["usuario", "administrador", "superadministrador", "baneado"],
      default: "usuario",
    },
    verificado: {
      type: Boolean,
      default: false,
    },
    registradoEn: {
      type: String,
      lowercase: true,
      enum: ["local", "google", "facebook"],
      default: "local",
    },
    registradoEnId: {
      type: String,
      trim: true,
    },
    accesoriosGanados: {
      fondos: [{ type: String }],
      accesorios: [{ type: String }],
    },
    dinero: { type: Number },

    mascotas: [{ type: Schema.Types.ObjectId, ref: "Pet" }],
  },
  {
    timestamps: true,
  }
);

userSchema.methods.extraerPerfil = async function () {
  return {
    id: this._id,
    username: this?.username,
    rol: this.rol,
    verificado: this.verificado,
    mascotas: this.mascotas,
    accesoriosGanados: this.accesoriosGanados,
  };
};

userSchema.methods.liberarMascota = async function (idMascota: string) {
  const mascotaEliminada = await Pet.deleteOne({
    _id: idMascota,
    usuario: this._id,
  });
  let eliminado = false;
  if (mascotaEliminada.deletedCount) {
    eliminado = true;
    const mascotas = this.mascotas.filter(
      (i: Schema.Types.ObjectId) => i.toString() !== idMascota
    );
    this.mascotas = mascotas;
    await this.save();
  }

  return eliminado;
};

userSchema.plugin(passportLocalMongoose);

const User = model<InterfaceUser>("User", userSchema);

export default User;
