import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.less']
})
export class ButtonComponent implements OnInit, OnChanges {
  @Input() type: string;
  @Input() link: string;
  @Input() icon: string;
  @Input() size: string;
  @Input() textSize: string;
  @Input() textColor: string;
  @Input() backgroundColor: string;

  @Output() click = new EventEmitter();

  iconClassName: string;
  sizeClassName: string;
  textSizeClassName: string;
  textColorClassName: string;
  backgroundColorClassName: string;


  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    switch (this.icon) {
      case 'search':
        this.iconClassName = 'fas fa-search'
        break;
      case 'back':
        this.iconClassName = 'fas fa-arrow-left'
        break;
      case 'reload':
        this.iconClassName = 'fas fa-redo-alt'
        break;
      case 'settings':
        this.iconClassName = 'fas fa-ellipsis-h'
        break;
      case 'like':
        this.iconClassName = 'far fa-heart'
        break;
      case 'like-full':
        this.iconClassName = 'fas fa-heart'
        break;
      case 'like-comment':
        this.iconClassName = 'fab fa-gratipay'
        break;
      case 'home':
        this.iconClassName = 'fas fa-home'
        break;
      case 'user':
        this.iconClassName = 'fas fa-user'
        break;
      case 'photo':
        this.iconClassName = 'fas fa-camera'
        break;
      case 'comment':
        this.iconClassName = 'far fa-comment'
        break;
      default:
        this.iconClassName = null
    }

    this.sizeClassName = this.size ? 'size-' + this.size : 'size-md';
    this.textSizeClassName = this.textSize ? 'text-size-' + this.textSize : 'text-size-md';
    this.textColorClassName = this.textColor ? 'text-color-' + this.textColor : 'text-gray';
    this.backgroundColorClassName = this.backgroundColor ? 'background-color-' + this.backgroundColor : 'background-color-transparent';
  }

  onClick(){
    this.click.emit();
  }

}
