import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliceUntilePipe } from './slice-untile.pipe';
import { CutPipe } from './cut.pipe';
import { SplitPipe } from './split.pipe';



@NgModule({
  declarations: [
    SliceUntilePipe,
    CutPipe,
    SplitPipe
  ],
  imports: [
    CommonModule
  ],
exports:[
  SliceUntilePipe,
  CutPipe,
  SplitPipe,
]
})
export class PipeModule { }
