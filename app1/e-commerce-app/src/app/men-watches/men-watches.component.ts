import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-men-watches',
  templateUrl: './men-watches.component.html',
  styleUrls: ['./men-watches.component.scss']
})
export class MenWatchesComponent implements OnInit {

  list:Object;
  constructor(private http:HttpClient) { }

  ngOnInit() {

    this.http.get('http://localhost:4444/menWatches')
    .subscribe((data)=>{
      this.list=data;
      console.log("men-clothes:"+JSON.stringify(this.list))
    })

  }

}
