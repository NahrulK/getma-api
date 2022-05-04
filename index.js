const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://nahrul:nahrul123@getama-industry.phxdi.mongodb.net/getama?retryWrites=true&w=majority"
  )
  .then(() => console.log("DB Connection Successfull!"))
  .catch((err) => {
    console.log(err);
  });

app.listen(5000, () => {
  console.log("Backend sedang berjalan!");
});
