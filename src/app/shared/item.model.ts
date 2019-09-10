export class Item {
  id?: string;
  title: string;
  description: string;
  publishedAt: number; // Epoch timestamp
  createdAt: number; // Epoch timestamp
  modifiedAt: number; // Epoch timestamp
  link: string;
  enclosure: string;
  author: string;

  constructor() {
    this.publishedAt = Date.now();
    this.createdAt = Date.now();
    this.modifiedAt = Date.now();
  }
}
