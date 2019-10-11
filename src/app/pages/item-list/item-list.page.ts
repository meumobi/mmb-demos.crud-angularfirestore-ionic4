import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from '../../shared/item.model';
import { ItemService } from '../../shared/item.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.page.html',
  styleUrls: ['./item-list.page.scss'],
})
export class ItemListPage implements OnInit {

  items$: Observable<Item[]>;

  constructor(
    private itemsService: ItemService,
    private router: Router
  ) { }

  ngOnInit() {
    this.items$ = this.itemsService.items$;
  }

  deleteItem(id: string) {
    this.itemsService.remove(id);
  }

  updateItem(id: string) {
    this.router.navigate([`/item-edit/${id}`]);
  }
}
