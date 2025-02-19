import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientDisabilityPage } from './client-disability.page';

const routes: Routes = [
  {
    path: '',
    component: ClientDisabilityPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientDisabilityPageRoutingModule {}
