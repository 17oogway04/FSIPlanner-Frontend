import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientEditAssetPage } from './client-edit-asset.page';

const routes: Routes = [
  {
    path: '',
    component: ClientEditAssetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientEditAssetPageRoutingModule {}
