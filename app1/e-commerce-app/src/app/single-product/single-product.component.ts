import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DatabaseStubService } from '../database-stub.service';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.scss']
})
export class SingleProductComponent implements OnInit {
  
  name:String;
  category:String;
  detail:String;
  image:String;

  constructor(private route:ActivatedRoute, private http:HttpClient,private dbservice:DatabaseStubService) {
  }

  ngOnInit() {
    this.name=this.route.snapshot.paramMap.get('name');
    this.category=this.route.snapshot.paramMap.get('category');

    let header= 
    {headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Accept':'application/json'
    }),
    mode: 'cors',
    cache: 'no-cache', 
    credentials: 'include',
    redirect: 'follow', 
        referrer: 'no-referrer', 
  }

    this.http.post('http://localhost:4444/ProductDetail','{"category":"'+this.category+'","item":"'+this.name+'"}',header).subscribe((data)=>{JSON.parse(data).image})

  }


}
