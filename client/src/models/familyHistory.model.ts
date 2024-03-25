import { Patient } from "./patients.model";

export interface FamilyHistory {
    familyHistoryId:number;
    patientId?:number;
    condition?:String;
    relationship?:String;
    patient:Patient;
}