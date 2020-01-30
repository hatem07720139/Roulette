import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableRouleteComponent } from './table-roulete.component';

describe('TableRouleteComponent', () => {
  let component: TableRouleteComponent;
  let fixture: ComponentFixture<TableRouleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableRouleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableRouleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
