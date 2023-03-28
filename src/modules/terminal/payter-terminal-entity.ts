import { EntityBase } from '../../libs/domain/entity-base';
import { InvalidEntityPropsError } from '../../libs/errors';
import { PayterCreditCardTerminal, PayterCreditCardTerminalSchema } from './schemas';

export class PayterCreditCardTerminalEntity extends EntityBase<PayterCreditCardTerminal> {
  constructor(props: PayterCreditCardTerminal) {
    super(props);
  }

  getValidatedProps(props: PayterCreditCardTerminal): PayterCreditCardTerminal {
    const result = PayterCreditCardTerminalSchema.safeParse(props);

    if (!result.success) {
      throw new InvalidEntityPropsError('PayterCreditCardTerminalEntity', result.error.message, {
        error: result.error,
        props: this.props,
      });
    }

    return result.data;
  }
}
