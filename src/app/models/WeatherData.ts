export class WeatherData
{
    country: string = "";
    city: string = "";

    temp: number = -1;
    tempMax: number = -1;
    tempMin: number = -1;
    feelsLike: number = -1;
    humidity: number = -1;
    windSpeed: number = -1;

    weather: string = "";

    time: Date = new Date(0);
}