import { Component } from '@angular/core';
import emailjs from '@emailjs/browser';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

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
    from_phoneNo: ['', [Validators.required, Validators.minLength(9)]],
    to_name: 'Modesto',
    from_email: ['', [Validators.required, Validators.email]],
    message: ['', [Validators.required, Validators.minLength(10)]],
  });

  async send() {
    emailjs.init('JxxvGEESDPdmdA-uO');
    let response = await emailjs.send('service_zxbkjqc', 'template_fd7q2qq', {
      from_name: this.contactForm.value.from_name,
      from_lastName: this.contactForm.value.from_lastName,
      to_name: this.contactForm.value.to_name,
      from_email: this.contactForm.value.from_email,
      from_date: this.contactForm.value.from_date,
      message: this.contactForm.value.message,
    });

    console.log('mensaje enviado!');

    Swal.fire({
      title: 'Gracias!',
      text: 'He recibido tu mensaje y te contestaré en seguida!',
      icon: 'success',
    });
    this.contactForm.reset();
  }
}

/* emailjs.send("service_zxbkjqc","template_fd7q2qq",{
from_name: "valerio",
to_name: "valerio",
message: "test",
reply_to: "test",
from_lastName: "valerio",
from_email: "test",
from_phoneNo: "test",
}); */
