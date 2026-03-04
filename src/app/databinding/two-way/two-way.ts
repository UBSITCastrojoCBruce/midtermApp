
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../../user';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-two-way',
  imports: [FormsModule, CommonModule],
  templateUrl: './two-way.html',
  styleUrl: './two-way.css',
})
export class TwoWayBinding {
  // SECTION D: Two-Way Binding Properties
  // [(ngModel)] syncs the component property AND the input field
  // at the same time. Change one, the other updates automatically.
  twoWName: string = 'Juan Dela Cruz';
  twoWayEmail: string = '';
  twoWayAge: number = 20;
  twoWayGender: string = 'male';
  twoWaySubscribed: boolean = false;
  twoWayLanguage: string = 'TypeScript';
  twoWayRating: number = 3;
  twoWayColor: string = '#3b82f6';

// Language options for select dropdown
programmingLanguages: string[] = ['TypeScript', 'JavaScript', 'Python', 'Java', 'C#'];


    i:number = 0;
    twoWayName: string = 'Change me!';
    selectedColor: string = '#2E75B6';
    rangeValue: number = 50;
    selectedOption: string = 'option1';
    selectedId: number | null = null;
    selectedName: string = '';
    selectedDepartment: string = '';
    selectedPosition: string = '';
    selectedRole: string = '';

    user: User[] = [
      {
        id: 1,
        name: 'John Doe',
        position: 'Developer',
        department: 'IT',
        details: { role: 'Admin' }
      },
      {
        id: 2,
        name: 'Jane Smith',
        position: 'Designer',
        department: 'Creative',
        details: { role: 'Editor' }
      },
      {
        id: 3,
        name: 'Alice Johnson',
        position: 'Manager',
        department: 'Management',
        details: { role: 'Viewer' }
      }
    ];



    onClick(u: User): void {
      console.log('Button clicked!');
      this.selectedId = u.id;
      this.selectedName = u.name || '';
      this.selectedDepartment = u.department || '';
      this.selectedPosition = u.position || '';
      this.selectedRole = u.details.role;
    }

    // Generated profile output
get profileSummary(): string {
  const sub = this.twoWaySubscribed ? 'Subscribed' : 'Not subscribed';
  return `${this.twoWayName}, ${this.twoWayAge} years old, ${this.twoWayGender}. ` +
         `Prefers ${this.twoWayLanguage}. Rating: ${this.twoWayRating}/5. ${sub}.`;
}

// Reset the entire form programmatically
resetForm(): void {
  // Changing component properties also updates the bound input fields
  this.twoWayName = '';
  this.twoWayEmail = '';
  this.twoWayAge = 18;
  this.twoWayGender = 'male';
  this.twoWaySubscribed = false;
  this.twoWayLanguage = 'TypeScript';
  this.twoWayRating = 3;
}

}
