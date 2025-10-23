import mongoose from "mongoose";
const userSchema = mongoose.Schema(
  {
    fullname: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
    },
    password: {
      type: String,
      require: true,
    },
    confirmPassword: {
      type: String,
    },
    coverUrl: {
      type: String,
      default:
        "https://img.freepik.com/premium-vector/person-with-blue-shirt-that-says-name-person_1029948-7040.jpg", // default image
    },
  },
  { timestamps: true }
); //createdAt & updatedAt
const User = mongoose.model("User", userSchema);
export default User;
