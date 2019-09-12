import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/shared/item.model';
import { Router, ActivatedRoute } from '@angular/router';
import { ItemService } from '../../shared/item.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.page.html',
  styleUrls: ['./item-detail.page.scss'],
})
export class ItemDetailPage implements OnInit {

  item: Item = null;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    public itemService: ItemService
  ) { }

  ngOnInit() {
    const itemId: string = this.activatedRoute.snapshot.paramMap.get('id');

    this.itemService.getById(itemId).subscribe(
      data => {
        this.item = data;
      }
    );
  }
}
