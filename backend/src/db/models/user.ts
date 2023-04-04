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

export interface InterfaceUser extends Document, PassportLocalDocument {
  _id: Schema.Types.ObjectId;
  username: string;
  email?: string;
  nombre?: string;
  telefono?: number;
  rol: TypeRolUsuario;
  verificado: boolean;
  registradoEn: TypeRegistradoEn;
  registradoEnId?: string;
  dinero: string;
  mascotas: Schema.Types.ObjectId[];
  extraerPerfil: () => Object;
  liberarMascota: (idMascota: string) => Boolean;
  // save: () => any;
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
    nombre: {
      type: String,
      trim: true,
      maxlength: [25, "El nombre no puede tener mas de 25 caracteres"],
    },
    telefono: {
      type: Number,
      max: [
        999999999999,
        "El número de telefono no puede tener mas de 12 caracteres",
      ],
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
    dinero: { tipe: String },
    mascotas: [{ type: Schema.Types.ObjectId, ref: "Pet" }],
  },
  {
    timestamps: true,
  }
);

userSchema.methods.extraerPerfil = async function () {
  return {
    id: this._id,
    email: this?.email,
    nombre: this.nombre,
    telefono: this.telefono,
    rol: this.rol,
    verificado: this.verificado,
    mascotas: this.mascotas,
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
    console.log(mascotas);
    this.mascotas = mascotas;
    await this.save();
  }

  return eliminado;
};

userSchema.plugin(passportLocalMongoose);

const User = model<InterfaceUser>("User", userSchema);

export default User;
