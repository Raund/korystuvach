import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchMeetingComponent } from './search-meeting.component';

describe('SearchMeetingComponent', () => {
  let component: SearchMeetingComponent;
  let fixture: ComponentFixture<SearchMeetingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchMeetingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchMeetingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
