import { NgModule } from '@angular/core';

import { WelcomeRoutingModule } from './welcome-routing.module';


import { WelcomeComponent } from './welcome.component';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { CommonModule } from '@angular/common';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { FormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';

@NgModule({
  imports: [
    WelcomeRoutingModule,
    CommonModule,
    NzCollapseModule,
    NzRadioModule,
    FormsModule,
    NzButtonModule
  ],
  declarations: [WelcomeComponent],
  exports: [WelcomeComponent],
})
export class WelcomeModule {}
