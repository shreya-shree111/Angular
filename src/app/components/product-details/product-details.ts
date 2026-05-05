import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  standalone: true,
  templateUrl: './product-details.html',
  styleUrl: './product-details.css',
})
export class Productdetails {
   product: any;
	  activatedRoute = inject(ActivatedRoute);
    
	  ngOnInit() {
		this.activatedRoute.queryParams.subscribe(params => {
		  this.product = params;
		  console.log(params)
		})
	  }
}