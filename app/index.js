// @/main.js
const express = require("express");
const mongoose = require("mongoose");

const app = express();

const {Dog} = require("./models");

app.get("/", async (req, res) => {
    const newDog = new Dog({
      name: "test"
    });

    await newDog.save();

    const allDogs = await Dog.find();

    console.log(allDogs);

    return res.status(200).json(allDogs);
});

const start = async () => {
  try {
    await mongoose.connect(
      "mongodb://host.docker.internal:27017/mongoose"
    );
    app.listen(3000, () => console.log("Server started on port 3000"));
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

start();