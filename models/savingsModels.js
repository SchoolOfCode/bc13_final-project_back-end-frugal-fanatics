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
