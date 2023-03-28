export interface ChargeStartable {
  startChargingRequest(connetorId: number): Promise<void>;
}

export interface SessionStopable {
  stopSession(): Promise<void>;
}

export interface TerminalReadable {
  setReadingMode(): Promise<void>;
}

export interface TerminalIdleable {
  setIdleMode(): Promise<void>;
}

export interface PreAuthorizable {
  preAuthorize(preAuthAmount: number): Promise<void>;
}

export interface PrePaidable {
  prePaid(prePaidAmount: number): Promise<void>;
}

export interface Finalizable {
  finalize(FinalizedAmount: number): Promise<void>;
}
