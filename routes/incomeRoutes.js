import express from "express";
const incomeRouter = express.Router();
import { createIncome, getIncome } from "../models/IncomeModels.js";

incomeRouter.get("/"),
  async function (req, res) {
    const result = await getIncome(req.query.userID);
    console.log(`this is from expenses ${result}`);
    return res.status(200).json({ success: true, payload: result });
  };

incomeRouter.post("/", async function (req, res) {
  const newExpenses = req.body;
  const result = await createIncome(newExpenses);
  return res.status(200).json({ success: true, payload: result });
});

export default incomeRouter;
