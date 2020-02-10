import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemHeadlineComponent } from './item-headline.component';
import { TruncateModule } from '@yellowspot/ng-truncate';
import { ItemMockService } from '../../item-mock.service';

fdescribe('ItemHeadlineComponent', () => {
  let component: ItemHeadlineComponent;
  let fixture: ComponentFixture<ItemHeadlineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemHeadlineComponent ],
      imports: [
        TruncateModule,
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
/*       providers: [
        { provide: ItemService, useClass: ItemMockService }
      ] */
    })
    .compileComponents();
  }));

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ItemHeadlineComponent);
    component = fixture.componentInstance;
    const itemService = new ItemMockService();
    itemService.items$.subscribe(
      items => {
        component.item = items[0];
        fixture.detectChanges();
      }
    );
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
