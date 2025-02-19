import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientLiabilityPage } from './client-liability.page';

const routes: Routes = [
  {
    path: '',
    component: ClientLiabilityPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientLiabilityPageRoutingModule {}
