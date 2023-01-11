import pkg from "../db/index.cjs";
const { query } = pkg;

export async function getSavings(userID) {
  const result = await query(
    `SELECT savings_total, overall_target FROM savings WHERE userID = $1`,
    [userID]
  );
  const savingsArray = result.rows;
  console.log(`this is the list  by ${savingsArray}`);
  return savingsArray;
}
