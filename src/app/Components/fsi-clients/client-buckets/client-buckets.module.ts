import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClientBucketsPageRoutingModule } from './client-buckets-routing.module';

import { ClientBucketsPage } from './client-buckets.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClientBucketsPageRoutingModule
  ],
  declarations: [ClientBucketsPage]
})
export class ClientBucketsPageModule {}
