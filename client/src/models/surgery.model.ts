import { Patient } from "./patients.model";

export interface Surgery {
    surgeryId: String;
    surgeryType?: String;
    surgeryDate?: String;
    surgeonName?: String;
    patientId?: String;
    patient?: Patient;
}