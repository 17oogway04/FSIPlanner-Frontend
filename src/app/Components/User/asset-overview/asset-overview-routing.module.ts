import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AssetOverviewPage } from './asset-overview.page';

const routes: Routes = [
  {
    path: '',
    component: AssetOverviewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AssetOverviewPageRoutingModule {}
