import { Component, OnInit } from '@angular/core';
import AOS from 'aos';
import 'aos/dist/aos.css';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    AOS.init();
  }
  
  flip(event){
    event.target.classList.add("flipInX");
  }

  flipout(event){
    event.target.classList.add("flipInX");
  }
  
}
