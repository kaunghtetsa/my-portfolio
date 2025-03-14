/*import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Project } from '../../models/project.model';
import { NgFor } from '@angular/common'; 

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [NgFor], 
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.projects = this.dataService.getProjects();
  }
}*/

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '../../models/project.model'; // Adjust the import path
import { DataService } from '../../services/data.service'; // Adjust the import path
import { ProjectdetailsComponent } from './../projectdetails/projectdetails.component'; // Updated import

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  standalone: true, // Ensure it's standalone (Angular 17+)
  imports: [ProjectdetailsComponent,CommonModule], // Import the child component
})
export class ProjectsComponent {
  projects: Project[] = [];
  selectedProject: Project | null = null; // Track the selected project
  showPopup = false; // Control pop-up visibility

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.projects = this.dataService.getProjects(); // Fetch projects from the service
  }

  // Function to open the pop-up
  onViewProject(project: Project) {
    this.selectedProject = project;
    this.showPopup = true;
  }

  // Function to close the pop-up
  onClosePopup() {
    this.showPopup = false;
    this.selectedProject = null;
  }
}