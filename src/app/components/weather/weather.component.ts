import { Component, OnInit } from '@angular/core';
import { WeatherData } from 'src/app/models/WeatherData';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit 
{
  public weatherData: WeatherData = new WeatherData();

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void 
  {
    this.weatherData = this.weatherService.getWeather(33431);
  }

}
