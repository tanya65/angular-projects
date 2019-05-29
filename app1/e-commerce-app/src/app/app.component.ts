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
   this.httpClient.get('http://localhost:4444/email').subscribe((data)=>console.log("data is: "+data));
    }
  showconfig(){
    this.dbservice.getProducts()
    .subscribe(data=>console.log("in app: "+JSON.stringify(data)))

    //this.myObservable.subscribe(this.myObserver);
  }

   myObservable = of(1, 2, 3);
 
// Create observer object
 myObserver = {
  next: x => console.log('Observer got a next value: ' + x),
  error: err => console.error('Observer got an error: ' + err),
  complete: () => console.log('Observer got a complete notification'),
};
}