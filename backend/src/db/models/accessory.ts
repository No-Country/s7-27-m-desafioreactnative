import { Schema, model } from "mongoose";

export interface InterfaceAccesory {
  nombre: String;
  caracteristicas: String;
}

const accesoryShema = new Schema<InterfaceAccesory>({
  nombre: {
    type: String,
    unique: true,
  },
  caracteristicas: {
    type: Object,
  },
});

const AccesorySchema = model("Accesory", accesoryShema);

export default AccesorySchema;
