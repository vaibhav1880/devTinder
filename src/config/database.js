const mongoose = require("mongoose");

// mongoose.connect("link")

const connectDB = async () => {
  await mongoose.connect("link");
};

connectDB()
  .then(() => {
    console.log("Database has been connected");
  })
  .catch((err) => {
    console.error("Database has not been connected");
  });
