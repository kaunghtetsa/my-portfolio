import { Injectable } from '@angular/core';
import { Skill } from '../models/skill.model';
import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  getSkills(): Skill[] {
    return [
      { name: 'C# .NET Core', level: 'Advanced', icon: 'fas fa-code' },
      { name: 'Azure', level: 'Intermediate', icon: 'fas fa-cloud' },
      { name: 'SQL', level: 'Advanced', icon: 'fas fa-database' },
      { name: 'Angular', level: 'Intermediate', icon: 'fab fa-angular' },
    ];
  }

  getProjects(): Project[] {
    return [
      {
        title: 'E-POS System',
        description: 'Developed a point-of-sale system for retail businesses.',
        technologies: ['C#', '.NET Core', 'SQL Server'],
        link: '#',
        image: 'assets/epos-system.jpg',
      },
      {
        title: 'Cloud Migration',
        description: 'Migrated on-premise systems to Azure cloud.',
        technologies: ['Azure', 'PowerShell'],
        link: '#',
        image: 'assets/cloud-migration.jpg',
      },
    ];
  }
}