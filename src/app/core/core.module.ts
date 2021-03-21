import { NgModule, Optional, SkipSelf } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';



@NgModule({
  declarations: [HeaderComponent, SidebarComponent],
  imports: [
    SharedModule
  ],
  exports: [
    HeaderComponent,
    SidebarComponent
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule){
    if (parentModule) {
      throw new Error('CoreModule has been loaded');
    }
  }
}
