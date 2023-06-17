import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor(private _HttpClient:HttpClient) { }
  headers= new HttpHeaders({
    'X-RapidAPI-Key': 'b52128808dmsh5826403ec30ac21p1b9548jsnfca5769e0b68',
    'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
  });
  //Method Get Games ...
  getAllGames():Observable<any>{
    return this._HttpClient.get('https://free-to-play-games-database.p.rapidapi.com/api/games', {
      headers:this.headers
    })
  }


  //Method Get Games By Id ...
  getGameDetails(id : number):Observable<any>{
     return this._HttpClient.get(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`, {
      headers:this.headers,
     });
  }

  //Method Get Games By category ...
  getGameBycategory(category : string):Observable<any>{
    return this._HttpClient.get(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`, {
     headers:this.headers,
    });
  }


   //Method Get Games By plat ...
   getGameByPlatForm(platForm : string):Observable<any>{
    return this._HttpClient.get(`https://free-to-play-games-database.p.rapidapi.com/api/games?platform=${platForm}`, {
     headers:this.headers,
    });
 }

   //Method Get Games By Sort ...
   getGameBySort(sort : string):Observable<any>{
    return this._HttpClient.get(`https://free-to-play-games-database.p.rapidapi.com/api/games?sort-by=${sort}`, {
     headers:this.headers,
    });
 }

 getGamesByCPS(cat:string , plat:string , sort:string):Observable<any>{
  return this._HttpClient.get(`https://free-to-play-games-database.p.rapidapi.com/api/games?${
    plat != 'Browse By Platform:' ? `platform=${plat}&` : ''
  }${cat != 'all' ? `category=${cat}&` : ''}
  ${sort != 'Sort By' ? `sort-by=${sort}&` : ''}`,{
    headers:this.headers,
  }
  );
 }












  // Method  Start Video
  playVideo(el: HTMLVideoElement, sp: HTMLElement): void {
    el.classList.replace('d-none', 'd-flex');
    el.muted = true;
    sp.classList.replace('d-none', 'd-flex');
    el.play()
      .then(() => {
        sp.classList.replace('d-flex', 'd-none');
      })
      .catch((err) => {
        console.log('Not Support');
      });
  }

  // Method  Stop Video
  stopVideo(el: HTMLVideoElement, sp: HTMLElement): void {
    sp.classList.replace('d-flex', 'd-none');
    el.muted = true;
    el.pause();
    el.classList.replace('d-flex', 'd-none');
  }
}
