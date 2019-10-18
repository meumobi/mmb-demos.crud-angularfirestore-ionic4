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
    /**
     * A better solution should be to truncate text to the nearest whole word
     * http://codebuckets.com/2018/01/23/angular-pipe-to-truncate-text-to-the-nearest-whole-word/
     * OR https://stackoverflow.com/a/50651908/4982169
     */
    TruncateModule,
  ],
  exports: [
    ItemHeadlineComponent,
  ]
})
export class SharedModule { }
