import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NotesComponent } from './notes/notes.component';
import { PostsComponent } from './posts/posts.component';
import { ProductComponent } from './product/product.component';
import { ProductsWithdiscountComponent } from './products-withdiscount/products-withdiscount.component';
import { ProductsWithoutdiscountComponent } from './products-withoutdiscount/products-withoutdiscount.component';
import { RegisterComponent } from './register/register.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'products',component:ProductComponent,
  children:[
    {path:'productswithdiscount',component:ProductsWithdiscountComponent},
    {path:'productswithoutdiscount',component:ProductsWithoutdiscountComponent}
  ]


},
  {path:'users',component:UsersComponent},
  {path:'posts',component:PostsComponent},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'notes',component:NotesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
