import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Personagens } from 'src/model/personagem.model';

@Injectable({
  providedIn: 'root'
})

export class PersonagemService {
  private apiUrl = 'https://rickandmortyapi.com/api/character';
  private selectedPerso: Personagens | null = null;

  constructor(private http: HttpClient) {}

  create(personagem: Personagens): Observable<Personagens> {
    return this.http.post<Personagens>(this.apiUrl, personagem);
  }

  getAll(): Observable<Personagens> {
    return this.http.get<Personagens>(this.apiUrl);
  }

  getById(id: number): Observable<Personagens> {
    return this.http.get<Personagens>(`${this.apiUrl}/${id}`);
  }

  updatePut(id: number, personagem: Personagens): Observable<Personagens> {
    return this.http.put<Personagens>(`${this.apiUrl}/${id}`, personagem);
  }

  updatePatch(id: number, personagem: Personagens): Observable<Personagens> {
    return this.http.patch<Personagens>(`${this.apiUrl}/${id}`, personagem);
  }  

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
  
  setSelectedUser(personagem: Personagens): void {
    this.selectedPerso = personagem;
  }

  getSelectedUser(): Personagens | null {
    return this.selectedPerso;
  }

}
