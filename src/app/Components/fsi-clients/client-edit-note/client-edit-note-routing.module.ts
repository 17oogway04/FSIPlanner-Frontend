import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientEditNotePage } from './client-edit-note.page';

const routes: Routes = [
  {
    path: '',
    component: ClientEditNotePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientEditNotePageRoutingModule {}
