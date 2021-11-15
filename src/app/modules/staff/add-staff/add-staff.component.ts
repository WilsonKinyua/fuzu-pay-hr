import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-staff',
  templateUrl: './add-staff.component.html',
  styleUrls: ['./add-staff.component.css'],
})
export class AddStaffComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  showTextBox(event) {
    if (event.target.value == 'Input details') {
      document.getElementById('input-details').style.display = 'block';
      document.getElementById('upload-documents').style.display = 'none';
    } else {
      document.getElementById('input-details').style.display = 'none';
      document.getElementById('upload-documents').style.display = 'block';
    }
  }
}
