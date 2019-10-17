import { Component, OnInit, OnDestroy } from '@angular/core';
import { Item } from 'src/app/shared/item.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemService } from '../../shared/item.service';
import { AlertController, ActionSheetController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.page.html',
  styleUrls: ['./item-detail.page.scss'],
})
export class ItemDetailPage implements OnInit, OnDestroy {

  item: Item;
  private sub: Subscription;
  private itemId: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    public itemService: ItemService,
    public alertController: AlertController,
    public actionSheetController: ActionSheetController,
    private router: Router,
  ) { }

  ngOnInit() {
    console.log('ItemDetailPage: OnInit');
    this.itemId = this.activatedRoute.snapshot.paramMap.get('id');

    this.sub = this.itemService.getById(this.itemId).subscribe(data => {
      this.item = data;
    });
  }

  ngOnDestroy() {
    console.log('ItemDetailPage: OnDestroy');
    this.sub.unsubscribe();
  }

  async presentActionSheet(event) {
    event.preventDefault();
    event.stopPropagation();
    const actionSheet = await this.actionSheetController.create({
      header: 'Confirm',
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          this.deleteItem(this.itemId);
        }
      }, {
        text: 'Update',
        icon: 'create',
        handler: () => {
          this.updateItem(this.itemId);
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

  async deleteItem(id: string) {
    const alert = await this.alertController.create({
      header: 'Confirm',
      message: 'Are you sure you want to delete?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Cancel deletion');
          }
        }, {
          text: 'Yes',
          handler: () => {
            this.itemService.remove(id);
            this.navigateToItemsList();
          }
        }
      ]
    });

    await alert.present();
  }

  updateItem(id: string) {
    this.router.navigate([`/item-edit/${id}`]);
  }

  navigateToItemsList() {
    this.router.navigate(['/item-list']);
  }
}
