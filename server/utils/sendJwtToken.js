const jwt = require("jsonwebtoken");

const signToken = (id) => {
  return jwt.sign({ id: id }, process.env.JWT_SECRET_KEY, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

exports.sendToken = (user, statusCode, res) => {
  const token = signToken(user._id);
  const cookieOptions = {
    expires: new Date(
      Date.now() + process.env.COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  };
  if (process.env.NODE_ENV === "production") {
    cookieOptions.sameSite = true;
    cookieOptions.secure = true;
  }
  res.cookie("jsonwebtoken", token, cookieOptions);

  user.password = undefined;
  user.passwordChangedAt = undefined;
  res.status(statusCode).json({
    status: "Success",
    user,
  });
};
