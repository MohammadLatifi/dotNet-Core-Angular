
import { Appointment } from "./appointment.model";
import { Examination } from "./examination.model";
import { FamilyHistory } from "./familyHistory.model";
import { Medication } from "./medication.model";
import { Surgery } from "./surgery.model";

export interface Patient {
    patientId?: number;
    name: String;
    age: number;
    gender: String;
    address: String;
    contact: String;
    appointments?: Appointment[];
    examinations?: Examination[];
    familyHistories?: FamilyHistory[];
    medications?: Medication[];
    surgeries?: Surgery[] ;
}


export class Patient {

    constructor(
        public name: String,
        public age: number,
        public gender: String,
        public address: String,
        public contact: String,
        public patientId?: number,
        public appointments?: Appointment[],
        public examinations?: Examination[],
        public familyHistories?: FamilyHistory[],
        public medications?: Medication[],
        public surgeries?: Surgery[] ,
    ) {}
  
  }