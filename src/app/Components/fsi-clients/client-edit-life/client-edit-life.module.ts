import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClientEditLifePageRoutingModule } from './client-edit-life-routing.module';

import { ClientEditLifePage } from './client-edit-life.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClientEditLifePageRoutingModule
  ],
  declarations: [ClientEditLifePage]
})
export class ClientEditLifePageModule {}
