import { Component, Input, OnInit } from '@angular/core';
import { Result } from 'src/model/personagem.model';
import { FavoritosService } from 'src/services/favoritos.service';

@Component({
  selector: 'app-card-personagem',
  templateUrl: './card-personagem.component.html',
  styleUrls: ['./card-personagem.component.scss']
})
export class CardPersonagemComponent implements OnInit {
 @Input() personagem!: Result;

  constructor(private favoritosService: FavoritosService) { }

  ngOnInit(): void {
  }

  isFavorito(): boolean {
    return this.favoritosService.isFavorito(this.personagem);
  }

  toggleFavorito(): void {
    if (this.isFavorito()) {
      this.favoritosService.removeFavorito(this.personagem);
    } else {
      this.favoritosService.addFavorito(this.personagem);
    }
  }

}
