import { query } from "../database/index.js";

export async function getIncome(user_id) {
  const result = await query(
    `SELECT totalIncome FROM Income WHERE user_ID = $1`,
    [user_id]
  );
  const IncomeArray = result.rows;
  console.log(`this is the list by ${IncomeArray}`);
  return IncomeArray;
}

export async function createIncome(Income) {
  const result = await query(
    `INSERT INTO income(user_id, totalIncome) VALUES ($1, $2) RETURN *;`[
      (Income.user_id, Income.totalIncome)
    ]
  );
  const saving = result.rows[0].user_id;
  return saving;
}
