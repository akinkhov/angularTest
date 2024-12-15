import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { EmployeeService } from '../../services/employee.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss'],
  imports: [
    CommonModule,
    MatButtonModule,
  ],
})
export class EmployeeListComponent {
  employees$: Observable<any>;

  constructor(private employeeService: EmployeeService) {
    this.employees$ = this.employeeService.getEmployees();
  }

  removeEmployee(id: number): void {
    this.employeeService.removeEmployee(id);
  }
}
