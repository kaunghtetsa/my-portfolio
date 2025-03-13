import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Skill } from '../../models/skill.model';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgFor } from '@angular/common'; // Add this import

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [FontAwesomeModule, NgFor], // Add NgFor here
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {
  skills: Skill[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.skills = this.dataService.getSkills();
  }
}