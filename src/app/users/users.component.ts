import { Component, OnInit } from '@angular/core';
import { UserService } from '../Services/user.service';
import { IUser } from '../Shared Classes/Types';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
users:IUser[]=[];
  constructor(private userservice:UserService) { }

  ngOnInit(): void {
    this.userservice.getuser().subscribe(userdata=>{
this.users=userdata;
    })
  }

}
