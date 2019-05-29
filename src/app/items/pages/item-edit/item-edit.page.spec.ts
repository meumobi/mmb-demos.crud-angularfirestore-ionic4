import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemEditPage } from './item-edit.page';

describe('ItemEditPage', () => {
  let component: ItemEditPage;
  let fixture: ComponentFixture<ItemEditPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemEditPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
