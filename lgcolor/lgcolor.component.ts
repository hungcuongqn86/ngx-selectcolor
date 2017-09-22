import {Component, Input, OnInit} from '@angular/core';

declare const tinycolor: any;

@Component({
  selector: 'ni-color',
  templateUrl: './lgcolor.component.html',
  styleUrls: ['./lgcolor.component.css']
})
export class LgcolorComponent implements OnInit {
  @Input('color')
  public color: any = '#fff';
  @Input('faclass')
  public faclass: any;
  @Input('textcolor')
  public textcolor: any;
  style: any;

  constructor() {
  }

  ngOnInit() {
    const color = tinycolor(this.color);
    if (!this.textcolor) {
      this.textcolor = color.isLight() ? '#000' : '#fff';
    }
    this.style = color.getLuminance() === 1 ?
      {
        'background-color': this.color,
        'color': this.textcolor,
        'box-shadow': 'inset 0 0 0 1px #777'
      } : {'background-color': this.color, 'color': this.textcolor};
  }
}
