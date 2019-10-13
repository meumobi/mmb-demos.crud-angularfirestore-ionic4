import {
  ChangeDetectionStrategy,
  Component,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import { Item } from '../../item.model';
import { ActionSheetController } from '@ionic/angular';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-item-headline',
  templateUrl: './item-headline.component.html',
  styleUrls: ['./item-headline.component.scss'],
})
export class ItemHeadlineComponent {

  @Input() item: Item;
  @Output() delete: EventEmitter<string> = new EventEmitter<string>();
  @Output() update: EventEmitter<string> = new EventEmitter<string>();

  constructor(public actionSheetController: ActionSheetController) {}

  async presentActionSheet(event, item: Item) {
    event.preventDefault();
    event.stopPropagation();
    const actionSheet = await this.actionSheetController.create({
      header: item.title,
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          this.delete.emit(item.id);
        }
      }, {
        text: 'Update',
        icon: 'create',
        handler: () => {
          this.update.emit(item.id);
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

  openCategory(event, item) {
    event.preventDefault();
    event.stopPropagation();
    console.log('Open category');
  }

  like(event, item) {
    event.preventDefault();
    event.stopPropagation();
    console.log('Like clicked');
  }

  favorite(event, item) {
    event.preventDefault();
    event.stopPropagation();
    console.log('Favorite clicked');
  }

  share(event, item) {
    event.preventDefault();
    event.stopPropagation();
    console.log('Share clicked');
  }
}
