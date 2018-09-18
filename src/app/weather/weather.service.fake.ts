import { Observable, of } from 'rxjs';
import { IWeatherService } from './weather.service';
import { ICurrentWeather } from '../interfaces';

export class WeatherServiceFake implements IWeatherService {

    private fakeWeather: ICurrentWeather = {
        city: 'Chelmsford',
        country: 'UK',
        date: 1485789600,
        image: '',
        temperature: 290.45,
        description: 'light intensity drizzle',
    }

    public getCurrentWeather(city:string, country:string): Observable<ICurrentWeather> {
        return of(this.fakeWeather);
    }

}