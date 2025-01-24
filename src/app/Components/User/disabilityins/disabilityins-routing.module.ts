import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DisabilityinsPage } from './disabilityins.page';

const routes: Routes = [
  {
    path: '',
    component: DisabilityinsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DisabilityinsPageRoutingModule {}
