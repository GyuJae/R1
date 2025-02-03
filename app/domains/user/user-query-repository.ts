import db from 'db';
import { usersTable } from 'db/schema';
import { eq } from 'drizzle-orm';
import { singleton } from 'tsyringe';

@singleton()
export class UserQueryRepository {
  async findAll() {
    return await db.select().from(usersTable).where(eq(usersTable.email, 'Alice@google.com')).limit(1).execute();
  }
}
