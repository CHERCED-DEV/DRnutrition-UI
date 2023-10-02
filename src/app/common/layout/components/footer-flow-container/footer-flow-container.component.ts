import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { LayoutService } from '../../provider/layout.service';
import { FooterConfig, RoutesMenuNavConfig } from '../../provider/model/layout.models';

@Component({
  selector: 'app-footer-flow-container',
  templateUrl: './footer-flow-container.component.html',
  styleUrls: ['./footer-flow-container.component.scss'],
})
export class FooterFlowContainerComponent implements OnInit {
  footerData: FooterConfig | null = null;
  navigationRoutes: RoutesMenuNavConfig[] = [];
  constructor(private router: Router, private layoutService: LayoutService) { }
  
  ngOnInit(): void {
    this.layoutService.getFooterData().subscribe({
      next: (data: FooterConfig) => {
        if (!!data) {
          this.footerData = data;
        }
      },
      error: (error) => {
        console.error('Error al obtener los datos del encabezado:', error);
      },
    });
    // Suscribirse al evento de cambio de navegación en ngOnInit
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const currentUrl: string = event.url.split('/')[1];
        this.navigationRoutes = this.layoutService.getRoutesWithoutCurrentRoute(currentUrl);
      }
    });
  }
}
