import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';  
import { MatToolbarModule } from '@angular/material/toolbar'; 
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav'; 
import { MatListModule } from '@angular/material/list'; 
import { MatFormFieldModule } from '@angular/material/form-field'; 
import { MatInputModule } from '@angular/material/input';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule} from '@angular/material/select'; 
import { MatStepperModule} from '@angular/material/stepper'; 

const modules = [
  MatButtonModule,
  MatCardModule,
  MatToolbarModule,
  MatIconModule,
  MatSidenavModule,
  MatListModule,
  MatFormFieldModule,
  MatInputModule,
  MatGridListModule,
  MatCheckboxModule,
  MatSelectModule,
  MatStepperModule
]

@NgModule({
  declarations: [],
  imports: modules,
  exports: modules
})
export class MaterialProviderModule { }
