import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HeaderFlowContainerComponent } from './header-flow-container.component';
import { OverlayMenuComponent } from './overlay-menu/overlay-menu.component';
import { UserPanelModule } from './user-panel/user-panel.module';
import { AlertComponent } from './alert/alert.component';

@NgModule({
  declarations: [
    HeaderFlowContainerComponent,
    OverlayMenuComponent,
    AlertComponent,
  ],
  imports: [CommonModule, RouterModule, UserPanelModule,],
  exports: [HeaderFlowContainerComponent],
})
export class HeaderFlowContainerModule {}
