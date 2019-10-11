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
  private itemId: string;
  private createAction: boolean;
  editForm: FormGroup;

constructor(
  formBuilder: FormBuilder,
  private activatedRoute: ActivatedRoute,
  private router: Router,
  public itemService: ItemService
) {

  const urlRegex = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';

  this.editForm = formBuilder.group({
    title: ['', Validators.required],
    // groups: ['', Validators.required],
    enclosure: ['', Validators.pattern(urlRegex)],
    description: ['', Validators.required],
  });
}

  ngOnInit() {
    this.groups = GROUPS;
    this.itemId = this.activatedRoute.snapshot.paramMap.get('id');
    this.createAction = !this.itemId; // If itemId is null then is a create action (vs update)

    if (this.createAction) {
      this.item = new Item();
    } else {
      this.itemService.getById(this.itemId).subscribe(
        data => {
          this.item = data;
          /**
           * Get a subset of a javascript object's properties
           * Using Object Destructuring and Property Shorthand
           * https://stackoverflow.com/a/39333479/4982169
           */
          const picked = (({ title, enclosure, description }) => ({ title, enclosure, description }))(data);
          this.editForm.setValue(picked);
        }
      );
    }
  }

  toggleGroupCheck(i: number) {
    this.groups[i].selected = !this.groups[i].selected; // toggle boolean value (only works with 0 and 1)
  }

  save() {
    if (this.createAction) {
      this.create();
    } else {
      this.update();
    }
  }

  private create() {
    this.itemService.push(this.editForm.value)
    .then(docRef => {
      this.router.navigate([`/item-detail/${docRef.id}`]);
    })
    .catch(reason => {
      console.log(reason);
    });
  }

  private update() {
    const resultItem = {...this.item, ...this.editForm.value};
    this.itemService.update(this.itemId, resultItem)
    .then(docRef => {
      this.router.navigate([`/item-detail/${this.itemId}`]);
    })
    .catch(reason => {
      console.log(reason);
    });
  }
}
