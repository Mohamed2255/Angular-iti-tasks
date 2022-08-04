import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Login } from '../Shared Classes/Types';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private fb:FormBuilder) { }
  usermodel=this.fb.group({
    email:['',[Validators.required,Validators.pattern('[a-z0-9]+@[a-z]+\.[a-z]{2,3}')]],
    password:['',Validators.required]
  })
  get email()
{
  return this.usermodel.get('email')
}
get password()
{
  return this.usermodel.get('password')
}
  ngOnInit(): void {
  }

}
