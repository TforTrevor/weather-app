import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temperature'
})
export class TemperaturePipe implements PipeTransform {

  transform(value: number, displayAs: string): string 
  {
    let temperature: number = value;
    let symbol: string = "F";

    if (displayAs == "metric")
    {
      temperature = (temperature - 32) * 5 / 9;
      symbol = "C";
    }

    return Math.round(temperature) + "°" + symbol;
  }

}
