import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-women-cosmetics',
  templateUrl: './women-cosmetics.component.html',
  styleUrls: ['./women-cosmetics.component.scss']
})
export class WomenCosmeticsComponent implements OnInit {

  list:Object;
  constructor(private http:HttpClient) { }

  ngOnInit() {

    this.http.get('http://localhost:4444/womenCosmetics').subscribe((data)=>{
      this.list=data;
      console.log("women cosmetics: "+this.list);
      
    })

  }


}
