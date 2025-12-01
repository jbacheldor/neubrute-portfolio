import { createClient } from "@libsql/client/web";

export const turso = createClient({
  url: process.env.DB_URL || '',
  authToken: process.env.TOKEN,
});