import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameDetailsRoutingModule } from './game-details-routing.module';
import { GameDetailsComponent } from './game-details/game-details.component';
import { PipeModule } from 'src/app/shared/pipe/pipe.module';

@NgModule({
  declarations: [
    GameDetailsComponent
  ],
  imports: [
    CommonModule,
    GameDetailsRoutingModule,
    PipeModule
  ]
})
export class GameDetailsModule { }
