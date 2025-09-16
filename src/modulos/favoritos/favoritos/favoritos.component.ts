import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Subscription } from 'rxjs';
import { Result } from 'src/model/personagem.model';
import { CardPersonagemComponent } from 'src/modulos/shared/card-personagem/card-personagem.component';
import { FavoritosService } from 'src/services/favoritos.service';

@Component({
  standalone: true,
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.scss'],
  imports: [NgFor, NgIf, RouterModule, CardPersonagemComponent],
})

export class FavoritosComponent implements OnInit {
  favoritos: Result[] = [];
  private subscription!: Subscription;

  constructor(private favoritosService: FavoritosService) { }

  ngOnInit(): void {
    this.subscription = this.favoritosService.favoritos$.subscribe(favs => {
      this.favoritos = favs;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
    isFavorito(p: Result): boolean {
    return this.favoritosService.isFavorito(p);
  }

  toggleFavorito(p: Result) {
    if (this.favoritosService.isFavorito(p)) {
      this.favoritosService.removeFavorito(p);
    } else {
      this.favoritosService.addFavorito(p);
    }
  }
}