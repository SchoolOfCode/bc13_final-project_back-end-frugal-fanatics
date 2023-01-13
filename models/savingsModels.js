import { query } from "../database/index.js";

export async function getAllSavings() {
  const result = await query(`SELECT * FROM savings`);
  return result.rows;
}

export async function getSavings(user_id) {
  const result = await query(
    `SELECT savings_total, overall_target FROM savings WHERE user_ID = $1`,
    [user_id]
  );
  const savingsArray = result.rows;
  console.log(`this is the list by ${savingsArray}`);
  return savingsArray;
}

export async function createSavings(savings) {
  const result = await query(
    `INSERT INTO savings(overall_target, savings_total, pot_totals, user_ID) VALUES ($1, $2, $3, $4) RETURN *;`[
      (savings.overall_target,
      savings.savings_total,
      savings.pot_totals,
      savings.user_ID)
    ]
  );
  const saving = result.rows[0].user_ID;
  return saving;
}
