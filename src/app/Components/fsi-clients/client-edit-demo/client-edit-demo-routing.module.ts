import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientEditDemoPage } from './client-edit-demo.page';

const routes: Routes = [
  {
    path: '',
    component: ClientEditDemoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientEditDemoPageRoutingModule {}
