import { Component, OnInit } from '@angular/core';
import { Patient } from '../../models/patients.model';
import { PatientsService } from '../../services/patients.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient-add',
  templateUrl: './patient-add.component.html',
  styleUrl: './patient-add.component.css',
})
export class PatientAddComponent implements OnInit {
  addPatientRequest: Patient = {
    name: '',
    age: 0,
    gender: '',
    contact: '',
    address: '',
  };

  genders = ['Male', 'Female', 'Other'];

  constructor(
    private patientsService: PatientsService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  addPatient() {

    this.patientsService.addPatient(this.addPatientRequest).subscribe({
      next: (patient: Patient) => {
        window.location.reload();
      },
      error: (res: ResponseType) => {
        console.log(res);
      },
    });
  }
}
