import { Component } from '@angular/core';

@Component({
  selector: 'app-property',
  imports: [],
  templateUrl: './property.html',
  styleUrl: './property.css',
})
export class PropertyBinding {
  // SECTION B: Property Binding Properties
  // These control DOM properties like disabled, src, href, value.
  // Property Binding sets JS PROPERTIES (not HTML attributes).

  isButtonDisabled: boolean = true;   // [disabled]='isButtonDisabled'
  imageSource: string = 'Asset 2SITLOGO1.png';
  imageAlt: string = 'SIT Logo';
  imageWidth: number = 80;
  linkUrl: string = 'https://www.ubaguio.edu/';
  inputPlaceholder: string = 'Type your name here...';
  clickCount: number = 0; // For counting button clicks
  inputName: string = ''; // For two-way binding with [(ngModel)]

   //Event handler: called when button is clicked
 onButtonClick(): void {
  this.clickCount++;
  this.isButtonDisabled = false; // enable after first click
 }

}
