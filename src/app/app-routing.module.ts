import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'bone-search',
    loadChildren: () => import('./bone-search/bone-search.module').then( m => m.BoneSearchPageModule)
  },  {
    path: 'create-artigo',
    loadChildren: () => import('./create-artigo/create-artigo.module').then( m => m.CreateArtigoPageModule)
  },
  {
    path: 'registar',
    loadChildren: () => import('./registar/registar.module').then( m => m.RegistarPageModule)
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
