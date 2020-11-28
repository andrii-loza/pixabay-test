import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }

  apiUrl: string = `https://pixabay.com/api`;

  getImages(value:string) {
    //Observable
    return this.http.get(`${this.apiUrl}/?key=6022968-d2c853cd69cbf0645cf26c73a&q=${value}&image_type=photo`);

    // [{}] => 
    // fetch('https://pixabay.com/api/?key=6022968-d2c853cd69cbf0645cf26c73a&q=yellow+flowers&image_type=photo', {
    //   method: 'get' 
    // })
    // .then( r => r.json())
    // .then( r => console.log(r))
  }
}
