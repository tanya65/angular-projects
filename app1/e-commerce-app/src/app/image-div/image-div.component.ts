import { Component, OnInit, Input , ElementRef} from '@angular/core';

@Component({
  selector: 'app-image-div',
  templateUrl: './image-div.component.html',
  styleUrls: ['./image-div.component.scss']
})
export class ImageDivComponent implements OnInit {


  @Input() category:string;
  @Input() source:Object;


  constructor() { 
  }

  ngOnInit() {
  }


}
