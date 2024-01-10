const User = require("../model/userModel");
const AppError = require("../utils/appError");
const catchAsyncError = require("../middleware/catchAsyncError");
const { sendToken } = require("../utils/sendJwtToken");
const sendEmail = require("../utils/sendMail");
const crypto = require("crypto");
const Cart = require("../model/cartModel");

exports.register = catchAsyncError(async (req, res, next) => {
  const user = await User.create(req.body);
  const newCart = new Cart({
    user: user._id,
    menus: [],
    totalPrice: 0,
  });
  await newCart.save();
  sendToken(user, 201, res);
});

exports.login = catchAsyncError(async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return next(
      new AppError("please provide email and password for login", 400)
    );
  }
  const user = await User.findOne({ email }).select("+password");
  if (!user) {
    return next(new AppError("There is no user with that email id", 404));
  }
  if (!user || !(await user.comparePassword(password, user.password))) {
    return next(new AppError("Incorrect email and password", 400));
  }
  sendToken(user, 200, res);
});

exports.logout = catchAsyncError(async (req, res, next) => {
  res.cookie("jsonwebtoken", null, {
    expires: new Date(Date.now()),
    httpOnly: true,
  });
  res.status(200).json({
    status: "Success",
    message: "Logout successfully",
  });
});

exports.forgotPassword = catchAsyncError(async (req, res, next) => {
  const { email } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    return next(new AppError("There is no user with email address", 404));
  }

  const token = user.createResetToken();
  await user.save({ validateBeforeSave: false });

  const firstName = user.firstName;
  const resetUrl = `${process.env.FRONTEND_URL}/resetPassword/${token}`;
  try {
    await sendEmail({
      email: user.email,
      subject: "Reset Your Foodin Password (valid for 10 min)",
      html: `<h3>Hello ${firstName}</h3><p>We received a request to reset your password on foodin.</p><p>To create a new password and regain access to your account, please follow the link below This link will expire in 10 Minutes, so be sure to use it soon.</p><h4> click here to reset the password : <a href=${resetUrl}>Reset Password </a> ${resetUrl}</h4><p> If you didn't request a password reset, you can safely ignore this message, and your password will remain unchanged</p><br/> <h5>Thank you for using foodin!</h5>`,
    });
    res.status(200).json({
      status: "success",
      message: "Token send to email",
    });
  } catch (error) {
    user.passwordResetToken = undefined;
    user.passwordResetExpires = undefined;
    await user.save({ validateBeforeSave: false });
    return next(
      new AppError(
        "There was an error sending the email . Try again later!",
        500
      )
    );
  }
});

exports.resetPassword = catchAsyncError(async (req, res, next) => {
  const token = req.params.token;

  const hashedToken = crypto.createHash("sha256").update(token).digest("hex");

  const user = await User.findOne({
    passwordResetToken: hashedToken,
    passwordResetExpires: { $gt: Date.now() },
  });
  if (!user) {
    return next(new AppError("Token is invalid or has expired", 400));
  }

  user.password = req.body.password;
  user.confirmPassword = req.body.confirmPassword;
  user.passwordResetToken = undefined;
  user.passwordResetExpires = undefined;

  await user.save();
  sendToken(user, 200, res);
});
