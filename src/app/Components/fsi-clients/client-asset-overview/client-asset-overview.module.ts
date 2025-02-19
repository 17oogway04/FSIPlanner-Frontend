import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClientAssetOverviewPageRoutingModule } from './client-asset-overview-routing.module';

import { ClientAssetOverviewPage } from './client-asset-overview.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClientAssetOverviewPageRoutingModule
  ],
  declarations: [ClientAssetOverviewPage]
})
export class ClientAssetOverviewPageModule {}
