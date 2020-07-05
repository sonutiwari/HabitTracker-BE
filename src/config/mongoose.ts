// Import libraaries required.
import mongoose from "mongoose";
import dotenv from "dotenv";
class DBConnection {
  dbConnection: mongoose.Connection;
  constructor() {
    this.dbConnection = null;
  }
  connect() {
    dotenv.config();
    // Connect to DB
    mongoose.connect(process.env.DBURL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    });
    // Get connection object.
    this.dbConnection = mongoose.connection;
    // Set up success or failure message.
    this.dbConnection.on(
      "error",
      console.error.bind(console, "connection error:")
    );
    this.dbConnection.once("open", function () {
      console.log("Successfully connected to mongodb");
    });
  }

  close() {
    this.dbConnection.close();
  }
}

// Import the module.
export default DBConnection;
