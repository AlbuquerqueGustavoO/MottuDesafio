import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { FiltroNomePipe } from './pipes/pipe-filter';
import { CardPersonagemComponent } from './card-personagem/card-personagem.component';




@NgModule({
  declarations: [
    MenuComponent,
    FiltroNomePipe,
    CardPersonagemComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    MenuComponent,
    FiltroNomePipe,
    CardPersonagemComponent
  ]
})
export class SharedModule { }