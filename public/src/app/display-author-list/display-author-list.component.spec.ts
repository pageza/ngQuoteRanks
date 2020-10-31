import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayAuthorListComponent } from './display-author-list.component';

describe('DisplayAuthorListComponent', () => {
  let component: DisplayAuthorListComponent;
  let fixture: ComponentFixture<DisplayAuthorListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayAuthorListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayAuthorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
