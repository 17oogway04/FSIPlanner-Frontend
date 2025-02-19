import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FSIProfilePageRoutingModule } from './fsi-profile-routing.module';

import { FSIProfilePage } from './fsi-profile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FSIProfilePageRoutingModule
  ],
  declarations: [FSIProfilePage]
})
export class FSIProfilePageModule {}
