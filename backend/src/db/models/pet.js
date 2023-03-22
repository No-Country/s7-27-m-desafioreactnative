import mongoose from "mongoose";

const petSchema = new mongoose.Schema(
  {
    nombre: {
      type: String,
      trim: true,
      maxlength: [25, "El nombre no puede tener mas de 25 caracteres"],
    },
    tipo: {
        
    }, 
    usuario: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  {
    timestamps: true,
  }
);

const Pet = mongoose.model("Pet", petSchema);

export default Pet;
