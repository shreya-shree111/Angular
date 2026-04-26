import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-databinding',
  imports: [FormsModule],
  templateUrl: './databinding.html',
  styleUrl: './databinding.css',
})
export class Databinding {
  myName = "Shreya";
  img_url = "https://themoodguide.com/wp-content/uploads/2024/03/beach-shore-free-hd-aesthetic-wallpaper.jpg";
  flag = false;
  max_allowed = 20;
  num1 = 10;
  num2 = 20;

  toggleFlag() {
    this.flag = !this.flag;
  }

}
