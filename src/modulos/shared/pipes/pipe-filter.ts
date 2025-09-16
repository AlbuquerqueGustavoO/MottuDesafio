import { Pipe, PipeTransform } from '@angular/core';
import { Result } from 'src/model/personagem.model';


@Pipe({
  name: 'filtroNome',
  pure: true,
  standalone: true,
})
export class FiltroNomePipe implements PipeTransform {
  transform(personagens: Result[] | undefined, pesquisa: string): Result[] {
    if (!personagens) return [];
    if (!pesquisa) return personagens;

    const lower = pesquisa.toLowerCase();
    return personagens.filter(p => p.name.toLowerCase().includes(lower));
  }
}
