import mongoose from "mongoose";

export async function connect() {
  try {
    if (process.env.MONGO_URI) {
      mongoose.connect(process.env.MONGO_URI);
      const connection = mongoose.connection;

      connection.on("connected", () => {
        console.log("MongoDB connected");
      });

      connection.on("error", (error) => {
        console.log(
          "MongoDB connection error, please make sure database is upand running." +
            error
        );
        process.exit();
      });
    }
    // mongoose.connect(process.env.MONGO_URI!);
  } catch (error) {
    console.log("Something went wrong in connecting to DB");
    console.log(error);
  }
}
