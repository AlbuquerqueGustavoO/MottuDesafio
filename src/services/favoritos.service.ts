import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Result } from 'src/model/personagem.model';

@Injectable({ providedIn: 'root' })
export class FavoritosService {
  private favoritosSubject = new BehaviorSubject<Result[]>([]);
  favoritos$ = this.favoritosSubject.asObservable();

  constructor() {
    const salvos = localStorage.getItem('favoritos');
    if (salvos) this.favoritosSubject.next(JSON.parse(salvos));
  }

  addFavorito(personagem: Result) {
    const atuais = this.favoritosSubject.getValue();
    if (!atuais.find(p => p.id === personagem.id)) {
      const novos = [...atuais, personagem];
      this.favoritosSubject.next(novos);
      localStorage.setItem('favoritos', JSON.stringify(novos));
    }
  }

  removeFavorito(personagem: Result) {
    const atuais = this.favoritosSubject.getValue();
    const novos = atuais.filter(p => p.id !== personagem.id);
    this.favoritosSubject.next(novos);
    localStorage.setItem('favoritos', JSON.stringify(novos));
  }

  isFavorito(personagem: Result): boolean {
    return this.favoritosSubject.getValue().some(p => p.id === personagem.id);
  }
}
