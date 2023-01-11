import pkg from "../db/index.cjs";
const { query } = pkg;

export async function getUserID() {
  const result = await query(`SELECT userID FROM users WHERE user = $1`, [
    week,
  ]);
  const userIDArray = result.rows;
  console.log(`this is the list by ${userIDArray}`);
  return userIDArray;
}

export async function createUser(newUser) {
  const result = await query(`INSERT INTO users (user_name, auth_token, first_name, last_name) VALUES ($1, $2, $3, $4) RETURN*;`, [newUser.user_name, newUser.auth_token, newUser.first_name, newUser.last_name]);
  const user=result.rows[0].user_ID;
  return user;
}