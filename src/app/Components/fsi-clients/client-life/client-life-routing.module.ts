import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientLifePage } from './client-life.page';

const routes: Routes = [
  {
    path: '',
    component: ClientLifePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientLifePageRoutingModule {}
