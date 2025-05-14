import mongoose from "mongoose";

const tourSChema = new mongoose.Schema({
  name: String,
  destination: String,

  user: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});

const Tour = mongoose.model("Tour", tourSChema);

export default Tour;
