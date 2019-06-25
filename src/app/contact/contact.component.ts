import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  messageForm: FormGroup;
  submitted = false;
  success = false;
  constructor(private formBuilder: FormBuilder, private http: HttpClient) { }

  ngOnInit() {

    this.messageForm = this.formBuilder.group({

      name: ['', Validators.required],
      message: ['', Validators.required],
      rate: ['', Validators.required]



    });







  }

  currentRate = 8;

  readCurrentRate() {
    //console.log(this.currentRate);
    //alert(this.currentRate);
  }


  onSubmit() {
    this.submitted = true;

    if (this.messageForm.invalid) {
      return;
    }
    //console.log(this.messageForm.value);
    this.success = true;

    let data = JSON.stringify(this.messageForm.value);


    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    let options = {
      headers: headers
    }

    this.http.post("https://localhost:5001/api/values", data, options).subscribe(res => {
      //here you received the response of your post
      // alert("sd");

      console.log(res);
      
     // alert(res.name);
      //you can do asomething, like

    })

    // console.log(this.messageForm.value);  
    //  console.log(data);
  }

}
