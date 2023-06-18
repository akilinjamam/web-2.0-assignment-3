import mongoose from "mongoose";
import app from "./app";
import { Server } from "http";
import configuration from "./configuration/index";

let server: Server;
const port = 5000;

const serverConnector = async () => {
  try {
    await mongoose.connect(configuration.database_url as string);
    console.log("database connected successfully");
    // listening to port
    server = app.listen(configuration.port, () => {
      console.log(`app is listening on port ${configuration.port}`);
    });
  } catch (error) {
    console.log(`database connection failed: ${error}`);
  }
};

serverConnector();
