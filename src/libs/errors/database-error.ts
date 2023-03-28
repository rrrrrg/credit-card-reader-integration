import { ErrorBase } from './error-base';
import { ErrorCodes } from './error-code';

/**
 * Used to indicate that an Error from Database
 *
 * @class DatabaseError
 * @extends {ErrorBase}
 */
export class DatabaseError extends ErrorBase {
  readonly code = ErrorCodes.datebaseError;
  readonly subcode?: string | undefined;

  constructor(message: string, metadata?: Record<string, unknown>, cause?: unknown) {
    super(message, metadata, cause);
  }
}
