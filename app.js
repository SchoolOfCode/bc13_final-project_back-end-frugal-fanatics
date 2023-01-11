import express from "express";
import morgan from "morgan";
import cors from "cors";

const app = express();
const PORT = process.env.PORT;
//const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

app.use(morgan("dev"));
app.use(cors("*"));
app.use(express.json());

app.use("/api/userRoutes", userRoutes);
app.use("/api/expensesRoutes", expensesRoutes);
app.use("/api/savingsRoutes", savingsRoutes);
export default app;
