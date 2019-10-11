import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/shared/item.model';
import { Router, ActivatedRoute } from '@angular/router';
import { ItemService } from '../../shared/item.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.page.html',
  styleUrls: ['./item-detail.page.scss'],
})
export class ItemDetailPage implements OnInit {

  item: Item = null;
  private itemId: string;
  private itemSubscription: Subscription;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    public itemService: ItemService
  ) { }

  ngOnInit() {
    this.itemId = this.activatedRoute.snapshot.paramMap.get('id');

    this.itemService.getById(this.itemId).toPromise().then( data => {
      this.item = data;
    });
  }
}
