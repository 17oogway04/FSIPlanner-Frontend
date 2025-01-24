import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClientDisabilityPageRoutingModule } from './client-disability-routing.module';

import { ClientDisabilityPage } from './client-disability.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClientDisabilityPageRoutingModule
  ],
  declarations: [ClientDisabilityPage]
})
export class ClientDisabilityPageModule {}
