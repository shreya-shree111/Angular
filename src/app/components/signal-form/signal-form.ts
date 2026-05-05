import { Component, signal, WritableSignal } from '@angular/core';
import { email, form, minLength, required, FormField } from '@angular/forms/signals';

@Component({
  selector: 'app-signal-form',
  standalone: true,
  imports: [FormField],
  templateUrl: './signal-form.html',
  styleUrls: ['./signal-form.css'], 
})
export class SignalForm {

  loginModel = signal({
    email: '',
    password: ''
  }); 

  loginForm = form(this.loginModel, (schema) => {
    required(schema.email, { message: 'Email is required' });
    email(schema.email, { message: 'Email format is not correct' });
    minLength(schema.email, 5, { message: 'Email should have minimum 5 chars' });
  });
}
