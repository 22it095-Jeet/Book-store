const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/book-routes");
const cors = require("cors"); //cross origin resource sharing
const app = express();

// Middlewares
app.use(express.json());
app.use(cors());
app.use("/books", router); // localhost:5000/books


mongoose
  .connect(
    "mongodb+srv://admin:1192004harsh@cluster0.gv4ocpr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => console.log("Connected To Database"))
  .then(() => {
    app.listen(5000);
  })
  .catch((err) => console.log(err));