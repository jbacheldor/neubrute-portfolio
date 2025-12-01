import { createClient } from "@libsql/client/web";

export const turso = createClient({
  url: process.env.DBURL || '',
  authToken: process.env.TOKEN,
});