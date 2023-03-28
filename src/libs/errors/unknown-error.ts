import { ErrorBase } from './error-base';
import { ErrorCodes } from './error-code';

/**
 * Used to indicate an unknown error
 *
 * @class UnknownError
 * @extends {ErrorBase}
 */
export class UnknownError extends ErrorBase {
  readonly code = ErrorCodes.unknownError;

  constructor(message: string, metadata?: Record<string, unknown>, cause?: unknown) {
    super(message, metadata, cause);
  }
}
