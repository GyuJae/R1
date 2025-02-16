import { drizzle } from 'drizzle-orm/postgres-js';
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const database = drizzle(process.env.DATABASE_URL!);

export default database;
