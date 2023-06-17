import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipeModule } from './pipe/pipe.module';
import { RouterModule } from '@angular/router';
import { LayOutBlankComponent } from './components/lay-out-blank/lay-out-blank.component';
import { FooterComponent } from '../views/footer/footer.component';
import { NavBarComponent } from '../views/nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    LayOutBlankComponent,
    FooterComponent,
    NavBarComponent,
  ],
  imports: [CommonModule, PipeModule, RouterModule],
  exports:[FooterComponent , NavBarComponent]

})
export class SharedModule { }
