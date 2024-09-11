import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditLifePage } from './edit-life.page';

const routes: Routes = [
  {
    path: '',
    component: EditLifePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditLifePageRoutingModule {}
