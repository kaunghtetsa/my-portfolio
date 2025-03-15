import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ProjectDetailsComponent } from '../projectdetails/projectdetails.component';
import { Project } from '../../models/project.model';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, MatDialogModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent {
  projects: Project[] = [];
  private dialog = inject(MatDialog); // ✅ Inject MatDialog

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.projects = this.dataService.getProjects(); // ✅ Fetch projects
  }

  openProjectDetails(project: Project) {
    this.dialog.open(ProjectDetailsComponent, {
      width: '600px',
      data: project, // ✅ Pass project data
    });
  }
}
