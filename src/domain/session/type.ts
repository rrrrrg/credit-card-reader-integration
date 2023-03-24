import { ProvidersEnum } from '../enums';

export type Providers = `${ProvidersEnum}`;

export interface Session {
  id: string;
  chargingStationId: string;
  connectorId: number;
  idToken: string;
  status: 'STARTED' | 'FINISHED' | 'CANCELED' | 'FINALIZED';
  preAuthAmount?: number;
  prePaidAmount?: number;
  cost?: number;
  finalizedAmount?: number;
  provider: Providers;
}

export interface Payter {
  id: string;
  // ...
}

export interface PayterSession extends Session {
  provider: 'PAYTER';
  payter: Payter;
}
