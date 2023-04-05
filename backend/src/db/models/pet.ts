import { Schema, model, Model } from "mongoose";

type TCaracteristicas = {
  edad: Number;
  sueno: Number;
  energia: Number;
  salud: Number;
  felicidad: Number;
  higiene: Number;
};

type TaccesoriosEnUso = {
  fondo: string;
  cuadro: string;
};

// type TaccesoriosGanados = {
//   fondos: string[];
//   cuadros: string[];
// };


export interface InterfacePet extends Document {
  _id: Schema.Types.ObjectId;
  nombre: String;
  tipoMascota: String;
  caracteristicas: TCaracteristicas;
  accesoriosEnUso: TaccesoriosEnUso;
  // accesoriosGanados: TaccesoriosGanados;
  usuario: Schema.Types.ObjectId;
  modificarAccesoriosEnUso: (
    fondo: String,
    cuadro: Schema.Types.ObjectId[],
    accesoriosUsuario?: Object,
    mascotas?: any[]
  ) => InterfacePet;
  eliminarAccesoriosEnUso: (
    fondo: String,
    cuadro: Schema.Types.ObjectId[]
  ) => InterfacePet;
}

const petSchema = new Schema<InterfacePet, Model<InterfacePet>>(
  {
    nombre: {
      type: String,
      trim: true,
      maxlength: [25, "El nombre no puede tener mas de 25 caracteres"],
      required: true,
    },
    tipoMascota: {
      type: String,
      required: true,
    },
    caracteristicas: {
      edad: Number,
      sueno: Number,
      energia: Number,
      salud: Number,
      felicidad: Number,
      higiene: Number,
    },
    accesoriosEnUso: {
      fondo: { type: String },
      cuadro: { type: String },
    },
    // accesoriosGanados: {
    //   fondos: [{ type: String }],
    //   cuadros: [{ type: String }],
    // },
    usuario: { type: Schema.Types.ObjectId, ref: "User", required: true },
  },
  {
    timestamps: true,
  }
);

petSchema.methods.modificarAccesoriosEnUso = async function (
  fondo: string,

  cuadro: string,
  accesoriosUsuario: { fondos: string[]; accesorios: string[] }
) {
  if (fondo && accesoriosUsuario?.fondos?.includes(fondo)) {
    this.accesoriosEnUso.fondo = fondo;
    await this.save();
  }
  if (cuadro && accesoriosUsuario?.accesorios?.includes(cuadro)) {
    this.accesoriosEnUso.cuadro = cuadro;
    await this.save();
  }
  return this;
};

petSchema.methods.eliminarAccesoriosEnUso = async function (
  fondo: string,
  cuadro: string
) {
  if (fondo) {
    this.accesoriosEnUso.fondo = null;
    await this.save();
  }
  if (cuadro) {
    this.accesoriosEnUso.cuadro = null;
    await this.save();
  }
  return this;
};

const Pet = model<InterfacePet>("Pet", petSchema);

export default Pet;
