import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css'],
})
export class AddPatientComponent {
  constructor(private api:ApiService, private route:Router){}

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
    this.api.sendData(data).subscribe(
      (response)=>{
        console.log(response)
      }
    )
    this.route.navigate(['/'])

  };
}
