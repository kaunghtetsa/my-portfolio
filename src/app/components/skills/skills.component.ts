import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { SkillGroup } from '../../models/skill.model'; 
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgFor } from '@angular/common';
import { SkillratingComponent } from "../skillrating/skillrating.component";

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [FontAwesomeModule, NgFor, SkillratingComponent], 
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {
  groupedSkills: SkillGroup[] = []; 

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.groupedSkills = this.dataService.getSkills(); 
  }
}
