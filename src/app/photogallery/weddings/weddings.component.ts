import { Component } from '@angular/core';

@Component({
  selector: 'app-weddings',
  templateUrl: './weddings.component.html',
  styleUrls: ['./weddings.component.scss'],
})
export class WeddingsComponent {
  photos = [
    {
      url: '/assets/weddings-img/wedding2.jpg',
      title: 'Photo 1',
      description: 'Description of photo 2',
    },
    {
      url: '/assets/weddings-img/wedding2.jpg',
      title: 'Photo 1',
      description: 'Description of photo 2',
    },
    // Add more photos here
  ];

  constructor() {}

  ngOnInit(): void {}
}
