import { Patient } from "./patients.model";

export interface Examination {
    examId: number;
    patientId?: number;
    examDate?: Date;
    visualAcuity?: String;
    intraocularPressure?: String;
    diagnosis?: String;
    patient?: Patient;
}