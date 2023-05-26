import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import {HomeComponent} from "./home.component";
import {FormsModule} from "@angular/forms";

@NgModule({
    imports: [
        CommonModule,
        HomeRoutingModule,
        NgOptimizedImage,
        FormsModule
    ],
  exports: [
    HomeComponent
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
