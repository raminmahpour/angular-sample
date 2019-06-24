import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';


@Component({
  selector: 'app-my-example',
  templateUrl: './my-example.component.html',
  styleUrls: ['./my-example.component.scss']
})
export class MyExampleComponent implements OnInit {
  users: Object;
  constructor(private data: DataService) { }

  ngOnInit() {

this.data.getUsers().subscribe(data=>{


  this.users=data;
  //console.log(this.users);
});
    

  }

}
