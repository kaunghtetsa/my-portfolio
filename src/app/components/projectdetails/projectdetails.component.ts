import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Project } from '../../models/project.model'; // Adjust the import path
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-projectdetails', // Updated selector
  templateUrl: './projectdetails.component.html', // Updated template URL
  styleUrls: ['./projectdetails.component.css'], // Updated style URL
  standalone: true, // Ensure it's standalone (Angular 17+)
  imports: [CommonModule]
})
export class ProjectdetailsComponent { // Updated class name
  @Input() project: Project | null = null; // Input to receive project data
  @Output() close = new EventEmitter<void>(); // Output to emit close event
  
  // Function to close the pop-up
  onClose() {
    this.close.emit();
  }
}

//select project detail by clicked project start from here