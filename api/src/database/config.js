const mongoose = require("mongoose");
const uri = "mongodb://localhost:27017/newdb";

mongoose.set("strictQuery", true);

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((db) => console.log("Base de datos conectada"))
  .catch((err) => console.log(err));

mongoose.connection.on("open", (_) => {
  console.log("Conectado a", uri);
});
