import { model, Schema } from "mongoose";
import passportLocalMongoose from "passport-local-mongoose";
import { TypeRolUsuario, TypeRegistradoEn } from "../../types";

export interface InterfaceUser extends Document {
  username: string;
  email?: string;
  nombre?: string;
  nacimiento?: Date;
  telefono?: number;
  rol: TypeRolUsuario;
  verificado: boolean;
  registradoEn: TypeRegistradoEn;
  registradoEnId?: string;
  mascotas: Schema.Types.ObjectId[];
  extraerPerfil: () => Object;
  save: () => any;
}

const userSchema = new Schema(
  {
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
    nacimiento: {
      type: Date,
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

userSchema.plugin(passportLocalMongoose);

const User = model("User", userSchema);

export default User;
