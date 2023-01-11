import express from "express";
const router = express.Router();

import { getUserID, createUser } from "../models/userModels.js";

router.get("/"),
  async function (req, res) {
    const result = await getUserID(req.query.user_ID);
    console.log(`this is from week ${result}`);
    return res.status(200).json({ success: true, payload: result });
  };

  router.post("/"),
    async function (req, res) {
    const users = await createUser(req.body);
    return res.status(200).json({ success: true, payload: result });
    };