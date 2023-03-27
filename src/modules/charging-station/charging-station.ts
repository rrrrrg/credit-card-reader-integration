import { ChargeStartable } from '../interfaces';
import { ChargingStation } from './types';

export class ChargingStationEntity implements ChargeStartable {
  constructor(private _props: ChargingStation) {}

  async startChargingRequest(stationId: string, connectorId: number): Promise<void> {
    // ...
  }
  // business logic

  get props(): ChargingStation {
    return Object.freeze(this._props);
  }
}
