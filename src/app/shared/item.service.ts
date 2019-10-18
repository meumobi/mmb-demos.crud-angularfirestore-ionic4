import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
  DocumentReference,
  Query
} from '@angular/fire/firestore';

/**
 * Required import to use firebase.firestore.FieldValue
 * https://stackoverflow.com/a/52220012/4982169
 */
import * as firebase from 'firebase/app';
import 'firebase/firestore';

import { Observable, BehaviorSubject } from 'rxjs';
import { Item, Tag, ItemField } from './item.model';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private itemsCollection: AngularFirestoreCollection<Item>;
  private itemDoc: AngularFirestoreDocument<Item>;

  private collectionPath = 'items';
  private tagFilter$: BehaviorSubject<Tag>;

  constructor(
    private afs: AngularFirestore
  ) {
    this.tagFilter$ = new BehaviorSubject(null);
    this.itemsCollection = afs.collection<Item>(this.collectionPath, ref => ref.orderBy(ItemField.PUBLISHED_AT, 'desc'));
  }

  get items$() {
    return this.tagFilter$.pipe(
      switchMap(tag => {
        return this.afs.collection<Item>(this.collectionPath, ref => {
          let query: Query = ref;
          if (tag) { query = query.where(ItemField.TAGS, 'array-contains', tag); }
          query = query.orderBy(ItemField.PUBLISHED_AT, 'desc');
          return query;
        }).valueChanges({ idField: 'id' });
      }
    ));
  }

/**
 * Inspired by https://angularfirebase.com/lessons/firestore-advanced-usage-angularfire/#3-CRUD-Operations-with-Server-Timestamps
 */
  get timestamp() {
    return firebase.firestore.FieldValue.serverTimestamp();
  }

  public push(item: any): Promise<DocumentReference> {
    const timestamp = this.timestamp;

    return this.itemsCollection.add({
      ...item,
      createdAt: timestamp,
      modifiedAt: timestamp,
      publishedAt: timestamp,
    });
  }

  public getById(id: string): Observable<any> {
    // this.itemDoc = this.afs.doc<Item>('items/' + id);
    return this.itemsCollection.doc(id).valueChanges();
  }

  public filterByTag(tag: Tag) {
    console.log('filterByTag: ', tag);
    this.tagFilter$.next(tag);
  }

  public resetFilters() {
    this.tagFilter$.next(null);
  }

  public remove(id: string): Promise<void> {
    return this.itemsCollection.doc(id).delete();
  }

  /**
   * AngularFirestore provides methods for setting, updating
   * - set(data: T) - Destructively updates a document's data.
   * - update(data: T) - Non-destructively updates a document's data.
   */
  public set(id: string, data: any): Promise<void> {
    data.modifiedAt = this.timestamp;

    return this.itemsCollection.doc(id).set(data);
  }

  public update(id: string, data: any): Promise<void> {
    data.modifiedAt = this.timestamp;

    return this.itemsCollection.doc(id).update(data);
  }
}
