import { Component } from '@angular/core';
import { Patient } from '../../models/patients.model';

import { NgFor, NgIf } from '@angular/common';
// import { PatientActionsComponent } from '../patient-actions/patient-actions.component';

// import { PatientAddComponent } from '../patient-add/patient-add.component';
import { PatientsService } from '../../services/patients.service';

@Component({
  selector: 'app-patients-list',
  templateUrl: './patients-list.component.html',
  styleUrl: './patients-list.component.css',
  
})

export class PatientsListComponent {
  patients: Patient[] = [];
  
  constructor (private patientsService: PatientsService){}
  
  ngOnInit () : void {
    this.getInitialData()
  }
  
  getInitialData(){
    this.patientsService.getAllPatients().subscribe({
      next: (patients:Patient[])=>{
        console.log(patients)
        this.patients = patients;
      },
      error: (response:ResponseType)=>{
        console.log(response)
      }
    })
  }

}




