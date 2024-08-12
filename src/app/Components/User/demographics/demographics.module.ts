import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DemographicsPageRoutingModule } from './demographics-routing.module';

import { DemographicsPage } from './demographics.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DemographicsPageRoutingModule
  ],
  declarations: [DemographicsPage]
})
export class DemographicsPageModule {}
