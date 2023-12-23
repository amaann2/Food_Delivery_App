const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const validator = require("validator");

const userSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "Please Enter the first name"],
    validate: {
      validator: function (fname) {
        return /^[a-zA-Z]+$/.test(fname);
      },
      message: "First name must only contain characters",
    },
  },
  lastName: {
    type: String,
    required: [true, "Please Enter the last name"],
    validate: {
      validator: function (fname) {
        return /^[a-zA-Z]+$/.test(fname);
      },
      message: "Last name must only contain characters",
    },
  },
  email: {
    type: String,
    required: [true, "Please Enter the Email Adress"],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, "Please Enter the valid Email Adress"],
  },
  password: {
    type: String,
    required: [true, "Please enter the password"],
    minlength: [8, "Password should be greater than 8 characters"],
    maxlength: [20, "Password should be less than 20 characters"],
    select: false,
    validate: {
      validator: function (password) {
        const hasUpper = /[A-Z]/.test(password);
        const hasLower = /[a-z]/.test(password);
        const hasDigit = /\d/.test(password);
        const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

        return hasUpper && hasLower && hasDigit && hasSpecialChar;
      },
      message:
        "Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character",
    },
  },
  confirmPassword: {
    type: String,
    required: [true, "Please enter confirm password"],
    validate: {
      validator: function (confirmPassword) {
        return confirmPassword === this.password;
      },
      message: "Password are not the same",
    },
  },
  role: {
    type: String,
    enum: ["customer", "owner", "admin", "rider"],
    default: "customer",
    required: true,
  },
  phone: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 12);
  this.confirmPassword = undefined;
  next();
});

userSchema.methods.comparePassword = async function (
  inputPassword,
  userPassword
) {
  return await bcrypt.compare(inputPassword, userPassword);
};

const User = mongoose.model("User", userSchema);
module.exports = User;
