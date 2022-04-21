import mongoose from "mongoose";
const Contact = mongoose.model(
  "Contact",
  mongoose.Schema({
    name: {
      type: String,
      unique: true,
    },
    email: {
      type: String,
      unique: true,
    },
    message: {
      type: String,
    },
  })
);

export default Contact;
