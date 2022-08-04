import { Component, OnInit } from '@angular/core';
import { PostsService } from '../Services/posts.service';
import { IPosts } from '../Shared Classes/Types';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  constructor(private postssevices:PostsService) { }
posts:IPosts[]=[];
  ngOnInit(): void {
this.postssevices.getpost().subscribe(postdata=>{
  this.posts=postdata;
})
  }

}
