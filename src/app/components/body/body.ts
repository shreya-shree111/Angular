import { Component } from '@angular/core';
import { Navbar } from '../navbar/navbar';
import { Categories } from '../categories/categories';
import { Carousel } from '../carousel/carousel';
import { Footer } from '../footer/footer';
import { Databinding } from '../databinding/databinding';
import { DatabindingAssignment } from '../databinding-assignment/databinding-assignment';
import { Directives } from '../directives/directives';

@Component({
  selector: 'app-body',
  imports: [Navbar,Categories,Carousel,Body,Footer,Databinding,DatabindingAssignment,Directives],
  templateUrl: './body.html',
  styleUrl: './body.css',
})
export class Body {}
