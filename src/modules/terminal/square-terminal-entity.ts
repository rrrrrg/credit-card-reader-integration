import { EntityBase } from '../../libs/domain/entity-base';
import { InvalidEntityPropsError } from '../../libs/errors';
import { SquareCreditCardTerminal, SquareCreditCardTerminalSchema } from './schemas';

export class SquareCreditCardTerminalEntity extends EntityBase<SquareCreditCardTerminal> {
  constructor(props: SquareCreditCardTerminal) {
    super(props);
  }

  getValidatedProps(props: SquareCreditCardTerminal): SquareCreditCardTerminal {
    const result = SquareCreditCardTerminalSchema.safeParse(props);

    if (!result.success) {
      throw new InvalidEntityPropsError('SquareCreditCardTerminalEntity', result.error.message, {
        error: result.error,
        props: this.props,
      });
    }

    return result.data;
  }
}
