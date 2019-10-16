import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from '../../shared/item.model';
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

  constructor(
    private itemsService: ItemService,
    private router: Router,
    public alertController: AlertController
  ) { }

  ngOnInit() {
    /**
     * pipe required to display loading skeleton
     */
    this.items$ = this.itemsService.items$.pipe(publishReplay(1), refCount());
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
      header: item.title,
      message: 'Are you sure you want to delete?',
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

  updateItem(param: any) {
    this.router.navigate([`/item-edit/${param.id}`]);
  }
}
