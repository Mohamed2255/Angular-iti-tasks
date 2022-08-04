import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '../Shared Classes/Types';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) {
   }
   public _url="https://jsonplaceholder.typicode.com/users";
   getuser():Observable<IUser[]>
   {
    return this.http.get<IUser[]>(this._url);
   }
}
