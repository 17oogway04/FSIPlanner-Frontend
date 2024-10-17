import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientEditUserPage } from './client-edit-user.page';

const routes: Routes = [
  {
    path: '',
    component: ClientEditUserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientEditUserPageRoutingModule {}
