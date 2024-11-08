import { AuditedEntity } from ".";

export type Disease = AuditedEntity & {
  id: number;
  name: string;
  description: string;
  symptoms: Symptom[];
  treatments?: Treatment[];
  transmissionMethods?: TransmissionMethod[];
};

export type Symptom = {
  id: number;
  name: string;
};

export type Treatment = {
  id: number;
  name: string;
};

export type TransmissionMethod = {
  id: number;
  name: string;
};
