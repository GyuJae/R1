import 'reflect-metadata';
import database from 'db';
import { beforeAll } from 'vitest';
import { migrate } from 'drizzle-orm/postgres-js/migrator';

beforeAll(async () => {
  await migrate(database, { migrationsFolder: 'drizzle' });
});
