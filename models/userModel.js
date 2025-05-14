import mongoose, { mongo } from "mongoose";

const userSChema = new mongoose.Schema({
  name: String,

  age: Number,
  tour: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Tour",
    },
  ],
});

const User = mongoose.model("User", userSChema);
export default User;
