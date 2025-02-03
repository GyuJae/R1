import { singleton } from 'tsyringe';
import db from '../../../db';
import { usersTable } from '../../../db/schema';
import { eq } from 'drizzle-orm';

@singleton()
export class UserRepository {
  async updateName(email: string, name: string): Promise<void> {
    await db.update(usersTable).set({ name }).where(eq(usersTable.email, email));
  }
}