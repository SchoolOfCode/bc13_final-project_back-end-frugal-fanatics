import { query } from "../database/index.js";

export async function getExpenses(userID) {
  const result = await query(
    `SELECT expense_type, expense_amount FROM expenses WHERE userID = $1`,
    [userID]
  );
  const expenseArray = result.rows;
  console.log(`this is the list by ${expenseArray}`);
  return expenseArray;
}

export async function createExpenses(expenses) {
  const result = await query(
    `INSERT INTO expenses (expense_type, expense_amount, frequency, user_ID) VALUES ($1, $2, $3, $4) RETURN*;`[
      (expenses.expense_type,
      expenses.expense_amount,
      expenses.frequency,
      expenses.user_ID)
    ]
  );
  const expense = result.rows[0].user_ID;
  return expense;
}
