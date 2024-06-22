// getting-started.js
import mongoose from "mongoose";
import app from "./app";
import config from "./config";

async function main() {
  try {
    await mongoose.connect(config.db_url as string);
  } catch (error) {
    console.log(error);
  }

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled

  //   const port = 5000;

  app.listen(config.port, () => {
    console.log(`Example app listening on port ${config.port}`);
  });
}

main();
