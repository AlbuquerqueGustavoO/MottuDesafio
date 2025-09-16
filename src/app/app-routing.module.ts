import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () =>
      import('../modulos/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'favoritos',
    loadChildren: () =>
      import('../modulos/favoritos/favoritos.module').then((m) => m.FavoritosModule),
  },  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
