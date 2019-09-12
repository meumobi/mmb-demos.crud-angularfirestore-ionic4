import { ChangeDetectionStrategy, Component, OnInit, Input } from '@angular/core';
import { Item } from '../../item.model';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-item-headline',
  templateUrl: './item-headline.component.html',
  styleUrls: ['./item-headline.component.scss'],
})
export class ItemHeadlineComponent implements OnInit {

  @Input() item: Item;

  constructor() { }

  ngOnInit() {
    console.log(this.item);
  }

}
