import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {

  }
  getUsers() {
    return this.http.get('https://reqres.in/api/users')
  }

  getGithubs() {
    return this.http.get('https://api.github.com/users/raminmahpour/repos')
  }


  firstClick() {
    return console.log('clicked');
  }

}
