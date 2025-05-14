import Tour from "../models/tourModel.js";

export const registerTour = async (req, res) => {
  try {
    const user = await Tour.create(req.body);
    res.status(200).json("წარმატებით შეიქმნა ტური");
  } catch (error) {
    res.status(500).json("სერვერის შეცდომა" + error.message);
  }
};

export const getAllTour = async (req, res) => {
  try {
    const allTour = await Tour.find();
    res.status(200).json(allTour);
  } catch (error) {
    res.status(500).json("სერვერის შეცდომა" + error.message);
  }
};
