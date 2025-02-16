import { pgTable, uuid, text, boolean, jsonb, timestamp } from 'drizzle-orm/pg-core';

// https://supabase.com/docs/guides/auth/users
export const usersTable = pgTable('users', {
  id: uuid('id').defaultRandom().primaryKey(),
  aud: text('aud').notNull(),
  role: text('role').notNull(),
  email: text('email').notNull().unique(),
  emailConfirmedAt: timestamp('email_confirmed_at'),
  phone: text('phone').unique(),
  phoneConfirmedAt: timestamp('phone_confirmed_at'),
  confirmedAt: timestamp('confirmed_at'),
  lastSignInAt: timestamp('last_sign_in_at'),
  appMetadata: jsonb('app_metadata').notNull().default({}),
  userMetadata: jsonb('user_metadata').default({}),
  identities: jsonb('identities').default([]),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
  isAnonymous: boolean('is_anonymous').default(false),
});

// https://supabase.com/docs/guides/auth/identities
export const identitiesTable = pgTable('identities', {
  id: uuid('id').defaultRandom().primaryKey(),
  providerId: text('provider_id').notNull(),
  userId: uuid('user_id')
    .notNull()
    .references(() => usersTable.id, { onDelete: 'cascade' }),
  provider: text('provider').notNull(),
  identityData: jsonb('identity_data').default({}),
  email: text('email'),
  createdAt: timestamp('created_at').defaultNow(),
  lastSignInAt: timestamp('last_sign_in_at'),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

export const channelsTable = pgTable('channels', {});
