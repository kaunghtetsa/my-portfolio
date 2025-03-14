import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-skillrating', // Updated selector
  templateUrl: './skillrating.component.html', // Updated template URL
  styleUrls: ['./skillrating.component.css'], // Updated style URL
  imports:[CommonModule]
})
export class SkillratingComponent { // Updated class name
  @Input() rating: number = 0; // Input for the rating value
  @Input() maxStars: number = 5; // Maximum number of stars (default is 5)

  getStarsArray(): string[] {
    const stars = [];
    for (let i = 1; i <= this.maxStars; i++) {
      if (i <= this.rating) {
        stars.push('full'); // Filled star
      } else {
        stars.push('empty'); // Empty star
      }
    }
    return stars;
  }
}