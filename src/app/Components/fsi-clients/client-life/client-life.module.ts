import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClientLifePageRoutingModule } from './client-life-routing.module';

import { ClientLifePage } from './client-life.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClientLifePageRoutingModule
  ],
  declarations: [ClientLifePage]
})
export class ClientLifePageModule {}
