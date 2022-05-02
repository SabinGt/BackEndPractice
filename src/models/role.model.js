import mongoose from "mongoose";
const Role = mongoose.model(
  "Role",
  mongoose.Schema(
    {
      name: {
        type: String,
      },
    },
    { timestapms: true }
  )
);
export default Role;
