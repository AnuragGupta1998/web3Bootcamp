import mongoose from "mongoose";

const UserSchema = await mongoose.Schema({
    username:string,
    password:string,
    publicKey:string,
    privateKey:string
});

const UserModel = mongoose.Model("users",UserSchema);
 
module.exports={
    UserModel
}