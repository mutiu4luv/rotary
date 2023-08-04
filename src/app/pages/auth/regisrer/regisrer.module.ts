import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisrerRoutingModule } from './regisrer-routing.module';
import { RegisrerComponent } from './regisrer.component';


@NgModule({
  declarations: [
    RegisrerComponent
  ],
  imports: [
    CommonModule,
    RegisrerRoutingModule
  ]
})
export class RegisrerModule { }
