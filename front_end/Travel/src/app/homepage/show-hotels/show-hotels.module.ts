import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowHotelsComponent } from './show-hotels.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [ShowHotelsComponent],
  imports: [
    CommonModule, BrowserModule, RouterModule
  ]
})
export class ShowHotelsModule { }
