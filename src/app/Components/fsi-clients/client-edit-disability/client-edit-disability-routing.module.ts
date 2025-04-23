import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientEditDisabilityPage } from './client-edit-disability.page';

const routes: Routes = [
  {
    path: '',
    component: ClientEditDisabilityPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientEditDisabilityPageRoutingModule {}
