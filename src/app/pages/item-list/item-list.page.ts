import { Component, OnInit } from '@angular/core';
import { Item } from '../../shared/item.model';
import { Observable } from 'rxjs';
import { ItemService } from '../../shared/item.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.page.html',
  styleUrls: ['./item-list.page.scss'],
})
export class ItemListPage implements OnInit {

  items$: Observable<Item[]>;

  constructor(private itemsService: ItemService) { }

  ngOnInit() {
    this.items$ = this.itemsService.items$;
  }
}
