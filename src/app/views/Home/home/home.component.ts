import { Game } from 'src/app/game';
import { GamesService } from './../../../shared/service/games.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  gamesData:Game[]=[]
  constructor(private _GamesService:GamesService){}
  ngOnInit(): void {
    this.getGames();
  }
  getGames(){
    this._GamesService.getAllGames().subscribe({
      next:(res)=>{
        this.gamesData = res;
        console.log(res)
      }
    })
  }

    //Method Start Video
    playVideo(el: HTMLVideoElement, sp: HTMLElement): void {
      this._GamesService.playVideo(el, sp);
    }

    //Method Stop Video
    stopVideo(el: HTMLVideoElement, sp: HTMLElement): void {
      this._GamesService.stopVideo(el, sp);
    }
}
