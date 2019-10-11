import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
  DocumentReference
} from '@angular/fire/firestore';

import * as firebase from 'firebase/app';
import 'firebase/firestore';

import { Observable } from 'rxjs';
import { Item } from './item.model';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private itemsCollection: AngularFirestoreCollection<Item>;
  private collectionPath = 'items';

  constructor(
    private afs: AngularFirestore
  ) {
    this.itemsCollection = afs.collection<Item>(this.collectionPath, ref => ref.orderBy('publishedAt', 'desc'));
  }

  get items$(): Observable<Item[]> {
    return this.itemsCollection.valueChanges({idField: 'id'});
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
    return this.itemsCollection.doc(id).valueChanges();
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
    return this.itemsCollection.doc(id).set(data);
  }

  public update(id: string, data: any): Promise<void> {
    return this.itemsCollection.doc(id).update(data);
  }
}
