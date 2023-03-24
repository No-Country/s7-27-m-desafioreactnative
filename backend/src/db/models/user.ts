import { model, Schema } from "mongoose";
import passportLocalMongoose from "passport-local-mongoose";

export interface InterfaceUser extends Document {
  email: string;
  nombre: string;
  nacimiento: Date;
  telefono: number;
  activo: boolean;
  rol: string;
  verificado: boolean;
  registradoEn: string;
  mascotas: Schema.Types.ObjectId[];
  extractProfile: () => Object;
}

const userSchema = new Schema(
  {
    email: {
      type: String,
      trim: true,
      lowercase: true,
      unique: true,
      required: [true, "Email requerido"],
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
    activo: {
      type: Boolean,
      default: true,
    },
    rol: {
      type: String,
      lowercase: true,
      enum: ["usuario", "administrador", "superadministrador"],
      default: "usuario",
    },
    verificado: {
      type: Boolean,
      default: false,
    },
    registradoEn: {
      type: String,
      lowercase: true,
      enum: ["local", "google"],
      default: "local",
    },
    mascotas: [{ type: Schema.Types.ObjectId, ref: "Pet" }],
  },
  {
    timestamps: true,
  }
);

userSchema.methods.extractProfile = async function () {
  return {
    id: this._id,
    email: this.email,
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
