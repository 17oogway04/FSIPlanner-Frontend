import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FSIProfilePage } from './fsi-profile.page';

const routes: Routes = [
  {
    path: '',
    component: FSIProfilePage,
  },
  {
    path: 'fsi-profile',
    component: FSIProfilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FSIProfilePageRoutingModule { }
