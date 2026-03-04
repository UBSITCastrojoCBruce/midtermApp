import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-event',
  imports: [FormsModule],
  templateUrl: './event.html',
  styleUrl: './event.css',
})
export class EventBinding {
  // ─────────────────────────────────────────────────────────────
  // SECTION C: Event Binding Properties
  // These are updated BY the template when the user interacts.
  // The DOM PUSHES data into the component via event handlers.
  // ─────────────────────────────────────────────────────────────
  isButtonDisabled: boolean = true;   // [disabled]='isButtonDisabled'
  buttonLabel: string = 'Disabled';
  clickCount: number = 0;
  lastKeyPressed: string = '';
  selectedColor: string = '#3b82f6';
  mousePosition: { x: number; y: number } = { x: 0, y: 0 };
  isHovered: boolean = false;
  typedInput: string = '';
  inputValue: string = '';
  formMessage: string = '';

  eventLog: string[] = [];  // records the last 5 events
  frameworks = [
    { name: 'angular', value: 'Angular' },
    { name: 'react', value: 'React' },
    { name: 'vue', value: 'Vue ' }
  ];
  selectedFramework: string = 'angular';


  // Event handler: called when button is clicked
  onButtonClick(): void {
    this.clickCount++;
    this.isButtonDisabled = false; // Enable after first click
      this.buttonLabel = 'Enabled';
  }

  // Event handler: receives the native KeyboardEvent object
  onKeyPress(event: KeyboardEvent): void {
    this.lastKeyPressed = event.key;
  }

  // Event handler: receives the native MouseEvent
  onMouseMove(event: MouseEvent): void {
    this.mousePosition = { x: event.clientX, y: event.clientY };
  }

  // Event handler: receives InputEvent from text field
  onInputChange(event: Event): void {
    // Cast to HTMLInputElement to access .value
    this.typedInput = (event.target as HTMLInputElement).value;
  }

  onMouseEnter(): void { this.isHovered = true; }
  onMouseLeave(): void { this.isHovered = false; }

  onSelectionChange(value: string): void {
    console.log('ngModel value changed to:', value);
    this.selectedFramework = value;
  }
  // Color input change handler
  onColorChange(event: Event): void {
  // Cast event.target to HTMLInputElement to access .value
  this.selectedColor = (event.target as HTMLInputElement).value;
  this.logEvent(`Color changed to: ${this.selectedColor}`);
}


  // Form submit handler — prevent default page reload
onFormSubmit(event: Event): void {
  event.preventDefault();  // stop native form submission
  this.formMessage = `Form submitted! Input was: "${this.inputValue}"`;
  this.inputValue = '';    // reset input field
  this.logEvent('Form submitted');
}
 
// Double-click handler
onDoubleClick(): void {
  this.logEvent('Double-click detected!');
  alert('You double-clicked!');
}
 
// Right-click (contextmenu) handler
onRightClick(event: MouseEvent): void {
  event.preventDefault();  // prevent browser context menu
  this.logEvent(`Right-click at (${event.clientX}, ${event.clientY})`);
}
 
// Helper: keeps only the last 5 log entries
private logEvent(msg: string): void {
  this.eventLog.unshift(`[${new Date().toLocaleTimeString()}] ${msg}`);
  if (this.eventLog.length > 5) this.eventLog.pop();
}


}
