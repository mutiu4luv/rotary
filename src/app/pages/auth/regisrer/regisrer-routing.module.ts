import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisrerComponent } from './regisrer.component';

const routes: Routes = [
  {
    path: '',
    component: RegisrerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisrerRoutingModule {}
