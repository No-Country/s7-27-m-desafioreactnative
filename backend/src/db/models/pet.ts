import { Document, Schema, model } from "mongoose";

export interface InterfacePet extends Document {
  nombre: String;
  usuario: Schema.Types.ObjectId;
}

const petSchema = new Schema(
  {
    nombre: {
      type: String,
      trim: true,
      maxlength: [25, "El nombre no puede tener mas de 25 caracteres"],
    },
    usuario: { type: Schema.Types.ObjectId, ref: "User" },
  },
  {
    timestamps: true,
  }
);

const Pet = model("Pet", petSchema);

export default Pet;
