import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsWithdiscountComponent } from './products-withdiscount.component';

describe('ProductsWithdiscountComponent', () => {
  let component: ProductsWithdiscountComponent;
  let fixture: ComponentFixture<ProductsWithdiscountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsWithdiscountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsWithdiscountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
