import { TestBed } from '@angular/core/testing';

import { ItemMockService } from './item-mock.service';

describe('ItemMockService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ItemMockService = TestBed.get(ItemMockService);
    expect(service).toBeTruthy();
  });
});
