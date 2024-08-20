import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RequestUpdatePage } from './request-update.page';

const routes: Routes = [
  {
    path: '',
    component: RequestUpdatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RequestUpdatePageRoutingModule {}
