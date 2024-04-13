import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  
  constructor() { }

  getData(){
    const arrayData = ["1", "2", "3", "4"];
    return arrayData;
  }
}
