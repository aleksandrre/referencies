import Tour from "../models/tourModel.js";
import User from "../models/userModel.js";

export const registerUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(200).json("წარმატებით შეიქმნა იუზერი");
  } catch (error) {
    res.status(500).json("სერვერის შეცდომა" + error.message);
  }
};

export const getAllUser = async (req, res) => {
  try {
    const allUser = await User.find().populate("tour", "name");
    res.status(200).json(allUser);
  } catch (error) {
    res.status(500).json("სერვერის შეცდომა" + error.message);
  }
};

export const joinTour = async (req, res) => {
  try {
    const { userId, tourId } = req.body;
    const user = await User.findById(userId);
    const tour = await Tour.findById(tourId);

    if (!user || !tour) {
      return res.status(400).json({ message: "ტური ან იუზერი არ არსებობს" });
    }

    user.tour.push(tourId);
    await user.save();
    tour.user.push(userId);
    await tour.save();
    res.status(200).json({
      success: true,
      message: "წარმატებით დაჯოინდით ტურზე",
    });
  } catch (error) {
    res.status(500).json({ message: "სერვერის შეცდომა" + error.message });
  }
};
const joinOnTour = async (req, res) => {
  try {
    const { userId, tourId } = req.body;
    const user = await User.findById(userId);
    const tour = await Tour.findById(tourId);

    if (!user || !tour) {
      return res.status(400).json("ასეთი იუზერი ან ტური არ არსებობს");
    }
    user.tour.push(tourId);
    await user.save();
    tour.user.push(userId);
    await tour.save();
    res.status(200).json("წარმატებით დაჯოინდით ტურზე");
  } catch (error) {
    res.status(500).json("სერვერის შცდომა");
  }
};
