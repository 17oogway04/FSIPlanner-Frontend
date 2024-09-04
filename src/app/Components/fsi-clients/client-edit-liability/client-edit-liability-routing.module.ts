import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientEditLiabilityPage } from './client-edit-liability.page';

const routes: Routes = [
  {
    path: '',
    component: ClientEditLiabilityPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientEditLiabilityPageRoutingModule {}
