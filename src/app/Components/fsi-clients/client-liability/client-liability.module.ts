import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClientLiabilityPageRoutingModule } from './client-liability-routing.module';

import { ClientLiabilityPage } from './client-liability.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClientLiabilityPageRoutingModule
  ],
  declarations: [ClientLiabilityPage]
})
export class ClientLiabilityPageModule {}
