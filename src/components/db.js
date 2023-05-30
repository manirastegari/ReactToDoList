const mongoose = require("mongoose");

// Connection URI for your MongoDB database
const mongoURI = "mongodb+srv://mani16032:mani16032@cluster0.idomekg.mongodb.net/your-database-name?retryWrites=true&w=majority";

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log("Connected to MongoDB database");
}).catch((error) => {
  console.error("MongoDB connection error:", error);
});

const db = mongoose.connection;

module.exports = db;






// const mongoose = require("mongoose");

// const mongoURI = mongoose.connect("mongodb+srv://mani16032:mani16032@cluster0.idomekg.mongodb.net/?retryWrites=true&w=majority", {useNewUrlParser: true});

// mongoose.connect(mongoURI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// const db = mongoose.connection;

// db.on("error", console.error.bind(console, "MongoDB connection error:"));
// db.once("open", () => {
//   console.log("Connected to MongoDB database");
// });

// module.exports = db;
