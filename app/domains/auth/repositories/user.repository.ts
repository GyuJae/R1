import type { CreateUserRequest } from '../dtos/create-user-request';
import type { User } from '../entities/user';

export interface UserRepository {
  CreateUser(input: CreateUserRequest): Promise<User>;
}
