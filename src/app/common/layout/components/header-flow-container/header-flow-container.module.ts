import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HeaderFlowContainerComponent } from './header-flow-container.component';
import { OverlayMenuComponent } from './overlay-menu/overlay-menu.component';

@NgModule({
  declarations: [
    HeaderFlowContainerComponent,
    OverlayMenuComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [HeaderFlowContainerComponent],
})
export class HeaderFlowContainerModule {}
