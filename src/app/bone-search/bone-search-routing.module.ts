import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BoneSearchPage } from './bone-search.page';

const routes: Routes = [
  {
    path: '',
    component: BoneSearchPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BoneSearchPageRoutingModule {}
