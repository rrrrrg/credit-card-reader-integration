import * as z from 'zod';
import { ProvidersEnum } from '../../libs/domain/enums';

export const PayterSchema = z.object({
  model: z.string(),
  // ...
});

export const SquareSchema = z.object({
  type: z.string(),
  // ...
});

export const CreditCardTerminalSchema = z.object({
  serialNumber: z.string(),
  chargingStationIds: z.array(z.string()),
  provider: z.nativeEnum(ProvidersEnum),
});

export const PayterCreditCardTerminalSchema = CreditCardTerminalSchema.extend({
  provider: z.literal('PAYTER'),
  payter: PayterSchema,
});

export const SquareCreditCardTerminalSchema = CreditCardTerminalSchema.extend({
  provider: z.literal('SQUARE'),
  square: SquareSchema,
});

export const CreditCardTerminalWithProviderSchema = z.union([
  PayterCreditCardTerminalSchema,
  SquareCreditCardTerminalSchema,
]);

export type TerminalProviders = `${ProvidersEnum}`;

export type PayterCreditCardTerminal = z.TypeOf<typeof PayterCreditCardTerminalSchema>;

export type SquareCreditCardTerminal = z.TypeOf<typeof SquareCreditCardTerminalSchema>;

export type CreditCardTerminal = z.TypeOf<typeof CreditCardTerminalSchema>;

export type Payter = z.TypeOf<typeof PayterSchema>;

export type Square = z.TypeOf<typeof SquareSchema>;

export type CreditCardTerminalWithProvider = z.TypeOf<typeof CreditCardTerminalWithProviderSchema>;
