import { Component, OnInit, Injectable,  } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
@Injectable()
export class ContactComponent implements OnInit {
  

  constructor(private http:HttpClient) { }

  ngOnInit() {
    
    

  }

  
 
  

}
