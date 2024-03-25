import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PatientsListComponent } from './patients-list/patients-list.component';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { PatientDeleteComponent } from './patient-delete/patient-delete.component';
import { PatientAddComponent } from './patient-add/patient-add.component';
import { FormsModule } from '@angular/forms';
import { PatientUpdateComponent } from './patient-update/patient-update.component';


@NgModule({
  declarations: [
    AppComponent,
    PatientsListComponent,
    PatientDeleteComponent,
    PatientAddComponent,
    PatientUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
    
  ],
  providers: [
    
    provideClientHydration(), provideHttpClient(withFetch()), provideAnimations()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
