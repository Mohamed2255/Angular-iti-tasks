import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ConfirmPasswordValidators } from '../CustomValidators/ConfirmPasswordValidator';
import { Register } from '../Shared Classes/Types';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private fb:FormBuilder) { }
socail=["Facbook","Twitter","google"];
// usermodel:Register=new Register("","","","");
registerationForm=this.fb.group({
  userName:['',[Validators.required,Validators.pattern("^[A-Za-z]*$")]],
  password:[''],
  confirmPassword:[''],
  socail:['',[Validators.required]]

},{validator:[ConfirmPasswordValidators]})

get UserName()
{
  return this.registerationForm.get('userName')
}
  ngOnInit(): void {
  }

}
