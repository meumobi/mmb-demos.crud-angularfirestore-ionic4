import { Timestamp } from '@firebase/firestore-types';

export class Item {
  id?: string;
  title: string;
  description: string;
  createdAt: Timestamp;
  modifiedAt: Timestamp;
  publishedAt: Timestamp;
  link: string;
  enclosure: string = null;
  author: string;
}
