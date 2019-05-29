import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './pages/items-list/items-list.module#ItemsListPageModule'},
  { path: 'detail/:id', loadChildren: './pages/item-detail/item-detail.module#ItemDetailPageModule'},
  { path: 'edit/:id', loadChildren: './pages/item-edit/item-edit.module#ItemEditPageModule'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemsRoutingModule { }
