import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditLiabilityPageRoutingModule } from './edit-liability-routing.module';

import { EditLiabilityPage } from './edit-liability.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditLiabilityPageRoutingModule
  ],
  declarations: [EditLiabilityPage]
})
export class EditLiabilityPageModule {}
