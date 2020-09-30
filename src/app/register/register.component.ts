import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService} from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent{

  constructor(private userservice: UserService){}

  onRegister(form: NgForm){
    const email = form.value.email;
    const pass = form.value.password;
    const authSet = {
      email: email,
      password: pass
    }; 
    this.userservice.createUser(email, pass).subscribe(res =>{
      console.log(authSet);
    });
  }
}
