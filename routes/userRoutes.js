import express from "express";
const userRouter = express.Router();

import {
  /*getAllUsers,*/ getUserID,
  createUser,
} from "../models/userModels.js";

userRouter.get("/", async function (req, res) {
  const result = await getAllUsers();
  return res.status(200).json({ success: true, payload: result });
});

userRouter.get("/", async function (req, res) {
  const result = await getUserID(req.query.user_ID);
  console.log(`this is from week ${result}`);
  return res.status(200).json({ success: true, payload: result });
});

userRouter.post("/", async function (req, res) {
  const newUser = req.body;
  const result = await createUser(newUser);
  return res.status(200).json({ success: true, payload: result });
});

export default userRouter;
