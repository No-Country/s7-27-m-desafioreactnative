import { Schema, model, Document } from "mongoose";

export interface InterfacePetType extends Document {
  nombre: string;
  caracteristicas: Object;
}

const petTypeSchema = new Schema({
  nombre: {
    type: String,
    unique: true,
    maxlength: [20, "El nombre no puede tener mas de 20 caracteres"],
  },
  caracteristicas: {
    type: Object,
  },
});

const PetType = model<InterfacePetType>("PetType", petTypeSchema);

export default PetType;
