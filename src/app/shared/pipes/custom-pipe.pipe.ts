import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customPipe'
})
export class CustomPipePipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");;
  }

}
