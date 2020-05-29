import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VitaeContainerComponent } from './vitae-container.component';

describe('VitaeContainerComponent', () => {
  let component: VitaeContainerComponent;
  let fixture: ComponentFixture<VitaeContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VitaeContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VitaeContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
