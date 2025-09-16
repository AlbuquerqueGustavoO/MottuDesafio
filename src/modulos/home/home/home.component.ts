import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { debounceTime, Subject } from 'rxjs';
import { Personagens, Result } from 'src/model/personagem.model';
import { CardPersonagemComponent } from 'src/modulos/shared/card-personagem/card-personagem.component';
import { FiltroNomePipe } from 'src/modulos/shared/pipes/pipe-filter';
import { FavoritosService } from 'src/services/favoritos.service';
import { PersonagemService } from 'src/services/personagens.service';

@Component({
  standalone: true,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [NgFor, NgIf, RouterModule, CardPersonagemComponent, FormsModule, CommonModule, FiltroNomePipe],
})

export class HomeComponent implements OnInit {
  personagem: Personagens | null = null;
  pesquisa: string = '';
  private pesquisa$ = new Subject<string>();
  favoritos: Result[] = [];

  exibidos: Result[] = [];
  quantidadePorPagina = 6;
  paginaAtual = 0;
  carregando = false;

  constructor(
    private personagemService: PersonagemService,
    private favoritosService: FavoritosService) { }

  ngOnInit(): void {
    this.getPersonagens();
    this.favoritosService.favoritos$.subscribe(favs => this.favoritos = favs);
       this.pesquisa$
      .pipe(debounceTime(300))
      .subscribe(valor => this.pesquisa = valor);

  }

  getPersonagens(): void {
    this.carregando = true;
    this.personagemService.getAll().subscribe({
      next: (data) => {
        console.log('Resposta da API:', data);
        this.personagem = data;
        this.resetScroll();
        this.carregando = false;
      },
      error: (err) => {
        console.error('Erro ao carregar usuários', err);
        this.carregando = false;
      },
    });
  }

  onPesquisaChange(valor: string) {
    this.pesquisa$.next(valor);
  }

  toggleFavorito(p: Result) {
    if (this.favoritosService.isFavorito(p)) {
      this.favoritosService.removeFavorito(p);
    } else {
      this.favoritosService.addFavorito(p);
    }
  }

  isFavorito(p: Result): boolean {
    return this.favoritosService.isFavorito(p);
  }

    private resetScroll(): void {
    this.exibidos = [];
    this.paginaAtual = 0;
    this.carregarMais();
  }

  carregarMais(): void {
    if (!this.personagem) return;
    let filtrados = this.personagem.results;
    if (this.pesquisa) {
      filtrados = filtrados.filter(p => 
        p.name.toLowerCase().includes(this.pesquisa.toLowerCase())
      );
    }

    const inicio = this.paginaAtual * this.quantidadePorPagina;
    const fim = inicio + this.quantidadePorPagina;

    this.exibidos.push(...filtrados.slice(inicio, fim));
    this.paginaAtual++;
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 100 && !this.carregando) {
      this.carregarMais();
    }
  }

}
