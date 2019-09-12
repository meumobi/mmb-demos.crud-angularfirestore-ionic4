import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Item } from 'src/app/shared/item.model';
import { Router, ActivatedRoute } from '@angular/router';
import { ItemService } from '../../shared/item.service';

export interface Group {
  name: string;
  selected: boolean;
}

const GROUPS = [
  {
    name: 'admin',
    selected: false
  },
  {
    name: 'São Paulo',
    selected: false
  },
  {
    name: 'comunicação',
    selected: true
  }
];
@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.page.html',
  styleUrls: ['./item-form.page.scss'],
})

export class ItemFormPage implements OnInit {

  groups: Group[] = [];
  item: Item;
  createAction: boolean;
  editItemForm: FormGroup;

constructor(
  formBuilder: FormBuilder,
  private activatedRoute: ActivatedRoute,
  private router: Router,
  public itemService: ItemService
) {

  const urlRegex = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';

  this.editItemForm = formBuilder.group({
    title: ['', Validators.required],
    // groups: ['', Validators.required],
    enclosure: ['', Validators.pattern(urlRegex)],
    description: ['', Validators.required],
  });
}

  ngOnInit() {
    this.groups = GROUPS;
    const itemId: string = this.activatedRoute.snapshot.paramMap.get('id');
    this.createAction = !itemId; // If itemId is null then is a create action (vs update)

    if (this.createAction) {
      this.item = new Item();
    } else {
      this.itemService.getById(itemId).subscribe(
        data => {
          this.item = data;
        }
      );
    }
  }

  toggleGroupCheck(i: number) {
    this.groups[i].selected = !this.groups[i].selected; // toggle boolean value (only works with 0 and 1)
  }

  save() {
    this.itemService.push(this.item)
    .then(docRef => {
      this.router.navigate([`/item-detail/${docRef.id}`]);
    })
    .catch(reason => {
      console.log(reason);
    });
  }
}
