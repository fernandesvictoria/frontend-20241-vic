import { Component, OnInit } from '@angular/core';

export interface Carta {
  id: number;
  nome: string;
  forca: number;
  inteligencia: number;
  velocidade: number;
  dataCadastro: Date;
}

@Component({
  selector: 'app-carta-listagem',
  templateUrl: './carta-listagem.component.html',
  styleUrl: './carta-listagem.component.scss',
})
export class CartaListagemComponent implements OnInit {
  public cartas: Carta[] = [
    {
      id: 1,
      nome: 'Zelda',
      forca: 5,
      inteligencia: 5,
      velocidade: 5,
      dataCadastro: new Date(),
    },
    {
      id: 2,
      nome: 'Regina',
      forca: 5,
      inteligencia: 3,
      velocidade: 1,
      dataCadastro: new Date(),
    },
    {
      id: 3,
      nome: 'Pablo',
      forca: 2,
      inteligencia: 5,
      velocidade: 3,
      dataCadastro: new Date(),
    },
    {
      id: 3,
      nome: 'Shara',
      forca: 2,
      inteligencia: 5,
      velocidade: 5,
      dataCadastro: new Date(),
    }
  ];

  constructor() {}

  ngOnInit(): void {}
}
