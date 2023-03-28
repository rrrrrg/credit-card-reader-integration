import { BaseEntityProps, EntityBase } from '../../libs/domain/entity-base';
import { InvalidEntityPropsError } from '../../libs/errors';
import { ChargingStation, ChargingStationSchema } from './schemas';

export class ChargingStationEntity extends EntityBase<ChargingStation> {
  constructor(props: ChargingStation, baseProps?: BaseEntityProps) {
    super(props, baseProps);
  }

  getValidatedProps(props: ChargingStation): ChargingStation {
    const result = ChargingStationSchema.safeParse(props);

    if (!result.success) {
      throw new InvalidEntityPropsError('ChargingStationEntity', result.error.message, {
        error: result.error,
        props: this.props,
      });
    }

    return result.data;
  }
}
