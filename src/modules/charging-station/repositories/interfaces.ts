import { ChargingStationEntity } from '../charging-station';

export interface FindAllChargingStationById {
  (id: string): Promise<ChargingStationEntity>;
}
