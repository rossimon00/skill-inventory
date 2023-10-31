import { Component } from '@angular/core';

@Component({
  selector: 'app-login-hr',
  templateUrl: './login-hr.component.html',
  styleUrls: ['./login-hr.component.css']
})
export class LoginHrComponent {
  username: string;
  password: string;
 
  constructor() { 
    this.username = '';
    this.password = '';
  }
 
  ngOnInit(): void {
  }
 
  onSubmit(): void {
     console.log('Username: ', this.username);
     console.log('Password: ', this.password);
     // Add your login logic here
  }
}
