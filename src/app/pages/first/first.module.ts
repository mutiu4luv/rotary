import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FirstRoutingModule } from './first-routing.module';
import { FirstComponent } from './first.component';
import { SharedmoduleModule } from 'src/app/sharedmodule/sharedmodule.module';

@NgModule({
  declarations: [FirstComponent],
  imports: [CommonModule, FirstRoutingModule, SharedmoduleModule],
})
export class FirstModule {}
