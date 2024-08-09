import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditDemographicsPageRoutingModule } from './edit-demographics-routing.module';

import { EditDemographicsPage } from './edit-demographics.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditDemographicsPageRoutingModule
  ],
  declarations: [EditDemographicsPage]
})
export class EditDemographicsPageModule {}
