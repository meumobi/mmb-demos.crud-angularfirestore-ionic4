import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemHeadlineComponent } from './components/item-headline/item-headline.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [
    ItemHeadlineComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
  ],
  exports: [
    ItemHeadlineComponent,
  ]
})
export class SharedModule { }
