const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
import dburi from "./dburi.js";

const app = express();
app.use(cors());
const uri = dburi;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const phoneSchema = new mongoose.Schema({
  name: String,
  price: Number,
  storage: Array,
  description: String,
  colors: Array,
  leasing: String,
});

const Phone = mongoose.model("Phone", phoneSchema);

app.post("api/phones", async (req, res) => {
  const { name, price, storage, description, colors, leasing } = req.body;

  const phone = new Phone({
    name,
    price,
    storage,
    description,
    colors,
    leasing,
  });

  await phone.save();

  try {
    res.status(201).json({ succes: true, message: "Phone created" });
  } catch (error) {
    console.error("Error creating phone");
    res.status(500).json({ succes: false, message: "Error creating phone" });
  }
});

app.get("api/data", async (req, res) => {
  const phones = await Phone.find();

  try {
    res.status(200).json({ succes: true, data: phones });
  } catch (error) {
    console.error("Error getting phones");
    res.status(500).json({ succes: false, message: "Error getting phones" });
  }
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
