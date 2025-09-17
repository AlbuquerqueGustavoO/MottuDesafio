import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPersonagemComponent } from './card-personagem.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('CardPersonagemComponent', () => {
  let component: CardPersonagemComponent;
  let fixture: ComponentFixture<CardPersonagemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ CardPersonagemComponent, RouterTestingModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardPersonagemComponent);
    component = fixture.componentInstance;
    component.personagem = {
      id: 1,
      name: 'Rick Sanchez',
      image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
      status: 'Alive',
      species: 'Human',
      gender: 'Male',
      origin: { name: 'Earth' },
      location: { name: 'Earth' }
    } as any;;    
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
