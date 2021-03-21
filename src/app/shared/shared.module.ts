import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialProviderModule } from '../material-provider/material-provider.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialProviderModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialProviderModule
  ]
})
export class SharedModule { }
