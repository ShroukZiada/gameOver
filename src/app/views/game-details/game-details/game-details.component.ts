import { Game } from './../../../game';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GamesService } from 'src/app/shared/service/games.service';


@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.scss']
})
export class GameDetailsComponent implements OnInit{
  game: Game = {};
  ReadMore: boolean = false;

  constructor(private _GamesService:GamesService, private _ActivatedRoute:ActivatedRoute){}


  ngOnInit(): void {
    const currentId: number = this._ActivatedRoute.snapshot.params['id'];
    this._GamesService.getGameDetails(currentId).subscribe({
      next: (response) =>{
        console.log(response);
        this.game = response ;
        console.log(this.game.id);
      },
    });
  }
      //Method Start Video
      playVideo(el: HTMLVideoElement, sp: HTMLElement): void {
        this._GamesService.playVideo(el, sp);
      }

      //Method Stop Video
      stopVideo(el: HTMLVideoElement, sp: HTMLElement): void {
        this._GamesService.stopVideo(el, sp);
      }

      // Show Text
     showTxt(): void {
        this.ReadMore = !this.ReadMore;
      }
}
