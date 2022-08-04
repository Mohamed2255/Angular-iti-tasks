import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsWithoutdiscountComponent } from './products-withoutdiscount.component';

describe('ProductsWithoutdiscountComponent', () => {
  let component: ProductsWithoutdiscountComponent;
  let fixture: ComponentFixture<ProductsWithoutdiscountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsWithoutdiscountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsWithoutdiscountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
