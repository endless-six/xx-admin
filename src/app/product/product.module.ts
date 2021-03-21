import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';


import { ProductRoutingModule } from './product-routing.module';
import { ProductHomeComponent } from './product-home/product-home.component';
import { ProductsComponent } from './products/products.component';
import { ProductEditComponent } from './product-edit/product-edit.component';


@NgModule({
  declarations: [ProductHomeComponent, ProductsComponent, ProductEditComponent],
  imports: [
    SharedModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
