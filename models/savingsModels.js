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

export async function createSavings({ overall_target, savings_total, pot_totals, user_id }) {
  const result = await query(
    `INSERT INTO savings(overall_target, savings_total, pot_totals, user_id) VALUES ($1, $2, $3, $4) RETURNING *`, [
      overall_target,
      savings_total,
      pot_totals, 
      user_id
    ]
  );
  const saving = result.rows;
  return saving;
}
