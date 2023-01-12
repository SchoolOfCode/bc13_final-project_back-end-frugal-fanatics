import express from "express";
const savingsRouter = express.Router();
import { getSavings, createSavings } from "../models/savingsModels.js";

router.get("/"),
  async function (req, res) {
    const result = await getSavings(req.query.userID);
    console.log(`this is from week ${result}`);
    return res.status(200).json({ success: true, payload: result });
  };

router.post("/"),
  async function (req, res) {
    const users = await createSavings(req.body);
    return res.status(200).json({ success: true, payload: result });
  };

  export default savingsRouter;