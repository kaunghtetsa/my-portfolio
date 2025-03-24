import { Injectable } from '@angular/core';
import { SkillGroup } from '../models/skill.model';
import { Project} from '../models/project.model';

@Injectable({
  providedIn: 'root',
})

export class DataService {
  
  public readonly send_msg_success = 'Thank you for contacting me! I will get back to you shortly.';
  public readonly send_msg_failed = 'Oops! Something went wrong. Please send email to me.';
 

  getSkills(): SkillGroup[] {
    return [
      {
        "type": "Web Technologies",
        "skills": [
          { "name": "HTML", "level": "Intermediate", "imgname": "html.png", "rate": 3 },
          { "name": "CSS", "level": "Intermediate", "imgname": "css.png", "rate": 3 },
          { "name": "JavaScript", "level": "Intermediate", "imgname": "javascript.png", "rate": 2 },
          { "name": "Bootstrap", "level": "Intermediate", "imgname": "bootstrap.webp", "rate": 2 },
          { "name": "TypeScript", "level": "Intermediate", "imgname": "typescript.png", "rate": 2 }
 
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
          { "name": "Swagger", "level": "Intermediate", "imgname": "swagger.webp", "rate": 4 }
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
          { "name": "MySQL", "level": "Intermediate", "imgname": "mysql.webp", "rate": 5 },
          { "name": "PostgreSQL", "level": "Intermediate", "imgname": "postgressql.png", "rate": 4 }
        ]
      },
      {
        "type": "DevOps & Tools",
        "skills": [
          { "name": "GitHub", "level": "Intermediate", "imgname": "github.png", "rate": 4 },
          { "name": "GitLab", "level": "Intermediate", "imgname": "gitlab.png", "rate": 4 },
          { "name": "JIRA", "level": "Intermediate", "imgname": "jira.png", "rate": 4 },
          { "name": "Postman", "level": "Intermediate", "imgname": "postman.webp", "rate": 4 },
          { "name": "CI/CD", "level": "Intermediate", "imgname": "cicd.avif", "rate": 3 },
          { "name": "Docker", "level": "Intermediate", "imgname": "docker.png", "rate": 3 },
          { "name": "Kubernetes", "level": "Intermediate", "imgname": "kubernetes.webp", "rate": 2 },
          { "name": "SSIS", "level": "Intermediate", "imgname": "ssis.webp", "rate": 2 }
          
        ]
      },
      {
        "type": "Frameworks & Libraries",
        "skills": [
          { "name": ".NET Core", "level": "Advanced", "imgname": "NET_Core.webp", "rate": 5 },
          { "name": "ASP.NET", "level": "Advanced", "imgname": "aspnet.jpg", "rate": 4 },
          { "name": "Entity Framework Core", "level": "Intermediate", "imgname": "entityframework.webp", "rate": 5 },
          { "name": "WPF", "level": "Intermediate", "imgname": "wpf.jpg", "rate": 4 },
          { "name": "AngularJS", "level": "Intermediate", "imgname": "angular.png", "rate": 2 },
          { "name": "Dapper", "level": "Intermediate", "imgname": "dapper.webp", "rate": 2 }
        ]
      },
      {
        "type": "Testing Frameworks",
        "skills": [
          { "name": "MSTest", "level": "Intermediate", "imgname": "mstest.webp", "rate": 3 },
          { "name": "xUnit", "level": "Intermediate", "imgname": "xunit.webp", "rate": 3 }
        ]
      },     
      {
        "type": "Other",
        "skills": [
          { "name": "ADO.Net", "level": "Intermediate", "imgname": "adonet.jpg", "rate": 5 },
          { "name": "Microservices", "level": "Intermediate", "imgname": "microservice.avif", "rate": 5 },
          { "name": "Windows Services", "level": "Intermediate", "imgname": "windowservice.jpg", "rate": 4 },
          { "name": "Windows Server", "level": "Intermediate", "imgname": "windowserver.webp", "rate": 4 },
          { "name": "Redis", "level": "Intermediate", "imgname": "redis.webp", "rate": 2 },
          { "name": "Android Development", "level": "Beginner", "imgname": "android.webp", "rate": 2 },
          { "name": "Photoshop CS6", "level": "Beginner", "imgname": "photoshopcs6.webp", "rate": 2 },
          { "name": "AI Utilization", "level": "Intermediate", "imgname": "ai-utilization.webp", "rate": 3 }
      
        ]
      }
    ]
  }
    

