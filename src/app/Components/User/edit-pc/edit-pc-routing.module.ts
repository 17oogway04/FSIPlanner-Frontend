import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditPcPage } from './edit-pc.page';

const routes: Routes = [
  {
    path: '',
    component: EditPcPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditPcPageRoutingModule {}
