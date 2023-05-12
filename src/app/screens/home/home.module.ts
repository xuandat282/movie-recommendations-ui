import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import {HomeComponent} from "./home.component";

@NgModule({
    imports: [
        CommonModule,
        HomeRoutingModule,
        NgOptimizedImage
    ],
  exports: [
    HomeComponent
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