  getProjects(): Project[] {
    return [
        {
          title: 'E-POS System',
          recap: 'Retail POS system with inventory and sales management.',       
          description: 'Developed a POS system with sales tracking, inventory management, and reporting. Provided real-time insights to enhance decision-making. Designed to meet specific client requirements for seamless business operations.',
          technologies: ['C#', 'WPF', '.NET Core', '.NET 4 Client Profile', 'SQL Server', 'Huawei Cloud', 'Windows Services', 'Web Services (WCF)'],
          headcount: 6, 
          image: 'assets/images/projects/pj-epos.jpg',
        },
        {
          title: 'Cloud Migrations',
          recap: 'Migrated enterprise systems to AWS and Azure.',       
          description: 'Led cloud migration for on-premise infrastructure. Ensured data integrity, security, and system optimization. Delivered tailored cloud solutions based on client needs.',
          technologies: ['Azure', 'PowerShell', 'AWS EC2', 'AWS S3'],
          headcount: 3,
          image: 'assets/images/projects/pj-cloud-migration.jpg',
        },
        {
          title: 'Bank Integration Projects',
          recap: 'Integrated banking APIs for secure transactions.',       
          description: 'Developed banking API integrations with real-time transaction monitoring. Ensured compliance with financial regulations. Provided advanced reporting to meet client needs.',
          technologies: ['C#', '.NET 6', 'ASP.NET', 'MySQL', 'Unit Testing', 'API', 'Postman', 'Swagger'],
          headcount: 6,
          image: 'assets/images/projects/pj-bank-integration.png',
        },
        {
          title: 'Telecom Integration Projects',
          recap: 'Integrated telecom systems with enterprise solutions.',       
          description: 'Developed telecom system integrations with advanced reporting. Provided seamless communication between platforms. Focused on customization to match client operations.',
          technologies: ['C#', '.NET 6', 'ASP.NET', 'MySQL', 'Unit Testing', 'API', 'Postman', 'Swagger'],
          headcount: 6,
          image: 'assets/images/projects/pj-telecom-integration.jpg',
        },
        {
          title: 'E-Payment System',
          recap: 'Developed a secure online payment system.',       
          description: 'Built a secure and scalable payment system. Integrated multiple payment gateways with detailed reporting. Designed to align with business and client requirements.',
          technologies: ['C#', '.NET 6', 'ASP.NET', 'MySQL', 'Unit Testing', 'API', 'Postman', 'Swagger'],
          headcount: 5,
          image: 'assets/images/projects/pj-epayment.jpg',
        },
        {
          title: 'Ticketing System',
          recap: 'Developed a ticketing system with reporting features.',       
          description: 'Designed a system for managing ticket sales and customer data. Implemented real-time reporting for sales analysis and tracking. Customized based on client specifications to optimize business processes.',
          technologies: ['AWS EC2', 'AWS S3', 'Turnstile (Hardware)', 'C#', 'Java Core', 'Angular'],
          headcount: 3,
          image: 'assets/images/projects/pj-ticket-selling.avif',
        },
        {
          title: 'Loyalty POS Projects',
          recap: 'Implemented a customer loyalty program for retail.',       
          description: 'Developed a loyalty system integrated with POS. Provided customer rewards tracking and insights via reports. Customized based on client marketing and engagement strategies.',
          technologies: ['C#', '.NET Core', 'SQL Server', 'API', 'Postman'],
          headcount: 3,
          image: 'assets/images/projects/pj-loyalty-program.webp',
        }
      ];
  }
}