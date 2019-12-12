import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StagingConfigurationComponent } from './staging-configuration.component';

describe('StagingConfigurationComponent', () => {
  let component: StagingConfigurationComponent;
  let fixture: ComponentFixture<StagingConfigurationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StagingConfigurationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StagingConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
