import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { element } from '@angular/core/src/render3';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor() { }
  @ViewChild( 'default' ) element:ElementRef;
  @ViewChild('productDiv') prodDiv:ElementRef;  

  currentURL:String;

  ngOnInit() {
    
  }

  ngDoCheck(){
    this.currentURL=window.location.href;
    let arr=this.currentURL.split('/');
    this.currentURL=arr[arr.length-1];
    console.log("=>"+this.currentURL);

  if(this.currentURL!="products"){
    this.element.nativeElement.style.display='none';
    this.prodDiv.nativeElement.style.display='block';
  }
  else{
    this.element.nativeElement.style.display='block';
    this.prodDiv.nativeElement.style.display='none';
  }
  }

  
  hideDefault(){
    this.element.nativeElement.style.display='none';
  }

}
