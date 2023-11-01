import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuNavListComponent } from './menu-nav-list.component';

describe('MenuNavListComponent', () => {
  let component: MenuNavListComponent;
  let fixture: ComponentFixture<MenuNavListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuNavListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuNavListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
