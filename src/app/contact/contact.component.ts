import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  email: string = 'mimail@example.com';
  telefono: string = '+34 123 456 789';
  instagramUsername: string = 'tu_usuario';

  constructor(public dialogRef: MatDialogRef<ContactComponent>) {}


  onClose(): void {
    this.dialogRef.close();
  }
}
