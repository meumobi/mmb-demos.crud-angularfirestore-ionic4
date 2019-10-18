import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Item } from 'src/app/shared/item.model';
import { Router, ActivatedRoute } from '@angular/router';
import { ItemService } from '../../shared/item.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.page.html',
  styleUrls: ['./item-form.page.scss'],
})

export class ItemFormPage implements OnInit, OnDestroy {

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
    tags: [''],
    enclosure: ['', Validators.pattern(urlRegex)],
    description: ['', Validators.required],
  });
}

  ngOnInit() {
    console.log('ItemFormPage: OnInit');
    this.itemId = this.activatedRoute.snapshot.paramMap.get('id');
    this.createAction = !this.itemId; // If itemId is null then is a create action (vs update)

    if (this.createAction) {
      this.item = new Item();
    } else {
      this.itemService.getById(this.itemId).pipe(first()).toPromise().then(
        data => {
          this.item = data;
          this.editForm.patchValue(this.item);
        }
      );
    }
  }

  ngOnDestroy() {
    console.log('ItemFormPage: OnDestroy');
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
    this.itemService.update(this.itemId, this.editForm.value)
    .then(docRef => {
      this.router.navigate([`/item-detail/${this.itemId}`]);
    })
    .catch(reason => {
      console.log(reason);
    });
  }
}
