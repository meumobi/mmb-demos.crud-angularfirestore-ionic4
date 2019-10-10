import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
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
export class ItemHeadlineComponent implements OnInit {

  @Input() item: Item;
  @Output() delete: EventEmitter<string> = new EventEmitter<string>();
  @Output() update: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
    console.log(this.item);
  }

  deleteItem(id: string) {
    this.delete.emit(id);
  }

  updateItem(id: string) {
    this.update.emit(id);
  }
}
