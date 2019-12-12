import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BfsiShowHideComponent } from './bfsi-show-hide.component';

describe('BfsiShowHideComponent', () => {
  let component: BfsiShowHideComponent;
  let fixture: ComponentFixture<BfsiShowHideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BfsiShowHideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BfsiShowHideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
