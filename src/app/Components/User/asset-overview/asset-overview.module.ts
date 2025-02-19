import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AssetOverviewPageRoutingModule } from './asset-overview-routing.module';

import { AssetOverviewPage } from './asset-overview.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AssetOverviewPageRoutingModule
  ],
  declarations: [AssetOverviewPage]
})
export class AssetOverviewPageModule {}
