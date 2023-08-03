import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarRoutingModule } from './navbar-routing.module';
import { SharedmoduleModule } from 'src/app/sharedmodule/sharedmodule.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, NavbarRoutingModule, SharedmoduleModule],
})
export class NavbarModule {}
