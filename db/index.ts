import { drizzle } from 'drizzle-orm/postgres-js';
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const db = drizzle(process.env.DATABASE_URL!);

export default db;
