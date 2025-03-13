import { Component, OnInit } from '@angular/core';
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
}