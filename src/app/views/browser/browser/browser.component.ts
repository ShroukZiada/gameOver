import { Game } from './../../../game';
import { Component, OnInit, HostListener} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GamesService } from 'src/app/shared/service/games.service';

// import $ from 'jquery';
declare var $: any;
@Component({
  selector: 'app-browser',
  templateUrl: './browser.component.html',
  styleUrls: ['./browser.component.scss']
})
export class BrowserComponent implements OnInit {
  curentPlat: string = '';
  curentSort:string = '';
  curentCat: string = '';


  curentCategory: string = this._ActivatedRoute.snapshot.params['category'] ?? 'all';
  gamesData: Game[] = [];
  curentYear: number = new Date().getFullYear();
  curentLength:number = 20;
  loading: boolean = true;
     constructor(public _GamesService: GamesService, private _ActivatedRoute: ActivatedRoute, private _Router: Router) {}
  ngOnInit(): void {
    this.getGameByCat()
    $('.select2').customSelect({
      placeholder: '<span style="color: darkgray;">Browse By Genre:</span>',
      transition: 400,
      hideCallback: () => {
        var $cat = $(`.select-cust2 .custom-select`)
          .find('[class$="value"]')
          .text();

        var $sort = $(`.select-cust3 .custom-select`)
          .find('[class$="value"]')
          .text();

        console.log('browser', $cat, $sort);

        if (this.curentCat !== $cat) this.getGamesByCPS($cat, 'browser', $sort);
        // this._Router.navigate([`/games/${$cat}`]);

        // this._ActivatedRoute.snapshot.pa
      },
    });

    $('.select3').customSelect({
      placeholder: '<span style="color: darkgray;">Sort By:</span>',
      transition: 400,

      hideCallback: () => {
        var $cat = $(`.select-cust2 .custom-select`)
          .find('[class$="value"]')
          .text();

        var $sort = $(`.select-cust3 .custom-select`)
          .find('[class$="value"]')
          .text();

        console.log('browser', $cat, $sort);

        if (this.curentSort !== $sort) this.getGamesByCPS($cat, 'browser', $sort);
      },
    });

    $(`#Genre option[value=${this.curentCategory  }]`).attr('selected', 'selected');
    $(`.select-cust2 .custom-select > button`).html(this.curentCategory);  }
        // Curent Category


    // --------- Scroll
  @HostListener('window:scroll')
  seeMore(): void {
    if (scrollY + innerHeight + 200 >= document.body.offsetHeight) {
      if (this.gamesData.length > this.curentLength) {
        this.curentLength += 20;
      } else {
        this.loading = false;
      }
    }
       }




  // Get Games By Cat
  getGameByCat(): void {
    var $sort = $(`.select-cust3 .custom-select`)
      .find('[class$="value"]')
      .text();

    this._GamesService
      .getGamesByCPS(this.curentCategory, 'browser', $sort)
      .subscribe({
        next: (response) => {
          console.log(response);
          this.gamesData = response;
        },
      });
  }


      //  getGamesByCateory():void{
      //   if (this.curentCategory === 'all') {
      //     this._GamesService.getAllGames().subscribe({
      //       next: (response) => {
      //         console.log(response);
      //         this.gamesData = response;
      //       },
      //     });
      //   } else {
      //     this._GamesService.getGameBycategory(this.curentCategory).subscribe({
      //       next: (response) => {
      //         console.log(response);
      //         this.gamesData = response;
      //       },
      //     });
      //   }
      // }

      // getGameByPlatForm(plat: string):void{

      //   this._GamesService.getGameByPlatForm(plat).subscribe({
      //     next: (response) =>{
      //       console.log(response);
      //       this.gamesData = response;
      //     },
      //   });
      // }

      // Change Gerner



      gernerChange(value: string): void {
        this._GamesService.getGameBycategory(value).subscribe({
          next: (response) => {
            this.gamesData = response;
          },
        });
      }

      // getGamesBySort(sort:string):void{
      // this._GamesService.getGameBySort(sort).subscribe({
      //   next: (response)=>{
      //     console.log(response);
      //     this.gamesData = response;
      //   }
      // })

      // }

      getGamesByCPS(cat:string , plat:string , sort:string){
        this._GamesService.getGamesByCPS(cat , plat , sort).subscribe({
          next:(response)=>{
            console.log(response);
            this.gamesData = response
          }
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
    }


