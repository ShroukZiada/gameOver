import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserRoutingModule } from './browser-routing.module';
import { BrowserComponent } from './browser/browser.component';
import { PipeModule } from 'src/app/shared/pipe/pipe.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    BrowserComponent
  ],
  imports: [
    CommonModule,
    BrowserRoutingModule,
    PipeModule,
    FormsModule

  ]
})
export class BrowserModule { }
