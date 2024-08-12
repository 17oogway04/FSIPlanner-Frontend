import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClientDemographicsPageRoutingModule } from './client-demographics-routing.module';

import { ClientDemographicsPage } from './client-demographics.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClientDemographicsPageRoutingModule
  ],
  declarations: [ClientDemographicsPage]
})
export class ClientDemographicsPageModule {}
