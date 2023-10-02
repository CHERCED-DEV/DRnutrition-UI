import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BannerContainerComponent } from './banner-container.component';

import { InfoBannerComponent } from './components/info-banner/info-banner.component';
import { MainBannerComponent } from './components/main-banner/main-banner.component';
import { PromoBannerComponent } from './components/promo-banner/promo-banner.component';

@NgModule({
  declarations: [
    BannerContainerComponent,
    MainBannerComponent,
    InfoBannerComponent,
    PromoBannerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [BannerContainerComponent]
})
export class BannerContainerModule { }
