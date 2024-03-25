import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { Patient } from '../models/patients.model';

@Injectable({
  providedIn: 'root',
})
export class PatientsService {
  baseApiUrl: string = environment.baseApiUrl;

  constructor(private http: HttpClient) {}

  getAllPatients(): Observable<Patient[]> {
    return this.http.get<Patient[]>(this.baseApiUrl + '/Patients');
  }

  getPatientById(id: number):Observable<Patient> {
    return this.http.get<Patient>(this.baseApiUrl + '/Patients/' + id);
  }

  deletePatientById(id: number): void {
    this.http.delete<string>(this.baseApiUrl + '/Patients/' + id).subscribe({
      next: (res) => {},
      error: (res) => {
        console.log(res);
      },
    });
  }

  addPatient(addPatientRequest: Patient): Observable<Patient> {
    return this.http.post<Patient>(
      this.baseApiUrl + '/Patients',
      addPatientRequest
    );
  }

  updatePatient(id: number,addPatientRequest: Patient): Observable<Patient> {
    return this.http.put<Patient>(
      this.baseApiUrl + '/Patients/'+ id,
      addPatientRequest
    );
  }
}
