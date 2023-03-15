import { CreditCardReader } from './credit-card-reader-interfaces';

export interface Connector {
  id: number;
  status: 'AVAILABLE' | 'IN_USE' | 'OUT_OF_ORDER' | 'PlUGGED_IN';
}

export interface ChargingStation {
  id: string;
  connectors: Connector[];
  serialNumber: string;
  location: string;
  provider: string;
  creditCardReader?: CreditCardReader;

  startCharging(connectorId: number): Promise<void>;
  stopCharging(connectorId: number): Promise<void>;
}
