import { Client } from "pg";

const database = new Client(
  process.env.NODE_ENV === "test"
    ? {
        user: "giovana-richard",
        host: "localhost",
        database: "tests_products",
        password: "123456",
        port: 5432,
      }
    : {
        user: "postgres",
        host: process.env.DB_HOST,
        database: process.env.POSTGRES_DB,
        password: process.env.POSTGRES_PASSWORD,
        port: 5432,
      }
);

export const startDatabase = async () => {
  await database.connect();
  console.log("Database connected!");
};

export default database;
