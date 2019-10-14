import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { TagInputModule } from 'ngx-chips';

import { ItemFormPage } from './item-form.page';

const routes: Routes = [
  {
    path: '',
    component: ItemFormPage
  }
];

@NgModule({
  imports: [
    TagInputModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ItemFormPage]
})
export class ItemFormPageModule {}
