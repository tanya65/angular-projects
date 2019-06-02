import { Component, OnInit, Input , Pipe, PipeTransform} from '@angular/core';
import { DomSanitizer, SafeHtml, SafeStyle, SafeScript, SafeUrl, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-image-div',
  templateUrl: './image-div.component.html',
  styleUrls: ['./image-div.component.scss']
})
@Pipe({
  name: 'safe'
})
export class ImageDivComponent implements OnInit {


  @Input() category:string;
  @Input() source:Object;


  constructor(protected sanitizer: DomSanitizer) {}

  sanitise(){
   return this.sanitizer.bypassSecurityTrustStyle(`url('`+this.source["image"]+`')`);
  }
  

  ngOnInit() {
  }


}
