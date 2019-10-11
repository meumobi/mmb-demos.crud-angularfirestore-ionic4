import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/shared/item.model';
import { ActivatedRoute } from '@angular/router';
import { ItemService } from '../../shared/item.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.page.html',
  styleUrls: ['./item-detail.page.scss'],
})
export class ItemDetailPage implements OnInit {

  item: Item = null;
  private itemId: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    public itemService: ItemService
  ) { }

  ngOnInit() {
    this.itemId = this.activatedRoute.snapshot.paramMap.get('id');

    this.itemService.getById(this.itemId).pipe(first()).toPromise().then(
      data => {
        this.item = data;
      }
    );
  }
}
