import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-grid',
  templateUrl: './weather-grid.component.html',
  styleUrls: ['./weather-grid.component.scss']
})
export class WeatherGridComponent implements OnInit 
{
  public zipCodes: number[] = [33431, 32608, 11581];

  constructor() { }

  ngOnInit(): void 
  {

  }
}
