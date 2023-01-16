import express from "express";
const expensesRouter = express.Router();

import {
  /*getAllExpenses,*/
  getExpenses,
  createExpenses,
} from "../models/expensesModels.js";

expensesRouter.get("/", async function (req, res) {
  const result = await getAllExpenses();
  return res.status(200).json({ success: true, payload: result });
});

expensesRouter.get("/"),
  async function (req, res) {
    const result = await getExpenses(req.query.userID);
    console.log(`this is from expenses ${result}`);
    return res.status(200).json({ success: true, payload: result });
  };

expensesRouter.post("/", async function (req, res) {
  const newExpenses = req.body;
  const result = await createExpenses(newExpenses);
  return res.status(200).json({ success: true, payload: result });
});

export default expensesRouter;
