import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditDemographicsPage } from './edit-demographics.page';

const routes: Routes = [
  {
    path: '',
    component: EditDemographicsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditDemographicsPageRoutingModule {}
