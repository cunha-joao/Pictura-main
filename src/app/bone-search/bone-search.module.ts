import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BoneSearchPageRoutingModule } from './bone-search-routing.module';

import { BoneSearchPage } from './bone-search.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BoneSearchPageRoutingModule
  ],
  declarations: [BoneSearchPage]
})
export class BoneSearchPageModule {}
