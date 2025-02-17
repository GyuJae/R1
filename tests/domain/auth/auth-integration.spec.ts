import { container } from 'tsyringe';
import { beforeAll, beforeEach, describe, expect, it } from 'vitest';
import { CreateUserRequest } from '~/domains/auth/dtos/create-user-request';
import { DrizzleUserRepository } from '~/domains/auth/repositories/drizzle-user.repository';
import type { UserRepository } from '~/domains/auth/repositories/user.repository';
import database from 'db';
import { afterEach } from 'node:test';

describe('계정 관련 테스트', () => {
  let userRepository: UserRepository;

  beforeAll(async () => {
    userRepository = container.resolve(DrizzleUserRepository);
  });

  beforeEach(async () => {});

  afterEach(async () => {});

  it('계정을 이메일을 통해 생성할 수 있습니다.', async () => {
    // Given
    const input = CreateUserRequest.of({ email: 'test@test.com' });

    // When
    const user = await userRepository.CreateUser(input);

    // Then
    expect(user.GetEmail()).toBe('test@test.com');
  });
});
