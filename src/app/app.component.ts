import { Component,OnInit } from '@angular/core';
import cityData from './data/cityTimeDiff.json'
import { CityData } from './model/cityData';
import { FormControl } from '@angular/forms';
import { empty } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'world_clock';
  cityClockData: CityData[] = [];
  cityClockDataSelected: CityData[];  

  selectedCity: CityData ;
  //selectedCityControl = new FormControl(this.selectedCity);
  
  ngOnInit() {
    
    this.cityClockData = cityData;
    this.cityClockDataSelected = cityData;
   
  }

  chooseCity(cityOb: any) {

    this.selectedCity = cityOb.value;

    this.cityClockDataSelected = [];

    this.cityClockDataSelected.push(this.selectedCity);

  }

  

  
}
