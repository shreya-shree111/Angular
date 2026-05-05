import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { Categories } from './components/categories/categories';
import { Carousel } from './components/carousel/carousel';
import { Body } from './components/body/body';
import { Footer } from './components/footer/footer';
import { Databinding } from './components/databinding/databinding';
import { DatabindingAssignment } from './components/databinding-assignment/databinding-assignment';
import { Directives } from './components/directives/directives';
import { MyModal } from './components/my-modal/my-modal';
import { UserList } from './components/user-list/user-list';
import { ProductList } from './components/product-list/product-list';
import { Assignment1 } from './components/assignment1/assignment1';
import { Employeecrud } from './components/employeecrud/employeecrud';
import { TemplateForm } from './components/template-form/template-form';
import { ModelForm } from './components/model-form/model-form';
import { DynamicForm } from './components/dynamic-form/dynamic-form';
import { SignalForm } from './components/signal-form/signal-form';
import { UserDetails } from './components/user-details/user-details';
import { Productdetails } from './components/product-details/product-details';
import { Products } from './components/products/products';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,
    Navbar,
    Categories,
    Carousel,Body,
    Databinding,
    Footer,
    DatabindingAssignment,
    Directives,
    MyModal,
    UserList,
    ProductList,
  Assignment1,Employeecrud,
  TemplateForm,
  ModelForm,DynamicForm,
  SignalForm,
  RouterOutlet,UserList,ProductList,UserDetails,Productdetails,Products
],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular_project');
}
