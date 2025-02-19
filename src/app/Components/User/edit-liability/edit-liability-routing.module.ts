import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditLiabilityPage } from './edit-liability.page';

const routes: Routes = [
  {
    path: '',
    component: EditLiabilityPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditLiabilityPageRoutingModule {}
