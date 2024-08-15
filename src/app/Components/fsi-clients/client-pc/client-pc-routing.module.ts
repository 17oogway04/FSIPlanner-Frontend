import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientPcPage } from './client-pc.page';

const routes: Routes = [
  {
    path: '',
    component: ClientPcPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientPcPageRoutingModule {}
