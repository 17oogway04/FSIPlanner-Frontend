import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditDisabilityPage } from './edit-disability.page';

const routes: Routes = [
  {
    path: '',
    component: EditDisabilityPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditDisabilityPageRoutingModule {}
