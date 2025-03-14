import { Component } from '@angular/core';
import {  DataService } from '../../services/data.service';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgIf, NgClass } from '@angular/common'; 
import emailjs from '@emailjs/browser'; 
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, NgClass],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})

export class ContactComponent {
  contactForm: FormGroup;
  messageStatus: string = "";
  isError: boolean = false;

  private emailServiceId = 'kaunghtetsan_portfolio_e'; 
  private emailTemplateId = 'template_tddagui';
  private emailPublicKey = 'ZElrjZkgmud141VdL'; 

  constructor(private fb: FormBuilder,private dataService: DataService) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      const formData = {
        user_name: this.contactForm.value.name,
        user_email: this.contactForm.value.email,
        message: '[Name : '+this.contactForm.value.name+'; Email : '+this.contactForm.value.email+'] '+this.contactForm.value.message
      };

      emailjs.send(this.emailServiceId, this.emailTemplateId, formData, this.emailPublicKey)
        .then(() => {
          this.messageStatus = this.dataService.send_msg_success;
          this.isError = false;
          this.contactForm.reset();
        })
        .catch(() => {
          this.messageStatus = this.dataService.send_msg_failed;
          this.isError = true;
        });

    } else {
      this.messageStatus = this.dataService.send_msg_failed;
      this.isError = true;
    }

    // Hide message after 10 seconds
    setTimeout(() => {
      this.messageStatus = "";
    }, 5000);
  }
}
