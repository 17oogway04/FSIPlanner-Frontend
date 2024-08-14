import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClientEditNotePageRoutingModule } from './client-edit-note-routing.module';

import { ClientEditNotePage } from './client-edit-note.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClientEditNotePageRoutingModule
  ],
  declarations: [ClientEditNotePage]
})
export class ClientEditNotePageModule {}
