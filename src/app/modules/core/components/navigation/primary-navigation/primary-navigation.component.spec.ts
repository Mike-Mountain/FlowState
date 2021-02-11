import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PrimaryNavigationComponent } from './primary-navigation.component';

describe('PrimaryNavigationComponent', () => {
  let component: PrimaryNavigationComponent;
  let fixture: ComponentFixture<PrimaryNavigationComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimaryNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimaryNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
