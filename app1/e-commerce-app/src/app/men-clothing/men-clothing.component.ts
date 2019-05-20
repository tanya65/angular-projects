import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-men-clothing',
  templateUrl: './men-clothing.component.html',
  styleUrls: ['./men-clothing.component.scss']
})
export class MenClothingComponent implements OnInit {

  list:Object;
  constructor(private http:HttpClient) { }

  ngOnInit() {
    
    this.http.get('http://localhost:4444/menClothing')
    .subscribe((data)=>{
      this.list=data;
      console.log("men-clothes:"+JSON.stringify(this.list))
    })

  }

}