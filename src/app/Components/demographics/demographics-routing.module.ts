import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DemographicsPage } from './demographics.page';

const routes: Routes = [
  {
    path: '',
    component: DemographicsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DemographicsPageRoutingModule {}
