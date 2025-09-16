import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';

import { FavoritosComponent } from './favoritos/favoritos.component';
import { FavoritosRoutingModule } from './favoritos-routing.module';



@NgModule({
  declarations: [ 
    FavoritosComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FavoritosRoutingModule,
  ],
  exports: []
})
export class FavoritosModule { }

