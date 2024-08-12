import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientDemographicsPage } from './client-demographics.page';

const routes: Routes = [
  {
    path: '',
    component: ClientDemographicsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientDemographicsPageRoutingModule {}
