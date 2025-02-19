import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClientEditDemoPageRoutingModule } from './client-edit-demo-routing.module';

import { ClientEditDemoPage } from './client-edit-demo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClientEditDemoPageRoutingModule
  ],
  declarations: [ClientEditDemoPage]
})
export class ClientEditDemoPageModule {}
