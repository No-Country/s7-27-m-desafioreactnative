import mongoose from "mongoose";
import config from "../config/config";

mongoose.set("strictQuery", true);

mongoose.connect(config.dbUrl);

const db = mongoose.connection;

export default db; 
