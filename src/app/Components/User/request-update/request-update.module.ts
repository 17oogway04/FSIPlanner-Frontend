import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RequestUpdatePageRoutingModule } from './request-update-routing.module';

import { RequestUpdatePage } from './request-update.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RequestUpdatePageRoutingModule
  ],
  declarations: [RequestUpdatePage]
})
export class RequestUpdatePageModule {}
