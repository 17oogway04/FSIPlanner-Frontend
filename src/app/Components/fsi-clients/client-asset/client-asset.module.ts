import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClientAssetPageRoutingModule } from './client-asset-routing.module';

import { ClientAssetPage } from './client-asset.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClientAssetPageRoutingModule
  ],
  declarations: [ClientAssetPage]
})
export class ClientAssetPageModule {}
