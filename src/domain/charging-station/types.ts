import { CreditCardTerminal } from '../terminal/types';

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
  terminal?: CreditCardTerminal;
}
