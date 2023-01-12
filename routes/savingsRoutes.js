import express from "express";
const savingsRouter = express.Router();
import { getAllSavings, getSavings, createSavings } from "../models/savingsModels.js";

savingsRouter.get("/", async function (req, res) {
  const result = await getAllSavings();
  return res.status(200).json({ success: true, payload: result});
});

savingsRouter.get("/", async function (req, res) {
    const result = await getSavings(req.query.user_ID);
    console.log(`this is from week ${result}`);
    return res.status(200).json({ success: true, payload: result });
  });

savingsRouter.post("/", async function (req, res) {
    const users = await createSavings(req.body);
    return res.status(200).json({ success: true, payload: result });
  });

  export default savingsRouter;