import { Component } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';


export interface User {
  name?: string | undefined;
  position?: string;
  department?: string;
    details?:{
      role: string | undefined;
    }
  };



@Component({
  selector: 'app-interpolation',
  imports: [JsonPipe, FormsModule],
  templateUrl: './interpolation.html',
  styleUrl: './interpolation.css',
})

export class Interpolation {

  // ─────────────────────────────────────────────────────────────
  // SECTION A: String Interpolation Properties
  // These are normal TypeScript class properties.
  // Angular reads them and renders their VALUES into the template.
  // ─────────────────────────────────────────────────────────────

  title: string = 'Angular Data Binding Demo';
  studentName: string = 'Maria Santos';
  courseCode: string = 'APPDEV1';
  currentYear: number = new Date().getFullYear();
  roles = ['Admin', 'Editor', 'Viewer'];
  text: string = "{{expression}}"
  curly:string ="{{ }}"
  common:string ="{{ userName }}"
  methods: string= "{{ getStatus() }}"
  dotnot: string="{{ user.name }}"
  dotnot2: string ="{{ user?.profile?.email }}"
  jpipe: string ="{{ user | json }}"
  isActive: boolean = false;
 //object type
  user: User = {
    name: 'John Doe',
    position: 'Software Engineer',
    department: 'IT',
    details: {role: 'Admin'}
  };

  countries = [
  { id: 'PH', name: 'Philippines' },
  { id: 'US', name: 'United States' },
  { id: 'JP', name: 'Japan' }
];
selectedCountryId = 'PH'; // Initial value


  // Array of strings
  skills = ['Angular', 'TypeScript', 'RxJS'];

  // Array of objects
  projects = [
    { id: 1, name: 'Dashboard' },
    { id: 2, name: 'Mobile App' }
  ];

  // Interpolation can call methods too
  getWelcomeMessage(): string {
    return `Welcome, ${this.studentName}! Today we learn data binding.`;
  }


}

