import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateArtigoPageRoutingModule } from './create-artigo-routing.module';

import { CreateArtigoPage } from './create-artigo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateArtigoPageRoutingModule
  ],
  declarations: [CreateArtigoPage]
})
export class CreateArtigoPageModule {}
