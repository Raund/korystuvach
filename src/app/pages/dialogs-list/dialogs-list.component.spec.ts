import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogsListComponent } from './dialogs-list.component';

describe('DialogsListComponent', () => {
  let component: DialogsListComponent;
  let fixture: ComponentFixture<DialogsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
