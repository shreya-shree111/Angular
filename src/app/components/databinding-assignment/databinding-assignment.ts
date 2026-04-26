  import { Component } from '@angular/core';
  import { FormsModule } from '@angular/forms';

  @Component({
    selector: 'app-databinding-assignment',
    imports: [FormsModule],
    templateUrl: './databinding-assignment.html',
    styleUrl: './databinding-assignment.css',
  })
  export class DatabindingAssignment {
    currentTime:any;
    currentDate:any; 
    max_length = 100;
    message:String = "Hello world";

    greetings() {
      console.log(this.currentTime);

      if(!this.currentTime) {
        return '';
      }

      let time = Number(this.currentTime.split(':')[0]);

      if(time < 12) {
        return "Good Morning";
      }else if(time <17) {
        return "Good Afternoon";
      } else {
        return "Good Evening";
      }
    }
  }
      
