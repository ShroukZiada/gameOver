import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sliceUntile'
})
export class SliceUntilePipe implements PipeTransform {

  transform(thumb: string | undefined,
    type: string = 'background.jpg')
    : string {
    if (thumb != undefined) return thumb.replace('thumbnail.jpg', type);
    return '';
  }

}
