import { Component, Input, OnInit } from '@angular/core';
import { WeatherData } from 'src/app/models/WeatherData';
import { IconService } from 'src/app/services/icon.service';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit 
{
  @Input() zipCode: number = -1;
  public weatherData: WeatherData = new WeatherData();
  public system: string = "imperial";

  constructor(private weatherService: WeatherService, private icon: IconService) { }

  ngOnInit(): void 
  {
    if (this.zipCode > -1)
    {
      this.weatherData = this.weatherService.getWeather(this.zipCode);
    }    
  }
}
