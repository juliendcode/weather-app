import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';

@Injectable()
export class WeatherService {
  private client: AxiosInstance;

  constructor() {
    this.client = axios.create({
      baseURL: 'https://api.openweathermap.org/data/2.5/',
      params: {
        APPID: 'b279d8a2d0ba298f3da8a4adaaf9e084',
      },
    });
  }

  async ofCity(city: string): Promise<object> {
    const response = await this.client.get('weather', {
      params: { q: city },
    });
    return response.data;
  }
}
