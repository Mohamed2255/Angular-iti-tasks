import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductComponent } from './product/product.component';
import { ProductServiceService } from './Services/product-service.service';

@Component({
  selector: 'myfirstapp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'firstday';
  @ViewChild(ProductComponent)child!:ProductComponent;
displaydata()
{
  return this.child.renderValues();
}
}
