import express from "express";
import morgan from "morgan";
import cors from "cors";

import userRouter from "./routes/userRoutes.js";
import expensesRouter from "./routes/expensesRoutes.js";
import savingsRouter from "./routes/savingsRoutes.js";

const app = express();
const PORT = process.env.PORT || 3000;
//const PORT = 3000;

app.use(morgan("dev"));
app.use(cors("*"));
app.use(express.json());

app.use("/api/userRoutes", userRouter);
app.use("/api/expensesRoutes", expensesRouter);
app.use("/api/savingsRoutes", savingsRouter);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

export default app;