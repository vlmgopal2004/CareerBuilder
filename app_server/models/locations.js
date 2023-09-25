const mongoose = require('mongoose');

// Define the login schema
const loginSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true, // Ensures each email is unique
  },
  password: {
    type: String,
    required: true,
  },
});

// Create a Mongoose model for login
const Login = mongoose.model('Login', loginSchema);

// Define the signup schema
const signupSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true, // Ensures each email is unique
  },
  password: {
    type: String,
    required: true,
  },
});

// Create a Mongoose model for signup
const Signup = mongoose.model('Signup', signupSchema);

// Define the user schema (if needed)
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// Create a Mongoose model for user (if needed)
const User = mongoose.model('User', userSchema);

// Export the models
module.exports = {
  Login,
  Signup,
  User, // Export the User model if needed
};
