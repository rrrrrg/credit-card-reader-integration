import { ErrorBase } from './error-base';
import { ErrorCodes } from './error-code';

/* `InvalidEntityPropsError` is a class that extends `ErrorBase` and is used to represent an error that
occurs when an entity's properties are invalid */
export class InvalidEntityPropsError extends ErrorBase {
  readonly code = ErrorCodes.invalidEntityPropsError;

  constructor(
    public readonly entityName: string,
    message: string,
    metadata?: Record<string, unknown>,
    cause?: unknown
  ) {
    super(message, { entityName, ...metadata }, cause);
  }
}
