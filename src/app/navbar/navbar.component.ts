import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  constructor(private dialogRef: MatDialog) {}

  openContactComponent() {
    const dialogRef = this.dialogRef.open(ContactComponent, {
      width: '600px',
      height: 'auto',
    });
  }
}
