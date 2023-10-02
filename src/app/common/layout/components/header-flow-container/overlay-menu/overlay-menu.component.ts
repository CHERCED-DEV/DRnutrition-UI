import { Component, Input, OnInit } from '@angular/core';
import { LayoutService } from '../../../provider/layout.service';
import { RoutesMenuNavConfig } from '../../../provider/model/layout.models';

@Component({
  selector: 'app-overlay-menu',
  templateUrl: './overlay-menu.component.html',
  styleUrls: ['./overlay-menu.component.scss'],
})
export class OverlayMenuComponent implements OnInit {
  @Input() navigationRoutes: RoutesMenuNavConfig[] = [];
  isOpenMenu: boolean = false;
  constructor(private layoutService: LayoutService) { }

  ngOnInit(): void {
    //set the intialstate for the menu
    this.layoutService.toogleMenu$.subscribe((isOpen: boolean) => {
      this.isOpenMenu = isOpen;
    });
  }
  // to change the state on menu
  toggleMenu() {
    const newMenuState = !this.isOpenMenu;
    this.layoutService.setToogleMenuState(newMenuState);
  }
}
