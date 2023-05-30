const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://mani16032:mani16032@cluster0.idomekg.mongodb.net/?retryWrites=true&w=majority", {useNewUrlParser: true});
const mongoURI = "<YOUR_MONGODB_URI>";

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB database");
});

module.exports = db;
