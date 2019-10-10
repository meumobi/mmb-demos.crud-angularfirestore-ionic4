import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemHeadlineComponent } from './components/item-headline/item-headline.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    ItemHeadlineComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule,
  ],
  exports: [
    ItemHeadlineComponent,
  ]
})
export class SharedModule { }
