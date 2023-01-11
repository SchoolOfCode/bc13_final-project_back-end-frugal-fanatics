import pkg from "../db/index.cjs";
const { query } = pkg;

export async function getExpenses(userID) {
  const result = await query(
    `SELECT expense_type, expense_amount FROM expenses WHERE userID = $1`,
    [userID]
  );
  const expenseArray = result.rows;
  console.log(`this is the list by ${expenseArray}`);
  return expenseArray;
}

// const async function createExpenses(expenses) {
//   const result = await query(`INSERT INTO expenses (expense_type, expense_amount, frequency, user_ID) VALUES ($1, $2, $3, $4) RETURN*;` [expenses],
//     [userID]
//   );
// }