import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  pessoas: any[] = [
    { nome: 'João', sobrenome: 'Silva' },
    { nome: 'Carlos', sobrenome: 'Augusto' },
    { nome: 'José', sobrenome: 'Souza' },
    { nome: 'Maria', sobrenome: 'Isabel' },
    { nome: 'Sarah', sobrenome: 'Santos' },
  ];

  nome: string;
  sobrenome: string;

  activeCont: number = 0;
  activeMax: number = 4;

  proximoActive(): void {
    if (this.activeCont < this.activeMax) {
      this.activeCont++;
    }
  }

  anteriorActive(): void {
    if (this.activeCont > 0) {
      this.activeCont--;
    }
  }

  excluirAtual(): void {
    this.pessoas.splice(this.activeCont, 1);
    this.activeMax--;
    this.activeCont = 0;
  }

  adicionarPessoa(): void {
    this.pessoas[this.activeMax + 1] = {
      nome: this.nome,
      sobrenome: this.sobrenome,
    };
    this.activeMax++;
    this.nome = '';
    this.sobrenome = '';
  }

  constructor() {}

  ngOnInit(): void {}
}
