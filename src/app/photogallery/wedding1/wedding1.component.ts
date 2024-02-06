import { Component } from '@angular/core';

@Component({
  selector: 'app-wedding1',
  templateUrl: './wedding1.component.html',
  styleUrls: ['./wedding1.component.scss'],
})
export class Wedding1Component {
  weddingPhotos = [
    {
      url: '/assets/weddings-img/wedding3.jpg',
      title: 'A countryside wedding',
      description:
        'A beautiful shot capturing the essence of a countryside wedding.',
    },
    // ... other photo objects
  ];
  getPhotoStyle(index: number) {
    const rotation =
      (index % 2 === 0 ? '' : '-') + (Math.random() * 20).toFixed(2);
    return {
      transform: `rotate(${rotation}deg)`,
      zIndex: index,
    };
  }
}
