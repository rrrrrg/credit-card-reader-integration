import * as z from 'zod';
import { ProvidersEnum } from '../../libs/domain/enums';

export enum SessionStatusEnum {
  STARTED = 'STARTED',
  FINISHED = 'FINISHED',
  CANCELED = 'CANCELED',
  FINALIZED = 'FINALIZED',
}

export const SessionSchema = z.object({
  id: z.string(),
  chargingStationId: z.string(),
  connectorId: z.number(),
  idToken: z.string(),
  status: z.nativeEnum(SessionStatusEnum),
  preAuthAmount: z.number().optional(),
  prePaidAmount: z.number().optional(),
  cost: z.number().optional(),
  finalizedAmount: z.number().optional(),
  provider: z.nativeEnum(ProvidersEnum),
});

export const PayterSchema = z.object({
  id: z.string(),
  // ...
});

export const PayterSessionSchema = SessionSchema.extend({
  provider: z.literal('PAYTER'),
  payter: PayterSchema,
});

export const SessionWithProviderSchema = PayterSessionSchema;

export type Session = z.TypeOf<typeof SessionSchema>;

export type Payter = z.TypeOf<typeof PayterSchema>;

export type PayterSession = z.TypeOf<typeof PayterSessionSchema>;

export type SessionWithProvider = z.TypeOf<typeof SessionWithProviderSchema>;
