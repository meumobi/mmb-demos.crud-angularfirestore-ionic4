import { Timestamp } from '@firebase/firestore-types';


interface Tags {
  id?: string;
  name: string;
}
export class Item {
  id?: string;
  title: string;
  description: string;
  createdAt: Timestamp;
  modifiedAt: Timestamp;
  publishedAt: Timestamp;
  tags: Tags[];
  link: string;
  enclosure: string;
  author: string;
}
