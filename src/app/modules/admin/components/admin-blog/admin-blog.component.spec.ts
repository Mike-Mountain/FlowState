import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AdminBlogComponent } from './admin-blog.component';

describe('AdminBlogComponent', () => {
  let component: AdminBlogComponent;
  let fixture: ComponentFixture<AdminBlogComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminBlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
