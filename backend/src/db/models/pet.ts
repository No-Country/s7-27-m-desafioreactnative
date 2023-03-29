import { Schema, model } from "mongoose";

type TCaracteristicas = {
  edad: Number;
  sueno: Number;
  energia: Number;
  sueño: Number;
  salud: Number;
  felicidad: Number;
  higiene: Number;
};

export interface InterfacePet {
  nombre: String;
  tipoMascota: Schema.Types.ObjectId;
  edad: String;
  caracteristicas: TCaracteristicas;
  accesorios: Schema.Types.ObjectId;
  usuario: Schema.Types.ObjectId;
}

const petSchema = new Schema<InterfacePet>(
  {
    nombre: {
      type: String,
      trim: true,
      maxlength: [25, "El nombre no puede tener mas de 25 caracteres"],
    },
    tipoMascota: {
      type: Schema.Types.ObjectId,
      ref: "PetType",
    },
    caracteristicas: {
      edad: Number,
      sueno: Number,
      energia: Number,
      salud: Number,
      felicidad: Number,
      higiene: Number,
    },
    accesorios: [{ type: Schema.Types.ObjectId, ref: "Accesory" }],
    usuario: { type: Schema.Types.ObjectId, ref: "User" },
  },
  {
    timestamps: true,
  }
);

const Pet = model("Pet", petSchema);

export default Pet;
