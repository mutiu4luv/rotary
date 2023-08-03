import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../component/navbar/navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

import { FirstComponent } from '../pages/first/first.component';
import { LeftComponent } from '../pages/left/left.component';

const component = [NavbarComponent, FirstComponent, LeftComponent];
const module = [CommonModule, MatToolbarModule, MatIconModule, MatCardModule];

@NgModule({
  declarations: [...component],
  imports: [...module],
  exports: [...component, ...module],
})
export class SharedmoduleModule {}
