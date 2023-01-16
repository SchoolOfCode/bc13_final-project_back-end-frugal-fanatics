import { query } from "../database/index.js";

// export async function getAllIncome() {
//   const result = await query(`SELECT * FROM income`);
//   return result.rows;
// }

export async function getIncome(userid) {
  const result = await query(
    `SELECT total_income FROM Income WHERE user_ID = $1`,
    [userid.user_id]
  );
  const IncomeArray = result.rows;
  console.log(`this is the list by ${IncomeArray}`);
  return IncomeArray;
}

export async function createIncome({ total_income, user_id }) {
  const result = await query(
    `INSERT INTO income (total_income, user_id) VALUES ($1, $2) RETURNING *;`,
    [total_income, user_id]
  );
  const newIncome = result.rows;
  return newIncome;
}
