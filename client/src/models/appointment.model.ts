import { Patient } from "./patients.model";

export interface Appointment {
    appointmentId: number;
    patientId?: number;
    appointmentDate?: Date;
    appointmentType?: String;
    patient?: Patient;
}