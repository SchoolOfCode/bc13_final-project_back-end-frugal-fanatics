import express from "express";
const router = express.Router();

import { getSavings } from "../models/savingsModels.js";

router.get("/"),
  async function (req, res) {
    const result = await getSavings(req.query.user_ID);
    console.log(`this is from week ${result}`);
    return res.status(200).json({ success: true, payload: result });
  };
