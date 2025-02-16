import type { usersTable } from 'db/schema';

export class User {
  private constructor(private readonly userSchema: typeof usersTable.$inferSelect) {}

  static fromSchema(userSchema: typeof usersTable.$inferSelect) {
    return new User(userSchema);
  }

  GetEmail() {
    return this.userSchema.email;
  }
}
