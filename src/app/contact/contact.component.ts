import { Component } from '@angular/core';
import emailjs from '@emailjs/browser';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  email: string = 'mimail@example.com';
  telefono: string = '+34 123 456 789';
  instagramUsername: string = 'tu_usuario';

  constructor(private fb: FormBuilder) {}
  contactForm: FormGroup = this.fb.group({
    from_name: ['', [Validators.required, Validators.minLength(3)]],
    from_lastName: ['', [Validators.required, Validators.minLength(3)]],
    from_phoneNo: ['', [Validators.required, Validators.minLength(6)]],
    to_name: 'Modesto',
    from_email: ['', [Validators.required, Validators.email]],
    message: ['', [Validators.required, Validators.minLength(10)]],
  });

  async send() {
    if (this.contactForm.valid) {
      emailjs.init('rsiUmPMx9eew9V6y1');
      let response = await emailjs.send('service_tbbzfaj', 'template_nvh2n5h', {
        from_name: this.contactForm.value.from_name,
        from_lastName: this.contactForm.value.from_lastName,
        to_name: this.contactForm.value.to_name,
        from_email: this.contactForm.value.from_email,
        from_date: this.contactForm.value.from_date,
        message: this.contactForm.value.message,
      });
    } else {
      console.error('Form is not valid.');
    }

    alert('mensaje enviado!');
    this.contactForm.reset();
  }
}
