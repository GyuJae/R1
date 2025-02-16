import 'reflect-metadata';
import database from 'db';
import { beforeAll, afterEach, afterAll } from 'vitest';

const pool = database.$client;

beforeAll(async () => {
  await pool`DROP SCHEMA public CASCADE;`;
  await pool`CREATE SCHEMA public;`;
  await pool`GRANT ALL ON SCHEMA public TO r1_test;`;
});

afterEach(async () => {
  const tables = await pool<{ tablename: string }[]>`
    SELECT tablename FROM pg_tables WHERE schemaname = 'public'
  `;

  if (tables.length > 0) {
    const tableNames = tables.map((t) => `"public"."${t.tablename}"`).join(', ');
    await pool`TRUNCATE TABLE ${pool.unsafe(tableNames)} RESTART IDENTITY CASCADE;`;
  }
});

afterAll(async () => {
  await pool.end();
});
