import { Staff } from 'src/app/shared/models/staff';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BankDetailsService } from 'src/app/core/services/bank-details.service';
import { DepartmentService } from 'src/app/core/services/department.service';
import { EmploymentTypeService } from 'src/app/core/services/employment-type.service';
import { BankDetails } from 'src/app/shared/models/bank-details';
import { EmployeeService } from '../../../core/services/employee.service';
import * as XLSX from 'xlsx';

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
  data: [];

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
  uploadEmployeeCsvFile(event) {
    const target: DataTransfer = <DataTransfer>event.target;
    if (target.files.length !== 1) throw new Error('Cannot use multiple files');
    const reader: FileReader = new FileReader();

    reader.onload = (e: any) => {
      const bstr: string = e.target.result;
      const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' });
      const wsname: string = wb.SheetNames[0];
      const ws: XLSX.WorkSheet = wb.Sheets[wsname];
      // console.log(ws);
      // this.data = <any>(XLSX.utils.sheet_to_json(ws, { header: 1 }));
      // console.log(this.data)
      const data = <any>XLSX.utils.sheet_to_json(ws, { header: 1 });
      // loop through the data and push to the array of objects to be saved to the database
      this.data = [];
      for (let i = 0; i < data.length; i++) {
        const employee_id = data[i]['employee_id'];
        console.log(employee_id);
        // const staff = new Staff();
        // staff.employee_id = data[i]['Employee Code'];
        // staff.first_name = data[i]['First Name'];
        // staff.last_name = data[i]['Last Name'];
        // staff.email = data[i]['Email'];
      }
      // change it to a data array
      // this.data = data;
      // console.log(this.data);

      //
      // // get the first row of the sheet
      // const firstRow = data[0];
      // // get the column names
      // const columnNames = firstRow;
      // // get the data
      // const dataRows = data.slice(1, data.length);
      // // get the data rows
      // const dataRowsArray = dataRows.map((row) => {
      //   return row;
      // });
      // // console.log(dataRowsArray); // this is the data array
      // // loop through the data rows
      // dataRowsArray.forEach((row) => {
      //   // loop through the columns
      //   row.forEach((column, index) => {
      //     // get the column name
      //     const columnName = columnNames[index];
      //     // get the column value
      //     const columnValue = column;
      //     // console.log(columnName, columnValue);
      //     // do something with the column name and value
      //     const employee_id = columnValue;
      //     console.log("Employee Id => ",employee_id);
      //     // const employee = new Staff();
      //   });
      // });
      // // console.log(dataRowsArray);
      // // this.data = dataRowsArray;
      // // loop through the data rows and push the data to the array
      // this.data = dataRowsArray.map((row) => {
      //   return row.map((cell, i) => {
      //     const columnName = columnNames[i];
      //     const value = cell.v;
      //     return { columnName, value };
      //   });
      // });

      // console.log(this.data);

      // console.log(this.data);
      // pass the data to the service
      // this.staffService.addStaff(data).subscribe(
      //   (res) => {
      //     console.log(res);
      //     // this.successMessage = res;
      //   },
      //   (error) => {
      //     this.errorMessage = error.error;
      //     // console.log(this.errorMessage);
      //   }
      // );

      // this.staffService.uploadEmployeeCsvFile(data).subscribe(
      //   (res) => {
      //     console.log(res);
      //     this.successMessage = res;
      //   },
      //   (error) => {
      //     this.errorMessage = error.error;
      //     console.log(this.errorMessage);
      //   }
      // );
    };
    reader.readAsBinaryString(target.files[0]);
    // this.staffService.uploadEmployeeCsvFile(file).subscribe((res) => {
    //   console.log(res);
    // });
  }
}
