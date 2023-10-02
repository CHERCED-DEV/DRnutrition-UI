import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderFlowContainerComponent } from './header-flow-container.component';

describe('HeaderFlowContainerComponent', () => {
  let component: HeaderFlowContainerComponent;
  let fixture: ComponentFixture<HeaderFlowContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderFlowContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderFlowContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
