import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClientEditUserPageRoutingModule } from './client-edit-user-routing.module';

import { ClientEditUserPage } from './client-edit-user.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClientEditUserPageRoutingModule
  ],
  declarations: [ClientEditUserPage]
})
export class ClientEditUserPageModule {}
