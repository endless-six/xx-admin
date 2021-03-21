import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
interface Category {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {
 
  categories: Category[] =[
    {value: 'ignition-coil', viewValue: 'Ignition Coil'},
    {value: 'oil-pump', viewValue: 'Oil Pump'},
    {value: 'O2-sensor', viewValue: 'O2 Sensor'},
  ];

  isLinear = false;
  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;
  
  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      category: ['', Validators.required],
      title: ['', Validators.required],
      make: ['', Validators.required],
      car: ['', Validators.required],
      oem: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

}
