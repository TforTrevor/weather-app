import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WeatherData } from '../models/WeatherData';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService implements OnInit
{
  private apiKey: string = "0ffc282b7d48d0b4f0552267b9f44483";
  private weatherMap: Map<number, WeatherData> = new Map<number, WeatherData>();

  constructor(private http: HttpClient) { }

  public ngOnInit(): void
  {

  }

  //Immediately returns weather object. If new data is found, the returned object's data will be updated asynchronously
  public getWeather(zipCode: number): WeatherData
  {
    let weatherData: WeatherData = new WeatherData();

    //If zip code has no data, create blank data and reassign
    if (this.weatherMap.get(zipCode) == undefined)
    {
      const data = new WeatherData();
      this.weatherMap.set(zipCode, data);
      weatherData = data;
    }

    //Query api
    const observable = this.http.get<any>(
      "https://api.openweathermap.org/data/2.5/forecast?zip=" + zipCode + 
      ",us&APPID=" + this.apiKey + 
      "&units=imperial"
    );

    //In-place replace data, every reference to data object should be updated
    observable.subscribe(res => {
      weatherData.country = res.city.country;
      weatherData.city = res.city.name;
      weatherData.temp = res.list[0].main.temp;
      weatherData.tempMax = res.list[0].main.temp_max;
      weatherData.tempMin = res.list[0].main.temp_min;
      weatherData.feelsLike = res.list[0].main.feels_like;
      weatherData.humidity = res.list[0].main.humidity;
      weatherData.windSpeed = res.list[0].wind.speed;
      weatherData.weather = res.list[0].weather[0].description;
      weatherData.time = new Date(res.list[0].dt_txt + " UTC");
      console.log(res);
    });

    return weatherData;
  }
}
