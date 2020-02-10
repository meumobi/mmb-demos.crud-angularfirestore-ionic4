import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Item } from './item.model';
import { getTestItems } from './item-mock';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ItemMockService {

  private items: BehaviorSubject<Item[]> = new BehaviorSubject([]);

  constructor() {
    this.items.next(getTestItems());
  }

  get items$(): Observable<Item[]> {
    return this.items.asObservable().pipe(delay(3000));
  }
}
