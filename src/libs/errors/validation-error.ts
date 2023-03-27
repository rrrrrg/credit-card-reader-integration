import { ErrorBase } from './error-base';
import { ErrorCodes } from './error-code';

/**
 * Used to indicate that an incorrect payload was provided to a method/function/class constructor
 *
 * @class PayloadInvalidError
 * @extends {ErrorBase}
 */
export class ValidationError extends ErrorBase {
  readonly code = ErrorCodes.validationError;
  readonly subcode?: string | undefined;

  constructor(message: string, metadata?: unknown, subcode?: string) {
    super(message, metadata);
    this.subcode = subcode;
  }
}
