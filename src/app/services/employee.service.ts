import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface Employee {
  id: number;
  firstName: string;
  lastName: string;
  middleName?: string;
}

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private employeesSubject = new BehaviorSubject<Employee[]>([]);
  private employeeIdCounter = 1;

  constructor() {
    const savedEmployees = localStorage.getItem('employees');
    const employees: Employee[] = savedEmployees ? JSON.parse(savedEmployees) : [];
    this.employeesSubject.next(employees);

    this.employeeIdCounter = employees.length > 0
      ? Math.max(...employees.map(emp => emp.id)) + 1
      : 1;
  }

  getEmployees(): Observable<Employee[]> {
    return this.employeesSubject.asObservable();
  }

  addEmployee(employee: Omit<Employee, 'id'>): void {
    const currentEmployees = this.employeesSubject.value;
    const newEmployee: Employee = {
      ...employee,
      id: this.employeeIdCounter++,
    };
    const updatedEmployees = [...currentEmployees, newEmployee];
    this.updateStorage(updatedEmployees);
  }

  removeEmployee(id: number): void {
    const updatedEmployees = this.employeesSubject.value.filter(employee => employee.id !== id);
    this.updateStorage(updatedEmployees);
  }

  private updateStorage(updatedEmployees: Employee[]): void {
    this.employeesSubject.next(updatedEmployees);
    localStorage.setItem('employees', JSON.stringify(updatedEmployees));
  }
}
