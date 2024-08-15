import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClientPcPageRoutingModule } from './client-pc-routing.module';

import { ClientPcPage } from './client-pc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClientPcPageRoutingModule
  ],
  declarations: [ClientPcPage]
})
export class ClientPcPageModule {}
