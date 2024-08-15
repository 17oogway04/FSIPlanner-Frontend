import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClientEditPcPageRoutingModule } from './client-edit-pc-routing.module';

import { ClientEditPcPage } from './client-edit-pc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClientEditPcPageRoutingModule
  ],
  declarations: [ClientEditPcPage]
})
export class ClientEditPcPageModule {}
