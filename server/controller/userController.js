const catchAsyncError = require("../middleware/catchAsyncError");
const User = require("../model/userModel");

exports.getAllUser = catchAsyncError(async (req, res, next) => {
  const user = await User.find();

  res.status(200).json({
    status: "Success",
    result: user.length,
    user,
  });
});
