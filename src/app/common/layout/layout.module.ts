import { NgModule } from '@angular/core';

import { FooterFlowContainerModule } from './components/footer-flow-container/footer-flow-container.module';
import { HeaderFlowContainerModule } from './components/header-flow-container/header-flow-container.module';
import { LoadersContainerModule } from './components/loaders-container/loaders-container.module';
import { LayoutService } from './provider/layout.service';

@NgModule({
  exports: [
    HeaderFlowContainerModule,
    FooterFlowContainerModule,
    LoadersContainerModule,
  ],
  providers: [LayoutService],
})
export class LayoutModule {}
