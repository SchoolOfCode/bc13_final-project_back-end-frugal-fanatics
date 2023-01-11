import pkg from "../db/index.cjs";
const { query } = pkg;
//what is the parameter to get user ID
export async function getUserId() {
  const result = await query(`SELECT userID FROM users WHERE user = $1`, [
    week,
  ]);
  const userIDArray = result.rows;
  console.log(`this is the list  by ${userIDArray}`);
  return userIDArray;
}
export async function getExpenses(userID) {
  const result = await query(
    `SELECT expense_type, expense_amount FROM expenses WHERE userID = $1`,
    [userID]
  );
  const expenseArray = result.rows;
  console.log(`this is the list  by ${expenseArray}`);
  return expenseArray;
}
export async function getSavings(userID) {
  const result = await query(
    `SELECT savings_total, overall_target FROM savings WHERE userID = $1`,
    [userID]
  );
  const savingsArray = result.rows;
  console.log(`this is the list  by ${savingsArray}`);
  return savingsArray;
}
