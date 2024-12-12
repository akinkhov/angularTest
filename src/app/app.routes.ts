import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'add-employee', pathMatch: 'full' },
  { path: 'add-employee', loadComponent: () => import('./components/add-employee/add-employee.component').then(m => m.AddEmployeeComponent) },
  { path: 'employee-list', loadComponent: () => import('./components/employee-list/employee-list.component').then(m => m.EmployeeListComponent) },
];
