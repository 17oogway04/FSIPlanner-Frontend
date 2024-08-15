import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditPcPageRoutingModule } from './edit-pc-routing.module';

import { EditPcPage } from './edit-pc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditPcPageRoutingModule
  ],
  declarations: [EditPcPage]
})
export class EditPcPageModule {}
