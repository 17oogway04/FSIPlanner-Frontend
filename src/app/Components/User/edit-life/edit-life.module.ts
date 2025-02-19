import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditLifePageRoutingModule } from './edit-life-routing.module';

import { EditLifePage } from './edit-life.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditLifePageRoutingModule
  ],
  declarations: [EditLifePage]
})
export class EditLifePageModule {}
