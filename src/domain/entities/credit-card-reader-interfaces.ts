export interface CreditCardReader {
  serialNumber: string;
  provider: string;

  readCard(): Promise<string>;
  authorize(amount: number): Promise<boolean>;
  finalize(): Promise<void>;
}

export interface Payter {
  model: string;
  // ...
}

export interface PayterCreditCardReader extends CreditCardReader {
  provider: 'PAYTER';
  payter: Payter;
}

export interface Square {
  type: string;
  // ...
}

export interface SquareCreditCardReader extends CreditCardReader {
  provider: 'SQUARE';
  square: Square;
}
