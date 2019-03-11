import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.less']
})
export class ImageComponent implements OnInit {
  @Input() url:string;
  @Input() type:string;
  @Input() size:string = '100';

  urlStyle:string;
  typeClassName:string;
  sizeClassName:string;


  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.urlStyle= `url(${this.url})`;
    this.typeClassName = this.type ? 'type-' + this.type : 'type-square';
  }

}
