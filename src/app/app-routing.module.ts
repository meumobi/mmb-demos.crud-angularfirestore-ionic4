import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'item-list', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'item-list', loadChildren: () => import('./pages/item-list/item-list.module').then( m => m.ItemListPageModule) },
  { path: 'item-detail/:id', loadChildren: () => import('./pages/item-detail/item-detail.module').then( m => m.ItemDetailPageModule) },
  { path: 'item-edit/:id', loadChildren: () => import('./pages/item-form/item-form.module').then( m => m.ItemFormPageModule) },
  { path: 'item-add', loadChildren: () => import('./pages/item-form/item-form.module').then( m => m.ItemFormPageModule) },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
