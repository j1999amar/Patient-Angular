import { Component } from '@angular/core';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css'],
})
export class AddPatientComponent {
  patientName = '';
  doctor = '';
  hospital = '';
  contact = '';
  readValue = () => {
    let data:any = {
      patientName: this.patientName,
      doctor: this.doctor,
      hospital: this.hospital,
      contact: this.contact
    };
    console.log(data)
  };
}
