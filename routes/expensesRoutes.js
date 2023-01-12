import express from "express";
import { getExpenses, createExpenses } from "../models/expensesModels.js";
import savingsRouter from "./savingsRoutes.js";
const expensesRouter = express.Router();

expensesRouter.get("/"),
  async function (req, res) {
    const result = await getExpenses(req.query.userID);
    console.log(`this is from expenses ${result}`);
    return res.status(200).json({ success: true, payload: result });
  };

expensesRouter.post("/"),
  async function (req, res) {
    const users = await createExpenses(req.body);
    return res.status(200).json({ success: true, payload: result });
  };

  export default expensesRouter;