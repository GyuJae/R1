import type { ZodError } from 'zod';

export class InvalidRequestException extends Error {
  private constructor(public readonly message: string) {
    super(message);
  }

  static fromZodError(error: ZodError): InvalidRequestException {
    return new InvalidRequestException(error.message);
  }
}
