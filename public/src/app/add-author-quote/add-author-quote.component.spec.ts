import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAuthorQuoteComponent } from './add-author-quote.component';

describe('AddAuthorQuoteComponent', () => {
  let component: AddAuthorQuoteComponent;
  let fixture: ComponentFixture<AddAuthorQuoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAuthorQuoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAuthorQuoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
