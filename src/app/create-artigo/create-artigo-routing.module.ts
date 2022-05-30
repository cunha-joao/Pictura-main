import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateArtigoPage } from './create-artigo.page';

const routes: Routes = [
  {
    path: '',
    component: CreateArtigoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateArtigoPageRoutingModule {}
