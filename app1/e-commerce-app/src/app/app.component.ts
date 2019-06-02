import { Component } from '@angular/core';
import { DatabaseStubService } from './database-stub.service';
import { Ilist } from './ilist';
import {HttpClient} from '@angular/common/http';
import { of } from 'rxjs';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  favourites:Array<String>;

  constructor(private httpClient:HttpClient, private dbservice: DatabaseStubService){

  }
  public x:Ilist;
public something=["a","b","c"];
 public products=[];
  title = 'e-commerce-app';

  ngOnInit(){
   this.showconfig();

   //example line to show how get request can be made
   //this.httpClient.get('http://localhost:4444/email').subscribe((data)=>console.log("data is: "+data));
    }
  showconfig(){

    //example code to show the use of 'subscribe' in getting data from a local file

    /*this.dbservice.getProducts()
    .subscribe(data=>console.log("in app: "+JSON.stringify(data)));*/
  
  }
 
}