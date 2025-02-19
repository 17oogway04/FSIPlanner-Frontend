import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClientBalancePageRoutingModule } from './client-balance-routing.module';

import { ClientBalancePage } from './client-balance.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClientBalancePageRoutingModule
  ],
  declarations: [ClientBalancePage]
})
export class ClientBalancePageModule {}
