import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterFlowContainerComponent } from './footer-flow-container.component';

describe('FooterFlowContainerComponent', () => {
  let component: FooterFlowContainerComponent;
  let fixture: ComponentFixture<FooterFlowContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterFlowContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterFlowContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
