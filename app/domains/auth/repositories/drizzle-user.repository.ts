import { injectable } from 'tsyringe';
import type { UserRepository } from './user.repository';
import type { CreateUserRequest } from '../dtos/create-user-request';
import { User } from '../entities/user';
import database from 'db';
import { usersTable } from 'db/schema';

@injectable()
export class DrizzleUserRepository implements UserRepository {
  // TODO: 임시 메소드
  async CreateUser(input: CreateUserRequest): Promise<User> {
    const users = await database
      .insert(usersTable)
      .values({
        aud: 'authenticated', // 임시값
        role: 'user', // 임시값
        email: input.toJSON().email,
        emailConfirmedAt: undefined,
        phone: undefined,
        phoneConfirmedAt: undefined,
        confirmedAt: undefined,
        lastSignInAt: undefined,
        appMetadata: {},
        userMetadata: {},
        identities: [],
        isAnonymous: false,
      })
      .returning();

    return User.fromSchema(users[0]);
  }
}
