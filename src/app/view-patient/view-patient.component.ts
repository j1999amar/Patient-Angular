import { Component } from '@angular/core';

@Component({
  selector: 'app-view-patient',
  templateUrl: './view-patient.component.html',
  styleUrls: ['./view-patient.component.css'],
})
export class ViewPatientComponent {
  data: any = [
    {
      id: 3,
      patientName: 'patientName',
      doctor: 'doctor',
      hospital: 'hospital',
      contact: 'contact',
    },
  ];
}
