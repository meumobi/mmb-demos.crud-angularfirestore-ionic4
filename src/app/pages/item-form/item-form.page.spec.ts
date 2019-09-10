import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemFormPage } from './item-form.page';

describe('ItemFormPage', () => {
  let component: ItemFormPage;
  let fixture: ComponentFixture<ItemFormPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemFormPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
