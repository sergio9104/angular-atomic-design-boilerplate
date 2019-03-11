import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.less']
})
export class TextComponent implements OnInit, OnChanges {
  @Input() text:string;
  @Input() color:string;
  @Input() backgroundColor:string;
  @Input() size:string;
  @Input() font:string;

  colorClassName:string;
  backgroundColorClassName:string;
  
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(){
    this.colorClassName = this.color ? 'text-color-' + this.color : 'text-gray';
    this.backgroundColorClassName = this.backgroundColor ? 'background-color-' + this.backgroundColor : 'background-color-transparent';
  }

}
