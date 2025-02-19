import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BucketsPageRoutingModule } from './buckets-routing.module';

import { BucketsPage } from './buckets.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BucketsPageRoutingModule
  ],
  declarations: [BucketsPage]
})
export class BucketsPageModule {}
