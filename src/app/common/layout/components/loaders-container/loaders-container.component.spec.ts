import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadersContainerComponent } from './loaders-container.component';

describe('LoadersContainerComponent', () => {
  let component: LoadersContainerComponent;
  let fixture: ComponentFixture<LoadersContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadersContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadersContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
