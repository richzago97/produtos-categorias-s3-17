import { Client } from "pg";
import "dotenv/config";

const database = new Client(
  process.env.NODE_ENV === "test"
    ? {
        user: process.env.TEST_USER,
        host: process.env.TEST_HOST,
        database: process.env.TEST_DATABASE,
        password: String(process.env.TEST_PASSWORD),
        port: process.env.TEST_PORT,
      }
    : {
        user: process.env.POSTGRES_USER,
        host: process.env.POSTGRES_HOST,
        database: process.env.POSTGRES_DB,
        password: String(process.env.POSTGRES_PASSWORD),
        port: process.env.POSTGRES_PORT,
      }
);

export const startDatabase = async () => {
  await database.connect();
  console.log("Database connected!");
};

export default database;
