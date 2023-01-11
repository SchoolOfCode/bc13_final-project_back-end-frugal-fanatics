import express from "express";
const router = express.Router();

import { getExpenses } from "../models/expensesModels.js";

router.get("/"),
  async function (req, res) {
    const result = await getExpenses(req.query.user_ID);
    console.log(`this is from week ${result}`);
    return res.status(200).json({ success: true, payload: result });
  };
