import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamesRoutingModule } from './games-routing.module';
import { GamesComponent } from './games/games.component';
import { PipeModule } from 'src/app/shared/pipe/pipe.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    GamesComponent
  ],
  imports: [
    CommonModule,
    GamesRoutingModule,
    PipeModule,
    FormsModule
  ]
})
export class GamesModule { }
