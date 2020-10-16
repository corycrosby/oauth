import { Pool, PoolConfig } from "pg";
import { migrate } from "postgres-migrations";

interface DbConfig {
  database: string,
  user: string,
  password: string,
  host: string,
  port: number
}

const dbconfig: DbConfig = {
  database: process.env.DATABASE || "",
  user: process.env.DB_USER || "",
  password: process.env.DB_PASSWORD || "",
  host: process.env.DB_HOST || "",
  port: +(process.env.DB_PORT || "")
};

export const pool = new Pool(dbconfig);

export async function seedDb() {
  return await migrate(dbconfig, "./migrations");
}
