import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  h1Style: boolean = false;
  users: Object;
  githubs:Object;

  texto : string = 'Wenceslau Braz - Cuidado com as cargas';
  lat: number = 43.3934628;
  lng: number = -79.706331;
  zoom: number = 15;

  
  constructor(private data: DataService) { }

  ngOnInit() {

this.data.getUsers().subscribe(data=>{


  this.users=data;
  //console.log(this.users);
});
    

this.data.getGithubs().subscribe(data=>{


  this.githubs=data;
  console.log(this.githubs);
});


  }


  firstClick() {
    //console.log('clicked');
    //this.h1Style = true;
    this.data.firstClick();
  }


}
