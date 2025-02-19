import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DisabilityinsPageRoutingModule } from './disabilityins-routing.module';

import { DisabilityinsPage } from './disabilityins.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DisabilityinsPageRoutingModule
  ],
  declarations: [DisabilityinsPage]
})
export class DisabilityinsPageModule {}
