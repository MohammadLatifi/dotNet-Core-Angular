import { Component, Input, OnInit, numberAttribute } from '@angular/core';
import { Patient } from '../../models/patients.model';
import { PatientsService } from '../../services/patients.service';

@Component({
  selector: 'app-patient-update',
  templateUrl: './patient-update.component.html',
  styleUrl: './patient-update.component.css',
})
export class PatientUpdateComponent implements OnInit {
  @Input({ alias: 'id', transform: numberAttribute }) id?: number;

  updatePatientRequest: Patient = {
    patientId: 0,
    name: '',
    age: 0,
    gender: '',
    contact: '',
    address: '',
  };

  genders = ['Male', 'Female', 'Other'];

  constructor(private patientsService: PatientsService) {}

  ngOnInit(): void {
    if (this.id) {
      this.patientsService.getPatientById(this.id).subscribe({
        next: (patient: Patient) => {
          this.updatePatientRequest = patient;
          console.log(this.updatePatientRequest);
        },
        error: (res: ResponseType) => {
          console.log(res);
        },
      });
    }
  }

  updatePatient() {
    console.log(this.updatePatientRequest);
    if (this.id) {
      this.patientsService
        .updatePatient(this.id, this.updatePatientRequest)
        .subscribe({
          next: (patient: Patient) => {
            window.location.reload();
          },
          error: (res: ResponseType) => {
            console.log(res);
          },
        });
    }
  }
}
