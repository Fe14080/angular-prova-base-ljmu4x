import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css'],
})
export class DropdownComponent implements OnInit {
  @Input() cor: string = 'secondary';
  @Input() conteudo: any[];
  @Output() opselecionado = new EventEmitter();

  selecionado: boolean = false;

  acionaDrop(): void {
    if (this.selecionado) {
      this.selecionado = false;
    } else {
      this.selecionado = true;
    }
  }

  constructor() {}

  ngOnInit() {}
}
