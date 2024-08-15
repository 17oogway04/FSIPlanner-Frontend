import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientEditPcPage } from './client-edit-pc.page';

const routes: Routes = [
  {
    path: '',
    component: ClientEditPcPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientEditPcPageRoutingModule {}
