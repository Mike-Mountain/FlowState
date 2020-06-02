import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmbedContainerComponent } from './embed-container.component';

describe('EmbedContainerComponent', () => {
  let component: EmbedContainerComponent;
  let fixture: ComponentFixture<EmbedContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmbedContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmbedContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
