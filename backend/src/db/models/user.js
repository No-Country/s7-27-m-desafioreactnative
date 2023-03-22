import mongoose from "mongoose";
import passportLocalMongoose from "passport-local-mongoose";

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      trim: true,
      lowercase: true,
      unique: true,
      required: "Un email es requerido",
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
    mascotas: [{ type: mongoose.Schema.Types.ObjectId, ref: "Pet" }],
  },
  {
    timestamps: true,
  }
);

userSchema.methods.extractProfile = async function () {
  return {
    id: this._id,
    username: this.username,
    nombre: this.nombre,
    telefono: this.telefono,
    role: this.role,
    verified: this.verified,
    // mascotas: this.mascotas,
  };
};

userSchema.plugin(passportLocalMongoose);

const User = mongoose.model("User", userSchema);

export default User;
