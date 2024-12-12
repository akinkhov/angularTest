import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss'],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule
  ]
})
export class EmployeeListComponent implements OnInit {
  employees: { lastName: string; firstName: string; middleName: string }[] = [];

  ngOnInit(): void {
    const savedEmployees = localStorage.getItem('employees');
    this.employees = savedEmployees ? JSON.parse(savedEmployees) : [];
  }

  removeEmployee(index: number): void {
    this.employees.splice(index, 1);
    localStorage.setItem('employees', JSON.stringify(this.employees));
  }
}
