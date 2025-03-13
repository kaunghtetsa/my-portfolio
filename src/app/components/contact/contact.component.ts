import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgIf } from '@angular/common'; // Add this import

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf], // Add NgIf here
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      console.log('Form Submitted', this.contactForm.value);
      alert('Thank you for contacting me!');
      this.contactForm.reset();
    }
  }
}