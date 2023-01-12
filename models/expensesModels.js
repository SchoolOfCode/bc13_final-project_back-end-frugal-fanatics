import { query } from "../database/index.js";

export async function getAllExpenses() {
  const result = await query(`SELECT * FROM expenses`);
  return result.rows;
}

export async function getExpenses(user_ID) {
  const result = await query(
    `SELECT expense_type, expense_amount FROM expenses WHERE userID = $1`,
    [user_ID]
  );
  const expenseArray = result.rows;
  console.log(`this is the list by ${expenseArray}`);
  return expenseArray;
}

export async function createExpenses({ expense_type, expense_amount,
  frequency, user_ID }) {
  const result = await query(
    `INSERT INTO expenses (expense_type, expense_amount, frequency, user_id) VALUES ($1, $2, $3, $4) RETURNING *`[
      expense_type,
      expense_amount,
      frequency,
      user_ID
    ]
  );
  const expense = result.rows;
  return expense;
}
