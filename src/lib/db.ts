import { drizzle } from "drizzle-orm/node-postgres";

let db: ReturnType<typeof drizzle>;

export function getDb() {
  if (!db) {
    if (!process.env.DATABASE_URL) {
      throw new Error("DATABASE_URL is not set");
    }
    db = drizzle(process.env.DATABASE_URL);
  }
  return db;
}
