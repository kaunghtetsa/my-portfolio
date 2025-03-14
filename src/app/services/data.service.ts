import { Injectable } from '@angular/core';
import { SkillGroup } from '../models/skill.model';
import { Project ,ProjectDetails} from '../models/project.model';

@Injectable({
  providedIn: 'root',
})

export class DataService {
  
  public readonly send_msg_success = 'Thank you for contacting me! I will get back to you shortly.';
  public readonly send_msg_failed = 'Oops! Something went wrong. Please send email to me.';

  getProjectsDetail(): ProjectDetails[] {
    return [
      {
        title: 'E-POS System',
        description: 'Developed a POS system for retail businesses.',
        technologies: ['C#', '.NET Core', 'SQL Server'],
        headcount: 3, // Add team members
      },
      {
        title: 'Cloud Migration',
        description: 'Migrated on-premise systems to Azure cloud.',
        technologies: ['Azure', 'PowerShell'],
        headcount: 3, // Add team members
     },
      {
        title: 'Bank Integration Projects',
        description: 'Migrated on-premise systems to Azure cloud.',
        technologies: ['Azure', 'PowerShell'],
        headcount: 3, // Add team members
     },
    ];
  }

  getSkills(): SkillGroup[] {
    return [
      {
        "type": "Web Technologies",
        "skills": [
          { "name": "HTML", "level": "Intermediate", "imgname": "html.png", "rate": 3 },
          { "name": "CSS", "level": "Intermediate", "imgname": "css.png", "rate": 3 },
          { "name": "JavaScript", "level": "Intermediate", "imgname": "javascript.png", "rate": 2 }
        ]
      },
      {
        "type": "Programming Languages",
        "skills": [
          { "name": "C# .NET Core", "level": "Advanced", "imgname": "csharp.png", "rate": 5 },
          { "name": "Java", "level": "Intermediate", "imgname": "java.png", "rate": 3 }
        ]
      },
      {
        "type": "APIs & Web Services",
        "skills": [
          { "name": "API", "level": "Intermediate", "imgname": "api.webp", "rate": 5 },
          { "name": "Web API", "level": "Intermediate", "imgname": "webapi.webp", "rate": 5 },
          { "name": "Web Services", "level": "Intermediate", "imgname": "webservice.png", "rate": 5 },
          { "name": "Swagger", "level": "Intermediate", "imgname": "swagger.png", "rate": 4 }
        ]
      },
      {
        "type": "Cloud Services",
        "skills": [
          { "name": "Azure", "level": "Intermediate", "imgname": "azure.webp", "rate": 4 },
          { "name": "AWS EC2", "level": "Intermediate", "imgname": "aws-ec2.png", "rate": 3 },
          { "name": "AWS S3", "level": "Intermediate", "imgname": "aws-s3.jpg", "rate": 3 }
        ]
      },
      {
        "type": "Databases",
        "skills": [
          { "name": "SQL Server", "level": "Advanced", "imgname": "sqlserver.jpg", "rate": 5 },
          { "name": "MySQL", "level": "Intermediate", "imgname": "mysql.png", "rate": 5 },
          { "name": "PostgreSQL", "level": "Intermediate", "imgname": "postgressql.png", "rate": 4 }
        ]
      },
      {
        "type": "DevOps & Tools",
        "skills": [
          { "name": "GitHub", "level": "Intermediate", "imgname": "github.png", "rate": 4 },
          { "name": "GitLab", "level": "Intermediate", "imgname": "gitlab.png", "rate": 4 },
          { "name": "JIRA", "level": "Intermediate", "imgname": "jira.png", "rate": 4 },
          { "name": "Postman", "level": "Intermediate", "imgname": "postman.jpg", "rate": 4 },
          { "name": "CI/CD", "level": "Intermediate", "imgname": "cicd.avif", "rate": 3 },
          { "name": "Docker", "level": "Intermediate", "imgname": "docker.png", "rate": 3 }
        ]
      },
      {
        "type": "Frameworks & Libraries",
        "skills": [
          { "name": ".NET Core", "level": "Advanced", "imgname": "NET_Core.png", "rate": 5 },
          { "name": "ASP.NET", "level": "Advanced", "imgname": "aspnet.jpg", "rate": 4 },
          { "name": "Entity Framework Core", "level": "Intermediate", "imgname": "entityframework.png", "rate": 5 },
          { "name": "WPF", "level": "Intermediate", "imgname": "wpf.jpg", "rate": 4 },
          { "name": "AngularJS", "level": "Intermediate", "imgname": "angular.png", "rate": 2 }
        ]
      },
      {
        "type": "Other",
        "skills": [
          { "name": "ADO.Net", "level": "Intermediate", "imgname": "adonet.jpg", "rate": 5 },
          { "name": "Microservices", "level": "Intermediate", "imgname": "microservice.png", "rate": 5 },
          { "name": "Windows Services", "level": "Intermediate", "imgname": "windowservice.jpg", "rate": 4 }
        ]
      }
    ]
  }
    

  getProjects(): Project[] {
    return [
      {
        title: 'E-POS System',
        description: 'Developed a POS system for retail businesses.',
        technologies: ['C#', '.NET Core', 'SQL Server'],
        link: '#',
        image: 'assets/images/projects/pj-epos.jpg',
      },
      {
        title: 'Cloud Migration',
        description: 'Migrated on-premise systems to Azure cloud.',
        technologies: ['Azure', 'PowerShell'],
        link: '#',
        image: 'assets/images/projects/pj-cloud-migration.jpg',
      },
      {
        title: 'Bank integration projects',
        description: 'Migrated on-premise systems to Azure cloud.',
        technologies: ['Azure', 'PowerShell'],
        link: '#',
        image: 'assets/images/projects/pj-bank-integration.png',
      },
      {
        title: 'E-POS System',
        description: 'Developed a POS system for retail businesses.',
        technologies: ['C#', '.NET Core', 'SQL Server'],
        link: '#',
        image: 'assets/images/projects/pj-epos.jpg',
      },
      {
        title: 'Cloud Migration',
        description: 'Migrated on-premise systems to Azure cloud.',
        technologies: ['Azure', 'PowerShell'],
        link: '#',
        image: 'assets/images/projects/pj-cloud-migration.jpg',
      },
      {
        title: 'Bank integration projects',
        description: 'Migrated on-premise systems to Azure cloud.',
        technologies: ['Azure', 'PowerShell'],
        link: '#',
        image: 'assets/images/projects/pj-bank-integration.png',
      }
    ];
  }
}