import User from "../models/User.js";

const getAllUser = async (req, res) => {
  const users = await User.find();
  const userCounts = await User.countDocuments();

  res.status(200).json({
    success: true,
    msg: "User get Successfully!",
    count: userCounts,
    data: users,
  });
};

const getUserByID = async (req, res) => {
  const userId = req.params.id;
  const user = await User.findById(userId);

  if (!user) {
    return res.status(404).json({ success: false, msg: "User not found" });
  }
  res
    .status(200)
    .json({ success: true, data: user, msg: "successfully request" });
};

const deleteUser = async (req, res) => {
  const userId = req.params.id;
  const user = await User.findByIdAndDelete(userId);

  if (!user) {
    res.status(404).json({
      success: false,
      msg: "user is not found",
    });
  }

  res.status(200).json({
    success: true,
    msg: "User successfully Deleted...",
  });
};

export { getAllUser, getUserByID, deleteUser };
