import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list-travel',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'list-travel',
    loadChildren: () => import('./pages/travel/list-travel/list-travel.module').then( m => m.ListTravelPageModule)
  },
  {
    path: 'modal',
    loadChildren: () => import('./modals/modal/modal.module').then( m => m.ModalPageModule)
  },
  {
    path: 'detail-travel',
    loadChildren: () => import('./pages/travel/detail-travel/detail-travel.module').then( m => m.DetailTravelPageModule)
  },
  {
    path: 'modal-way',
    loadChildren: () => import('./modals/modal-way/modal-way.module').then( m => m.ModalWayPageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./menu/menu.module').then( m => m.MenuPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
