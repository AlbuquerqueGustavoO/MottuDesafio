import { Component, OnInit } from '@angular/core';
import { Result } from 'src/model/personagem.model';
import { FavoritosService } from 'src/services/favoritos.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  contadorFavoritos: number = 0;

  constructor(private favoritosService: FavoritosService) { }

  ngOnInit(): void {
    this.carregandoContador();
  }

  carregandoContador(){
      this.favoritosService.favoritos$.subscribe((favoritos: Result[]) => {
      this.contadorFavoritos = favoritos.length;
    });
  }

}
