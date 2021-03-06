import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-spinners',
  templateUrl: './spinners.component.html',
})
export class SpinnersComponent implements OnInit {
  @Input() cor: string = 'dark';
  @Input() size: string = '';
  @Input() grow: boolean = false;
  constructor() {}

  ngOnInit() {}
}
