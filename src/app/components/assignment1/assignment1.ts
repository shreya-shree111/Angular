import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-assignment1',
  imports: [FormsModule],
  templateUrl: './assignment1.html',
  styleUrl: './assignment1.css',
})
export class Assignment1 {
flag = true;
counter = 0;

  toggleFlag() {
   this.flag = !this.flag;
  }
  state ="";

  increment() {
    this.counter++
  }
  decrement() {
    this.counter--;
  }
  reset() {
    this.counter = 0;
  }
 celsius =0;
 fahrenheit = 0;

convert(){
  this.fahrenheit = (this.celsius * (9/5)) + 32;
}
}
