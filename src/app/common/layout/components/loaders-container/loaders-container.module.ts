import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';


import { PageLoaderComponent } from './page-loader/page-loader.component';
import { StarterPageComponent } from './starter-page/starter-page.component';
import { LoadersContainerComponent } from './loaders-container.component';


@NgModule({
  declarations: [
    LoadersContainerComponent,
    PageLoaderComponent,
    StarterPageComponent
  ],
  imports: [CommonModule],
  exports: [LoadersContainerComponent],
})
export class LoadersContainerModule {}
