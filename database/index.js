import pg from "pg";
const databaseURL = process.env.POSTGRES_CONNECTION_URL;

if (undefined === databaseURL) {
    throw new Error(
        'This requires a databse url. Did you forget to create a .env file?'
    );
}

const pool = new pg.Pool({
    connectionString: databaseURL,
});

function query(text, params) {
    return pool.query(text, params);
}

export { query };