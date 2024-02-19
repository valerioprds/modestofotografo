import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  email: string = 'mimail@example.com';
  telefono: string = '+34 123 456 789';
  instagramUsername: string = 'tu_usuario';

  constructor() {}
  onSubmit() {
    // Implement your form submission logic here
    console.log('Form submitted');
  }
}
