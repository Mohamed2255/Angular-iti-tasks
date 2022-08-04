import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { IPosts } from '../Shared Classes/Types';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http:HttpClient) { }
  public _url="https://jsonplaceholder.typicode.com/posts";
  getpost():Observable<IPosts[]>
  {
   return this.http.get<IPosts[]>(this._url).pipe(
    catchError((err=>{
      return throwError(()=>err.message|| "Internal server Message")
    }))
   );
  }
}
