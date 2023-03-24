import mongoose from "mongoose";

mongoose.set("strictQuery", true);

const db_url = process.env.DB_URI || "mongodb://localhost:27017/noCountryS7-27";
// const options = {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// };
mongoose.connect(db_url);

const db = mongoose.connection;

export default db; 
