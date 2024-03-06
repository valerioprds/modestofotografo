import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
/*   isContactDialogOpen: boolean = false; // Añadir esta línea

  constructor(private dialog: MatDialog) {}

  openContactComponent() {
    if (!this.isContactDialogOpen) {
      const dialogRef = this.dialog.open(ContactComponent, {
        width: '600px',
        height: 'auto',
      });

      this.isContactDialogOpen = true;

      dialogRef.afterClosed().subscribe(() => {
        this.isContactDialogOpen = false;
      });
    }
  } */
}
