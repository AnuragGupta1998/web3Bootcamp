import express from "express";
import connectDB from "./dbConnect.js";
import { z } from "zod";
import UserModel from "./user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { Keypair,Transaction,Connection } from "@solana/web3.js";
import cookieParser from "cookie-parser";
import userMiddleware from "./userMiddle.js";

import dotenv from "dotenv";
dotenv.config();
import cors from "cors";

const port = 5001;

const app = express();
app.use(cors({
  origin: "*",
  credentials: true,
}));

app.use(cors());

app.use(cookieParser());
app.use(express.json());

//connecting to mongoDB
connectDB()
  .then(() => {
    app.on("err", (err) => {
      console.log("app is not connected to DB");
    });
  })
  .catch((e) => console.log(e));

const inputValidationSchema = z.object({
  username: z.string(),
  password: z.string(),
});

app.get("/about", (req, res) => {
  res.json({
    msg: "Default route of the app",
  });
});

app.post("/api/v1/signup", async (req, res) => {
  //validating the request body using zod
  const isInputValid = inputValidationSchema.safeParse(req.body);
  if (!isInputValid.success) {
    return res.status(400).json({
      err: isInputValid.error.errors,
    });
  }

  //destructuring the request body
  const { username, password } = req.body;

  //checking weather user already exists or not in DB
  const userExists = await UserModel.findOne({ username });
  if (userExists) {
    return res.status(400).json({
      error: "User already exists",
    });
  }

  //hashing password
  const hashedPassword = await bcrypt.hash(password, 10);

  //generating public and private keys
  const keypair = new Keypair();

  const privateKey = keypair.secretKey.toString();
  const publicKey = keypair.publicKey.toString();

  console.log("publicKey=",publicKey);
  //creating user into DB
  const userCreated = await UserModel.create({
    username,
    password: hashedPassword,
    privateKey: privateKey,
    publicKey: publicKey,
  });

  if (!userCreated) {
    res.status(500).json({
      error: "User creation failed",
    });
  }

  return res.json({
    msg: "user signUp route",
    publicKey,
  });
});

app.post("/api/v1/signin", async (req, res) => {
  //validating the request body using zod
  const isInputValid = inputValidationSchema.safeParse(req.body);
  if (!isInputValid.success) {
    return res.status(400).json({
      err: isInputValid.error.errors,
    });
  }
  const { username, password } = req.body;

  //checking weather user exists or not in DB
  const userExists = await UserModel.findOne({ username });
  if (!userExists) {
    return res.status(400).json({
      error: "User does not exists",
    });
  }

  const isPasswordvalid = await bcrypt.compare(password, userExists.password);

    //validating password
  if (!isPasswordvalid) {
    return res.status(400).json({
      error: "Invalid password",
    });
  }

  const token = jwt.sign(
    {
      ID: userExists._id,
    },
    process.env.JWT_SECRET
  );

  if (!token) {
    res.status(500).json({
      error: "Token generation failed",
    });
  }
    res.cookie("userToken", token, {
        httpOnly: true,
        secure: "true", // Set to true if using HTTPS
    });

  res.status(200).json({
    msg: "user signIn route",
    userToken:token
  });
});

app.post("/api/v1/txn/sign",userMiddleware, async (req, res) => {

  console.log("txn sign route")
    const userId = req.userId;
    const txn = req.body.message;

    if (!txn) {
        return res.status(400).json({
            error: "Transaction is required",
        });
    } 

    console.log("serialize txn in route", txn);


    // Here you would typically fetch the user from the database using userId
    // and then use their private key to sign the transaction.
    // For demonstration, we'll just return a success message.
    const fincdUserInDB = await UserModel.findById(userId);
    if (!fincdUserInDB) {
      return res.status(404).json({
        error: "User not found",
      });
    }   
    
    //deserialize the transaction
    const transaction = Transaction.from(txn);

    //sign the transaction using private key
    const privateKey = Uint8Array.from(fincdUserInDB.privateKey.split(",").map(Number));
    const keypair = Keypair.fromSecretKey(privateKey);

    transaction.sign(keypair);

  res.json({
    msg: "user transaction signing route",
    user:fincdUserInDB
  });
});


app.post("/api/v1/txn", (req, res) => {
  res.json({
    msg: "user all transaction route",
  });
});

app.listen(port, () => console.log(`app is listening on port ${port}`));
