import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  @ViewChild('carousel', { static: false }) carousel!: ElementRef;

  ngAfterViewInit() {
    const carouselElement = this.carousel.nativeElement;
    // Initialize carousel here if needed
  }
}
