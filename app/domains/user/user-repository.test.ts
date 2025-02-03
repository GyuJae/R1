import db from 'db';
import { usersTable } from 'db/schema';
import { eq } from 'drizzle-orm';
import { describe, expect, it } from 'vitest';

describe('Drizzle 연결 테스트', () => {
  it('insert', async () => {
    // Given
    // TODO Test Transaction or Test Context
    // await db.insert(usersTable).values({
    //   name: 'Alice',
    //   age: 30,
    //   email: 'Alice@google.com',
    // });

    // When
    const users = await db.select().from(usersTable).where(eq(usersTable.email, 'Alice@google.com'));

    // Then
    expect(users).toHaveLength(1);
    expect(users[0].name).toBe('Alice');
    expect(users[0].age).toBe(30);
    expect(users[0].email).toBe('Alice@google.com');
  });
});
