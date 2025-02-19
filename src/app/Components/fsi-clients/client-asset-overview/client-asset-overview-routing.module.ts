import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientAssetOverviewPage } from './client-asset-overview.page';

const routes: Routes = [
  {
    path: '',
    component: ClientAssetOverviewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientAssetOverviewPageRoutingModule {}
