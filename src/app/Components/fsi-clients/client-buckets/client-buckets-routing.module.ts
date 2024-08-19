import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientBucketsPage } from './client-buckets.page';

const routes: Routes = [
  {
    path: '',
    component: ClientBucketsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientBucketsPageRoutingModule {}
