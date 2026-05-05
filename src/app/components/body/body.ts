import { Component } from '@angular/core';

import { Navbar } from '../navbar/navbar';
import { Categories } from '../categories/categories';
import { Carousel } from '../carousel/carousel';
import { Footer } from '../footer/footer';
import { Databinding } from '../databinding/databinding';
import { DatabindingAssignment } from '../databinding-assignment/databinding-assignment';
import { Directives } from '../directives/directives';
import { MyModal } from '../my-modal/my-modal';
import { UserList } from '../user-list/user-list';
import { ProductList } from '../product-list/product-list';
import { Assignment1 } from '../assignment1/assignment1';
import { Employeecrud } from '../employeecrud/employeecrud';
import { TemplateForm } from '../template-form/template-form';
import { ModelForm } from '../model-form/model-form';
import { DynamicForm } from '../dynamic-form/dynamic-form';
import { SignalForm } from '../signal-form/signal-form';
import { RouterOutlet } from '@angular/router';
import { UserDetails } from '../user-details/user-details';
import { PermanentJobs } from '../permanent-jobs/permanent-jobs';
import { ContractJobs } from '../contract-jobs/contract-jobs';

@Component({
  selector: 'app-body',
  imports: [Navbar,
    Categories,
    Carousel,
    Body,
    Footer,
    Databinding,
    DatabindingAssignment,
    Directives,
    MyModal,
    UserList,
    ProductList,
    Assignment1,
    Employeecrud,
    TemplateForm,
    ModelForm,DynamicForm,SignalForm,RouterOutlet,UserDetails,PermanentJobs,ContractJobs],
  templateUrl: './body.html',
  styleUrl: './body.css',
})
 export class Body {}
