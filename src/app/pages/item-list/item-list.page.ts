import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Item, Tag } from '../../shared/item.model';
import { ItemService } from '../../shared/item.service';
import { Observable } from 'rxjs';
import { publishReplay, refCount } from 'rxjs/operators';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.page.html',
  styleUrls: ['./item-list.page.scss'],
})
export class ItemListPage implements OnInit {

  items$: Observable<Item[]>;
  currentTag: Tag;

  constructor(
    private itemsService: ItemService,
    private router: Router,
    public alertController: AlertController
  ) {}

  ngOnInit() {
    this.items$ = this.itemsService.items$;
  }

  handleItemAction(event) {
    const functionName = event.functionName;
    if (this[functionName]) {
      // method exists on the component
      const param = event.functionParam;
      this[functionName](param.item); // call it
    }
  }

  async deleteItem(item: Item) {
    const alert = await this.alertController.create({
      message: 'Are you sure you want to delete this?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel: ', item.title);
          }
        }, {
          text: 'Yes',
          handler: () => {
            this.itemsService.remove(item.id);
          }
        }
      ]
    });

    await alert.present();
  }

  updateItem(item: Item) {
    this.router.navigate([`/item-edit/${item.id}`]);
  }

  filterByTag(tag: Tag) {
    console.log('Filter by tag: ', tag);
    this.currentTag = tag;
    this.itemsService.filterByTag(tag);
  }

  resetFilters() {
    this.currentTag = null;
    this.itemsService.resetFilters();
  }
}
