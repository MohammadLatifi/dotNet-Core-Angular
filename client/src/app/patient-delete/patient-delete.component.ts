import { Component, Input, numberAttribute } from '@angular/core';
import { PatientsService } from '../../services/patients.service';

@Component({
  selector: 'app-patient-delete',
  templateUrl: './patient-delete.component.html',
  styleUrl: './patient-delete.component.css'
})
export class PatientDeleteComponent {
  @Input({ alias: 'id', transform: numberAttribute }) id?: number = undefined;

  constructor(private patientsService: PatientsService) {}

  ngOnInit(): void {}

  deletePatientById() {
    if (this.id) {
      this.patientsService.deletePatientById(this.id)
      window.location.reload();
    }
  }
}

