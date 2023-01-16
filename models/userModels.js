import { query } from "../database/index.js";

// export async function getAllUsers() {
//   const result = await query(`SELECT * FROM users`);
//   return result.rows;
// }

export async function getUserID(user_name) {
  const result = await query(`SELECT user_ID FROM users WHERE user_name = $1`, [
    user_name,
  ]);
  const userIDArray = result.rows;
  console.log(`this is the list by ${userIDArray}`);
  return userIDArray;
}

export async function createUser({
  user_name,
  auth_token,
  first_name,
  last_name,
}) {
  const result = await query(
    `INSERT INTO users (user_name, auth_token, first_name, last_name) VALUES ($1, $2, $3, $4) RETURNING *`,
    [user_name, auth_token, first_name, last_name]
  );
  const user = result.rows;
  return user;
}
