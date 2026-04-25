import { Component } from '@angular/core';
import { Navbar } from '../navbar/navbar';
import { Categories } from '../categories/categories';
import { Carousel } from '../carousel/carousel';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-body',
  imports: [Navbar,Categories,Carousel,Body,Footer],
  templateUrl: './body.html',
  styleUrl: './body.css',
})
export class Body {}
