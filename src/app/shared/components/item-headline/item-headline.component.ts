import {
  ChangeDetectionStrategy,
  Component,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import { Item, Tag } from '../../item.model';
import { ActionSheetController } from '@ionic/angular';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-item-headline',
  templateUrl: './item-headline.component.html',
  styleUrls: ['./item-headline.component.scss'],
})
export class ItemHeadlineComponent {

  @Input() item: Item;
  @Output() action: EventEmitter<object> = new EventEmitter<object>();
  @Output() filter: EventEmitter<object> = new EventEmitter<object>();

  constructor(public actionSheetController: ActionSheetController) {}

  async presentActionSheet(event, item: Item) {
    event.preventDefault();
    event.stopPropagation();
    const actionSheet = await this.actionSheetController.create({
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          this.delete(event, item);
        }
      }, {
        text: 'Update',
        icon: 'create',
        handler: () => {
          this.update(event, item);
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

  delete(event, item: Item) {
    event.preventDefault();
    event.stopPropagation();
    this.action.emit({
      functionName: 'deleteItem',
      functionParam: { item }
    });
  }

  update(event, item: Item) {
    event.preventDefault();
    event.stopPropagation();
    this.action.emit({
      functionName: 'updateItem',
      functionParam: { item }
    });
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

  filterByTag(event, tag: Tag) {
    event.preventDefault();
    event.stopPropagation();
    this.filter.emit(tag);
  }
}
