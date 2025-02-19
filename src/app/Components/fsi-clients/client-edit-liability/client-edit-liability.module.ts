import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClientEditLiabilityPageRoutingModule } from './client-edit-liability-routing.module';

import { ClientEditLiabilityPage } from './client-edit-liability.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClientEditLiabilityPageRoutingModule
  ],
  declarations: [ClientEditLiabilityPage]
})
export class ClientEditLiabilityPageModule {}
