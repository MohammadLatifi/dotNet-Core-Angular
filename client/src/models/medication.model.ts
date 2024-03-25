import { Patient } from "./patients.model";

export interface Medication {
    medicationId: number;
    medicationName?: String;
    dosage?: String;
    frequency?: String;
    patientId?: String;
    patient?: Patient;
} 