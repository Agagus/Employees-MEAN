import { Component } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { NgForm } from '@angular/forms';
import { Employee } from 'src/app/models/employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})

export class EmployeeComponent {



  constructor(public employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees() {
    this.employeeService.getEmployees().subscribe(
      res => {
        this.employeeService.employees = res;
      },
      err => console.error(err)
    )

  }

  addEmployee(form: NgForm) {
    if (form.value._id) {
      this.employeeService.updateEmployee(form.value).subscribe(
        res => {
          alert('Employee created succesfully!')
          this.getEmployees();
          form.reset();
        },
        err => console.error(err)
      )
      console.log('actualizando')
    }
    else {
      this.employeeService.createEmployee(form.value).subscribe(
        res => {
          this.getEmployees();
          form.reset();
        },
        err => console.error(err)
      )

    }
  }

  deleteEmployee(_id: any) {
    if (confirm("Are you sure to want to delete this employee?")) {
      this.employeeService.deleteEmployee(_id).subscribe(
        res => {
          this.getEmployees();
        },
        err => console.error(err)
      )
    }
  }

  updateEmployee(employee: Employee) {
    this.employeeService.selectedEmployee = employee;
  }

  resetForm(form: NgForm) {
    form.reset();
  }

}



