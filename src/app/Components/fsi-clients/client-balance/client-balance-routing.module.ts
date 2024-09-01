import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientBalancePage } from './client-balance.page';

const routes: Routes = [
  {
    path: '',
    component: ClientBalancePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientBalancePageRoutingModule {}
