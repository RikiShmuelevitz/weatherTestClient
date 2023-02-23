import { Component, OnInit } from '@angular/core';
// import DayDetails from '../dayDetails';
import DayDetails from 'src/models/DayDetails';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {

  constructor(public server:WeatherService) { }
city:string
json
forecast
forecastday
show=false
days=[new DayDetails("",null,null),new DayDetails("",null,null),new DayDetails("",null,null)]

getWeather(){

this.server.getweather(this.city).subscribe(succ=>{this.json=succ; console.log(succ)
  this.forecast=this.json["forecast"];
  console.log(this.forecast)
  this.forecastday=this.forecast["forecastday"] 
  console.log(this.forecastday)
  for (let i = 0; i < 3; i++) {
    console.log(this.forecastday[i])
    this.days[i].date=this.forecastday[i].date
    this.days[i].avgvis_km=this.forecastday[i].day.avgvis_km
    this.days[i].avgtemp_c=this.forecastday[i].day.avgtemp_c
  console.log(this.days[i].date)
  }  
  this.show=true;

},err=>{console.log(err);});

}

  ngOnInit(): void {
  }

}
