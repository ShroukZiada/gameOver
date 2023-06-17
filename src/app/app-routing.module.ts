import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayOutBlankComponent } from './shared/components/lay-out-blank/lay-out-blank.component';
import { NotFoundComponent } from './views/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    component:LayOutBlankComponent,
    children:[
      {path: '' , loadChildren:()=>
      import('./views/Home/home.module').then((m) => m.HomeModule), title: 'Home'},

      {path: 'details/:id',
      loadChildren:() =>
     import('./views/game-details/game-details.module').then((m) => m.GameDetailsModule),
     title: 'Details'},

     {path: 'games',
      loadChildren:() =>
     import('./views/games/games.module').then((m) => m.GamesModule),
     title: 'Games'},

     {path: 'games/:category',
     loadChildren:() =>
    import('./views/games/games.module').then((m) => m.GamesModule),
    title: 'Games'},

    {path:'browser' , loadChildren:() =>
    import('./views/browser/browser.module').then((m) => m.BrowserModule),
    title:'Browser'},

    {path:'browser/:category' , loadChildren:() =>
    import('./views/browser/browser.module').then((m) => m.BrowserModule),
    title:'Browser'},

     {path:'auth',
     loadChildren:() =>
    import('./views/auth/auth.module').then((m) => m.AuthModule)},
    {path:'**' , component:NotFoundComponent}

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
