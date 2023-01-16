import express from "express";
const incomeRouter = express.Router();
import {
  createIncome,
  getIncome,
  getAllIncome,
} from "../models/incomeModels.js";

incomeRouter.get("/", async function (req, res) {
  const result = await getAllIncome();
  return res.status(200).json({ success: true, payload: result });
});
incomeRouter.get("/"),
  async function (req, res) {
    const result = await getIncome(req.query.userID);
    console.log(`this is from gitexpenses ${result}`);
    return res.status(200).json({ success: true, payload: result });
  };

incomeRouter.post("/", async function (req, res) {
  const newIncome = req.body;
  const result = await createIncome(newIncome);
  return res.status(200).json({ success: true, payload: result });
});

export default incomeRouter;
