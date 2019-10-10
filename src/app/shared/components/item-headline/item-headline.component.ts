import {
  ChangeDetectionStrategy,
  Component,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import { Item } from '../../item.model';

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

  deleteItem(event, id: string) {
    event.preventDefault();
    event.stopPropagation();
    this.delete.emit(id);
  }

  updateItem(event, id: string) {
    event.preventDefault();
    event.stopPropagation();
    this.update.emit(id);
  }
}
