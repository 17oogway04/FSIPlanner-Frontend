import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientRequestUpdatePage } from './client-request-update.page';

const routes: Routes = [
  {
    path: '',
    component: ClientRequestUpdatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientRequestUpdatePageRoutingModule {}
