import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AdminProjectsComponent } from './admin-projects.component';

describe('AdminProjectsComponent', () => {
  let component: AdminProjectsComponent;
  let fixture: ComponentFixture<AdminProjectsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminProjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
