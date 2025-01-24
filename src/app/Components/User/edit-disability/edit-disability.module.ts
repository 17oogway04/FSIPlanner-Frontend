import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditDisabilityPageRoutingModule } from './edit-disability-routing.module';

import { EditDisabilityPage } from './edit-disability.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditDisabilityPageRoutingModule
  ],
  declarations: [EditDisabilityPage]
})
export class EditDisabilityPageModule {}
