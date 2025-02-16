import { z } from 'zod';
import { InvalidRequestException } from '~/common/exceptions/invalid-request-exception';

export class CreateUserRequest {
  static readonly ZOD_SCHEMA = z.object({
    email: z.string().email({ message: '유효하지 않은 이메일 형식입니다.' }),
  });

  private constructor(private readonly input: { email: string }) {}

  static of(input: { email: string }): CreateUserRequest {
    const validated = this.ZOD_SCHEMA.safeParse(input);
    if (validated.success == false) {
      throw InvalidRequestException.fromZodError(validated.error);
    }

    return new CreateUserRequest(input);
  }

  toJSON() {
    return this.input;
  }
}
