import { EntityBase } from '../../libs/domain/entity-base';
import { ChargeStartable } from '../../libs/interfaces';
import { ChargingStation } from './types';

export class ChargingStationEntity extends EntityBase<ChargingStation> implements ChargeStartable {
  constructor(props: ChargingStation) {
    super(props);
  }

  async startChargingRequest(stationId: string, connectorId: number): Promise<void> {
    // ...
  }
  // business logic
}
