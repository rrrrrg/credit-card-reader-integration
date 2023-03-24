export interface ChargeStartable {
  startChargingRequest(stationId: string, connetorId: number): Promise<void>;
}

export interface SessionStopable {
  stopSession(sessionId: string): Promise<void>;
}

export interface TerminalReadable {
  setReadingMode(serialNumber: string): Promise<void>;
}

export interface TerminalIdleable {
  setIdleMode(serialNumber: string): Promise<void>;
}

export interface PreAuthorizable {
  preAuthorization(preAuthAmount: number): Promise<void>;
}

export interface PrePaidable {
  prePaid(prePaidAmount: number): Promise<void>;
}

export interface Finalizable {
  finalize(FinalizedAmount: number): Promise<void>;
}
