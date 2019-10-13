import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from '../../shared/item.model';
import { ItemService } from '../../shared/item.service';
import { Observable } from 'rxjs';
import { publishReplay, refCount } from 'rxjs/operators';

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
    this.items$ = this.itemsService.items$.pipe(publishReplay(1), refCount());
  }

  handleItemAction(event) {
    console.log('Handle item: ', event);
    const functionName = event.functionName;
    if (this[functionName]) {
      // method exists on the component
      const param = event.functionParam;
      this[functionName](param); // call it
    }
  }

  deleteItem(param: any) {
    this.itemsService.remove(param.id);
  }

  updateItem(param: any) {
    this.router.navigate([`/item-edit/${param.id}`]);
  }
}
