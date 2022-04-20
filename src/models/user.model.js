import mongoose from "mongoose";

const UserModel = mongoose.model(
  "User",
  mongoose.Schema(
    {
      username: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
      password: {
        type: String,
        required: true,
      },
      roles: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Role",
        },
      ],
    },
    { timestamps: true }
  )
);

export default UserModel;
