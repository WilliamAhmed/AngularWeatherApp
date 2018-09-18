import { Component, OnInit } from '@angular/core';
import { ICurrentWeather } from '../interfaces';
import { WeatherService } from '../weather/weather.service';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css'],
})
export class CurrentWeatherComponent implements OnInit {

  current: ICurrentWeather;

  constructor(private weatherService: WeatherService) { 
    // this.current = {
    //   city: 'London',
    //   country: 'UK',
    //   date: new Date(),
    //   image: 'assets/img/sunny.png',
    //   temperature: 72,
    //   description: 'Sunny',
    // } as ICurrentWeather;

  }

  ngOnInit() {
    this.weatherService.getCurrentWeather('London', 'UK')
    .subscribe((response) => this.current = response)
  }

}
