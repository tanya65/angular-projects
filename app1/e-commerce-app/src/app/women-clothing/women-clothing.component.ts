import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-women-clothing',
  templateUrl: './women-clothing.component.html',
  styleUrls: ['./women-clothing.component.scss']
})
export class WomenClothingComponent implements OnInit {

list:Object

  constructor(private http:HttpClient) { }

  ngOnInit() {
    
    this.http.get('http://localhost:4444/womenClothing')
    .subscribe((data)=>{
      this.list=data;
      console.log("women-clothes:"+JSON.stringify(this.list))
    })

  }

  
}
