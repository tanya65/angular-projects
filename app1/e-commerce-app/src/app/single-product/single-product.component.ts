import { Component, OnInit ,AfterViewInit,ChangeDetectorRef, Directive, QueryList, ViewChildren, ElementRef, ViewChild} from '@angular/core';
import { Router,ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DatabaseStubService } from '../database-stub.service';
import {MDCRipple} from '@material/ripple';


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
  icon:Number;
  favIndex:Number;

  constructor(private cd: ChangeDetectorRef,private route:ActivatedRoute, private http:HttpClient,private dbservice:DatabaseStubService) {
  }
  @ViewChild('alert') alertBox: ElementRef;

  ngOnInit() {
       
    this.favIndex=0;
    this.icon=0;
    this.name=this.route.snapshot.paramMap.get('name');
    this.category=this.route.snapshot.paramMap.get('category');


    console.log(this.alertBox.nativeElement);
   

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

    this.http.post('http://localhost:4444/ProductDetail','{"category":"'+this.category+'","item":"'+this.name+'"}',header).subscribe((data)=>{ this.image=data['image']; this.detail=data['detail'] })

  }
  clicked(event){
    console.log(event.target);
    if(event.target.previousSibling!=null){
      console.log("2ndchild");
      event.target.classList.add('mdc-icon-button__icon--on');
      event.target.previousSibling.classList.remove('mdc-icon-button__icon--on');
      this.alertBox.nativeElement.style.opacity=0.7;
      setTimeout(() => {
        this.alertBox.nativeElement.style.opacity=0;
      }, 1500);
    }
    else{
      console.log("firstchild");
      event.target.classList.add('mdc-icon-button__icon--on');
      event.target.nextSibling.classList.remove('mdc-icon-button__icon--on');
      
    }
  }
}
