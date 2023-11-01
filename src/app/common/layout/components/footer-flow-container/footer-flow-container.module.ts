import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FooterFlowContainerComponent } from './footer-flow-container.component';
import { SocialmediaComponent } from './components/socialmedia/socialmedia.component';
import { MenuNavListComponent } from './components/menu-nav-list/menu-nav-list.component';
import { NewsletterComponent } from './components/newsletter/newsletter.component';
import { CopyrightComponent } from './components/copyright/copyright.component';

@NgModule({
  declarations: [
    FooterFlowContainerComponent,
    SocialmediaComponent,
    MenuNavListComponent,
    NewsletterComponent,
    CopyrightComponent,
  ],
  imports: [CommonModule],
  exports: [FooterFlowContainerComponent],
})
export class FooterFlowContainerModule {}
