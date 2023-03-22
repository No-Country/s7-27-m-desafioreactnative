import mongoose from "mongoose";

const { DB_URI } = process.env;

mongoose.set("strictQuery", true);

mongoose.connect(DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

export default db;
