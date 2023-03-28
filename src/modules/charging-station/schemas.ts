import * as z from 'zod';
import { CreditCardTerminalWithProviderSchema } from '../terminal/schemas';

export enum ConnectorStatusEnum {
  AVAILABLE = 'AVAILABLE',
  IN_USE = 'IN_USE',
  OUT_OF_ORDER = 'OUT_OF_ORDER',
  PLUGGED_IN = 'PLUGGED_IN',
}

export const ConnectorSchema = z.object({
  id: z.number(),
  status: z.nativeEnum(ConnectorStatusEnum),
});

export const ChargingStationSchema = z.object({
  id: z.string(),
  connectors: z.array(ConnectorSchema),
  serialNumber: z.string(),
  location: z.string(),
  terminal: z.optional(CreditCardTerminalWithProviderSchema),
});

export type Connector = z.TypeOf<typeof ConnectorSchema>;

export type ChargingStation = z.TypeOf<typeof ChargingStationSchema>;
