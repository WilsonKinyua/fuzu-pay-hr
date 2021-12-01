import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BankDetailsService } from 'src/app/core/services/bank-details.service';
import { DepartmentService } from 'src/app/core/services/department.service';
import { EmploymentTypeService } from 'src/app/core/services/employment-type.service';
import { EmployeeService } from '../../../core/services/employee.service';
import * as XLSX from 'xlsx';
import { Employee } from 'src/app/shared/models/employee';

@Component({
  selector: 'app-add-staff',
  templateUrl: './add-staff.component.html',
  styleUrls: ['./add-staff.component.css'],
})
export class AddStaffComponent implements OnInit {
  constructor(
    private staffService: EmployeeService,
    private departmentService: DepartmentService,
    private employmentTypeService: EmploymentTypeService,
    private bankDetails: BankDetailsService
  ) {}

  employeeCode: string;
  departments;
  employmentType;
  isLoading = false;
  employeeUplodData: any[] = [];
  @ViewChild('csvReader') csvReader: any;

  // empty error message array
  errorMessage: any = [];
  successMessage = null;

  ngOnInit(): void {
    this.generateEmployeeCode();
    this.getDepartments();
    this.getEmploymentTypes();
  }

  showTextBox(event) {
    if (event.target.value == 'Input details') {
      document.getElementById('input-details').style.display = 'block';
      document.getElementById('upload-documents').style.display = 'none';
    } else {
      document.getElementById('input-details').style.display = 'none';
      document.getElementById('upload-documents').style.display = 'block';
    }
  }

  // generate random staff number
  generateEmployeeCode() {
    const year = new Date().getFullYear();
    const randomNumber = Math.floor(Math.random() * 1000);
    const code = Math.random().toString(36).substring(2, 4).toUpperCase();
    this.employeeCode = `${code}${randomNumber}${year}`;
    console.log(this.employeeCode);
  }

  // add staff
  addStaffOnSubmit(form: NgForm) {
    console.log(form.value);
    const bank_name = form.value.bank_name;
    const account_number = form.value.account_number;
    const branch_name = form.value.branch_name;
    console.log(bank_name);
    console.log(account_number);
    console.log(branch_name);
    this.isLoading = true;
    this.staffService.addStaff(form.value).subscribe(
      (res) => {
        console.log(res);
        this.isLoading = false;
        this.addBankDetails(bank_name, account_number, branch_name);
        this.successMessage = res;
      },
      (error) => {
        this.errorMessage = error.error;
        this.isLoading = false;
        console.log(this.errorMessage);
      }
    );
  }

  // get departments
  getDepartments() {
    this.departmentService.getDepartments().subscribe((res) => {
      console.log(
        '================================ Departments =========================='
      );
      this.departments = res;
      console.log(res);
    });
  }

  // get employment types
  getEmploymentTypes() {
    this.employmentTypeService.getEmploymentTypes().subscribe((res) => {
      console.log(
        '================================ Employment Types =========================='
      );
      this.employmentType = res;
      console.log(res);
    });
  }

  // add bank details
  addBankDetails(bank_name, account_number, branch_name) {
    this.bankDetails
      .saveBankDetails(bank_name, branch_name, account_number)
      .subscribe(
        (res) => {
          console.log('save bank details', res);
        },
        (error) => {
          console.log('Error Log => ', error);
        }
      );
  }

  // upload employee csv file
  uploadEmployeeCsvFile($event): void {
    let text = [];
    let files = $event.srcElement.files;
    if (this.isValidCSVFile(files[0])) {
      let input = $event.target;
      let reader = new FileReader();
      reader.readAsText(input.files[0]);
      reader.onload = () => {
        let csvData = reader.result;
        let csvRecordsArray = (<string>csvData).split(/\r\n|\n/);
        let headersRow = this.getHeaderArray(csvRecordsArray);
        this.employeeUplodData = this.getDataRecordsArrayFromCSVFile(
          csvRecordsArray,
          headersRow.length
        );
        this.staffService.addStaffViaUpload(this.employeeUplodData).subscribe(
          (res) => {
            console.log(res);
            // this.isLoading = false;
            this.successMessage = res;
          },
          (error) => {
            this.errorMessage = error.error;
            // this.isLoading = false;
            console.log(this.errorMessage);
          }
        );
        console.log(this.employeeUplodData);
      };
      reader.onerror = function () {
        console.log('error is occured while reading file!');
      };
    } else {
      alert('Please import valid .csv file.');
      this.fileReset();
    }
  }

  getDataRecordsArrayFromCSVFile(csvRecordsArray: any, headerLength: any) {
    let csvArr = [];
    for (let i = 1; i < csvRecordsArray.length; i++) {
      let curruntRecord = (<string>csvRecordsArray[i]).split(',');
      if (curruntRecord.length == headerLength) {
        let csvRecord: Employee = new Employee();
        csvRecord.employee_id = curruntRecord[0].trim();
        csvRecord.surname = curruntRecord[1].trim();
        csvRecord.other_names = curruntRecord[2].trim();
        csvRecord.email = curruntRecord[3].trim();
        csvRecord.national_id = curruntRecord[4].trim();
        csvRecord.country = curruntRecord[5].trim();
        csvRecord.department = parseInt(curruntRecord[6].trim());
        csvRecord.position = curruntRecord[7].trim();
        csvRecord.employment_type = parseInt(curruntRecord[8].trim());
        csvRecord.date_of_birth = curruntRecord[9].trim();
        csvRecord.employment_date = curruntRecord[10].trim();
        csvRecord.gross_salary = parseInt(curruntRecord[11].trim());
        csvRecord.marital_status = curruntRecord[12].trim();
        csvRecord.phone_number = curruntRecord[13].trim();
        csvRecord.emergency_contact = curruntRecord[14].trim();
        csvRecord.emergency_contact_number = curruntRecord[15].trim();
        csvRecord.bank_name = curruntRecord[16].trim();
        csvRecord.bank_branch = curruntRecord[17].trim();
        csvRecord.account_number = parseInt(curruntRecord[18].trim());
        csvArr.push(csvRecord);
      }
    }
    return csvArr;
  }

  isValidCSVFile(file: any) {
    return file.name.endsWith('.csv');
  }

  getHeaderArray(csvRecordsArr: any) {
    let headers = (<string>csvRecordsArr[0]).split(',');
    let headerArray = [];
    for (let j = 0; j < headers.length; j++) {
      headerArray.push(headers[j]);
    }
    return headerArray;
  }

  fileReset() {
    this.csvReader.nativeElement.value = '';
    this.employeeUplodData = [];
  }
}
