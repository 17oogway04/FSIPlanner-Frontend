import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClientRequestUpdatePageRoutingModule } from './client-request-update-routing.module';

import { ClientRequestUpdatePage } from './client-request-update.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClientRequestUpdatePageRoutingModule
  ],
  declarations: [ClientRequestUpdatePage]
})
export class ClientRequestUpdatePageModule {}
