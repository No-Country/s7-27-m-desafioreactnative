// import { Request, Response } from "express";
// import wrapAsync from "../utils/wrapAsync";
// import Pet from "../db/models/pet";
// import { InterfacePet } from "../db/models/pet";

// export const mostrarAccesorios = wrapAsync(
//   async (req: Request, res: Response) => {
//     const { id } = req.body;
//     const mascota = await Pet.findOne<InterfacePet>({
//       _id: id,
//       usuario: req.user?._id,
//     });

//     return res.status(200).json({ accesorios: mascota?.accesorios });
//   }
// );
