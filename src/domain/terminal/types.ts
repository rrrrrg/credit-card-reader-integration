import { ProvidersEnum } from '../enums';

export type TerminalProviders = `${ProvidersEnum}`;

export interface CreditCardTerminal {
  serialNumber: string;
  chargingStationIds: string[];
  provider: TerminalProviders;
}

export interface Payter {
  model: string;
  // ...
}

export interface PayterCreditCardReader extends CreditCardTerminal {
  provider: 'PAYTER';
  payter: Payter;
}

export interface Square {
  type: string;
  // ...
}

export interface SquareCreditCardReader extends CreditCardTerminal {
  provider: 'SQUARE';
  square: Square;
}
