import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateBr'
})
export class DateBrPipe implements PipeTransform {

  public transform(value: string, ...args: unknown[]): string {
    const date = new Date(value);
    const formattedDate = date.toLocaleDateString("pt-BR");
    const formattedTime = date.toLocaleTimeString("pt-BR");
    const formattedDateTime = `${formattedDate} ${formattedTime}`;
    return formattedDateTime;
  }

}
