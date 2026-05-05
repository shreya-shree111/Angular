// import { Directive, ElementRef, HostListener } from '@angular/core';

// @Directive({
//   selector: '[appZoomin]',
//   standalone: true
// })
// export class Zoomin {

//   constructor(private ele: ElementRef) {
//     this.ele.nativeElement.style.transition = '0.3s ease';
//   }

//   @HostListener('mouseenter')
//   onMouseEnter() {
//     this.ele.nativeElement.style.transform = 'scale(1.1)';
//   }

//   @HostListener('mouseleave')
//   onMouseLeave() {
//     this.ele.nativeElement.style.transform = 'scale(1)';
//   }
// }