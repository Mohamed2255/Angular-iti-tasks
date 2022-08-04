import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { ForbiddenNameValidator } from '../CustomValidators/ForbiddenNameValidator';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {

  constructor(private fb:FormBuilder) { }
  products=["product1","profuct2","product3"];
  usermodel=this.fb.group({
   name:['',[Validators.required,ForbiddenNameValidator(/admin/),ForbiddenNameValidator(/adminstrator/)]],
 products:['',[Validators.required]],
 discount:[false],
 discountval:[''],
 comment:this.fb.array([])
  })
  get name()
  {
    return this.usermodel.get('name')
  }
  get discountval()
  {
    return this.usermodel.get('discountval')
  }



  get comment()
  {
    return this.usermodel.get('comment') as FormArray;
  }

  addcomment()
  {
    this.comment.push(this.fb.control(''))
  }

  removecomment(i:any)
  {
    this.comment.removeAt(i);
  }

   adddiscount()
  {
    
   //if the checkbox is marked then the email become required
    //if the checkbox is not marked the email become optional
    this.usermodel.get('discount')?.valueChanges
    .subscribe(checkedValue=>{
      if(checkedValue)
      {
        this.discountval?.setValidators(Validators.required);
      }
      else
      {
        this.discountval?.clearValidators();
      }
      this.discountval?.updateValueAndValidity();
    })
  }
  
  

  ngOnInit(): void {
  }

}
