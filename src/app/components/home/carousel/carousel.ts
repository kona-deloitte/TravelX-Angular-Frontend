import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carousel',
  imports: [CommonModule],
  templateUrl: './carousel.html',
  styleUrl: './carousel.css'
})
export class Carousel implements OnInit, OnDestroy {
slides = [
    {
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920',
      title: 'Discover Paradise',
      description: 'Escape to pristine beaches and crystal-clear waters',
    },
    {
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920',
      title: 'Conquer New Heights',
      description: 'Experience breathtaking mountain adventures and scenic trails',
    },
    {
      image: 'https://images.unsplash.com/photo-1548013146-72479768bada?w=1920',
      title: 'Explore Ancient Cultures',
      description: 'Immerse yourself in rich history and timeless traditions',
    },
    {
      image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1920',
      title: 'City Adventures Await',
      description: 'Discover vibrant cities and modern wonders around the world',
    },
    {
      image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1920',
      title: 'Wildlife Encounters',
      description: 'Get up close with nature most magnificent creatures',
    },
  ];
 
  currentSlide = 0;
  timer: any;
 
  ngOnInit() {
    this.startAutoSlide();
  }
 
  ngOnDestroy() {
    this.stopAutoSlide();
  }
 
  startAutoSlide() {
    this.stopAutoSlide();
    this.timer = setInterval(() => {
      this.nextSlide();
    }, 3000); // slide every 3s
  }
 
  stopAutoSlide() {
    if (this.timer) clearInterval(this.timer);
  }
 
  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }
 
  prevSlide() {
    this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
  }
 
  changeSlide(direction: number) {
    if (direction === 1) this.nextSlide();
    else this.prevSlide();
    this.startAutoSlide();
  }
 
  goToSlide(index: number) {
    this.currentSlide = index;
    this.startAutoSlide();
  }
}
