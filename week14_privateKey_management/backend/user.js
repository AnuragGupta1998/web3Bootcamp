import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    username: {
      type:String,
      required: true,
      unique: true,
      
    },
    password: {
      type: String,
      required: true,
    },
    privateKey: {
      type: String,
      required: true,
      minlength: 10,
     
    },
    publicKey: {
      type: String,
      required: true,
      minlength: 10,
      
    },
  },
  { timestamps: true }
);

const UserModel = mongoose.model("users", UserSchema);

export default UserModel;
