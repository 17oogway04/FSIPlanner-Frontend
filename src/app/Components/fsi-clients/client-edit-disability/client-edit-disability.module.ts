import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClientEditDisabilityPageRoutingModule } from './client-edit-disability-routing.module';

import { ClientEditDisabilityPage } from './client-edit-disability.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClientEditDisabilityPageRoutingModule
  ],
  declarations: [ClientEditDisabilityPage]
})
export class ClientEditDisabilityPageModule {}
