import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemHeadlineComponent } from './components/item-headline/item-headline.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { TruncateModule } from '@yellowspot/ng-truncate';

@NgModule({
  declarations: [
    ItemHeadlineComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule,
    TruncateModule,
  ],
  exports: [
    ItemHeadlineComponent,
  ]
})
export class SharedModule { }
