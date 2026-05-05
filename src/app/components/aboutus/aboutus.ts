import { Component } from "@angular/core";
import { inject } from "@angular/core";
import { Router, RouterLink } from "@angular/router";

@Component({
  selector: 'app-aboutus',
  imports: [RouterLink],
  templateUrl: './aboutus.html',
  styleUrl: './aboutus.css',
})
export class Aboutus {
  router = inject(Router);

  doSomethingAndGoToHomePage() {
    console.log('Do Something');
    this.router.navigateByUrl('/home')
  }
}
