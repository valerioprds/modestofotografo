import { Component } from '@angular/core';

@Component({
  selector: 'app-wedding1',
  templateUrl: './wedding1.component.html',
  styleUrls: ['./wedding1.component.scss'],
})
export class Wedding1Component {
  images = [
    { src: '/assets/weddings-img/wedding1.webp', alt: 'Image description 1' },
    {
      src: '/assets/weddings-img/wedding-cake.jpg',
      alt: 'Image description 2',
    },
    { src: '/assets/weddings-img/wedding1.webp', alt: 'Image description 1' },
    { src: '/assets/weddings-img/wedding1.webp', alt: 'Image description 2' },
    { src: '/assets/weddings-img/wedding1.webp', alt: 'Image description 1' },
    { src: '/assets/weddings-img/wedding1.webp', alt: 'Image description 2' },
    {
      src: '/assets/weddings-img/wedding-cake.jpg',
      alt: 'Image description 1',
    },
    { src: '/assets/weddings-img/wedding1.webp', alt: 'Image description 2' },
    // Add more images as needed
  ];
}
