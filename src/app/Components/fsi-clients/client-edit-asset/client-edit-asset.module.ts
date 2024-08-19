import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClientEditAssetPageRoutingModule } from './client-edit-asset-routing.module';

import { ClientEditAssetPage } from './client-edit-asset.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClientEditAssetPageRoutingModule
  ],
  declarations: [ClientEditAssetPage]
})
export class ClientEditAssetPageModule {}
