import { Component } from '@angular/core';

@Component({
  selector: 'app-employeecrud',
  imports: [],
  templateUrl: './employeecrud.html',
  styleUrl: './employeecrud.css',
})
export class Employeecrud {

  employeesArr = [
  { id: 1, name: 'Krishna', role: 'CEO', salary: 200000, gender: 'male' },
  { id: 2, name: 'Shreya', role: 'CFO', salary: 180000, gender: 'female' },
  { id: 3, name: 'Eeshani', role: 'CTO', salary: 170000, gender: 'female' },
  { id: 4, name: 'Akhil', role: 'COO', salary: 160000, gender: 'male' },
  { id: 5, name: 'Harish', role: 'VP', salary: 140000, gender: 'male' },
  { id: 6, name: 'Rishik', role: 'Director', salary: 120000, gender: 'male' }
];
}
