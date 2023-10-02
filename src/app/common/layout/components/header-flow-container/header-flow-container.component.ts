import { Component, HostListener, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

import {
  HeaderConfig,
  RoutesMenuNavConfig
} from '../../provider/model/layout.models';
import { LayoutService } from './../../provider/layout.service';

@Component({
  selector: 'app-header-flow-container',
  templateUrl: './header-flow-container.component.html',
  styleUrls: ['./header-flow-container.component.scss'],
})
export class HeaderFlowContainerComponent implements OnInit {
  navigationRoutes: RoutesMenuNavConfig[] = [];
  headerData: HeaderConfig | null = null;
  isMobile: boolean = false;
  mobileWidth: number = 768;
  isOpenMenu: boolean = false;
  cultures: string[] | null = null;

  constructor(private layoutService: LayoutService, private router: Router) { }

  ngOnInit(): void {
    //to get the static data for the ui
    this.layoutService.getHeaderData().subscribe({
      next: (data: HeaderConfig) => {
        if (!!data) {
          this.headerData = data;
          // set cultures
          this.cultures = this.headerData?.cultures || [];
        }
      },
      error: (error) => {
        console.error('Error al obtener los datos del encabezado:', error);
      },
    });
    //  to listen wich routes did you have with out current route
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const currentUrl: string = event.url.split('/')[1];
        this.navigationRoutes = this.layoutService.getRoutesWithoutCurrentRoute(currentUrl);
      }
    });
    this.itsMobileScreen();
    // to get the intial value from menu mobile
    this.layoutService.toogleMenu$.subscribe((isOpen: boolean) => {
      this.isOpenMenu = isOpen;
    });
  }

  public itsMobileScreen() {
    this.isMobile = window.innerWidth <= this.mobileWidth;
  }

  public toggleMenu() {
    const newMenuState = !this.isOpenMenu;
    this.layoutService.setToogleMenuState(newMenuState);
  }
  //to rebuild the mobile var
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.itsMobileScreen();
  }
}
