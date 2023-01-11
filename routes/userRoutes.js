import express from "express";
const router = express.Router();

import { getUserId, getSavings, getExpenses } from "../models/models.js";

router.get("/"),
  async function (req, res) {
    const result = await getUserId(req.query.userID);
    console.log(`this is from week ${result}`);
    return res.status(200).json({ success: true, payload: result });
  };
