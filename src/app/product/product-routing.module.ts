import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductHomeComponent } from './product-home/product-home.component';

const routes: Routes = [
  {path: '', component: ProductHomeComponent},
  {path: 'edit', component: ProductEditComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
