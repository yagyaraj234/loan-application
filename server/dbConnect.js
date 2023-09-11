const mongoose = require("mongoose");

async function dbConnect() {
  try {
    mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    const connection = mongoose.connection;

    connection.on("Connected", () => {
      console.log("MongoDb Connected successfully");
    });

    connection.on("error", (err) => {
      console.log("MongoDB connecttion error. " + err);
      process.exit();
    });
  } catch (error) {
    console.log("Something wrong");
    console.log(error);
  }
}

module.exports = dbConnect;
