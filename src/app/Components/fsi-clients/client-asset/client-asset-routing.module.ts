import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientAssetPage } from './client-asset.page';

const routes: Routes = [
  {
    path: '',
    component: ClientAssetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientAssetPageRoutingModule {}
